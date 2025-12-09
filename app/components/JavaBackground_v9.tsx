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

        const stars: { x: number, y: number, z: number, size: number, color: string }[] = [];
        const numStars = 800; // Dense galaxy
        const centerX = width / 2;
        const centerY = height / 2;

        for (let i = 0; i < numStars; i++) {
            // Spiral distribution
            const angle = Math.random() * Math.PI * 2 * 3; // 3 arms?
            const radius = Math.random() * Math.min(width, height) * 0.5;
            const spiralOffset = radius * 2; // Tweak for spiral shape

            // Random cloud distribution
            const x = (Math.random() - 0.5) * 2 * width;
            const y = (Math.random() - 0.5) * 2 * height;
            const z = (Math.random() - 0.5) * 2 * 1000;

            stars.push({
                x, y, z,
                size: Math.random() * 2,
                color: Math.random() > 0.8 ? "#FACC15" : "#FFF"
            });
        }

        let mouse = { x: centerX, y: centerY };
        let rotationX = 0;
        let rotationY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;

            // Map mouse to rotation
            rotationY = (e.clientX - width / 2) * 0.001;
            rotationX = (e.clientY - height / 2) * 0.001;
        };
        window.addEventListener("mousemove", handleMouseMove);

        const animate = () => {
            if (!ctx) return;
            ctx.fillStyle = "rgba(0, 0, 0, 0.2)"; // Trail
            ctx.fillRect(0, 0, width, height);

            const cosY = Math.cos(rotationY);
            const sinY = Math.sin(rotationY);
            const cosX = Math.cos(rotationX);
            const sinX = Math.sin(rotationX);

            stars.forEach(star => {
                // Rotate Y
                let x = star.x * cosY - star.z * sinY;
                let z = star.z * cosY + star.x * sinY;

                // Rotate X
                let y = star.y * cosX - z * sinX;
                z = z * cosX + star.y * sinX;

                // Projection
                const scale = 500 / (500 + z);
                const screenX = centerX + x * scale;
                const screenY = centerY + y * scale;

                if (scale > 0) {
                    ctx.beginPath();
                    ctx.fillStyle = star.color;
                    ctx.globalAlpha = Math.min(1, Math.max(0, (z + 1000) / 1000)); // Fade based on Z
                    ctx.arc(screenX, screenY, star.size * scale, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.globalAlpha = 1;
                }
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
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute inset-0 bg-black" />
            {/* Deep Space Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000_100%)] opacity-80" />
            <canvas ref={canvasRef} className="absolute inset-0 block" />
        </div>
    );
}
