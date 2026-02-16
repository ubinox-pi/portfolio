"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, BookOpen, FileText, Terminal } from "lucide-react";

const suggestions = [
    { label: "Resume", href: "/resume", icon: FileText },
    { label: "Mono & Flux Guide", href: "/blog/mono-flux-reactive-java", icon: Terminal },
    { label: "Git & GitHub Guide", href: "/blog/git-github-guide", icon: Terminal },
    { label: "Docker Commands", href: "/blog/docker-commands", icon: Terminal },
    { label: "Maven & Gradle Guide", href: "/blog/maven-gradle-guide", icon: Terminal },
    { label: "Spring Boot Annotations", href: "/blog/spring-boot-annotations", icon: Terminal },
    { label: "IntelliJ Shortcuts", href: "/blog/intellij-shortcuts", icon: Terminal },
    { label: "Building REST APIs", href: "/blog/spring-boot-rest-api", icon: Terminal },
];

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-lg"
            >
                <motion.div
                    className="text-8xl md:text-9xl font-bold text-accent/20 mb-4 select-none"
                    animate={{ opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    404
                </motion.div>

                <h1 className="text-3xl font-bold text-white mb-3">
                    Page Not Found
                </h1>
                <p className="text-gray-400 mb-8">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved. Try one of these instead:
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-black font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                    >
                        <Home size={18} />
                        Go Home
                    </Link>
                    <Link
                        href="/blog"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors"
                    >
                        <BookOpen size={18} />
                        Browse Blog
                    </Link>
                </div>

                <div className="pt-8 border-t border-white/10">
                    <p className="text-gray-500 text-sm mb-4">Popular pages:</p>
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                        {suggestions.map((item, i) => (
                            <Link
                                key={i}
                                href={item.href}
                                className="inline-flex items-center gap-1.5 text-accent hover:underline text-sm"
                            >
                                <item.icon size={12} />
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </motion.div>
        </main>
    );
}
