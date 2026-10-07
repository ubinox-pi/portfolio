"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Github, Terminal, CheckCircle2, Cpu, Activity, GitBranch, Check, FileCode } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    const profileCodeLines = [
        { indent: 0, content: <span><span className="text-sky-400">package</span> <span className="text-zinc-300">com.ramjeeprasad</span>;</span> },
        { indent: 0, content: <span>&nbsp;</span> },
        { indent: 0, content: <span><span className="text-sky-400">import</span> <span className="text-zinc-300">java.util.Set</span>;</span> },
        { indent: 0, content: <span>&nbsp;</span> },
        { indent: 0, content: <span className="text-zinc-500 italic">/**</span> },
        { indent: 0, content: <span className="text-zinc-500 italic">&nbsp;* Backend Developer • Distributed Systems</span> },
        { indent: 0, content: <span className="text-zinc-500 italic">&nbsp;*/</span> },
        {
            indent: 0,
            content: (
                <span>
                    <span className="text-sky-400">public record</span>{" "}
                    <span className="text-amber-300 font-semibold">RamjeePrasad</span>(
                </span>
            ),
        },
        {
            indent: 1,
            content: (
                <span>
                    <span className="text-sky-300">String</span> role,
                </span>
            ),
        },
        {
            indent: 1,
            content: (
                <span>
                    <span className="text-sky-300">String</span> education,
                </span>
            ),
        },
        {
            indent: 1,
            content: (
                <span>
                    <span className="text-sky-300">Set</span>&lt;<span className="text-sky-300">String</span>&gt; coreStack,
                </span>
            ),
        },
        {
            indent: 1,
            content: (
                <span>
                    <span className="text-sky-300">Set</span>&lt;<span className="text-sky-300">String</span>&gt; distributed,
                </span>
            ),
        },
        {
            indent: 1,
            content: (
                <span>
                    <span className="text-sky-400">boolean</span> availableForHire
                </span>
            ),
        },
        {
            indent: 0,
            content: <span>) &#123;</span>,
        },
        {
            indent: 1,
            content: (
                <span>
                    <span className="text-sky-400">public static</span>{" "}
                    <span className="text-amber-300">RamjeePrasad</span> <span className="text-amber-200">overview</span>() &#123;
                </span>
            ),
        },
        {
            indent: 2,
            content: (
                <span>
                    <span className="text-sky-400">return new</span>{" "}
                    <span className="text-amber-300">RamjeePrasad</span>(
                </span>
            ),
        },
        {
            indent: 3,
            content: <span className="text-emerald-300">&quot;Backend Developer&quot;</span>,
        },
        {
            indent: 3,
            content: <span className="text-emerald-300">&quot;B.Tech Computer Science&quot;</span>,
        },
        {
            indent: 3,
            content: (
                <span>
                    <span className="text-sky-300">Set</span>.<span className="text-amber-200">of</span>(
                    <span className="text-emerald-300">&quot;Java 25&quot;</span>,{" "}
                    <span className="text-emerald-300">&quot;Spring Boot&quot;</span>,{" "}
                    <span className="text-emerald-300">&quot;WebFlux&quot;</span>),
                </span>
            ),
        },
        {
            indent: 3,
            content: (
                <span>
                    <span className="text-sky-300">Set</span>.<span className="text-amber-200">of</span>(
                    <span className="text-emerald-300">&quot;Kafka&quot;</span>,{" "}
                    <span className="text-emerald-300">&quot;PostgreSQL&quot;</span>,{" "}
                    <span className="text-emerald-300">&quot;Redis&quot;</span>,{" "}
                    <span className="text-emerald-300">&quot;Docker&quot;</span>),
                </span>
            ),
        },
        {
            indent: 3,
            content: (
                <span>
                    <span className="text-amber-300 font-semibold">true</span>{" "}
                    <span className="text-zinc-500 italic">// Available for Roles</span>
                </span>
            ),
        },
        {
            indent: 2,
            content: <span>);</span>,
        },
        {
            indent: 1,
            content: <span>&#125;</span>,
        },
        {
            indent: 0,
            content: <span>&#125;</span>,
        },
    ];

    return (
        <section className="relative min-h-[92vh] flex items-center justify-center pt-28 md:pt-32 pb-16 px-4 md:px-6 overflow-hidden">
            <div className="w-full max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
                    {/* Left Column: Headline & Intro */}
                    <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                        {/* Status Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium backdrop-blur-md"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Available for Backend Engineering Roles
                        </motion.div>

                        {/* Main Editorial Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]"
                        >
                            Architecting resilient{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-400">
                                distributed systems
                            </span>{" "}
                            & high-throughput backends.
                        </motion.h1>

                        {/* Subheadline Narrative */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
                        >
                            Hi, I'm <span className="text-zinc-100 font-semibold">Ramjee Prasad</span>. I engineer high-concurrency systems using{" "}
                            <span className="text-amber-400 font-medium">Java 25</span>,{" "}
                            <span className="text-amber-400 font-medium">Spring Boot 4</span>,{" "}
                            <span className="text-amber-400 font-medium">Spring WebFlux</span>, and{" "}
                            <span className="text-amber-400 font-medium">Kafka</span>. Focused on clean domain architectures, P2P networking, and cloud-native containerization.
                        </motion.p>

                        {/* Action Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2"
                        >
                            <Link
                                href="#projects"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                            >
                                Explore Projects
                                <ArrowRight size={16} />
                            </Link>
                            <Link
                                href="/resume"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-zinc-200 hover:text-white font-medium text-sm border border-white/10 hover:border-white/20 backdrop-blur-md transition-all duration-200"
                            >
                                <FileText size={16} />
                                View Resume
                            </Link>
                            <a
                                href="https://github.com/ubinox-pi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 p-3 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-200"
                                aria-label="Visit GitHub Profile"
                            >
                                <Github size={18} />
                            </a>
                        </motion.div>

                        {/* Trust & Proof Strip */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-zinc-400"
                        >
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={14} className="text-amber-400" />
                                <span>10+ Microservices Architected</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={14} className="text-amber-400" />
                                <span>5 Verified Certifications</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={14} className="text-amber-400" />
                                <span>Event-Driven with Kafka</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Sleek Developer Code Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="lg:col-span-5"
                    >
                        <div className="relative rounded-2xl bg-[#0c0d12]/95 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/80 overflow-hidden ring-1 ring-white/5">
                            {/* Window Header */}
                            <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-white/[0.02]">
                                <div className="flex items-center gap-2.5">
                                    <div className="p-1 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400">
                                        <FileCode size={13} />
                                    </div>
                                    <span className="font-mono text-xs text-zinc-200 font-medium">
                                        ramjeeprasad.java
                                    </span>
                                    <span className="text-[11px] font-mono text-zinc-500 hidden sm:inline">
                                        • Java 25 Record
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[10.5px] whitespace-nowrap">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                        Available for Roles
                                    </span>
                                </div>
                            </div>

                            {/* Code Editor Body */}
                            <div className="p-4 sm:p-5 font-mono text-xs leading-5 overflow-x-auto text-zinc-300 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                                {profileCodeLines.map((line, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center group hover:bg-white/[0.02] -mx-2 px-2 py-0.5 rounded transition-colors"
                                    >
                                        <span className="w-6 text-right text-zinc-600 select-none mr-3 shrink-0 text-[11px] font-mono">
                                            {String(idx + 1).padStart(2, "0")}
                                        </span>
                                        <div
                                            className={`whitespace-nowrap ${
                                                line.indent === 1
                                                    ? "pl-4"
                                                    : line.indent === 2
                                                    ? "pl-8"
                                                    : line.indent === 3
                                                    ? "pl-12"
                                                    : ""
                                            }`}
                                        >
                                            {line.content}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Minimal Clean Card Footer */}
                            <div className="px-4 py-2 border-t border-white/5 bg-white/[0.01] flex items-center justify-between text-[11px] font-mono text-zinc-500 select-none">
                                <span className="text-zinc-400">Production-Grade Java Ecosystem</span>
                                <span>UTF-8</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
