"use client";

import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { Reveal, EASE } from "./ui/Reveal";

interface Project {
    title: string;
    category: string;
    description: string;
    tech: string[];
    github: string;
    link?: string;
    featured?: boolean;
}

const projects: Project[] = [
    {
        title: "Neptune Bank",
        category: "Distributed Banking Microservices",
        description:
            "A full-scale modular banking architecture with 10+ independently deployable microservices (auth, user, account, transaction, card, loan, OTP, employee). Features reactive Spring Cloud Gateway, JWT-based RBAC, and Docker Compose orchestration.",
        tech: ["Java 21", "Spring Boot 3.5", "Spring Cloud Gateway", "Docker Compose", "PostgreSQL"],
        github: "https://github.com/ubinox-pi/Banking-System",
        featured: true,
    },
    {
        title: "Convo",
        category: "Real-Time WebSocket & Signaling",
        description:
            "High-concurrency chat and presence backend using WebSocket and STOMP protocols. Implements WebRTC peer signaling for low-latency audio/video calling, Firebase cloud persistence, push notifications, and heartbeat connection health checks.",
        tech: ["Spring Boot", "WebSocket", "STOMP", "WebRTC", "Firebase"],
        github: "https://github.com/ubinox-pi/Convo",
        featured: true,
    },
    {
        title: "Lovable Clone",
        category: "Spring AI Agentic Sandbox",
        description:
            "Enterprise-grade AI-assisted web development platform. Facilitates conversational full-stack app scaffolding through Spring AI agentic streaming, Kubernetes isolated sandbox orchestration, and live multi-tenant preview via dynamic reverse proxy.",
        tech: ["Java 25", "Spring Boot 4.1", "Spring AI 2.0", "Kubernetes", "MinIO"],
        github: "https://github.com/ubinox-pi/lovable",
        featured: true,
    },
    {
        title: "ANONET",
        category: "Decentralized P2P & Cryptography",
        description:
            "Peer-to-peer encrypted file transfer protocol with JavaFX desktop client. Engineered with deterministic EC seed identities, Kademlia DHT node announcements, NAT traversal via UDP hole punching, relay onion routing fallback, and Next.js portal.",
        tech: ["Java 25", "JavaFX", "P2P Protocol", "Kademlia DHT", "Cryptography", "Next.js 16"],
        github: "https://github.com/ubinox-pi/anonet",
    },
    {
        title: "Airbnb Clone",
        category: "High-Availability Booking REST API",
        description:
            "Enterprise property rental engine built with Spring Boot. Implements stateless JWT authentication, date-level inventory availability with dynamic surge pricing algorithms, Stripe webhook payment lifecycles, and host analytics reporting.",
        tech: ["Java 25", "Spring Boot 4", "Spring Security", "PostgreSQL", "Stripe API", "Docker"],
        github: "https://github.com/ubinox-pi/airbnb",
    },
    {
        title: "LinkedIn Clone",
        category: "Event-Driven Social Graph",
        description:
            "Distributed social network backend orchestrated with Spring Cloud Eureka service discovery, API Gateway, and Apache Kafka event streaming. Utilizes Neo4j graph database for degree-of-connection algorithms and Kubernetes manifests.",
        tech: ["Java 21", "Spring Boot", "Apache Kafka", "Neo4j", "PostgreSQL", "Docker", "Kubernetes"],
        github: "https://github.com/ubinox-pi/linkdin-clone",
    },
    {
        title: "Vertex",
        category: "Android Architecture",
        description:
            "Production-ready Android mobile application engineered with Firebase integration for authentication, real-time database synchronization, cloud storage, and offline-first persistence.",
        tech: ["Android SDK", "Java", "Firebase", "Gradle", "MVVM"],
        github: "https://github.com/ubinox-pi/Vertex",
    },
    {
        title: "Love Calculator App",
        category: "Android Utility & Algorithms",
        description:
            "Interactive mobile utility implementing ASCII character-scoring heuristics, Firebase analytics integration, and custom animation layers for mobile clients.",
        tech: ["Android SDK", "Java", "Firebase", "XML Layouts"],
        github: "https://github.com/ubinox-pi/Love-Calculator-App",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="relative px-4 py-28 md:px-6 md:py-36">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    index="04"
                    label="Work"
                    title={[
                        "Selected systems",
                        <span key="l2" className="serif-italic text-muted">I&rsquo;ve engineered.</span>,
                    ]}
                    intro="Each repository ships with Docker configs and architecture documentation. Built for high concurrency, fault isolation and resilient data pipelines."
                    aside={
                        <a
                            href="https://github.com/ubinox-pi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-underline inline-flex items-center gap-1.5 font-mono text-xs text-accent"
                        >
                            Full GitHub <ArrowUpRight size={13} />
                        </a>
                    }
                />

                {/* Project list — editorial table style */}
                <div className="border-t border-line-strong">
                    {projects.map((project, i) => (
                        <Reveal key={project.title} delay={i * 0.06} y={18}>
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group grid gap-4 border-b border-line py-8 transition-colors duration-500 hover:bg-surface/40 md:grid-cols-12 md:items-baseline md:gap-6 md:py-10"
                            >
                                {/* Index + Category */}
                                <div className="md:col-span-3">
                                    <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-subtle">
                                        {String(i + 1).padStart(2, "0")} — {project.category.split(" ")[0]}
                                    </span>
                                </div>

                                {/* Title + Description */}
                                <div className="md:col-span-6">
                                    <h3 className="flex items-center gap-3 text-xl font-medium text-foreground transition-colors duration-300 group-hover:text-accent md:text-2xl">
                                        {project.title}
                                        {project.featured && (
                                            <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-accent">
                                                Featured
                                            </span>
                                        )}
                                        <ArrowUpRight
                                            size={18}
                                            className="ml-auto shrink-0 text-subtle opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent group-hover:opacity-100"
                                        />
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-2">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tech pills */}
                                <div className="flex flex-wrap gap-1.5 md:col-span-3 md:justify-end">
                                    {project.tech.slice(0, 4).map((t) => (
                                        <span
                                            key={t}
                                            className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[10px] text-subtle transition-colors duration-300 group-hover:border-accent/20 group-hover:text-muted"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                    {project.tech.length > 4 && (
                                        <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[10px] text-subtle">
                                            +{project.tech.length - 4}
                                        </span>
                                    )}
                                </div>
                            </a>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
