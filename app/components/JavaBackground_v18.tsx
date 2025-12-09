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

        const cellSize = 10;
        const cols = Math.ceil(width / cellSize);
        const rows = Math.ceil(height / cellSize);

        // State
        let grid = new Int8Array(cols * rows);
        let nextGrid = new Int8Array(cols * rows);

        // Init Random
        for (let i = 0; i < grid.length; i++) {
            grid[i] = Math.random() > 0.85 ? 1 : 0;
        }

        let mouse = { x: -1, y: -1, active: false };
        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = Math.floor(e.clientX / cellSize);
            mouse.y = Math.floor(e.clientY / cellSize);
            mouse.active = true;
        };
        window.addEventListener("mousemove", handleMouseMove);

        let frameCount = 0;

        const animate = () => {
            if (!ctx) return;

            // Run game logic every few frames to control speed
            if (frameCount % 4 === 0) {
                // Zero out next grid
                nextGrid.fill(0);

                for (let y = 0; y < rows; y++) {
                    for (let x = 0; x < cols; x++) {
                        const index = y * cols + x;
                        let neighbors = 0;

                        // Count neighbors (toroidal wrap?)
                        // Simple bounds for speed
                        for (let i = -1; i <= 1; i++) {
                            for (let j = -1; j <= 1; j++) {
                                if (i === 0 && j === 0) continue;
                                const nx = x + j;
                                const ny = y + i;
                                if (nx >= 0 && nx < cols && ny >= 0 && ny < rows) {
                                    if (grid[ny * cols + nx] === 1) neighbors++;
                                }
                            }
                        }

                        // Rules
                        const alive = grid[index] === 1;
                        if (alive && (neighbors === 2 || neighbors === 3)) {
                            nextGrid[index] = 1;
                        } else if (!alive && neighbors === 3) {
                            nextGrid[index] = 1;
                        }
                    }
                }

                // Mouse Paint (God Mode)
                if (mouse.active && mouse.x >= 0 && mouse.x < cols && mouse.y >= 0 && mouse.y < rows) {
                    // Brush size
                    const radius = 2;
                    for (let y = -radius; y <= radius; y++) {
                        for (let x = -radius; x <= radius; x++) {
                            if (mouse.x + x >= 0 && mouse.x + x < cols && mouse.y + y >= 0 && mouse.y + y < rows) {
                                // Scatter randomness
                                if (Math.random() > 0.5) nextGrid[(mouse.y + y) * cols + (mouse.x + x)] = 1;
                            }
                        }
                    }
                }

                // Swap
                [grid, nextGrid] = [nextGrid, grid];
            }

            // Draw
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = "rgba(250, 204, 21, 0.4)"; // Yellow Cells

            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < cols; x++) {
                    if (grid[y * cols + x] === 1) {
                        ctx.fillRect(x * cellSize, y * cellSize, cellSize - 1, cellSize - 1);
                    }
                }
            }

            frameCount++;
            requestAnimationFrame(animate);
        };
        const animationId = requestAnimationFrame(animate);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            // Reset would be needed to handle array resizing properly, usually restart
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
