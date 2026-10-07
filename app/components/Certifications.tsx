"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, X, CheckCircle2, Calendar } from "lucide-react";

interface Certificate {
    id: string;
    title: string;
    issuer: string;
    instructor?: string;
    date: string;
    badge: string;
    badgeColor: string;
    dotColor: string;
    image: string;
    skills: string[];
}

const certificates: Certificate[] = [
    {
        id: "webflux",
        title: "Spring WebFlux Masterclass: High-Performance Reactive APIs",
        issuer: "Udemy",
        instructor: "Vinoth Selvaraj",
        date: "May 2026",
        badge: "Udemy Verified",
        badgeColor: "bg-black/90 text-purple-300 border-purple-500/60 shadow-black/70",
        dotColor: "bg-purple-400",
        image: "/Spring_WebFlux_Masterclass_High-Performance_Reactive_APIs_Ramjee.jpg",
        skills: ["Spring WebFlux", "Reactive Programming", "Project Reactor", "Netty", "SSE & Streaming"],
    },
    {
        id: "reactive-java",
        title: "Mastering Java Reactive Programming [From Scratch]",
        issuer: "Udemy",
        instructor: "Vinoth Selvaraj",
        date: "Jan 2026",
        badge: "Udemy Verified",
        badgeColor: "bg-black/90 text-purple-300 border-purple-500/60 shadow-black/70",
        dotColor: "bg-purple-400",
        image: "/Mastering_Java_Reactive_Programming_Ramjee.jpg",
        skills: ["Project Reactor", "Mono & Flux", "Backpressure", "Schedulers", "Functional Streams"],
    },
    {
        id: "prog-java",
        title: "Programming In Java",
        issuer: "NPTEL",
        instructor: "Elite Certification (Ministry of Education, Govt. of India)",
        date: "2025",
        badge: "NPTEL Elite",
        badgeColor: "bg-black/90 text-amber-300 border-amber-500/60 shadow-black/70",
        dotColor: "bg-amber-400",
        image: "/Programming_In_Java_Ramjee.jpg",
        skills: ["Core Java", "Multithreading", "OOP", "Collections Framework", "Exception Handling"],
    },
    {
        id: "dbms",
        title: "Database Management System",
        issuer: "NPTEL",
        instructor: "Elite Certification (Ministry of Education, Govt. of India)",
        date: "2025",
        badge: "NPTEL Elite",
        badgeColor: "bg-black/90 text-amber-300 border-amber-500/60 shadow-black/70",
        dotColor: "bg-amber-400",
        image: "/Data_Base_Management_System_Ramjee.jpg",
        skills: ["Relational Model", "SQL", "Indexing", "Normalization", "Transactions & ACID"],
    },
    {
        id: "cn",
        title: "Computer Networks and Internet Protocol",
        issuer: "NPTEL",
        instructor: "Elite Certification (Ministry of Education, Govt. of India)",
        date: "2025",
        badge: "NPTEL Elite",
        badgeColor: "bg-black/90 text-amber-300 border-amber-500/60 shadow-black/70",
        dotColor: "bg-amber-400",
        image: "/Computer_Networks_and_Internet_Protocol_Ramjee.jpg",
        skills: ["TCP/IP", "OSI Model", "Routing Protocols", "Socket Programming", "Network Security"],
    },
];

export default function Certifications() {
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

    return (
        <section id="certifications" className="py-24 px-4 md:px-6 relative">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                        05 / CREDENTIALS
                    </span>
                    <div className="h-[1px] bg-white/10 flex-grow" />
                </div>
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                        Certifications & Academic Rigor
                    </h2>
                    <p className="text-zinc-400 text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
                        Industry-verified mastery in reactive microservices from Udemy alongside Ministry of Education (NPTEL) Elite credentials in databases, networking protocols, and Java engineering.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35, delay: index * 0.08 }}
                            viewport={{ once: true, margin: "-40px" }}
                            className="bg-[#0e1017]/75 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-amber-500/40 hover:shadow-[0_12px_40px_-15px_rgba(245,158,11,0.15)] transition-all duration-300 group flex flex-col justify-between overflow-hidden"
                        >
                            <div>
                                {/* Certificate Preview Image */}
                                <div
                                    onClick={() => setSelectedCert(cert)}
                                    className="relative aspect-[16/11] w-full bg-zinc-950 overflow-hidden cursor-pointer group/img border-b border-white/10"
                                >
                                    <Image
                                        src={cert.image}
                                        alt={cert.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover object-top opacity-90 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-300"
                                    />

                                    {/* Compact, High-Contrast Floating Badge */}
                                    <div className="absolute top-2.5 left-2.5 z-10 pointer-events-none">
                                        <span
                                            className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full border shadow-md backdrop-blur-md ${cert.badgeColor}`}
                                        >
                                            <span className={`w-1.5 h-1.5 rounded-full ${cert.dotColor} animate-pulse`} />
                                            {cert.badge}
                                        </span>
                                    </div>

                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 bg-black/60 backdrop-blur-[2px] transition-opacity duration-200 z-20">
                                        <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400 text-black text-xs font-semibold shadow-lg">
                                            <ExternalLink size={13} />
                                            Preview Certificate
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
                                        <span className="font-semibold text-zinc-300">{cert.issuer}</span>
                                        <span className="flex items-center gap-1.5 text-zinc-500 font-mono">
                                            <Calendar size={12} />
                                            {cert.date}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors leading-snug">
                                        {cert.title}
                                    </h3>

                                    {cert.instructor && (
                                        <p className="text-zinc-400 text-xs mb-4 flex items-start gap-1.5">
                                            <CheckCircle2 size={13} className="text-amber-400 shrink-0 mt-0.5" />
                                            <span>{cert.instructor}</span>
                                        </p>
                                    )}

                                    {/* Skills Pills */}
                                    <div className="flex flex-wrap gap-1.5 mt-3">
                                        {cert.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="text-[11px] font-mono text-zinc-300 bg-white/5 px-2 py-0.5 rounded border border-white/5 group-hover:border-amber-500/20 group-hover:text-amber-300/90 transition-colors"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Action Bar */}
                            <div className="p-6 pt-0">
                                <button
                                    onClick={() => setSelectedCert(cert)}
                                    className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-white/5 hover:bg-amber-400 hover:text-black text-zinc-300 text-xs font-semibold border border-white/10 hover:border-amber-400 transition-all duration-200"
                                >
                                    <Award size={14} />
                                    View Full Credential
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Certificate Lightbox Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 md:p-8"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-4xl w-full bg-[#0e1017] rounded-2xl border border-white/15 overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between p-4 md:p-6 border-b border-white/10 bg-white/[0.02]">
                                <div>
                                    <span className="text-xs font-mono text-amber-400 block">{selectedCert.issuer} — {selectedCert.date}</span>
                                    <h3 className="text-lg md:text-xl font-bold text-white">{selectedCert.title}</h3>
                                </div>
                                <div className="flex items-center gap-2">
                                    <a
                                        href={selectedCert.image}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                                        title="Open full image in new tab"
                                    >
                                        <ExternalLink size={18} />
                                    </a>
                                    <button
                                        onClick={() => setSelectedCert(null)}
                                        className="p-2 rounded-lg hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                                        title="Close"
                                    >
                                        <X size={18} />
                                    </button>
                                </div>
                            </div>

                            {/* Modal Image Body */}
                            <div className="relative flex-1 min-h-[300px] md:min-h-[500px] bg-black/60 p-4 flex items-center justify-center overflow-auto">
                                <div className="relative w-full h-[60vh] max-h-[600px]">
                                    <Image
                                        src={selectedCert.image}
                                        alt={selectedCert.title}
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div className="p-4 bg-[#090a0f] flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400 border-t border-white/10">
                                <span className="text-zinc-300">{selectedCert.instructor}</span>
                                <a
                                    href={selectedCert.image}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-400 text-black font-semibold hover:bg-amber-300 transition-colors shadow-[0_0_15px_rgba(245,158,11,0.25)]"
                                >
                                    Open Full Resolution
                                    <ExternalLink size={13} />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
