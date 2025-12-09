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

        const spacing = 40;

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

            ctx.strokeStyle = "rgba(100, 100, 100, 0.3)";
            ctx.lineWidth = 1;

            // Draw distorted grid
            // We iterate points and draw lines to right and bottom neighbor

            const cols = Math.ceil(width / spacing) + 1;
            const rows = Math.ceil(height / spacing) + 1;

            const getDistortedPoint = (x: number, y: number) => {
                const dx = x - mouse.x;
                const dy = y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const maxDist = 300;

                if (dist < maxDist) {
                    const pull = (1 - dist / maxDist) * 50; // Pull strength
                    // Attract to mouse
                    const angle = Math.atan2(dy, dx);
                    return {
                        x: x - Math.cos(angle) * pull,
                        y: y - Math.sin(angle) * pull
                    };
                }
                return { x, y };
            };

            // Vertical Line segments
            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows - 1; j++) {
                    const x = i * spacing;
                    const y1 = j * spacing;
                    const y2 = (j + 1) * spacing;

                    const p1 = getDistortedPoint(x, y1);
                    const p2 = getDistortedPoint(x, y2);

                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);

                    // Highlight if distorted
                    if (Math.abs(p1.x - x) > 1 || Math.abs(p1.y - y1) > 1) {
                        ctx.strokeStyle = "rgba(250, 204, 21, 0.5)"; // Yellow highlight
                    } else {
                        ctx.strokeStyle = "rgba(80, 80, 80, 0.15)";
                    }
                    ctx.stroke();
                }
            }

            // Horizontal Line segments
            for (let j = 0; j < rows; j++) {
                for (let i = 0; i < cols - 1; i++) {
                    const y = j * spacing;
                    const x1 = i * spacing;
                    const x2 = (i + 1) * spacing;

                    const p1 = getDistortedPoint(x1, y);
                    const p2 = getDistortedPoint(x2, y);

                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);

                    // Highlight if distorted
                    if (Math.abs(p1.x - x1) > 1 || Math.abs(p1.y - y) > 1) {
                        ctx.strokeStyle = "rgba(250, 204, 21, 0.5)";
                    } else {
                        ctx.strokeStyle = "rgba(80, 80, 80, 0.15)";
                    }
                    ctx.stroke();
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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000_100%)] opacity-50" />
            <canvas ref={canvasRef} className="absolute inset-0 block" />
        </div>
    );
}
