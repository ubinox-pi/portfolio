"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search, BookOpen } from "lucide-react";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-md"
            >
                {/* 404 Number */}
                <div className="text-9xl font-bold text-accent/20 mb-4">404</div>

                {/* Message */}
                <h1 className="text-3xl font-bold text-white mb-4">
                    Page Not Found
                </h1>
                <p className="text-gray-400 mb-8">
                    Oops! The page you're looking for doesn't exist or has been moved.
                </p>

                {/* Navigation Options */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-black font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                    >
                        <Home size={18} />
                        Go Home
                    </Link>
                    <Link
                        href="/#blog"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors"
                    >
                        <BookOpen size={18} />
                        Read Blog
                    </Link>
                </div>

                {/* Popular Links */}
                <div className="mt-12 pt-8 border-t border-white/10">
                    <p className="text-gray-500 text-sm mb-4">Popular pages:</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        <Link href="/resume" className="text-accent hover:underline text-sm">Resume</Link>
                        <span className="text-gray-600">•</span>
                        <Link href="/blog/git-github-guide" className="text-accent hover:underline text-sm">Git Guide</Link>
                        <span className="text-gray-600">•</span>
                        <Link href="/blog/docker-commands" className="text-accent hover:underline text-sm">Docker</Link>
                        <span className="text-gray-600">•</span>
                        <Link href="/blog/maven-gradle-guide" className="text-accent hover:underline text-sm">Maven & Gradle</Link>
                    </div>
                </div>
            </motion.div>
        </main>
    );
}
