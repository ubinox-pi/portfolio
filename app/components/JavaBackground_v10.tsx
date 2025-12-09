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

        class Boid {
            x: number;
            y: number;
            vx: number;
            vy: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = Math.random() * 4 - 2;
                this.vy = Math.random() * 4 - 2;
            }

            update(boids: Boid[], mouse: { x: number, y: number }) {
                // Rules: Seperation, Alignment, Cohesion
                let seperationX = 0, seperationY = 0;
                let alignmentX = 0, alignmentY = 0;
                let cohesionX = 0, cohesionY = 0;
                let numNeighbors = 0;

                const perceptionRadius = 50;
                const maxSpeed = 3;
                const maxForce = 0.05;

                boids.forEach(other => {
                    const d = Math.hypot(this.x - other.x, this.y - other.y);
                    if (other !== this && d < perceptionRadius) {
                        // Seperation
                        seperationX += (this.x - other.x) / d;
                        seperationY += (this.y - other.y) / d;

                        // Alignment
                        alignmentX += other.vx;
                        alignmentY += other.vy;

                        // Cohesion
                        cohesionX += other.x;
                        cohesionY += other.y;

                        numNeighbors++;
                    }
                });

                if (numNeighbors > 0) {
                    seperationX /= numNeighbors;
                    seperationY /= numNeighbors;
                    alignmentX /= numNeighbors;
                    alignmentY /= numNeighbors;
                    cohesionX = (cohesionX / numNeighbors - this.x);
                    cohesionY = (cohesionY / numNeighbors - this.y);
                }

                // Mouse Attraction (The Leader)
                const mouseDx = mouse.x - this.x;
                const mouseDy = mouse.y - this.y;
                const distToMouse = Math.hypot(mouseDx, mouseDy);

                // Forces
                this.vx += (seperationX * 1.5 + alignmentX * 1.0 + cohesionX * 1.0) * 0.05;
                this.vy += (seperationY * 1.5 + alignmentY * 1.0 + cohesionY * 1.0) * 0.05;

                // Strong attraction to mouse if close
                if (distToMouse < 800) { // Global pull
                    this.vx += mouseDx * 0.0005;
                    this.vy += mouseDy * 0.0005;
                }

                // Limit speed
                const speed = Math.hypot(this.vx, this.vy);
                if (speed > maxSpeed) {
                    this.vx = (this.vx / speed) * maxSpeed;
                    this.vy = (this.vy / speed) * maxSpeed;
                }

                this.x += this.vx;
                this.y += this.vy;

                // Wrap around
                if (this.x < 0) this.x = width;
                if (this.x > width) this.x = 0;
                if (this.y < 0) this.y = height;
                if (this.y > height) this.y = 0;
            }

            draw() {
                if (!ctx) return;
                const angle = Math.atan2(this.vy, this.vx);
                const size = 6;

                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(angle);

                ctx.beginPath();
                ctx.moveTo(size * 2, 0); // Nose
                ctx.lineTo(-size, -size);
                ctx.lineTo(-size, size);
                ctx.closePath();

                ctx.fillStyle = "#FACC15";
                ctx.fill();

                ctx.restore();
            }
        }

        const boids: Boid[] = [];
        for (let i = 0; i < 80; i++) { // 80 instances
            boids.push(new Boid());
        }

        let mouse = { x: width / 2, y: height / 2 };
        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        window.addEventListener("mousemove", handleMouseMove);

        const animate = () => {
            if (!ctx) return;
            // Trails
            ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
            ctx.fillRect(0, 0, width, height);

            boids.forEach(boid => {
                boid.update(boids, mouse);
                boid.draw();
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
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
            <canvas ref={canvasRef} className="absolute inset-0 block" />
        </div>
    );
}
