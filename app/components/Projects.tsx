"use client";

import { motion } from "framer-motion";
import { Folder, Github, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "Neptune Bank",
        description: "A full-scale modular banking system with 10+ independently deployable microservices including auth, user, account, transaction, card, loan, OTP, and employee services. Features reactive API Gateway, JWT-based RBAC, and Docker Compose orchestration.",
        tech: ["Java 21", "Spring Boot 3.5", "Spring Cloud Gateway", "Docker Compose", "PostgreSQL"],
        github: "https://github.com/ubinox-pi/Banking-System",
        link: "#"
    },
    {
        title: "Convo",
        description: "Real-time chat and user presence backend using WebSocket and STOMP protocol. Features WebRTC signaling for peer-to-peer audio/video calling, Firebase cloud storage, push notifications, and configurable heartbeat mechanisms.",
        tech: ["Spring Boot", "WebSocket", "STOMP", "WebRTC", "Firebase"],
        github: "https://github.com/ubinox-pi/Convo",
        link: "#"
    },
    {
        title: "Lovable Clone",
        description: "Enterprise-grade AI-powered web development platform. Build full-stack React apps through natural language conversations with Spring AI agentic streaming, Kubernetes sandbox orchestration, and live preview via dynamic reverse proxy.",
        tech: ["Java 25", "Spring Boot 4.1", "Spring AI 2.0", "Kubernetes", "MinIO"],
        github: "https://github.com/ubinox-pi/lovable",
        link: "#"
    },
    {
        title: "ANONET",
        description: "Decentralized P2P encrypted file transfer desktop application built with JavaFX. Features deterministic EC seed identities, DHT username lookup, NAT traversal with UDP hole punching, relay/onion routing fallback, and a Next.js marketing site.",
        tech: ["Java 25", "JavaFX", "P2P", "Kademlia DHT", "Cryptography", "Next.js 16"],
        github: "https://github.com/ubinox-pi/anonet",
        link: "#"
    },
    {
        title: "Airbnb Clone",
        description: "Hotel booking and property management REST API built with Spring Boot. Features stateless JWT authentication, date-level inventory availability with dynamic surge pricing, Stripe payment lifecycle & webhooks, and manager analytics.",
        tech: ["Java 25", "Spring Boot 4", "Spring Security", "PostgreSQL", "Stripe API", "Docker"],
        github: "https://github.com/ubinox-pi/airbnb",
        link: "#"
    },
    {
        title: "LinkedIn Clone",
        description: "Distributed microservices social platform architecture. Features Spring Cloud Eureka service discovery, API Gateway, event-driven messaging with Apache Kafka, Neo4j graph database for connections, and Kubernetes deployment manifests.",
        tech: ["Java 21", "Spring Boot", "Apache Kafka", "Neo4j", "PostgreSQL", "Docker", "Kubernetes"],
        github: "https://github.com/ubinox-pi/linkdin-clone",
        link: "#"
    },
    {
        title: "Vertex",
        description: "A production-ready Android application featuring Firebase integration for authentication, real-time data sync, and cloud-based user management. Built with scalable architecture for seamless backend communication.",
        tech: ["Android", "Java", "Firebase", "Gradle"],
        github: "https://github.com/ubinox-pi/Vertex",
        link: "#"
    },
    {
        title: "Love Calculator App",
        description: "Android application that calculates compatibility using ASCII algorithms. Features Firebase integration, immersive UI, and romantic quotes.",
        tech: ["Android", "Java", "Firebase", "XML"],
        github: "https://github.com/ubinox-pi/Love-Calculator-App",
        link: "#"
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-4 mb-10">
                    <span className="text-3xl text-accent font-bold">04.</span>
                    <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
                    <div className="h-[1px] bg-white/20 flex-grow" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="bg-zinc-900/30 backdrop-blur-md p-6 rounded-lg border border-white/5 hover:border-accent hover:shadow-[0_0_15px_rgba(250,204,21,0.2)] transition-all duration-300 group flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-white/5 rounded-full text-accent">
                                        <Folder size={24} />
                                    </div>
                                    <div className="flex gap-4">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white transition-colors"
                                            aria-label={`View ${project.title} source code on GitHub`}
                                        >
                                            <Github size={20} />
                                        </a>
                                        {project.link && project.link !== "#" ? (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-white transition-colors"
                                                aria-label={`View ${project.title} live demo`}
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        ) : (
                                            <span
                                                className="text-gray-600 cursor-default relative group/demo"
                                                aria-label="Live demo coming soon"
                                            >
                                                <ExternalLink size={20} />
                                                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 text-gray-300 text-[10px] px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/demo:opacity-100 transition-opacity pointer-events-none border border-white/10">
                                                    Coming Soon
                                                </span>
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-xs font-mono text-accent">
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
