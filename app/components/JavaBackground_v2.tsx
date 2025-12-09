"use client";

import { useEffect, useRef } from "react";

const javaKeywords = [
    "Bean", "JVM", "Spring", "Microservice",
    "Kafka", "Docker", "REST", "API",
    "Thread", "Async", "Cloud", "Deploy"
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

        // Particle Class
        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            text: string;
            size: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5; // Slow movement
                this.vy = (Math.random() - 0.5) * 0.5;
                this.text = javaKeywords[Math.floor(Math.random() * javaKeywords.length)];
                this.size = Math.random() * 12 + 10;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }

            draw() {
                if (!ctx) return;
                ctx.font = `${this.size}px monospace`;
                ctx.fillStyle = "rgba(250, 204, 21, 0.3)"; // Accent color low opacity
                ctx.fillText(this.text, this.x, this.y);
            }
        }

        // Initialize Particles
        const particles: Particle[] = [];
        const particleCount = Math.min(30, Math.floor((width * height) / 25000)); // Responsive count

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Mouse interaction
        let mouse = { x: -1000, y: -1000 };
        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        window.addEventListener("mousemove", handleMouseMove);

        // Animation Loop
        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);

            // Draw Background Grid (Subtle)
            ctx.strokeStyle = "rgba(50, 50, 50, 0.1)";
            ctx.lineWidth = 1;
            // grid drawing could be here, but let's keep it simple

            particles.forEach((p, index) => {
                p.update();
                p.draw();

                // Connect particles if close
                for (let j = index + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(250, 204, 21, ${0.15 - distance / 1000})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(p.x + 10, p.y - 5); // Approx center of text
                        ctx.lineTo(p2.x + 10, p2.y - 5);
                        ctx.stroke();
                    }
                }

                // Connect to Mouse
                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 200) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(250, 204, 21, ${0.4 - distance / 500})`; // Brighter connection to mouse
                    ctx.lineWidth = 1.5;
                    ctx.moveTo(p.x + 10, p.y - 5);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();

                    // Slight repulsion/attraction? Let's attract slightly
                    p.x -= dx * 0.01;
                    p.y -= dy * 0.01;
                }
            });

            requestAnimationFrame(animate);
        };
        animate();

        // Resize handler
        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            {/* Gradient Background Layer */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-[#0a0a0a]" />

            <canvas ref={canvasRef} className="absolute inset-0 block" />
        </div>
    );
}
