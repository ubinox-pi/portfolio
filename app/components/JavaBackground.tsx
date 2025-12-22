"use client";

import { useEffect, useRef } from "react";

const javaKeywords = [
    "Java", "JVM", "Bytecode", "JIT", "GC", "Heap", "Stack", "Thread", "Virtual Threads",
    "Concurrency", "CompletableFuture", "ExecutorService", "Synchronization", "Volatile",
    "Reflection", "Generics", "Lambda", "Stream API", "Optional", "Records", "Sealed Classes",

    "Spring Boot", "Dependency Injection", "IoC Container", "AOP", "Beans", "@Component",
    "@Autowired", "@Service", "@Repository", "@Controller", "@RestController", "@Configuration",
    "Spring Security", "OAuth2", "JWT", "Actuator", "Profiles", "Spring Cloud", "Config Server",

    "WebFlux", "Reactive Streams", "Mono", "Flux", "Backpressure", "Non-blocking", "Async",
    "Netty", "Event Loop", "RouterFunction", "HandlerFunction", "WebClient", "RSocket",
    "Publisher", "Subscriber", "Subscription", "Project Reactor", "Schedulers", "FlatMap",

    "Microservices", "REST API", "GraphQL", "gRPC", "API Gateway", "Service Discovery",
    "Circuit Breaker", "Resilience4j", "Load Balancer", "Distributed Tracing", "Sleuth", "Zipkin",
    "Event Driven", "CQRS", "Saga Pattern", "Kafka", "RabbitMQ", "Message Queue",

    "Hibernate", "JPA", "JDBC", "Spring Data", "R2DBC", "PostgreSQL", "MongoDB", "Redis",
    "Transaction", "ACID", "Flyway", "Liquibase", "HikariCP", "Connection Pool",

    "Docker", "Kubernetes", "CI/CD", "Maven", "Gradle", "Jenkins", "Git", "SonarQube",
    "Prometheus", "Grafana", "Micrometer", "ELK Stack", "OpenShift", "TestContainers",
    "JUnit", "Mockito", "WireMock", "Integration Test"
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
                this.vx = (Math.random() - 0.5) * 1.2;
                this.vy = (Math.random() - 0.5) * 1.2;
                this.text = javaKeywords[Math.floor(Math.random() * javaKeywords.length)];
                this.size = Math.random() * 12 + 10;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }

            draw() {
                if (!ctx) return;
                ctx.font = `${this.size}px monospace`;
                ctx.fillStyle = "rgba(250, 204, 21, 0.3)";
                ctx.fillText(this.text, this.x, this.y);
            }
        }

        const particles: Particle[] = [];
        const particleCount = Math.min(50, Math.floor((width * height) / 20000));

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        let mouse = { x: -1000, y: -1000 };
        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        window.addEventListener("mousemove", handleMouseMove);

        let lastTime = 0;
        const fps = 60;
        const frameInterval = 1000 / fps;

        const animate = (currentTime: number) => {
            if (!ctx) return;

            const deltaTime = currentTime - lastTime;

            if (deltaTime >= frameInterval) {
                lastTime = currentTime - (deltaTime % frameInterval);

                ctx.clearRect(0, 0, width, height);

                particles.forEach((p, index) => {
                    p.update();
                    p.draw();

                    for (let j = index + 1; j < particles.length; j++) {
                        const p2 = particles[j];
                        const dx = p.x - p2.x;
                        const dy = p.y - p2.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);

                        if (distance < 150) {
                            ctx.beginPath();
                            ctx.strokeStyle = `rgba(250, 204, 21, ${0.15 - distance / 1000})`;
                            ctx.lineWidth = 1;
                            ctx.stroke();
                        }
                    }

                    const dx = p.x - mouse.x;
                    const dy = p.y - mouse.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 200) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(250, 204, 21, ${0.4 - distance / 500})`;
                        ctx.lineWidth = 1.5;
                        ctx.moveTo(p.x + 10, p.y - 5);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.stroke();

                        p.x -= dx * 0.01;
                        p.y -= dy * 0.01;
                    }
                });
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
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0" style={{ willChange: 'transform' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-[#0a0a0a] opacity-90" />
            <canvas ref={canvasRef} className="absolute inset-0 block" style={{ willChange: 'transform', transform: 'translateZ(0)' }} />
        </div>
    );
}
