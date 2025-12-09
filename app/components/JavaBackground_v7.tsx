"use client";

import { useEffect, useRef } from "react";

const keywords = [
    "Abstract", "Assert", "Boolean", "Break", "Byte",
    "Case", "Catch", "Char", "Class", "Const",
    "Continue", "Default", "Do", "Double", "Else",
    "Enum", "Extends", "Final", "Finally", "Float",
    "For", "Goto", "If", "Implements", "Import",
    "Instanceof", "Int", "Interface", "Long", "Native",
    "New", "Package", "Private", "Protected", "Public",
    "Return", "Short", "Static", "Strictfp", "Super",
    "Switch", "Synchronized", "This", "Throw", "Throws",
    "Transient", "Try", "Void", "Volatile", "While",
    "@Bean", "@Autowired", "Spring", "Maven", "Gradle"
];

export default function JavaBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        type Star = {
            x: number;
            y: number;
            z: number;
            text: string;
        };

        const stars: Star[] = [];
        const numStars = 100;
        const focalLength = width;
        const centerX = width / 2;
        const centerY = height / 2;

        // Init stars
        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: (Math.random() - 0.5) * width * 2,
                y: (Math.random() - 0.5) * height * 2,
                z: Math.random() * width,
                text: keywords[Math.floor(Math.random() * keywords.length)]
            });
        }

        let mouse = { x: centerX, y: centerY };
        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        window.addEventListener("mousemove", handleMouseMove);

        const animate = () => {
            // Trail effect
            ctx.fillStyle = "rgba(0, 0, 0, 0.3)"; // Stronger trail for tunnel speed feel
            ctx.fillRect(0, 0, width, height);

            // Move center based on mouse (parallax)
            const targetCx = width / 2 + (mouse.x - width / 2) * 0.5;
            const targetCy = height / 2 + (mouse.y - height / 2) * 0.5;

            stars.forEach(star => {
                // Move star closer
                star.z -= 10; // Speed of travel

                // Reset if passed camera
                if (star.z <= 0) {
                    star.z = width;
                    star.x = (Math.random() - 0.5) * width * 2;
                    star.y = (Math.random() - 0.5) * height * 2;
                    star.text = keywords[Math.floor(Math.random() * keywords.length)];
                }

                // Project 3D to 2D
                const scale = focalLength / star.z;
                const x = targetCx + star.x * scale / 50; // divide by 50 to keep spread reasonable
                const y = targetCy + star.y * scale / 50;

                // Draw
                const size = Math.max(0.5, scale * 0.5); // Font size based on distance
                const opacity = Math.min(1, (width - star.z) / (width * 0.5)); // Fade in as it gets closer

                if (x > 0 && x < width && y > 0 && y < height) {
                    ctx.font = `${size}rem monospace`;
                    ctx.fillStyle = `rgba(250, 204, 21, ${opacity})`;

                    // Only draw text if size is readable, otherwise dot
                    if (size > 0.5) {
                        ctx.fillText(star.text, x, y);
                    } else {
                        ctx.fillRect(x, y, 2, 2);
                    }
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
            {/* Radial gradient for tunnel depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000_100%)] opacity-80" />
            <canvas ref={canvasRef} className="absolute inset-0 block" />
        </div>
    );
}
