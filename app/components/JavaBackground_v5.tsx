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

        type Pulse = {
            x: number;
            y: number;
            dirX: number; // 1, -1, 0
            dirY: number; // 1, -1, 0
            life: number;
            speed: number;
        };

        const pulses: Pulse[] = [];
        const gridSize = 40;

        // Create random pulses
        const createPulse = () => {
            // Start from edges or random points on grid
            const isHorizontal = Math.random() > 0.5;
            const x = Math.floor(Math.random() * (width / gridSize)) * gridSize;
            const y = Math.floor(Math.random() * (height / gridSize)) * gridSize;

            pulses.push({
                x,
                y,
                dirX: isHorizontal ? (Math.random() > 0.5 ? 1 : -1) : 0,
                dirY: isHorizontal ? 0 : (Math.random() > 0.5 ? 1 : -1),
                life: Math.random() * 100 + 50,
                speed: Math.random() * 2 + 2
            });
        };

        const animate = () => {
            if (!ctx) return;

            // Fade out effect
            ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
            ctx.fillRect(0, 0, width, height);

            // Draw Static Grid Points (The "Chips")
            ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
            for (let x = 0; x < width; x += gridSize) {
                for (let y = 0; y < height; y += gridSize) {
                    if (Math.random() > 0.99) { // Random flickering chips
                        ctx.fillStyle = "rgba(250, 204, 21, 0.2)";
                        ctx.fillRect(x - 1, y - 1, 3, 3);
                        ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
                    } else {
                        ctx.fillRect(x, y, 1, 1);
                    }
                }
            }

            // Update and Draw Pulses
            ctx.strokeStyle = "#FACC15";
            ctx.lineWidth = 2;
            ctx.shadowBlur = 5;
            ctx.shadowColor = "#FACC15";

            for (let i = pulses.length - 1; i >= 0; i--) {
                const p = pulses[i];

                ctx.beginPath();
                ctx.moveTo(p.x, p.y);

                // Move
                p.x += p.dirX * p.speed;
                p.y += p.dirY * p.speed;

                ctx.lineTo(p.x, p.y);
                ctx.stroke();

                // Random turns (circuit style)
                if (Math.random() > 0.95 && Math.floor(p.x) % gridSize < 5 && Math.floor(p.y) % gridSize < 5) {
                    // Align to grid before turning
                    p.x = Math.round(p.x / gridSize) * gridSize;
                    p.y = Math.round(p.y / gridSize) * gridSize;

                    if (p.dirX !== 0) { // Moving Horizontally -> Turn Vertically
                        p.dirX = 0;
                        p.dirY = Math.random() > 0.5 ? 1 : -1;
                    } else { // Moving Vertically -> Turn Horizontally
                        p.dirY = 0;
                        p.dirX = Math.random() > 0.5 ? 1 : -1;
                    }
                }

                p.life--;
                if (p.life <= 0 || p.x < 0 || p.x > width || p.y < 0 || p.y > height) {
                    pulses.splice(i, 1);
                }
            }

            ctx.shadowBlur = 0; // Reset shadow for performance

            // Maintain pulse count
            if (pulses.length < 15) {
                createPulse();
            }

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
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute inset-0 bg-black" />
            <canvas ref={canvasRef} className="absolute inset-0 block" />
        </div>
    );
}
