"use client";

import { motion } from "framer-motion";
import { Folder, Github, ExternalLink } from "lucide-react";

const projects = [
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
    {
        title: "Secure Banking System",
        description: "Encrypted transaction system with fraud detection and role-based access. Multi-module Java application.",
        tech: ["Java", "Spring Security", "Encryption", "MySQL"],
        github: "https://github.com/ubinox-pi/Banking-System/tree/Ramjee-prasad",
        link: "#"
    },
    {
        title: "Layered Spring Architecture",
        description: "Comprehensive backend application using Spring Boot. RESTful APIs, JWT Auth, RBAC, PostgreSQL, and Docker.",
        tech: ["Spring Boot", "PostgreSQL", "Docker", "JWT"],
        github: "https://github.com/ubinox-pi/Spring-project",
        link: "#"
    },
    {
        title: "Real-Time Chat System",
        description: "WebSocket-based chat feature handling message broadcasting, user sessions, and Redis for in-memory data.",
        tech: ["Spring Boot", "WebSockets", "Redis", "Java"],
        github: "https://github.com/ubinox-pi/Spring-project/tree/Real-Time-chat",
        link: "#"
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-4 mb-10">
                    <span className="text-3xl text-accent font-bold">03.</span>
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
                                        <a
                                            href={project.link}
                                            className="text-gray-400 hover:text-white transition-colors"
                                            aria-label={`View ${project.title} live demo`}
                                        >
                                            <ExternalLink size={20} />
                                        </a>
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
