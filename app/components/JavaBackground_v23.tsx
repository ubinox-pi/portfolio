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

        type Node = { x: number, y: number, charge: number };
        const nodes: Node[] = [];

        // Grid of nodes
        const gridSize = 100;
        for (let y = 0; y < height; y += gridSize) {
            for (let x = 0; x < width; x += gridSize) {
                nodes.push({
                    x: x + Math.random() * 20,
                    y: y + Math.random() * 20,
                    charge: 0
                });
            }
        }

        const drawLightning = (x1: number, y1: number, x2: number, y2: number, color: string) => {
            const dist = Math.hypot(x2 - x1, y2 - y1);
            const steps = Math.floor(dist / 10);

            ctx.beginPath();
            ctx.moveTo(x1, y1);

            let cx = x1;
            let cy = y1;

            for (let i = 0; i < steps; i++) {
                const t = (i + 1) / steps;
                const targetX = x1 + (x2 - x1) * t;
                const targetY = y1 + (y2 - y1) * t;

                // Jitter
                const jitter = (Math.random() - 0.5) * 20;
                cx = targetX + jitter;
                cy = targetY + jitter;
                ctx.lineTo(cx, cy);
            }
            ctx.lineTo(x2, y2); // Connect to end

            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
            ctx.stroke();

            // Quick glow stroke
            ctx.strokeStyle = "rgba(255,255,255,0.8)";
            ctx.lineWidth = 1;
            ctx.stroke();
        };

        let mouse = { x: width / 2, y: height / 2 };
        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        window.addEventListener("mousemove", handleMouseMove);

        const animate = () => {
            if (!ctx) return;

            ctx.fillStyle = "rgba(0, 0, 0, 0.2)"; // Trails
            ctx.fillRect(0, 0, width, height);

            // Random Sparks
            if (Math.random() > 0.8) {
                const n1 = nodes[Math.floor(Math.random() * nodes.length)];
                // Find neighbor
                const n2 = nodes[Math.floor(Math.random() * nodes.length)];
                if (Math.hypot(n1.x - n2.x, n1.y - n2.y) < 200) {
                    drawLightning(n1.x, n1.y, n2.x, n2.y, "rgba(50, 50, 50, 0.5)");
                }
            }

            // Mouse Lightning
            nodes.forEach(node => {
                const dist = Math.hypot(node.x - mouse.x, node.y - mouse.y);

                if (dist < 200) {
                    // Chance to arc
                    if (Math.random() > 0.6) {
                        drawLightning(mouse.x, mouse.y, node.x, node.y, "#FACC15");
                    }

                    // Daisy chain
                    nodes.forEach(other => {
                        const d2 = Math.hypot(node.x - other.x, node.y - other.y);
                        if (d2 < 150 && d2 > 10 && Math.random() > 0.9) {
                            drawLightning(node.x, node.y, other.x, other.y, "rgba(250, 204, 21, 0.5)");
                        }
                    });
                }
            });

            requestAnimationFrame(animate);
        };
        const animationId = requestAnimationFrame(animate);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            // No node rebuild, simple
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
