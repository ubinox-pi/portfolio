"use client";

import { motion } from "framer-motion";
import { BookOpen, Clock, ArrowRight, Calendar, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    readTime: string;
    category: string;
    tags: string[];
}

const blogPosts: BlogPost[] = [
    {
        slug: "mono-flux-reactive-java",
        title: "Mastering Mono & Flux in Reactive Java",
        description: "Deep dive into reactive programming with Project Reactor. Publisher-Subscriber model, backpressure mechanisms, and building real-world reactive pipelines.",
        date: "February 16, 2026",
        readTime: "18 min read",
        category: "Reactive Systems",
        tags: ["Reactive Java", "Spring WebFlux", "Project Reactor"],
    },
    {
        slug: "git-github-guide",
        title: "Git & GitHub Mastery for Backend Engineers",
        description: "Production guide to version control. Branching topologies, interactive rebasing, merge strategies, atomic commits, and enterprise pull request workflows.",
        date: "December 15, 2025",
        readTime: "20 min read",
        category: "DevOps & Workflows",
        tags: ["Git", "GitHub", "DevOps"],
    },
    {
        slug: "maven-gradle-guide",
        title: "Java Build Mastery: Maven vs Gradle Internals",
        description: "Complete guide to Java build systems. Dependency resolution trees, plugin lifecycles, daemon performance, and multi-module project configuration.",
        date: "December 10, 2025",
        readTime: "25 min read",
        category: "Build Tooling",
        tags: ["Maven", "Gradle", "Java"],
    },
    {
        slug: "docker-commands",
        title: "Docker Production Reference & Optimization",
        description: "Essential Docker patterns for backend services: multi-stage builds, non-root users, volume persistence, internal networking, and Docker Compose orchestration.",
        date: "December 5, 2025",
        readTime: "10 min read",
        category: "Containers",
        tags: ["Docker", "DevOps", "Microservices"],
    },
    {
        slug: "intellij-shortcuts",
        title: "5 IntelliJ Shortcuts Every Java Dev Should Know",
        description: "Productivity amplification for Java developers. Structural search & replace, bytecode analysis, inline refactoring, and debugging breakpoints in IntelliJ IDEA.",
        date: "November 28, 2025",
        readTime: "5 min read",
        category: "Tooling Rigor",
        tags: ["IntelliJ", "Productivity"],
    },
    {
        slug: "spring-boot-rest-api",
        title: "Building Production-Ready REST APIs with Spring Boot",
        description: "Comprehensive blueprint for enterprise Spring Boot APIs: controller design, validation annotations, global exception handlers, and DTO mapping patterns.",
        date: "November 12, 2025",
        readTime: "12 min read",
        category: "API Architecture",
        tags: ["Spring Boot", "REST API", "Java"],
    },
];

export default function Blog() {
    return (
        <section id="blog" className="py-24 px-4 md:px-6 relative">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                        06 / WRITING
                    </span>
                    <div className="h-[1px] bg-white/10 flex-grow" />
                </div>
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                            Technical Articles & System Guides
                        </h2>
                        <p className="text-zinc-400 text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
                            Practical deep dives into reactive paradigms, container architectures, build tool internals, and resilient Java backend design.
                        </p>
                    </div>

                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors shrink-0"
                    >
                        Browse All Articles <ArrowUpRight size={14} />
                    </Link>
                </div>

                {/* Articles Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35, delay: index * 0.06 }}
                            viewport={{ once: true, margin: "-40px" }}
                            className="group"
                        >
                            <Link href={`/blog/${post.slug}`} className="block h-full">
                                <div className="bg-[#0e1017]/75 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:border-amber-500/40 hover:shadow-[0_12px_40px_-15px_rgba(245,158,11,0.15)] transition-all duration-300 h-full flex flex-col justify-between">
                                    <div>
                                        {/* Meta Bar */}
                                        <div className="flex items-center justify-between gap-2 mb-4">
                                            <span className="text-[11px] font-mono text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20 font-medium">
                                                {post.category}
                                            </span>
                                            <span className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
                                                <Clock size={12} />
                                                {post.readTime}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-amber-300 transition-colors leading-snug">
                                            {post.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                            {post.description}
                                        </p>
                                    </div>

                                    {/* Footer */}
                                    <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                                        <span className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
                                            <Calendar size={12} />
                                            {post.date}
                                        </span>

                                        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 group-hover:text-amber-300 group-hover:translate-x-1 transition-all">
                                            Read Article <ArrowRight size={13} />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
