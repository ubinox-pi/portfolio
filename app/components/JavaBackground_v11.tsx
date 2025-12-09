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

        let offset = 0;
        const speed = 2; // Speed of movement

        let mouse = { x: width / 2, y: height / 2 };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        window.addEventListener("mousemove", handleMouseMove);

        const animate = () => {
            if (!ctx) return;

            // Clear with fade
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, width, height);

            // Horizon Line
            const horizonY = height * 0.4;

            // Gradient Sky
            const gradient = ctx.createLinearGradient(0, 0, 0, horizonY);
            gradient.addColorStop(0, "black");
            gradient.addColorStop(1, "rgba(250, 204, 21, 0.1)");
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, horizonY);

            ctx.strokeStyle = "#FACC15";
            ctx.shadowBlur = 10;
            ctx.shadowColor = "#FACC15";

            // Draw Vertical Lines
            const numVLines = 40;
            for (let i = -numVLines; i <= numVLines; i++) {
                // Perspective calculation
                // X depends on Z depth.
                // We draw lines originating from vanishing point

                // Vanishing point X: varies with mouse
                const vpX = width / 2 + (mouse.x - width / 2) * 0.5;
                const vpY = horizonY;

                // Base X position at bottom of screen
                const baseX = (width / 2) + i * 100;

                ctx.beginPath();
                ctx.moveTo(vpX, vpY); // Start at horizon
                ctx.lineTo(baseX, height); // End at bottom
                ctx.lineWidth = 1;
                ctx.globalAlpha = Math.max(0, 1 - Math.abs(i) / (numVLines / 2)); // Fade outer lines
                ctx.stroke();
            }

            // Draw Horizontal Lines (Moving)
            const numHLines = 30; // Number of horizontal lines visual
            offset = (offset + speed) % 100; // Modulo for loop interactions? No, Z loop.

            // We simulate Z depth 0 to 1000?
            // H-Lines are at specific Z depths coming towards camera
            // Scale increases as Z decreases (comes closer)

            // Simpler: Draw lines at y positions determined by 1/z
            for (let z = 0; z < 20; z++) { // 20 grid lines deep
                const gridDepth = 100; // Distance between lines in world units
                // Current Z of this line in loop animation
                // (z * gridDepth) - offset
                let zPos = (z * gridDepth) - offset;
                if (zPos < 0) zPos += 2000; // Loop back

                // Perspective projection for Y
                // y = horizonY + (cameraHeight / zPos) * focalLength
                const focal = 300;
                const camHeight = 200;
                if (zPos > 0) {
                    const y = horizonY + (camHeight / zPos) * focal;

                    if (y < height) {
                        const alpha = Math.min(1, Math.pow(zPos / 2000, 2)); // Fade distant lines? No, fade close lines?
                        // Fade near horizon (high Z)
                        // Normalized Z

                        ctx.beginPath();
                        ctx.moveTo(0, y);
                        ctx.lineTo(width, y);
                        ctx.lineWidth = 1 + (200 / zPos); // Thicker when close
                        ctx.globalAlpha = 1 - (zPos / 2000); // Fade at distance
                        ctx.stroke();
                    }
                }
            }

            ctx.shadowBlur = 0;
            ctx.globalAlpha = 1;

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
            {/* Fade out top for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent" />
            <canvas ref={canvasRef} className="absolute inset-0 block opacity-30" />
        </div>
    );
}
