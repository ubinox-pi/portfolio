"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight, Calendar, ArrowLeft, Search, BookOpen } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const blogPosts = [
    {
        slug: "mono-flux-reactive-java",
        title: "Mastering Mono & Flux in Reactive Java",
        description: "Deep dive into reactive programming with Project Reactor. From Publisher-Subscriber patterns to building real-world reactive pipelines with Mono and Flux.",
        date: "February 16, 2026",
        readTime: "18 min read",
        tags: ["Reactive Java", "Spring WebFlux", "Project Reactor"],
        color: "#7C3AED",
        emoji: "⚛️"
    },
    {
        slug: "git-github-guide",
        title: "Git & GitHub Mastery",
        description: "Complete guide to version control. Master Git commands, branching strategies, merge vs rebase, pull requests, and GitHub workflows.",
        date: "December 15, 2025",
        readTime: "20 min read",
        tags: ["Git", "GitHub", "DevOps"],
        color: "#F05032",
        emoji: "🔀"
    },
    {
        slug: "maven-gradle-guide",
        title: "Java Build Mastery: Maven & Gradle",
        description: "Complete guide to Java build tools. Master Maven and Gradle commands, dependency management, plugins, and multi-module projects.",
        date: "December 10, 2025",
        readTime: "25 min read",
        tags: ["Maven", "Gradle", "Java"],
        color: "#C71A36",
        emoji: "🔧"
    },
    {
        slug: "docker-commands",
        title: "Docker Commands Cheat Sheet",
        description: "Essential Docker commands for containers, images, volumes, networks, and Docker Compose. The ultimate DevOps reference guide.",
        date: "December 5, 2025",
        readTime: "10 min read",
        tags: ["Docker", "DevOps"],
        color: "#2496ED",
        emoji: "🐳"
    },
    {
        slug: "intellij-shortcuts",
        title: "5 IntelliJ Shortcuts Every Java Dev Should Know",
        description: "Boost your productivity with essential keyboard shortcuts. Master navigation, refactoring, debugging, and code generation in IntelliJ IDEA.",
        date: "November 28, 2025",
        readTime: "5 min read",
        tags: ["IntelliJ", "Productivity"],
        color: "#FC5185",
        emoji: "⌨️"
    },
    {
        slug: "spring-boot-annotations",
        title: "Mastering Spring Boot Annotations",
        description: "Deep dive into Spring Boot annotations. Learn @RestController, @Service, @Repository, @Autowired, and more with practical examples.",
        date: "November 20, 2025",
        readTime: "8 min read",
        tags: ["Spring Boot", "Java"],
        color: "#6DB33F",
        emoji: "🌱"
    },
    {
        slug: "spring-boot-rest-api",
        title: "Building REST APIs with Spring Boot",
        description: "Learn how to build production-ready REST APIs using Spring Boot. Covers controllers, services, validation, and best practices.",
        date: "November 12, 2025",
        readTime: "12 min read",
        tags: ["Spring Boot", "REST API"],
        color: "#6DB33F",
        emoji: "🚀"
    },
];

const allTags = Array.from(new Set(blogPosts.flatMap(p => p.tags)));

export default function BlogIndex() {
    const [activeTag, setActiveTag] = useState<string | null>(null);
    const [search, setSearch] = useState("");

    const filteredPosts = blogPosts.filter(post => {
        const matchTag = !activeTag || post.tags.includes(activeTag);
        const matchSearch = !search || post.title.toLowerCase().includes(search.toLowerCase()) || post.description.toLowerCase().includes(search.toLowerCase());
        return matchTag && matchSearch;
    });

    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-24 pb-20 px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-10 text-sm">
                        <ArrowLeft size={14} />
                        Home
                    </Link>

                    {/* Header */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-3">
                            <BookOpen size={20} className="text-accent" />
                            <span className="text-accent text-sm font-mono tracking-wider uppercase">Articles</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Blog</h1>
                        <p className="text-gray-500 text-sm md:text-base max-w-lg">
                            Thoughts on backend engineering, Java ecosystem, and developer tools.
                        </p>
                    </div>

                    {/* Search + Tags */}
                    <div className="mb-10 space-y-4">
                        <div className="relative max-w-sm">
                            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
                            <input
                                type="text"
                                placeholder="Search..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-9 pr-4 py-2 bg-transparent border border-white/10 rounded-lg text-white text-sm placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors"
                            />
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => setActiveTag(null)}
                                className={`px-3 py-1 rounded-full text-xs transition-all ${!activeTag ? "bg-white text-black font-medium" : "text-gray-500 hover:text-white"}`}
                            >
                                All
                            </button>
                            {allTags.map(tag => (
                                <button
                                    key={tag}
                                    onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                                    className={`px-3 py-1 rounded-full text-xs transition-all ${activeTag === tag ? "bg-white text-black font-medium" : "text-gray-500 hover:text-white"}`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Posts */}
                <div className="space-y-1">
                    {filteredPosts.map((post, index) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.03 }}
                        >
                            <Link href={`/blog/${post.slug}`} className="group block">
                                <div className="py-5 md:py-6 border-b border-white/[0.04] group-hover:border-white/10 transition-colors">
                                    <div className="flex items-start gap-4">
                                        {/* Emoji */}
                                        <div
                                            className="w-10 h-10 rounded-lg flex items-center justify-center text-lg shrink-0 mt-0.5"
                                            style={{ backgroundColor: `${post.color}12` }}
                                        >
                                            {post.emoji}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-1.5">
                                                {post.tags.slice(0, 2).map(tag => (
                                                    <span
                                                        key={tag}
                                                        className="text-[10px] font-medium tracking-wide uppercase"
                                                        style={{ color: post.color }}
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                                {post.tags.length > 2 && (
                                                    <span className="text-[10px] text-gray-600">+{post.tags.length - 2}</span>
                                                )}
                                            </div>

                                            <h2 className="text-base md:text-lg font-semibold text-white group-hover:text-accent transition-colors mb-1">
                                                {post.title}
                                            </h2>
                                            <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-2">
                                                {post.description}
                                            </p>

                                            <div className="flex items-center gap-4 text-[11px] text-gray-600">
                                                <span className="flex items-center gap-1">
                                                    <Calendar size={10} />
                                                    {post.date}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock size={10} />
                                                    {post.readTime}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Arrow */}
                                        <div className="hidden md:flex items-center self-center">
                                            <ArrowRight size={16} className="text-gray-700 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-600 mb-2">No articles found.</p>
                        <button
                            onClick={() => { setActiveTag(null); setSearch(""); }}
                            className="text-accent text-sm hover:underline"
                        >
                            Clear filters
                        </button>
                    </div>
                )}

                {/* Footer */}
                <div className="mt-16 pt-8 border-t border-white/[0.04] text-center">
                    <p className="text-gray-600 text-xs">
                        {blogPosts.length} articles · More coming soon
                    </p>
                </div>
            </div>
        </main>
    );
}
