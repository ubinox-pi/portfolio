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

        const blockSize = 20;
        const cols = Math.ceil(width / blockSize);
        const rows = Math.ceil(height / blockSize);

        // Memory Grid state: 0 = empty, >0 = alive intensity
        const grid: number[] = new Array(cols * rows).fill(0);

        let mouse = { x: -1, y: -1 };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = Math.floor(e.clientX / blockSize);
            mouse.y = Math.floor(e.clientY / blockSize);
        };
        window.addEventListener("mousemove", handleMouseMove);

        const animate = () => {
            if (!ctx) return;

            // Clear
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, width, height);

            // Simulation Step
            for (let i = 0; i < grid.length; i++) {
                // Decay (Garbage Collection)
                if (grid[i] > 0) {
                    grid[i] -= 0.02;
                    if (grid[i] < 0) grid[i] = 0;
                }

                // Random Allocation
                if (Math.random() > 0.999 && grid[i] === 0) {
                    grid[i] = 1; // Allocate Object
                }
            }

            // Mouse Allocation (User creating objects)
            if (mouse.x >= 0 && mouse.x < cols && mouse.y >= 0 && mouse.y < rows) {
                const index = mouse.y * cols + mouse.x;
                if (grid[index] < 1) grid[index] = 1;

                // Spill over to neighbors
                const nIndices = [index - 1, index + 1, index - cols, index + cols];
                nIndices.forEach(n => {
                    if (n >= 0 && n < grid.length && Math.random() > 0.5) grid[n] = 0.8;
                });
            }

            // Draw
            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < cols; x++) {
                    const index = y * cols + x;
                    const val = grid[index];

                    if (val > 0) {
                        ctx.fillStyle = `rgba(250, 204, 21, ${val * 0.4})`; // Accent Yellow
                        // Memory Block
                        ctx.fillRect(x * blockSize + 1, y * blockSize + 1, blockSize - 2, blockSize - 2);

                        // "Reference" styling (little square inside)
                        if (val > 0.8) {
                            ctx.fillStyle = `rgba(255, 255, 255, ${val})`;
                            ctx.fillRect(x * blockSize + 6, y * blockSize + 6, blockSize - 12, blockSize - 12);
                        }
                    } else {
                        // Empty slot trace
                        ctx.fillStyle = "rgba(50, 50, 50, 0.05)";
                        ctx.fillRect(x * blockSize + 1, y * blockSize + 1, blockSize - 2, blockSize - 2);
                    }
                }
            }

            requestAnimationFrame(animate);
        };
        const animationId = requestAnimationFrame(animate);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            // Re-init grid size? simpler to just keep running even if distorted
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
