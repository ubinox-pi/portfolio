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

        const a = 2 * Math.PI / 6;
        const r = 30; // Radius of hex

        const drawHexagon = (x: number, y: number, color: string, stroke: boolean = true) => {
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
            }
            ctx.closePath();

            if (stroke) {
                ctx.strokeStyle = color;
                ctx.lineWidth = 1;
                ctx.stroke();
            } else {
                ctx.fillStyle = color;
                ctx.fill();
            }
        };

        const hexGrid: { x: number, y: number }[] = [];

        const initGrid = () => {
            hexGrid.length = 0;
            // Calculate grid positions
            // Hex width = r * 2
            // Hex height = sqrt(3) * r
            const h = r * Math.sqrt(3);

            // Offset for odd rows
            for (let y = 0; y < height + h; y += h) {
                const row = Math.floor(y / h);
                const offset = (row % 2 === 0) ? 0 : (r * 1.5);

                for (let x = 0; x < width + r * 2; x += r * 3) {
                    hexGrid.push({ x: x + offset, y });
                }
            }
        };
        initGrid();

        let mouse = { x: -1000, y: -1000 };
        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        window.addEventListener("mousemove", handleMouseMove);

        const animate = () => {
            if (!ctx) return;
            // Clear but keep trail
            ctx.fillStyle = "rgba(0,0,0,0.1)";
            ctx.fillRect(0, 0, width, height);

            // Draw Grid
            hexGrid.forEach(hex => {
                const dist = Math.hypot(hex.x - mouse.x, hex.y - mouse.y);

                // Base grid
                drawHexagon(hex.x, hex.y, "rgba(50, 50, 50, 0.1)", true);

                // Mouse Interaction (Highlight nearby)
                if (dist < 150) {
                    const alpha = 1 - Math.min(dist / 150, 1);
                    drawHexagon(hex.x, hex.y, `rgba(250, 204, 21, ${alpha * 0.3})`, false); // Fill
                    drawHexagon(hex.x, hex.y, `rgba(250, 204, 21, ${alpha})`, true); // Stroke bright
                }

                // Random pulses
                if (Math.random() > 0.9995) {
                    drawHexagon(hex.x, hex.y, "rgba(250, 204, 21, 0.5)", true);
                }
            });

            requestAnimationFrame(animate);
        };
        const animationId = requestAnimationFrame(animate);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initGrid();
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
