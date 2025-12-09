"use client";

import { motion } from "framer-motion";
import { Briefcase, ChevronRight, Terminal as TerminalIcon } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-6 relative">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-16">
                    <span className="text-3xl text-accent font-bold">03.</span>
                    <h2 className="text-3xl font-bold text-white">Experience</h2>
                    <div className="h-[1px] bg-white/20 flex-grow" />
                </div>

                {/* Creative "No Experience" Terminal */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full bg-zinc-900/80 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden shadow-2xl relative"
                >
                    {/* Terminal Header */}
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                        <TerminalIcon size={16} className="text-gray-400" />
                        <span className="text-xs font-mono text-gray-400">career_status.sh</span>
                    </div>

                    {/* Terminal Content */}
                    <div className="p-8 font-mono text-sm md:text-base">
                        <div className="space-y-4">
                            {/* Command 1 */}
                            <div className="flex gap-2">
                                <span className="text-accent">➜</span>
                                <span className="text-blue-400">~</span>
                                <span className="text-white">check-experience --verbose</span>
                            </div>

                            <div className="pl-6 text-gray-400 space-y-1 border-l border-white/10 ml-1">
                                <div>Scanning corporate history... <span className="text-red-400">Not Found (404)</span></div>
                                <div>Scanning skill repository... <span className="text-green-400">Found (High Capacity)</span></div>
                                <div>Analyzing learning trajectory... <span className="text-yellow-400">Exponential Growth</span></div>
                            </div>

                            {/* Command 2 */}
                            <div className="flex gap-2 pt-2">
                                <span className="text-accent">➜</span>
                                <span className="text-blue-400">~</span>
                                <span className="text-white">cat current_status.txt</span>
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="bg-white/5 p-6 rounded-lg border-l-4 border-accent"
                            >
                                <p className="text-gray-300 leading-relaxed">
                                    "I am currently in the <span className="text-white font-bold">Continuous Learning Phase</span>.
                                    While I don't have a 'Previous Experience' tag yet, I have a repository full of code and a
                                    calendar full of commitment."
                                </p>
                                <p className="text-gray-300 mt-4">
                                    I am <span className="text-accent font-bold">actively ready</span> to integrate into your expertise,
                                    adapt to your stack, and deploy my skills to solve real-world problems.
                                </p>
                            </motion.div>

                            {/* Command 3 - Blinking Cursor */}
                            <div className="flex gap-2 pt-2 items-center">
                                <span className="text-accent">➜</span>
                                <span className="text-blue-400">~</span>
                                <span className="text-white">awaiting_opportunity</span>
                                <motion.div
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ repeat: Infinity, duration: 0.8 }}
                                    className="w-2 h-5 bg-accent"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
