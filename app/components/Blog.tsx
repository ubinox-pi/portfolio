"use client";

import { motion } from "framer-motion";
import { BookOpen, Clock, ArrowRight } from "lucide-react";

export default function Blog() {
    return (
        <section id="blog" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-4 mb-10">
                    <span className="text-3xl text-accent font-bold">05.</span>
                    <h2 className="text-3xl font-bold text-white">Blog</h2>
                    <div className="h-[1px] bg-white/20 flex-grow" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-zinc-900/30 backdrop-blur-md p-12 rounded-2xl border border-white/5 text-center"
                >
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-accent/10 rounded-full">
                            <BookOpen size={48} className="text-accent" />
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">Coming Soon</h3>
                    <p className="text-gray-400 max-w-md mx-auto mb-6">
                        I'm working on some exciting technical articles about Java, Spring Boot,
                        Microservices, and backend development best practices.
                    </p>

                    <div className="flex items-center justify-center gap-2 text-accent">
                        <Clock size={16} />
                        <span className="text-sm font-mono">Stay tuned for updates</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
