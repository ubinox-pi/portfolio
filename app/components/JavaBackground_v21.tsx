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

        type Point = {
            x: number;
            y: number;
            z: number;
            active: number; // 0 to 1, pulse intensity
        };

        const points: Point[] = [];
        const numPoints = 150;
        const radius = 800; // Spread

        for (let i = 0; i < numPoints; i++) {
            points.push({
                x: (Math.random() - 0.5) * radius * 2,
                y: (Math.random() - 0.5) * radius * 2,
                z: (Math.random() - 0.5) * radius * 2,
                active: 0
            });
        }

        let mouse = { x: width / 2, y: height / 2 };
        let rotX = 0;
        let rotY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            rotY = (e.clientX - width / 2) * 0.0005;
            rotX = (e.clientY - height / 2) * 0.0005;
        };
        window.addEventListener("mousemove", handleMouseMove);

        const animate = () => {
            if (!ctx) return;

            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, width, height);

            const centerX = width / 2;
            const centerY = height / 2;

            // Rotate points
            // Draw connections

            // First, compute projected positions
            const projected: { x: number, y: number, z: number, orig: Point }[] = [];

            points.forEach(p => {
                // Random activity
                if (Math.random() > 0.98) p.active = 1;
                if (p.active > 0) p.active -= 0.02;

                // Rotate Y
                let x = p.x * Math.cos(rotY) - p.z * Math.sin(rotY);
                let z = p.x * Math.sin(rotY) + p.z * Math.cos(rotY);

                // Rotate X
                let y = p.y * Math.cos(rotX) - z * Math.sin(rotX);
                z = p.y * Math.sin(rotX) + z * Math.cos(rotX);

                // Project
                const scale = 500 / (500 + z);
                const sx = centerX + x * scale;
                const sy = centerY + y * scale;

                projected.push({ x: sx, y: sy, z, orig: p });
            });

            // Draw Connections
            ctx.lineWidth = 1;
            for (let i = 0; i < projected.length; i++) {
                const p1 = projected[i];
                if (p1.z < -400) continue; // Too close/behind

                for (let j = i + 1; j < projected.length; j++) {
                    const p2 = projected[j];
                    if (p2.z < -400) continue;

                    // Distance in 3D (approx by original array index check? No, dynamic)
                    // Check distance between original 3D points? expensive rotation already done
                    // Let's use screen distance for visual connectivity or just index neighbor?
                    // Index neighbor is faster but looks rigid.
                    // Let's check 3D distance relative to rotation.

                    // Optimization: Only connect if close in screen space?
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 100) {
                        const alpha = (1 - dist / 100) * 0.3;

                        // If either is active, line glows
                        if (p1.orig.active > 0 || p2.orig.active > 0) {
                            ctx.strokeStyle = `rgba(250, 204, 21, ${alpha + 0.3})`;
                        } else {
                            ctx.strokeStyle = `rgba(100, 100, 100, ${alpha})`;
                        }

                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }

                // Draw Node
                const size = Math.max(0, (500 / (500 + p1.z)) * 3);
                if (p1.orig.active > 0) {
                    ctx.fillStyle = "#FACC15";
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = "#FACC15";
                } else {
                    ctx.fillStyle = "rgba(150,150,150,0.5)";
                    ctx.shadowBlur = 0;
                }
                ctx.beginPath();
                ctx.arc(p1.x, p1.y, size, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;
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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000_100%)] opacity-30" />
            <canvas ref={canvasRef} className="absolute inset-0 block" />
        </div>
    );
}
