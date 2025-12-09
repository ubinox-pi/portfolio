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

        // Wave Configuration
        const waves = [
            { y: height * 0.2, amplitude: 50, frequency: 0.01, speed: 0.02, color: "rgba(250, 204, 21, 0.1)" }, // Accent
            { y: height * 0.5, amplitude: 80, frequency: 0.008, speed: 0.015, color: "rgba(255, 255, 255, 0.05)" }, // White
            { y: height * 0.8, amplitude: 60, frequency: 0.012, speed: 0.025, color: "rgba(250, 204, 21, 0.08)" }, // Accent
            { y: height * 0.35, amplitude: 40, frequency: 0.02, speed: 0.01, color: "rgba(100, 100, 255, 0.05)" }, // Blueish
        ];

        let time = 0;

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);

            // Draw connecting flow lines
            waves.forEach((wave) => {
                ctx.beginPath();
                ctx.moveTo(0, wave.y);

                for (let x = 0; x < width; x += 5) {
                    // Sine wave formula: y = A * sin(kx + wt)
                    const y = wave.y + Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude;
                    ctx.lineTo(x, y);
                }

                ctx.strokeStyle = wave.color;
                ctx.lineWidth = 2;
                ctx.stroke();

                // Add Particles riding the wave (Data Packets)
                for (let i = 0; i < 5; i++) {
                    const packetX = (time * wave.speed * 200 + i * 300) % width;
                    const packetY = wave.y + Math.sin(packetX * wave.frequency + time * wave.speed) * wave.amplitude;

                    ctx.beginPath();
                    ctx.fillStyle = i % 2 === 0 ? "#FACC15" : "#FFF"; // Alternating accent/white
                    ctx.globalAlpha = 0.6;
                    ctx.arc(packetX, packetY, 2, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.globalAlpha = 1;
                }
            });

            time++;
            requestAnimationFrame(animate);
        };
        const animationId = requestAnimationFrame(animate);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            // Update wave Y positions relative to new height
            waves[0].y = height * 0.2;
            waves[1].y = height * 0.5;
            waves[2].y = height * 0.8;
            waves[3].y = height * 0.35;
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
            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-black" />
            <canvas ref={canvasRef} className="absolute inset-0 block" />
        </div>
    );
}
