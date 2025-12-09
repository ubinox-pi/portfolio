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

        const symbols = ["{", "}", ";", "<", ">", "/", "*", "?", "!", "@"];
        const fontSize = 14;
        const spacing = 40;

        type Point = {
            x: number; // Current Pos
            y: number;
            originX: number; // Target Pos
            originY: number;
            vx: number;
            vy: number;
            symbol: string;
            color: string;
        };

        const points: Point[] = [];

        // Init Grid
        const initpoints = () => {
            points.length = 0;
            const cols = Math.ceil(width / spacing);
            const rows = Math.ceil(height / spacing);

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = i * spacing + spacing / 2;
                    const y = j * spacing + spacing / 2;
                    points.push({
                        x,
                        y,
                        originX: x,
                        originY: y,
                        vx: 0,
                        vy: 0,
                        symbol: symbols[Math.floor(Math.random() * symbols.length)],
                        color: Math.random() > 0.9 ? "#FACC15" : "rgba(100, 100, 100, 0.3)"
                    });
                }
            }
        };
        initpoints();

        let mouse = { x: -1000, y: -1000 };
        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        window.addEventListener("mousemove", handleMouseMove);

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);

            points.forEach(p => {
                // Physics Calculations

                // 1. Mouse Repulsion
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const forceDistance = 150;

                if (dist < forceDistance) {
                    const force = (forceDistance - dist) / forceDistance;
                    const angle = Math.atan2(dy, dx);
                    // Push away
                    const pushX = Math.cos(angle) * force * 5;
                    const pushY = Math.sin(angle) * force * 5;

                    p.vx -= pushX;
                    p.vy -= pushY;
                }

                // 2. Spring force (return to origin)
                const springK = 0.05; // Stiffness
                const damping = 0.9; // Friction

                const ax = (p.originX - p.x) * springK;
                const ay = (p.originY - p.y) * springK;

                p.vx += ax;
                p.vy += ay;

                p.vx *= damping;
                p.vy *= damping;

                p.x += p.vx;
                p.y += p.vy;

                // Draw
                ctx.font = `${fontSize}px monospace`;
                ctx.fillStyle = p.color;

                // Highlight if moved significantly or close to mouse
                if (dist < 200) {
                    ctx.fillStyle = dist < 100 ? "#FACC15" : "rgba(255, 255, 255, 0.5)";
                }

                ctx.fillText(p.symbol, p.x, p.y);
            });

            requestAnimationFrame(animate);
        };
        const animationId = requestAnimationFrame(animate);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initpoints();
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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000_120%)] opacity-50" />
            <canvas ref={canvasRef} className="absolute inset-0 block" />
        </div>
    );
}
