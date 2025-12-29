"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
    const [displayText, setDisplayText] = useState("");
    const fullText = "Hello, I'm Ramjee Prasad!";

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setDisplayText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 50);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20">
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-20 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-64 h-64 bg-spring-green/20 rounded-full blur-3xl" />
            </div>

            <div className="z-10 w-full max-w-4xl px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full bg-zinc-900/40 backdrop-blur-xl rounded-2xl border border-white/5 shadow-2xl p-4 md:p-10 relative overflow-hidden"
                >
                    <div className="absolute -top-20 -right-20 w-60 h-60 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
                    <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                        <div className="flex space-x-2">
                            <span className="text-xs text-gray-400">Main.java</span>
                        </div>
                        <div className="text-xs text-gray-600">Ramjee Prasad - Portfolio</div>
                    </div>

                    <div className="font-mono text-sm md:text-base space-y-2">
                        <div className="text-pink-400">public class <span className="text-yellow-300">Portfolio</span> <span className="text-white">{`{`}</span></div>

                        <div className="pl-6 md:pl-8 text-pink-400">public static void <span className="text-blue-400">main</span><span className="text-white">(</span>String[] args<span className="text-white">) {'{'}</span></div>

                        <div className="pl-12 md:pl-16 space-y-4 py-4">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <span className="text-gray-400">// Career Objective</span>
                                <div className="text-green-400">
                                    System.out.println(<span className="text-orange-300">"{displayText}<span className="animate-pulse">|</span>"</span>);
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <span className="text-gray-400">// Role</span>
                                <div className="text-white">Role developer = <span className="text-pink-400">new</span> Role(<span className="text-orange-300">"Backend Developer"</span>);</div>
                                <div className="text-white text-xs md:text-sm">developer.specialties = [<span className="text-orange-300">"Spring Boot"</span>, <span className="text-orange-300">"Microservices"</span>, <span className="text-orange-300">"Docker"</span>, <span className="text-orange-300">"Spring WebFlux"</span>];</div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <span className="text-gray-400">// TODO: Build innovative solutions</span>
                                <div className="text-blue-400">developer.buildAmazingThings();</div>
                            </motion.div>
                        </div>

                        <div className="pl-6 md:pl-8 text-white">{'}'}</div>
                        <div className="text-white">{'}'}</div>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center gap-2 bg-accent text-black px-6 py-3 rounded-md font-bold hover:bg-yellow-400 transition-colors"
                        >
                            View Projects <ArrowRight size={18} />
                        </motion.a>
                        <motion.a
                            href="/resume"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center gap-2 border border-accent text-accent px-6 py-3 rounded-md font-bold hover:bg-accent/10 transition-colors"
                        >
                            View Resume <ExternalLink size={18} />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
