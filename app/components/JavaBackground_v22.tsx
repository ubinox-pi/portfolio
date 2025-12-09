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

        type Task = {
            lane: number;
            z: number; // Depth 0 (far) to 1000 (close)
            speed: number;
            color: string;
            label: string;
        };

        const numLanes = 8;
        const tasks: Task[] = [];

        let mouse = { x: width / 2, y: height / 2 };
        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        window.addEventListener("mousemove", handleMouseMove);

        const animate = () => {
            if (!ctx) return;

            // Background
            const gradient = ctx.createLinearGradient(0, 0, 0, height);
            gradient.addColorStop(0, "#050505");
            gradient.addColorStop(1, "#000000");
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            // Perspective
            const horizonY = height * 0.3;
            const focalLength = 300;
            const cameraY = 100;

            // Draw Lanes (Threads)
            ctx.strokeStyle = "rgba(50, 50, 50, 0.5)";
            ctx.lineWidth = 1;

            // Vanishing point follows mouse X slightly
            const vpX = width / 2 + (mouse.x - width / 2) * 0.2;

            // Lane floor
            const laneWidthReturn = width * 1.5; // Width at bottom
            const laneStep = laneWidthReturn / numLanes;
            const startX = width / 2 - laneWidthReturn / 2;

            // Draw Vertical Lane Dividers
            for (let i = 0; i <= numLanes; i++) {
                const xBottom = startX + i * laneStep;

                ctx.beginPath();
                ctx.moveTo(vpX, horizonY);
                ctx.lineTo(xBottom, height);
                ctx.stroke();

                // Lane Labels (Thread Name) attached to bottom
                if (i < numLanes) {
                    ctx.fillStyle = "rgba(250, 204, 21, 0.5)";
                    ctx.font = "12px monospace";
                    const laneCenter = xBottom + laneStep / 2;
                    ctx.fillText(`Thread-${i + 1} [RUNNING]`, laneCenter - 50, height - 20);
                }
            }

            // Spawn Tasks randomly
            if (Math.random() > 0.85) {
                const lane = Math.floor(Math.random() * numLanes);
                tasks.push({
                    lane,
                    z: 0, // Starts far away
                    speed: Math.random() * 10 + 5,
                    color: Math.random() > 0.8 ? "#FACC15" : "#FFF", // Accent or White
                    label: Math.random() > 0.5 ? "Runnable" : "Callable"
                });
            }

            // Mouse Interaction: High load near mouse
            // If mouse is over a lane, spawn more tasks there
            // Calculate approximate lane index from mouse X (rough approx)
            // Simple interaction: Spawn on click or just rapid fire
            if (Math.random() > 0.8) {
                // Fake load
            }

            // Update and Draw Tasks
            for (let i = tasks.length - 1; i >= 0; i--) {
                const t = tasks[i];
                t.z += t.speed;

                // Project
                // Lane X center needs interpolation based on Z
                // At Z=0 (Horizon), X = vpX
                // At Z=1000 (Bottom), X = xBottom
                // Let's normalize Z 0->1000

                const progress = t.z / 1000; // 0 to 1

                if (progress >= 1) {
                    tasks.splice(i, 1);
                    continue;
                }

                // Perspective Math helper
                // Line visual width = lerp(0, laneStep, progress) ??
                // No, standard perspective projection
                // x = xWorld / z

                // Let's use Linear Interpolation for visual effect (Pseudo 3D)
                const xBottomLeft = startX + t.lane * laneStep;
                const xBottomRight = startX + (t.lane + 1) * laneStep;

                // Lerp from VP to Bottom
                const curLeft = vpX + (xBottomLeft - vpX) * progress;
                const curRight = vpX + (xBottomRight - vpX) * progress;
                const curY = horizonY + (height - horizonY) * progress;

                const w = curRight - curLeft;
                const h = 5 + 40 * progress; // Height grows as it gets close

                // Draw Task Block
                ctx.fillStyle = t.color;
                ctx.globalAlpha = Math.min(1, progress * 1.5); // Fade in

                // Glow
                if (progress > 0.8) {
                    ctx.shadowBlur = 20;
                    ctx.shadowColor = t.color;
                } else {
                    ctx.shadowBlur = 0;
                }

                ctx.fillRect(curLeft + w * 0.1, curY - h, w * 0.8, h);

                // Text on block
                if (progress > 0.5) {
                    ctx.fillStyle = "black";
                    ctx.font = `${Math.floor(10 * progress)}px sans-serif`;
                    ctx.fillText(t.label, curLeft + w * 0.2, curY - h / 2);
                }

                ctx.globalAlpha = 1;
                ctx.shadowBlur = 0;
            }

            // Speed lines?
            ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
            // ctx.fillRect(...)

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
            {/* Gradient overlay top */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent" />
            <canvas ref={canvasRef} className="absolute inset-0 block" />
        </div>
    );
}
