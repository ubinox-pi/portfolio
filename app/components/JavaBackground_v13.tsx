"use client";

import { useEffect, useRef } from "react";

export default function JavaBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const cols = 50;
        const rows = 50;
        const spacing = 40; // Space between points

        let time = 0;

        let mouse = { x: width / 2, y: height / 2 };
        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        window.addEventListener("mousemove", handleMouseMove);

        const animate = () => {
            if (!ctx) return;

            // Clear
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, width, height);

            // Perspective params
            const fov = 300;
            const viewDistance = 4;
            const tilt = 0.5; // Tilt camera down

            // Center layout
            const gridWidth = cols * spacing;
            const gridHeight = rows * spacing;
            const startX = -gridWidth / 2;
            const startY = -gridHeight / 2;

            // Center on screen
            const cx = width / 2;
            const cy = height / 2;

            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < cols; x++) {
                    // 3D Coords
                    const wx = startX + x * spacing;
                    const wy = startY + y * spacing;

                    // Wave Calculation (Height/Z)
                    const d = Math.sqrt(wx * wx + wy * wy);
                    // Mouse interaction: Modify wave near mouse
                    // Need to map mouse to world space roughly or just use screen space relative
                    // Let's rely on standard wave for now

                    // Z is Up/Down height in 3D terrain terms
                    // But in projection, Y is usually Up. Let's say Z is forward, Y is up.
                    // Here we have a plane XZ, and we displace Y.

                    // Coordinates for flat plane: X, Z. Y is height.
                    const worldX = wx;
                    const worldZ = wy + 1000; // Push into screen

                    // Sine wave based on position + time
                    let heightY = Math.sin(worldX * 0.01 + time) * 50 + Math.cos(worldZ * 0.01 + time) * 50;

                    // Project 3D to 2D
                    // x2d = x * (fov / z)
                    // y2d = y * (fov / z)

                    // Apply tilt (Rotate around X axis)
                    // y' = y*cos(theta) - z*sin(theta)
                    // z' = y*sin(theta) + z*cos(theta)

                    const rotY = heightY * Math.cos(tilt) - worldZ * Math.sin(tilt);
                    const rotZ = heightY * Math.sin(tilt) + worldZ * Math.cos(tilt);

                    const scale = fov / (viewDistance * fov + rotZ);
                    const x2d = worldX * scale + cx;
                    const y2d = rotY * scale + cy;

                    if (scale > 0) {
                        // Determine character (0 or 1)
                        // Maybe toggle based on height?
                        const char = (x + y + Math.floor(time * 5)) % 2 === 0 ? "1" : "0";

                        const size = 20 * scale;

                        if (size > 1) {
                            ctx.font = `${size}px monospace`;
                            // Color based on height (peaks are bright)
                            const intensity = Math.max(0.1, Math.min(1, (heightY + 100) / 200));
                            ctx.fillStyle = `rgba(250, 204, 21, ${intensity})`;
                            ctx.fillText(char, x2d, y2d);
                        }
                    }
                }
            }

            time += 0.02;
            requestAnimationFrame(animate);
        };
        const animationId = requestAnimationFrame(animate);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute inset-0 bg-black" />
            <canvas ref={canvasRef} className="absolute inset-0 block" />
        </div>
    );
}
