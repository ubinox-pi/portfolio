"use client";

import { motion } from "framer-motion";
import { BookOpen, Clock, ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

const blogPosts = [
    {
        slug: "git-github-guide",
        title: "Git & GitHub Mastery",
        description: "Complete guide to version control. Master Git commands, branching strategies, merge vs rebase, pull requests, and GitHub workflows.",
        date: "December 15, 2025",
        readTime: "20 min read",
        tags: ["Git", "GitHub", "DevOps"],
        color: "#F05032", // Git orange
        emoji: "🔀"
    },
    {
        slug: "maven-gradle-guide",
        title: "Java Build Mastery: Maven & Gradle",
        description: "Complete guide to Java build tools. Master Maven and Gradle commands, dependency management, plugins, and multi-module projects.",
        date: "December 10, 2025",
        readTime: "25 min read",
        tags: ["Maven", "Gradle", "Java"],
        color: "#C71A36", // Maven red
        emoji: "🔧"
    },
    {
        slug: "docker-commands",
        title: "Docker Commands Cheat Sheet",
        description: "Essential Docker commands for containers, images, volumes, networks, and Docker Compose. The ultimate DevOps reference guide.",
        date: "December 5, 2025",
        readTime: "10 min read",
        tags: ["Docker", "DevOps"],
        color: "#2496ED", // Docker blue
        emoji: "🐳"
    },
    {
        slug: "intellij-shortcuts",
        title: "5 IntelliJ Shortcuts Every Java Dev Should Know",
        description: "Boost your productivity with essential keyboard shortcuts. Master navigation, refactoring, debugging, and code generation in IntelliJ IDEA.",
        date: "November 28, 2025",
        readTime: "5 min read",
        tags: ["IntelliJ", "Productivity"],
        color: "#FC5185", // IntelliJ pink
        emoji: "⌨️"
    },
    {
        slug: "spring-boot-annotations",
        title: "Mastering Spring Boot Annotations",
        description: "Deep dive into Spring Boot annotations. Learn @RestController, @Service, @Repository, @Autowired, and more with practical examples.",
        date: "November 20, 2025",
        readTime: "8 min read",
        tags: ["Spring Boot", "Java"],
        color: "#6DB33F", // Spring green
        emoji: "🌱"
    },
    {
        slug: "spring-boot-rest-api",
        title: "Building REST APIs with Spring Boot",
        description: "Learn how to build production-ready REST APIs using Spring Boot. Covers controllers, services, validation, and best practices.",
        date: "November 12, 2025",
        readTime: "12 min read",
        tags: ["Spring Boot", "REST API"],
        color: "#6DB33F", // Spring green
        emoji: "🚀"
    },
];

export default function Blog() {
    return (
        <section id="blog" className="py-20 px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-4 mb-10">
                    <span className="text-3xl text-accent font-bold">05.</span>
                    <h2 className="text-3xl font-bold text-white">Blog</h2>
                    <div className="h-[1px] bg-white/20 flex-grow hidden md:block" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <Link href={`/blog/${post.slug}`} scroll={true}>
                                <div className="relative bg-zinc-900/30 backdrop-blur-md rounded-lg border border-white/5 overflow-hidden hover:border-opacity-50 transition-all duration-300 h-full" style={{ borderColor: `${post.color}30` }}>
                                    {/* Glow effect */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                                        style={{ background: `radial-gradient(circle at 50% 0%, ${post.color}, transparent 70%)` }}
                                    />

                                    {/* Header with icon */}
                                    <div className="p-3 md:p-4 border-b border-white/5 flex items-center gap-3">
                                        <div
                                            className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center text-lg"
                                            style={{ backgroundColor: `${post.color}20` }}
                                        >
                                            {post.emoji}
                                        </div>
                                        <div className="flex gap-2 flex-wrap">
                                            {post.tags.map(tag => (
                                                <span
                                                    key={tag}
                                                    className="text-[10px] md:text-xs px-2 py-0.5 rounded-full"
                                                    style={{
                                                        backgroundColor: `${post.color}20`,
                                                        color: post.color
                                                    }}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-4 md:p-5">
                                        <h3
                                            className="text-base md:text-lg font-bold text-white mb-2 group-hover:transition-colors line-clamp-2"
                                            style={{ color: undefined }}
                                        >
                                            <span className="group-hover:text-current" style={{ '--hover-color': post.color } as React.CSSProperties}>
                                                {post.title}
                                            </span>
                                        </h3>
                                        <p className="text-gray-400 text-xs md:text-sm mb-4 line-clamp-2">
                                            {post.description}
                                        </p>

                                        <div className="flex items-center justify-between text-[10px] md:text-xs text-gray-500">
                                            <div className="flex items-center gap-3 md:gap-4">
                                                <span className="flex items-center gap-1">
                                                    <Calendar size={10} />
                                                    {post.date.split(' ').slice(0, 2).join(' ')}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock size={10} />
                                                    {post.readTime}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Read more footer */}
                                    <div className="px-4 md:px-5 pb-4">
                                        <div
                                            className="flex items-center gap-2 text-xs md:text-sm font-medium group-hover:gap-3 transition-all"
                                            style={{ color: post.color }}
                                        >
                                            Read Article
                                            <ArrowRight size={14} />
                                        </div>
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
