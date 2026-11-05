"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { Reveal, EASE } from "./ui/Reveal";

interface Certificate {
    id: string;
    title: string;
    issuer: string;
    instructor?: string;
    date: string;
    badge: string;
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
        image: "/Computer_Networks_and_Internet_Protocol_Ramjee.jpg",
        skills: ["TCP/IP", "OSI Model", "Routing Protocols", "Socket Programming", "Network Security"],
    },
];

export default function Certifications() {
    const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

    return (
        <section id="certifications" className="relative px-4 py-28 md:px-6 md:py-36">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    index="05"
                    label="Credentials"
                    title={[
                        "Verified knowledge,",
                        <span key="l2" className="serif-italic text-muted">not just GitHub stars.</span>,
                    ]}
                    intro="Industry-verified mastery in reactive microservices from Udemy alongside Ministry of Education (NPTEL) Elite credentials in databases, networking and Java."
                />

                {/* Cards Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {certificates.map((cert, index) => (
                        <Reveal key={cert.id} delay={index * 0.07} y={20}>
                            <button
                                onClick={() => setSelectedCert(cert)}
                                className="group flex w-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/40 text-left transition-all duration-500 hover:border-accent/30 hover:shadow-[0_20px_60px_-20px_rgba(242,134,46,0.12)]"
                            >
                                {/* Image */}
                                <div className="relative aspect-[16/11] w-full overflow-hidden bg-surface-2">
                                    <Image
                                        src={cert.image}
                                        alt={cert.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover object-top opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                                    />
                                    {/* Badge */}
                                    <span className="absolute left-3 top-3 rounded-full border border-line-strong bg-background/80 px-2.5 py-1 font-mono text-[10px] font-medium text-foreground backdrop-blur-md">
                                        {cert.badge}
                                    </span>
                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                                        <span className="rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background">
                                            View credential
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-1 flex-col p-5">
                                    <div className="mb-2 flex items-center justify-between">
                                        <span className="text-xs font-medium text-muted">{cert.issuer}</span>
                                        <span className="font-mono text-[10px] text-subtle">{cert.date}</span>
                                    </div>
                                    <h3 className="text-[15px] font-medium leading-snug text-foreground transition-colors duration-300 group-hover:text-accent">
                                        {cert.title}
                                    </h3>
                                    {/* Skill pills */}
                                    <div className="mt-4 flex flex-wrap gap-1.5">
                                        {cert.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="rounded-full border border-line px-2 py-0.5 font-mono text-[10px] text-subtle transition-colors duration-300 group-hover:border-accent/20 group-hover:text-muted"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </button>
                        </Reveal>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
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
                            initial={{ scale: 0.94, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.94, opacity: 0 }}
                            transition={{ ease: EASE }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-line-strong bg-background shadow-2xl"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between border-b border-line px-6 py-4">
                                <div>
                                    <p className="font-mono text-[11px] text-accent">
                                        {selectedCert.issuer} — {selectedCert.date}
                                    </p>
                                    <h3 className="text-lg font-medium text-foreground">{selectedCert.title}</h3>
                                </div>
                                <div className="flex items-center gap-2">
                                    <a
                                        href={selectedCert.image}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition-colors hover:text-foreground"
                                        title="Open full image"
                                    >
                                        <ExternalLink size={16} />
                                    </a>
                                    <button
                                        onClick={() => setSelectedCert(null)}
                                        className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition-colors hover:text-foreground"
                                        title="Close"
                                    >
                                        <X size={16} />
                                    </button>
                                </div>
                            </div>
                            {/* Image */}
                            <div className="flex-1 overflow-auto bg-surface p-4">
                                <div className="relative mx-auto h-[60vh] max-h-[600px] w-full">
                                    <Image
                                        src={selectedCert.image}
                                        alt={selectedCert.title}
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                            </div>
                            {/* Footer */}
                            <div className="flex items-center justify-between border-t border-line px-6 py-3 text-xs text-muted">
                                <span>{selectedCert.instructor}</span>
                                <a
                                    href={selectedCert.image}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background transition-colors hover:bg-accent"
                                >
                                    Open full resolution <ExternalLink size={12} />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
