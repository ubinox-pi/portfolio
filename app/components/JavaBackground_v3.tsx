"use client";

import { useEffect, useRef } from "react";

const chars = "XYZ010101{};<>?/@#$CAFEBABE";

export default function JavaBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const columns = Math.floor(width / 20); // 20px font size
        const drops: number[] = [];

        // Initialize drops
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100; // Start above screen
        }

        const animate = () => {
            // Semi-transparent black to create trail effect
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = "#FACC15"; // Accent Yellow
            ctx.font = "16px monospace";

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];

                // Draw text
                const x = i * 20;
                const y = drops[i] * 20;

                // Random opacity to make it look glitchy/organic
                ctx.globalAlpha = Math.random() > 0.9 ? 1 : 0.2;
                ctx.fillText(text, x, y);
                ctx.globalAlpha = 1;

                // Reset drop to top randomly
                if (drops[i] * 20 > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            // Recalculate columns on resize implies clearing drops, lets just leave it dynamic or simple for now
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
            <canvas ref={canvasRef} className="absolute inset-0 block opacity-20" />
        </div>
    );
}
