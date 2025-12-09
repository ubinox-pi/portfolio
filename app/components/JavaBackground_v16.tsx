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

        const spacing = 50;
        const rows = Math.ceil(height / spacing) + 1;
        const cols = Math.ceil(width / spacing) + 1;

        let mouse = { x: -1000, y: -1000 };
        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        window.addEventListener("mousemove", handleMouseMove);

        const animate = () => {
            if (!ctx) return;

            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, width, height);

            ctx.lineWidth = 2;

            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < cols; x++) {
                    const posX = x * spacing;
                    const posY = y * spacing;

                    // Calculate distance and angle to mouse
                    const dx = posX - mouse.x;
                    const dy = posY - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const angle = Math.atan2(dy, dx);

                    // Interaction radius
                    const radius = 300;
                    let rotation = 0;
                    let color = "rgba(50, 50, 50, 0.2)";
                    let size = 10;

                    if (dist < radius) {
                        // Rotate based on proximity (the Kinetic Effect)
                        rotation = angle;
                        const intensity = 1 - dist / radius;
                        color = `rgba(250, 204, 21, ${intensity})`; // Yellow
                        size = 10 + intensity * 10; // Grow slightly
                    } else {
                        // Idle animation
                        rotation = Date.now() * 0.0005 + (x + y) * 0.1;
                    }

                    ctx.save();
                    ctx.translate(posX, posY);
                    ctx.rotate(rotation);

                    ctx.strokeStyle = color;

                    // Draw '+' shape
                    ctx.beginPath();
                    ctx.moveTo(-size, 0);
                    ctx.lineTo(size, 0);
                    ctx.moveTo(0, -size);
                    ctx.lineTo(0, size);
                    ctx.stroke();

                    ctx.restore();
                }
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
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute inset-0 bg-black" />
            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000_150%)] opacity-80" />
            <canvas ref={canvasRef} className="absolute inset-0 block" />
        </div>
    );
}
