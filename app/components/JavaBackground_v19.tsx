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

        type Orbit = {
            radius: number;
            speed: number;
            angle: number;
            label: string;
            color: string;
            size: number;
        };

        const orbits: Orbit[] = [
            { radius: 0, speed: 0, angle: 0, label: "JVM", color: "#FACC15", size: 20 }, // Sun
            { radius: 100, speed: 0.01, angle: Math.random() * 6, label: "Spring Boot", color: "#FFF", size: 6 },
            { radius: 160, speed: 0.008, angle: Math.random() * 6, label: "Microservices", color: "#FACC15", size: 5 },
            { radius: 220, speed: 0.006, angle: Math.random() * 6, label: "Docker", color: "#FFF", size: 5 },
            { radius: 280, speed: 0.005, angle: Math.random() * 6, label: "Kafka", color: "#FACC15", size: 5 },
            { radius: 340, speed: 0.004, angle: Math.random() * 6, label: "React", color: "#FFF", size: 5 },
            { radius: 400, speed: 0.003, angle: Math.random() * 6, label: "Cloud", color: "#FACC15", size: 5 },
            { radius: 460, speed: 0.002, angle: Math.random() * 6, label: "Maven", color: "#FFF", size: 5 },
        ];

        let mouse = { x: width / 2, y: height / 2 };
        let rotX = 0.5; // Tilt
        let rotY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            rotY = (e.clientX - width / 2) * 0.002;
            rotX = (e.clientY - height / 2) * 0.002 + 0.5;
        };
        window.addEventListener("mousemove", handleMouseMove);

        const animate = () => {
            if (!ctx) return;

            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, width, height);

            const centerX = width / 2;
            const centerY = height / 2;

            // Sort by Z depth for correct occlusion
            // But first calculate positions
            const renderList: any[] = [];

            orbits.forEach(orbit => {
                orbit.angle += orbit.speed;

                // 3D position on flat plane (x, z)
                const x = Math.cos(orbit.angle) * orbit.radius;
                const z = Math.sin(orbit.angle) * orbit.radius;
                const y = 0; // Flat orbital plane

                // Rotate Scene based on mouse
                // Rotate Y
                const x1 = x * Math.cos(rotY) - z * Math.sin(rotY);
                const z1 = x * Math.sin(rotY) + z * Math.cos(rotY);

                // Rotate X (Tilt)
                const y2 = y * Math.cos(rotX) - z1 * Math.sin(rotX);
                const z2 = y * Math.sin(rotX) + z1 * Math.cos(rotX);

                // Project
                const scale = 500 / (500 + z2);
                const screenX = centerX + x1 * scale;
                const screenY = centerY + y2 * scale;

                renderList.push({
                    ...orbit,
                    screenX, screenY, scale, z: z2,
                    renderType: 'planet'
                });

                // Add orbit trail/ring points?
                // Simple ring drawing:
                // Iterate 360 degrees, project lines
                if (orbit.radius > 0) {
                    const ringPoints = [];
                    for (let a = 0; a < Math.PI * 2; a += 0.1) {
                        const rx = Math.cos(a) * orbit.radius;
                        const rz = Math.sin(a) * orbit.radius;

                        // Rotate Y
                        const rx1 = rx * Math.cos(rotY) - rz * Math.sin(rotY);
                        const rz1 = rx * Math.sin(rotY) + rz * Math.cos(rotY);

                        // Rotate X
                        const ry2 = 0 * Math.cos(rotX) - rz1 * Math.sin(rotX);
                        const rz2 = 0 * Math.sin(rotX) + rz1 * Math.cos(rotX);

                        const rScale = 500 / (500 + rz2);
                        ringPoints.push({
                            x: centerX + rx1 * rScale,
                            y: centerY + ry2 * rScale,
                            z: rz2
                        });
                    }
                    renderList.push({
                        renderType: 'ring',
                        points: ringPoints,
                        z: 0 // Average Z logic or draw first? Rings usually behind planets
                    });
                }
            });

            // Sort: Draw furthest Z first (Big Z = far away)
            // renderList.sort((a,b) => b.z - a.z); 
            // Logic is tricky with whole rings. 
            // Draw Rings first, then Planets.

            // Draw Rings
            renderList.filter(i => i.renderType === 'ring').forEach(ring => {
                ctx.beginPath();
                let first = true;
                ring.points.forEach((p: any) => {
                    if (first) { ctx.moveTo(p.x, p.y); first = false; }
                    else ctx.lineTo(p.x, p.y);
                });
                ctx.closePath();
                ctx.strokeStyle = "rgba(100, 100, 100, 0.2)";
                ctx.lineWidth = 1;
                ctx.stroke();
            });

            // Draw Planets
            renderList.filter(i => i.renderType === 'planet').sort((a, b) => b.z - a.z).forEach(p => {
                if (p.scale <= 0) return;

                // Glow
                const gradient = ctx.createRadialGradient(p.screenX, p.screenY, 0, p.screenX, p.screenY, p.size * p.scale * 4);
                gradient.addColorStop(0, p.color);
                gradient.addColorStop(1, "transparent");
                ctx.fillStyle = gradient;
                ctx.globalAlpha = 0.3;
                ctx.beginPath();
                ctx.arc(p.screenX, p.screenY, p.size * p.scale * 4, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = 1;

                // Core
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.screenX, p.screenY, p.size * p.scale, 0, Math.PI * 2);
                ctx.fill();

                // Label
                ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
                ctx.font = `${12 * p.scale}px sans-serif`;
                ctx.fillText(p.label, p.screenX + 15 * p.scale, p.screenY);
            });

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
