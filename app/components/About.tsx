"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Layers, Server, Database, Code2 } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 px-4 md:px-6 relative">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="mb-12">
                    <span className="text-xs font-mono font-semibold text-amber-400 tracking-wider uppercase bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                        01 / About Me
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 tracking-tight">
                        Engineering backends with precision & durability.
                    </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Left: Bio & Core Pillars */}
                    <div className="lg:col-span-8 space-y-6 text-zinc-300 leading-relaxed text-base">
                        <p>
                            I'm <span className="text-white font-semibold">Ramjee Prasad</span>, a Computer Science undergraduate (2023–2027) based in Jamshedpur, India, with a focused passion for <span className="text-amber-300 font-medium">backend infrastructure</span> and <span className="text-amber-300 font-medium">distributed systems</span>.
                        </p>
                        <p>
                            My foundation centers on the modern <span className="text-zinc-100 font-semibold">Java & Spring ecosystem</span> — crafting robust microservices, non-blocking APIs with <span className="text-white">Spring WebFlux</span>, and event-driven data pipelines with <span className="text-white">Apache Kafka</span>. I believe great backend engineering balances domain purity with practical operational resilience.
                        </p>
                        <p>
                            Beyond enterprise web services, I enjoy building complex network software from scratch — including decentralized peer-to-peer file transfer protocols with custom cryptographic channels and onion routing relays.
                        </p>

                        {/* Engineering Focus Pillars */}
                        <div className="grid sm:grid-cols-3 gap-3.5 pt-4">
                            <div className="p-4 rounded-xl bg-[#0e1017]/70 backdrop-blur-md border border-white/5 hover:border-amber-500/30 transition-all duration-300">
                                <Server className="text-amber-400 mb-2" size={20} />
                                <h3 className="font-semibold text-white text-sm">Reactive & Async</h3>
                                <p className="text-xs text-zinc-400 mt-1">Spring WebFlux, Netty event loops, and non-blocking backpressure.</p>
                            </div>

                            <div className="p-4 rounded-xl bg-[#0e1017]/70 backdrop-blur-md border border-white/5 hover:border-amber-500/30 transition-all duration-300">
                                <Layers className="text-amber-400 mb-2" size={20} />
                                <h3 className="font-semibold text-white text-sm">Microservices</h3>
                                <p className="text-xs text-zinc-400 mt-1">Gateway routing, service discovery, JWT auth, and Kafka event streaming.</p>
                            </div>

                            <div className="p-4 rounded-xl bg-[#0e1017]/70 backdrop-blur-md border border-white/5 hover:border-amber-500/30 transition-all duration-300">
                                <Database className="text-amber-400 mb-2" size={20} />
                                <h3 className="font-semibold text-white text-sm">Data Architecture</h3>
                                <p className="text-xs text-zinc-400 mt-1">PostgreSQL relational models, Redis caching, and Neo4j graph databases.</p>
                            </div>
                        </div>

                        {/* Education Timeline */}
                        <div className="mt-8 pt-6 border-t border-white/5">
                            <div className="flex items-center gap-2 text-sm font-semibold text-white mb-4">
                                <GraduationCap size={18} className="text-amber-400" />
                                <span>Academic Background</span>
                            </div>

                            <div className="space-y-3">
                                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                    <div>
                                        <div className="font-semibold text-white text-sm">Bachelor of Technology (B.Tech) in Computer Science</div>
                                        <div className="text-xs text-zinc-400">Silicon Institute of Technology, Sambalpur (BPUT)</div>
                                    </div>
                                    <div className="text-xs font-mono text-amber-400 sm:text-right">
                                        <div>2023 – 2027 (Expected)</div>
                                        <div className="text-zinc-500">CGPA: 7.46 / 10.0</div>
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                    <div>
                                        <div className="font-semibold text-white text-sm">Higher Secondary (XII) — Science</div>
                                        <div className="text-xs text-zinc-400">Jamshedpur Co-operative College (JAC Board)</div>
                                    </div>
                                    <div className="text-xs font-mono text-zinc-400 sm:text-right">
                                        2021 – 2023
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                    <div>
                                        <div className="font-semibold text-white text-sm">Secondary School (X)</div>
                                        <div className="text-xs text-zinc-400">Gayatri Shiksha Niketan High School (CBSE)</div>
                                    </div>
                                    <div className="text-xs font-mono text-zinc-400 sm:text-right">
                                        2009 – 2021
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Portrait Photo Card */}
                    <div className="lg:col-span-4">
                        <div className="relative rounded-2xl overflow-hidden p-2 bg-[#0e1017]/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/80 group">
                            <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-zinc-950">
                                <Image
                                    src="/ramjee_passport.png"
                                    alt="Ramjee Prasad - Backend Developer"
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 360px"
                                    className="object-cover object-top filter grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="text-white font-semibold text-base">Ramjee Prasad</div>
                                    <div className="text-xs text-amber-400 font-mono font-medium whitespace-nowrap mt-0.5">
                                        Backend Developer • Java &amp; Spring
                                    </div>
                                </div>
                            </div>

                            <div className="p-3 text-center">
                                <span className="text-[11px] font-mono text-zinc-400">
                                    Jamshedpur, Jharkhand • Open to Relocation
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
