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

        // Flow Field Sim
        const scale = 20;
        const cols = Math.floor(width / scale) + 1;
        const rows = Math.floor(height / scale) + 1;

        const flowField: { x: number, y: number }[] = new Array(cols * rows).fill({ x: 0, y: 0 });

        // Particles
        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            history: { x: number, y: number }[];

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = 0;
                this.vy = 0;
                this.history = [];
            }

            update() {
                // Find grid pos
                const xGrid = Math.floor(this.x / scale);
                const yGrid = Math.floor(this.y / scale);

                if (xGrid >= 0 && xGrid < cols && yGrid >= 0 && yGrid < rows) {
                    const index = xGrid + yGrid * cols;
                    const force = flowField[index];

                    // Apply force
                    this.vx += force.x;
                    this.vy += force.y;
                }

                // Friction
                this.vx *= 0.95;
                this.vy *= 0.95; // Slower friction for fluid feel

                if (Math.abs(this.vx) < 0.01) this.vx = 0;
                if (Math.abs(this.vy) < 0.01) this.vy = 0;

                this.x += this.vx * 4; // Speed multiplier
                this.y += this.vy * 4;

                this.history.push({ x: this.x, y: this.y });
                if (this.history.length > 5) this.history.shift();

                // Wrap
                if (this.x > width) { this.x = 0; this.history = []; }
                if (this.x < 0) { this.x = width; this.history = []; }
                if (this.y > height) { this.y = 0; this.history = []; }
                if (this.y < 0) { this.y = height; this.history = []; }
            }

            draw() {
                if (!ctx) return;
                // Draw trail
                if (this.history.length > 1) {
                    ctx.beginPath();
                    ctx.moveTo(this.history[0].x, this.history[0].y);
                    for (let i = 1; i < this.history.length; i++) {
                        ctx.lineTo(this.history[i].x, this.history[i].y);
                    }
                    ctx.strokeStyle = `rgba(250, 204, 21, ${Math.min(1, Math.hypot(this.vx, this.vy) * 0.5)})`; // Alpha based on speed
                    ctx.lineWidth = 1;
                    ctx.stroke();
                } else {
                    ctx.fillStyle = `rgba(250, 204, 21, 0.5)`;
                    ctx.fillRect(this.x, this.y, 1, 1);
                }
            }
        }

        const particles: Particle[] = [];
        const numParticles = 1000;
        for (let i = 0; i < numParticles; i++) particles.push(new Particle());

        let time = 0;
        let mouse = { x: -1000, y: -1000, vx: 0, vy: 0 };
        let prevMouse = { x: -1000, y: -1000 };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            mouse.vx = e.clientX - prevMouse.x;
            mouse.vy = e.clientY - prevMouse.y;
            prevMouse = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener("mousemove", handleMouseMove);

        const animate = () => {
            if (!ctx) return;

            // Fade effect for trails
            ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
            ctx.fillRect(0, 0, width, height);

            // Update Flow Field
            // 1. Perlin noise base (simulated with sine waves for speed)
            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < cols; x++) {
                    const index = x + y * cols;
                    const angle = Math.sin(x * 0.1 + time) + Math.cos(y * 0.1 + time);
                    flowField[index] = {
                        x: Math.cos(angle) * 0.05,
                        y: Math.sin(angle) * 0.05
                    };
                }
            }

            // 2. Mouse Interaction (Add velocity to field)
            if (mouse.x > 0) {
                const xGrid = Math.floor(mouse.x / scale);
                const yGrid = Math.floor(mouse.y / scale);
                const radius = 5;

                for (let y = -radius; y <= radius; y++) {
                    for (let x = -radius; x <= radius; x++) {
                        const targetX = xGrid + x;
                        const targetY = yGrid + y;

                        if (targetX >= 0 && targetX < cols && targetY >= 0 && targetY < rows) {
                            const index = targetX + targetY * cols;
                            // Add mouse velocity to field
                            flowField[index].x += mouse.vx * 0.5; // Influence factor
                            flowField[index].y += mouse.vy * 0.5;
                        }
                    }
                }
                // Decay mouse velocity
                mouse.vx *= 0.1;
                mouse.vy *= 0.1;
            }

            particles.forEach(p => {
                p.update();
                p.draw();
            });

            time += 0.01;
            requestAnimationFrame(animate);
        };
        const animationId = requestAnimationFrame(animate);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            // Particles and grid need reset, but for now simple visual
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
