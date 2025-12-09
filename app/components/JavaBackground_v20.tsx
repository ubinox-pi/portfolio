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

        type Node = {
            x: number;
            y: number;
            layer: number;
            id: number;
            label: string;
        };

        const layers = 5;
        const nodesPerLayer = 6;
        const nodes: Node[] = [];
        const connections: { from: Node, to: Node }[] = [];
        const pulses: { from: Node, to: Node, progress: number, speed: number }[] = [];

        // Build Graph
        const labels = ["Input", "Controller", "Service", "Repository", "Database"];

        for (let l = 0; l < layers; l++) {
            const x = (width / (layers + 1)) * (l + 1);
            for (let n = 0; n < nodesPerLayer; n++) {
                // Stagger y
                const y = (height / (nodesPerLayer + 1)) * (n + 1) + (Math.random() * 50 - 25);

                const node = {
                    x, y, layer: l, id: nodes.length,
                    label: labels[l] || "Node"
                };
                nodes.push(node);

                // Connect to previous layer
                if (l > 0) {
                    // Random connections
                    const prevLayerNodes = nodes.filter(n => n.layer === l - 1);
                    const numConnections = Math.floor(Math.random() * 2) + 1; // 1 or 2 connections

                    for (let k = 0; k < numConnections; k++) {
                        const target = prevLayerNodes[Math.floor(Math.random() * prevLayerNodes.length)];
                        connections.push({ from: target, to: node });
                    }
                }
            }
        }

        let mouse = { x: -1000, y: -1000 };
        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        window.addEventListener("mousemove", handleMouseMove);

        const animate = () => {
            if (!ctx) return;

            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, width, height);

            // Draw Connections
            ctx.strokeStyle = "rgba(80, 80, 80, 0.3)";
            ctx.lineWidth = 1;
            connections.forEach(conn => {
                ctx.beginPath();
                ctx.moveTo(conn.from.x, conn.from.y);
                // Bezier curve for smoother look
                const cp1x = conn.from.x + (conn.to.x - conn.from.x) / 2;
                const cp1y = conn.from.y;
                const cp2x = conn.from.x + (conn.to.x - conn.from.x) / 2;
                const cp2y = conn.to.y;
                ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, conn.to.x, conn.to.y);
                ctx.stroke();
            });

            // Spawn Pulses
            if (Math.random() > 0.9) {
                const startLayer = Math.floor(Math.random() * (layers - 1));
                const potentialConns = connections.filter(c => c.from.layer === startLayer);
                if (potentialConns.length > 0) {
                    const conn = potentialConns[Math.floor(Math.random() * potentialConns.length)];
                    pulses.push({
                        from: conn.from,
                        to: conn.to,
                        progress: 0,
                        speed: Math.random() * 0.02 + 0.01
                    });
                }
            }

            // Draw Pulses
            for (let i = pulses.length - 1; i >= 0; i--) {
                const p = pulses[i];
                p.progress += p.speed;

                if (p.progress >= 1) {
                    pulses.splice(i, 1);
                    continue;
                }

                // Calculate pos
                const cp1x = p.from.x + (p.to.x - p.from.x) / 2;
                const cp1y = p.from.y;
                const cp2x = p.from.x + (p.to.x - p.from.x) / 2;
                const cp2y = p.to.y;

                // Bezier math... simplified, linear interpolation of t on curve?
                // Actually standard bezier formula B(t)
                const t = p.progress;
                const cx = (1 - t) * (1 - t) * (1 - t) * p.from.x + 3 * (1 - t) * (1 - t) * t * cp1x + 3 * (1 - t) * t * t * cp2x + t * t * t * p.to.x;
                const cy = (1 - t) * (1 - t) * (1 - t) * p.from.y + 3 * (1 - t) * (1 - t) * t * cp1y + 3 * (1 - t) * t * t * cp2y + t * t * t * p.to.y;

                ctx.beginPath();
                ctx.arc(cx, cy, 3, 0, Math.PI * 2);
                ctx.fillStyle = "#FACC15";
                ctx.fill();
            }

            // Draw Nodes
            nodes.forEach(node => {
                // Mouse interaction: Nodes pulse if mouse is close
                const dist = Math.hypot(node.x - mouse.x, node.y - mouse.y);
                let size = 4;
                let color = "rgba(100, 100, 100, 0.5)";

                if (dist < 100) {
                    size = 8;
                    color = "#FACC15";

                    // Trigger Pulses from this node if touched
                    if (Math.random() > 0.9) {
                        const outgoing = connections.filter(c => c.from === node);
                        outgoing.forEach(c => {
                            pulses.push({ from: c.from, to: c.to, progress: 0, speed: 0.02 });
                        });
                    }
                }

                ctx.beginPath();
                ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
                ctx.fillStyle = color;
                ctx.fill();

                // Label
                if (dist < 100) {
                    ctx.fillStyle = "white";
                    ctx.font = "10px sans-serif";
                    ctx.fillText(node.label, node.x + 12, node.y + 4);
                }
            });

            requestAnimationFrame(animate);
        };
        const animationId = requestAnimationFrame(animate);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            // Graph rebuild needed for responsiveness, simplified for now
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
