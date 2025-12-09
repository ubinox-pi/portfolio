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

        // 3D Point
        type Point3D = { x: number, y: number, z: number };

        // Shape Classes
        class Shape {
            vertices: Point3D[];
            faces: number[][]; // Indices of vertices
            x: number;
            y: number;
            z: number;
            rx: number;
            ry: number;
            rz: number;
            vrx: number;
            vry: number;
            vrz: number;
            dx: number;
            dy: number;
            dz: number;
            scale: number;

            constructor() {
                this.x = (Math.random() - 0.5) * width;
                this.y = (Math.random() - 0.5) * height;
                this.z = Math.random() * 500;

                this.rx = Math.random() * Math.PI;
                this.ry = Math.random() * Math.PI;
                this.rz = Math.random() * Math.PI;

                this.vrx = (Math.random() - 0.5) * 0.02;
                this.vry = (Math.random() - 0.5) * 0.02;
                this.vrz = (Math.random() - 0.5) * 0.02;

                this.dx = (Math.random() - 0.5) * 0.5;
                this.dy = (Math.random() - 0.5) * 0.5;
                this.dz = (Math.random() - 0.5) * 0.5;

                this.scale = 30 + Math.random() * 30;

                this.vertices = [];
                this.faces = [];
                this.initType();
            }

            initType() {
                // Random primitive: Cube, Tetrahedron, Octahedron
                const type = Math.floor(Math.random() * 3);
                if (type === 0) { // Cube
                    this.vertices = [
                        { x: -1, y: -1, z: -1 }, { x: 1, y: -1, z: -1 }, { x: 1, y: 1, z: -1 }, { x: -1, y: 1, z: -1 },
                        { x: -1, y: -1, z: 1 }, { x: 1, y: -1, z: 1 }, { x: 1, y: 1, z: 1 }, { x: -1, y: 1, z: 1 }
                    ];
                    this.faces = [
                        [0, 1, 2, 3], [4, 5, 6, 7], [0, 1, 5, 4], [2, 3, 7, 6], [0, 3, 7, 4], [1, 2, 6, 5]
                    ];
                } else if (type === 1) { // Tetrahedron
                    const s = Math.sqrt(2);
                    this.vertices = [
                        { x: 1, y: 0, z: -1 / s }, { x: -1, y: 0, z: -1 / s },
                        { x: 0, y: 1, z: 1 / s }, { x: 0, y: -1, z: 1 / s }
                    ];
                    this.faces = [
                        [0, 1, 2], [0, 1, 3], [0, 2, 3], [1, 2, 3]
                    ];
                } else { // Octahedron
                    this.vertices = [
                        { x: 1, y: 0, z: 0 }, { x: -1, y: 0, z: 0 }, { x: 0, y: 1, z: 0 },
                        { x: 0, y: -1, z: 0 }, { x: 0, y: 0, z: 1 }, { x: 0, y: 0, z: -1 }
                    ];
                    this.faces = [
                        [4, 0, 2], [4, 2, 1], [4, 1, 3], [4, 3, 0],
                        [5, 0, 2], [5, 2, 1], [5, 1, 3], [5, 3, 0]
                    ];
                }
            }

            update() {
                this.rx += this.vrx;
                this.ry += this.vry;
                this.rz += this.vrz;

                this.x += this.dx;
                this.y += this.dy;
                this.z += this.dz;

                // Bounds
                if (this.z < -500) this.z = 500;
                if (this.z > 500) this.z = -500;
            }

            draw(centerX: number, centerY: number) {
                if (!ctx) return;

                // Project
                const fov = 500;
                const viewDist = 800;
                const scale2d = fov / (viewDist + this.z);

                if (scale2d <= 0) return;

                const screenX = centerX + this.x * scale2d;
                const screenY = centerY + this.y * scale2d;

                // Rotation Matrix
                const cx = Math.cos(this.rx), sx = Math.sin(this.rx);
                const cy = Math.cos(this.ry), sy = Math.sin(this.ry);
                const cz = Math.cos(this.rz), sz = Math.sin(this.rz);

                const transformedVerts = this.vertices.map(v => {
                    // Rotate
                    let x = v.x, y = v.y, z = v.z;
                    // X rot
                    let y1 = y * cx - z * sx;
                    let z1 = y * sx + z * cx;
                    y = y1; z = z1;
                    // Y rot
                    let x1 = x * cy + z * sy;
                    z1 = -x * sy + z * cy;
                    x = x1; z = z1;
                    // Z rot
                    x1 = x * cz - y * sz;
                    y1 = x * sz + y * cz;
                    x = x1; y = y1;

                    return { x: x * this.scale, y: y * this.scale, z: z * this.scale };
                });

                ctx.strokeStyle = `rgba(250, 204, 21, ${Math.min(1, scale2d)})`;
                ctx.lineWidth = 1;

                this.faces.forEach(face => {
                    ctx.beginPath();
                    const v0 = transformedVerts[face[0]];
                    ctx.moveTo(screenX + v0.x * scale2d, screenY + v0.y * scale2d);

                    for (let i = 1; i < face.length; i++) {
                        const v = transformedVerts[face[i]];
                        ctx.lineTo(screenX + v.x * scale2d, screenY + v.y * scale2d);
                    }
                    ctx.closePath();
                    ctx.stroke();
                });
            }
        }

        const shapes: Shape[] = [];
        for (let i = 0; i < 20; i++) shapes.push(new Shape());

        const animate = () => {
            if (!ctx) return;
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, width, height);

            // Gradient Vignette
            const gradient = ctx.createRadialGradient(width / 2, height / 2, 100, width / 2, height / 2, width);
            gradient.addColorStop(0, "rgba(20, 20, 20, 0)");
            gradient.addColorStop(1, "rgba(0, 0, 0, 0.8)");
            ctx.fillStyle = gradient;
            //ctx.fillRect(0,0,width,height); // Render later?

            shapes.forEach(shape => {
                shape.update();
                shape.draw(width / 2, height / 2);
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
