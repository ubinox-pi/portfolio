"use client";

import { motion } from "framer-motion";
import { BookOpen, Clock, ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
    {
        slug: "spring-boot-annotations",
        title: "Mastering Spring Boot Annotations",
        description: "A comprehensive guide to the most essential annotations that power modern Spring Boot applications. From @SpringBootApplication to @Repository, master them all.",
        date: "December 22, 2025",
        readTime: "10 min read",
        tags: ["Spring Boot", "Java", "Backend"],
        color: "#6db33f" // Spring green
    }
];

export default function Blog() {
    return (
        <section id="blog" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-4 mb-10">
                    <span className="text-3xl text-accent font-bold">05.</span>
                    <h2 className="text-3xl font-bold text-white">Blog</h2>
                    <div className="h-[1px] bg-white/20 flex-grow" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <Link href={`/blog/${post.slug}`}>
                                <div className="relative bg-zinc-900/30 backdrop-blur-md rounded-lg border border-white/5 overflow-hidden hover:border-[#6db33f]/50 transition-all duration-300 h-full">
                                    {/* Glow effect */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                                        style={{ background: `radial-gradient(circle at 50% 0%, ${post.color}, transparent 70%)` }}
                                    />

                                    {/* Header with Spring icon */}
                                    <div className="p-4 border-b border-white/5 flex items-center gap-3">
                                        <div
                                            className="w-10 h-10 rounded-full flex items-center justify-center"
                                            style={{ backgroundColor: `${post.color}20` }}
                                        >
                                            <span style={{ color: post.color }} className="text-lg">🌱</span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex gap-2">
                                                {post.tags.map(tag => (
                                                    <span
                                                        key={tag}
                                                        className="text-xs px-2 py-0.5 rounded-full"
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
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#6db33f] transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                            {post.description}
                                        </p>

                                        <div className="flex items-center justify-between text-xs text-gray-500">
                                            <div className="flex items-center gap-4">
                                                <span className="flex items-center gap-1">
                                                    <Calendar size={12} />
                                                    {post.date}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock size={12} />
                                                    {post.readTime}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Read more footer */}
                                    <div className="px-6 pb-4">
                                        <div
                                            className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all"
                                            style={{ color: post.color }}
                                        >
                                            Read Article
                                            <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}

                    {/* Coming Soon Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-zinc-900/30 backdrop-blur-md rounded-lg border border-dashed border-white/10 p-6 flex flex-col items-center justify-center text-center min-h-[280px]"
                    >
                        <div className="p-3 bg-white/5 rounded-full mb-4">
                            <BookOpen size={24} className="text-gray-500" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-400 mb-2">More Coming Soon</h3>
                        <p className="text-gray-500 text-sm">
                            Stay tuned for more articles on Java, Microservices, and Backend Development.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
