"use client";

import { motion } from "framer-motion";
import { FolderGit2, Github, ExternalLink, ArrowUpRight, Shield, Zap, Cpu, Network } from "lucide-react";

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
        description: "A full-scale modular banking architecture with 10+ independently deployable microservices (auth, user, account, transaction, card, loan, OTP, employee). Features reactive Spring Cloud Gateway, JWT-based RBAC, and Docker Compose orchestration.",
        tech: ["Java 21", "Spring Boot 3.5", "Spring Cloud Gateway", "Docker Compose", "PostgreSQL"],
        github: "https://github.com/ubinox-pi/Banking-System",
        link: "#",
        featured: true
    },
    {
        title: "Convo",
        category: "Real-Time WebSocket & Signaling",
        description: "High-concurrency chat and presence backend using WebSocket and STOMP protocols. Implements WebRTC peer signaling for low-latency audio/video calling, Firebase cloud persistence, push notifications, and heartbeat connection health checks.",
        tech: ["Spring Boot", "WebSocket", "STOMP", "WebRTC", "Firebase"],
        github: "https://github.com/ubinox-pi/Convo",
        link: "#",
        featured: true
    },
    {
        title: "Lovable Clone",
        category: "Spring AI Agentic Sandbox",
        description: "Enterprise-grade AI-assisted web development platform. Facilitates conversational full-stack app scaffolding through Spring AI agentic streaming, Kubernetes isolated sandbox orchestration, and live multi-tenant preview via dynamic reverse proxy.",
        tech: ["Java 25", "Spring Boot 4.1", "Spring AI 2.0", "Kubernetes", "MinIO"],
        github: "https://github.com/ubinox-pi/lovable",
        link: "#",
        featured: true
    },
    {
        title: "ANONET",
        category: "Decentralized P2P & Cryptography",
        description: "Peer-to-peer encrypted file transfer protocol with JavaFX desktop client. Engineered with deterministic EC seed identities, Kademlia DHT node announcements, NAT traversal via UDP hole punching, relay onion routing fallback, and Next.js portal.",
        tech: ["Java 25", "JavaFX", "P2P Protocol", "Kademlia DHT", "Cryptography", "Next.js 16"],
        github: "https://github.com/ubinox-pi/anonet",
        link: "#"
    },
    {
        title: "Airbnb Clone",
        category: "High-Availability Booking REST API",
        description: "Enterprise property rental engine built with Spring Boot. Implements stateless JWT authentication, date-level inventory availability with dynamic surge pricing algorithms, Stripe webhook payment lifecycles, and host analytics reporting.",
        tech: ["Java 25", "Spring Boot 4", "Spring Security", "PostgreSQL", "Stripe API", "Docker"],
        github: "https://github.com/ubinox-pi/airbnb",
        link: "#"
    },
    {
        title: "LinkedIn Clone",
        category: "Event-Driven Social Graph",
        description: "Distributed social network backend orchestrated with Spring Cloud Eureka service discovery, API Gateway, and Apache Kafka event streaming. Utilizes Neo4j graph database for degree-of-connection algorithms and Kubernetes manifests.",
        tech: ["Java 21", "Spring Boot", "Apache Kafka", "Neo4j", "PostgreSQL", "Docker", "Kubernetes"],
        github: "https://github.com/ubinox-pi/linkdin-clone",
        link: "#"
    },
    {
        title: "Vertex",
        category: "Android Architecture",
        description: "Production-ready Android mobile application engineered with Firebase integration for authentication, real-time database synchronization, cloud storage, and offline-first persistence.",
        tech: ["Android SDK", "Java", "Firebase", "Gradle", "MVVM"],
        github: "https://github.com/ubinox-pi/Vertex",
        link: "#"
    },
    {
        title: "Love Calculator App",
        category: "Android Utility & Algorithms",
        description: "Interactive mobile utility implementing ASCII character-scoring heuristics, Firebase analytics integration, and custom animation layers for mobile clients.",
        tech: ["Android SDK", "Java", "Firebase", "XML Layouts"],
        github: "https://github.com/ubinox-pi/Love-Calculator-App",
        link: "#"
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-4 md:px-6 relative">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                        04 / SYSTEMS
                    </span>
                    <div className="h-[1px] bg-white/10 flex-grow" />
                </div>
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                            Featured Architectural Systems
                        </h2>
                        <p className="text-zinc-400 text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
                            Engineered for high concurrency, fault isolation, and resilient backend data pipelines. Each repository includes Docker configurations and comprehensive architecture specs.
                        </p>
                    </div>

                    <a
                        href="https://github.com/ubinox-pi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors shrink-0"
                    >
                        View Full GitHub Portfolio <ArrowUpRight size={14} />
                    </a>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35, delay: index * 0.05 }}
                            viewport={{ once: true, margin: "-40px" }}
                            className="bg-[#0e1017]/75 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:border-amber-500/40 hover:shadow-[0_12px_40px_-15px_rgba(245,158,11,0.15)] transition-all duration-300 group flex flex-col justify-between"
                        >
                            <div>
                                {/* Header Icons & Links */}
                                <div className="flex justify-between items-start mb-5">
                                    <div className="p-2.5 bg-amber-500/10 rounded-xl text-amber-400 border border-amber-500/20 group-hover:scale-105 transition-transform">
                                        <FolderGit2 size={22} />
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-zinc-400 hover:text-white transition-colors p-1.5 hover:bg-white/5 rounded-lg"
                                            aria-label={`View ${project.title} source code on GitHub`}
                                        >
                                            <Github size={18} />
                                        </a>

                                        {project.link && project.link !== "#" ? (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-zinc-400 hover:text-amber-300 transition-colors p-1.5 hover:bg-white/5 rounded-lg"
                                                aria-label={`View ${project.title} live system`}
                                            >
                                                <ExternalLink size={18} />
                                            </a>
                                        ) : (
                                            <span
                                                className="text-zinc-600 cursor-default relative group/demo p-1.5"
                                                aria-label="Live deployment coming soon"
                                            >
                                                <ExternalLink size={18} />
                                                <span className="absolute -top-7 right-0 bg-[#090a0f] text-zinc-300 text-[10px] px-2 py-0.5 rounded whitespace-nowrap opacity-0 group-hover/demo:opacity-100 transition-opacity pointer-events-none border border-white/10 shadow-lg">
                                                    Demo Preview
                                                </span>
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Category Tag */}
                                <div className="text-[11px] font-mono text-amber-400/90 font-medium mb-1.5">
                                    {project.category}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-amber-300 transition-colors">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-zinc-400 mb-6 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            {/* Tech Stack Pills */}
                            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="text-[11px] font-mono text-zinc-300 bg-white/5 px-2 py-0.5 rounded border border-white/5 group-hover:border-amber-500/20 group-hover:text-amber-300/90 transition-colors"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
