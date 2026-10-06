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
        <section id="certifications" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-4 mb-10">
                    <span className="text-3xl text-accent font-bold">05.</span>
                    <h2 className="text-3xl font-bold text-white">Certifications</h2>
                    <div className="h-[1px] bg-white/20 flex-grow" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="bg-zinc-900/30 backdrop-blur-md rounded-xl border border-white/5 hover:border-accent hover:shadow-[0_0_20px_rgba(250,204,21,0.15)] transition-all duration-300 group flex flex-col justify-between overflow-hidden"
                        >
                            <div>
                                {/* Certificate Preview Image */}
                                <div
                                    onClick={() => setSelectedCert(cert)}
                                    className="relative aspect-[16/11] w-full bg-zinc-950 overflow-hidden cursor-pointer group/img border-b border-white/5"
                                >
                                    <Image
                                        src={cert.image}
                                        alt={cert.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover object-top opacity-95 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-300"
                                    />

                                    {/* Compact, High-Contrast Floating Badge */}
                                    <div className="absolute top-2 left-2 z-10 pointer-events-none">
                                        <span
                                            className={`inline-flex items-center gap-1 text-[10px] font-mono font-medium px-2 py-0.5 rounded-full border shadow-md backdrop-blur-md ${cert.badgeColor}`}
                                        >
                                            <span className={`w-1.5 h-1.5 rounded-full ${cert.dotColor} animate-pulse`} />
                                            {cert.badge}
                                        </span>
                                    </div>

                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 bg-black/60 backdrop-blur-[2px] transition-opacity duration-200 z-20">
                                        <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-black text-xs font-semibold shadow-lg">
                                            <ExternalLink size={14} />
                                            Preview Certificate
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                                        <span className="font-semibold text-gray-300">{cert.issuer}</span>
                                        <span className="flex items-center gap-1.5 text-gray-500 font-mono">
                                            <Calendar size={12} />
                                            {cert.date}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors leading-snug">
                                        {cert.title}
                                    </h3>

                                    {cert.instructor && (
                                        <p className="text-gray-400 text-xs mb-4 flex items-start gap-1.5">
                                            <CheckCircle2 size={13} className="text-accent shrink-0 mt-0.5" />
                                            <span>{cert.instructor}</span>
                                        </p>
                                    )}

                                    {/* Skills Pills */}
                                    <div className="flex flex-wrap gap-1.5 mt-3">
                                        {cert.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="text-[11px] font-mono text-accent/90 bg-accent/5 px-2 py-0.5 rounded border border-accent/10"
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
                                    className="w-full mt-2 flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-white/5 hover:bg-accent hover:text-black text-gray-300 text-xs font-semibold border border-white/10 hover:border-accent transition-all duration-200"
                                >
                                    <Award size={14} />
                                    View Certificate
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
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-8"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-4xl w-full bg-zinc-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between p-4 md:p-6 border-b border-white/10 bg-zinc-900/80">
                                <div>
                                    <span className="text-xs font-mono text-accent block">{selectedCert.issuer} — {selectedCert.date}</span>
                                    <h3 className="text-lg md:text-xl font-bold text-white">{selectedCert.title}</h3>
                                </div>
                                <div className="flex items-center gap-2">
                                    <a
                                        href={selectedCert.image}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                                        title="Open full image in new tab"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                    <button
                                        onClick={() => setSelectedCert(null)}
                                        className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                                        title="Close"
                                    >
                                        <X size={20} />
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
                            <div className="p-4 bg-zinc-950 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-400 border-t border-white/10">
                                <span className="text-gray-300">{selectedCert.instructor}</span>
                                <a
                                    href={selectedCert.image}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent text-black font-semibold hover:bg-yellow-400 transition-colors"
                                >
                                    Open Full Size Image
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
