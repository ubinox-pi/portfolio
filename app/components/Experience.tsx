"use client";

import { motion } from "framer-motion";
import { Terminal as TerminalIcon, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-4 md:px-6 relative">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                        03 / EXPERIENCE
                    </span>
                    <div className="h-[1px] bg-white/10 flex-grow" />
                </div>
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                        Current Status & Trajectory
                    </h2>
                    <p className="text-zinc-400 text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
                        A candid snapshot of my engineering journey, hunger to contribute, and readiness to adapt to your production stack.
                    </p>
                </div>

                {/* Creative Interactive Terminal */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="w-full bg-[#0e1017]/85 backdrop-blur-2xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl relative"
                >
                    {/* Terminal Window Header (Non-Mac) */}
                    <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/[0.03]">
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/25 text-amber-300 font-mono text-xs font-medium">
                                <TerminalIcon size={13} className="text-amber-400" />
                                <span>career_status.sh</span>
                            </div>
                        </div>
                        <span className="text-[10px] font-mono text-zinc-400 bg-white/5 px-2.5 py-0.5 rounded border border-white/5">
                            bash 5.2
                        </span>
                    </div>

                    {/* Terminal Body */}
                    <div className="p-6 md:p-8 font-mono text-xs sm:text-sm leading-relaxed space-y-6">
                        {/* Command 1: Check Experience */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-zinc-200">
                                <span className="text-amber-400 font-bold">➜</span>
                                <span className="text-sky-400">~</span>
                                <span className="text-white font-medium">check-experience --verbose</span>
                            </div>

                            <div className="pl-6 text-zinc-400 space-y-1.5 border-l-2 border-white/10 ml-1.5">
                                <div className="flex items-center gap-2">
                                    <span>Scanning corporate history...</span>
                                    <span className="text-amber-400 font-semibold bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                                        Not Found (404)
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>Scanning skill repository...</span>
                                    <span className="text-emerald-400 font-semibold bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">
                                        Found (High Capacity)
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>Analyzing learning trajectory...</span>
                                    <span className="text-amber-300 font-semibold bg-amber-300/10 px-2 py-0.5 rounded border border-amber-300/20">
                                        Exponential Growth
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Command 2: Cat Current Status */}
                        <div className="space-y-2 pt-2">
                            <div className="flex items-center gap-2 text-zinc-200">
                                <span className="text-amber-400 font-bold">➜</span>
                                <span className="text-sky-400">~</span>
                                <span className="text-white font-medium">cat current_status.txt</span>
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white/[0.03] p-5 md:p-6 rounded-xl border border-white/10 border-l-4 border-l-amber-400 text-zinc-300 space-y-3"
                            >
                                <p className="leading-relaxed">
                                    "I am currently in the <span className="text-white font-bold bg-white/10 px-1.5 py-0.5 rounded">Continuous Learning Phase</span>.
                                    While I don't have a 'Previous Corporate Experience' tag yet, I have a repository full of code and a
                                    calendar full of commitment."
                                </p>
                                <p className="leading-relaxed text-zinc-400">
                                    I am <span className="text-amber-400 font-bold">actively ready</span> to integrate into your engineering team,
                                    adapt to your stack, and deploy my skills to solve real-world backend challenges.
                                </p>
                            </motion.div>
                        </div>

                        {/* Command 3: Awaiting Opportunity & Cursor */}
                        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
                            <div className="flex items-center gap-2 text-zinc-200">
                                <span className="text-amber-400 font-bold">➜</span>
                                <span className="text-sky-400">~</span>
                                <span className="text-white font-semibold">awaiting_opportunity</span>
                                <motion.span
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ repeat: Infinity, duration: 0.8 }}
                                    className="w-2.5 h-4 bg-amber-400 inline-block align-middle"
                                />
                            </div>

                            <Link
                                href="#contact"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold text-xs transition-all shadow-md shadow-amber-500/20 hover:scale-[1.02]"
                            >
                                Let's Talk <ArrowRight size={13} />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
