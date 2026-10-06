"use client";

import { useState, useRef, useEffect } from "react";
import { Download, Mail, Phone, MapPin, Linkedin, Github, X, Code, Printer } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
    const [showInstructions, setShowInstructions] = useState(false);
    const resumeRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, []);

    // Lock body scroll and focus modal when it opens
    useEffect(() => {
        if (showInstructions) {
            document.body.style.overflow = 'hidden';
            modalRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [showInstructions]);

    const handleDownload = () => {
        setShowInstructions(true);
    };

    const startPrint = () => {
        setShowInstructions(false);
        setTimeout(() => window.print(), 100);
    };

    return (
        <main className="min-h-screen bg-[#0a0a0a] py-8 px-4 md:px-8 print:bg-white print:p-0">
            {/* Back to Portfolio Link */}
            <div className="max-w-4xl mx-auto mb-6 print:hidden">
                <Link
                    href="/"
                    className="text-accent hover:text-yellow-300 transition-colors text-sm font-mono"
                >
                    ← Back to Portfolio
                </Link>
            </div>

            {/* Resume Container */}
            <div
                ref={resumeRef}
                className="max-w-4xl mx-auto bg-white text-gray-900 shadow-2xl print:shadow-none print:max-w-none"
                id="resume-content"
            >
                {/* Header */}
                <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 md:px-8 py-6 md:py-10 print:py-8">
                    <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-1 md:mb-2">
                        RAMJEE PRASAD
                    </h1>
                    <p className="text-base md:text-xl text-gray-300 font-medium mb-4 md:mb-6">
                        Backend Developer | Java & Spring Boot
                    </p>

                    <div className="grid grid-cols-2 md:flex md:flex-wrap gap-2 md:gap-6 text-xs md:text-sm text-gray-300">
                        <a href="mailto:ramjeeprasad.dev@gmail.com" className="flex items-center gap-1.5 md:gap-2 hover:text-white transition-colors">
                            <Mail size={14} className="flex-shrink-0" />
                            <span className="truncate">ramjeeprasad.dev@gmail.com</span>
                        </a>
                        <a href="tel:+919801112671" className="flex items-center gap-1.5 md:gap-2 hover:text-white transition-colors">
                            <Phone size={14} className="flex-shrink-0" />
                            <span>+91 9801112671</span>
                        </a>
                        <span className="flex items-center gap-1.5 md:gap-2">
                            <MapPin size={14} className="flex-shrink-0" />
                            <span>Jamshedpur</span>
                        </span>
                        <a href="https://github.com/ubinox-pi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 md:gap-2 hover:text-white transition-colors">
                            <Github size={14} className="flex-shrink-0" />
                            <span>github.com/ubinox-pi</span>
                        </a>
                        <a href="https://www.linkedin.com/in/ramjee-prasad-6b26b4349" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 md:gap-2 hover:text-white transition-colors col-span-2 md:col-span-1">
                            <Linkedin size={14} className="flex-shrink-0" />
                            <span>linkedin.com/in/ramjeeprasad</span>
                        </a>
                    </div>
                </header>

                <div className="px-4 md:px-8 py-5 md:py-8 space-y-5 md:space-y-8">

                    {/* Professional Summary */}
                    <section>
                        <h2 className="text-base md:text-lg font-bold text-gray-900 border-b-2 border-gray-900 pb-1 mb-3 md:mb-4 uppercase tracking-wide">
                            Professional Summary
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-xs md:text-sm">
                            Results-driven Backend Developer specializing in Java 21 and Spring Boot 3.x, with a strong foundation in designing scalable microservices architectures. Skilled in developing reactive APIs using Spring WebFlux and implementing secure, role-based systems with Spring Security and JWT. Demonstrated ability to independently architect multi-module backend systems with 10+ services, containerized deployments using Docker Compose, and real-time communication systems using WebSocket and WebRTC. Strong communicator with a self-driven approach to distributed systems, clean architecture, and emerging backend technologies.
                        </p>
                    </section>

                    {/* Technical Skills */}
                    <section>
                        <h2 className="text-base md:text-lg font-bold text-gray-900 border-b-2 border-gray-900 pb-1 mb-3 md:mb-4 uppercase tracking-wide">
                            Technical Skills
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm">
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-1">Programming Languages</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Java (21), Python, C++
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-1">Frameworks</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Spring Boot 3.x, Spring WebFlux, Spring Security, Spring Data JPA, Hibernate
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-1">Databases & Caching</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    PostgreSQL, MySQL, MongoDB, Redis
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-1">API & Messaging</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    RESTful APIs, GraphQL, Apache Kafka, RabbitMQ
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-1">DevOps & Tools</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Docker, Git, Jenkins, Maven, Gradle, Postman
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-1">Testing & Cloud</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    JUnit 5, Mockito, AWS (EC2, S3), Google Cloud (GCP)
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-1">Operating Systems</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Linux (Ubuntu, Red Hat), Windows
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Projects */}
                    <section>
                        <h2 className="text-base md:text-lg font-bold text-gray-900 border-b-2 border-gray-900 pb-1 mb-3 md:mb-4 uppercase tracking-wide">
                            Projects
                        </h2>

                        <div className="space-y-3 md:space-y-4">
                            {/* Project 1 */}
                            <div>
                                <div className="flex flex-wrap items-baseline justify-between gap-1 md:gap-2 mb-1">
                                    <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                                        Neptune Bank — Microservices Banking System{' '}
                                        <a href="https://github.com/ubinox-pi/Banking-System" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-normal text-xs">[GitHub]</a>
                                    </h3>
                                    <span className="text-[10px] md:text-xs text-gray-600">Java 21, Spring Boot 3.5, Spring Cloud Gateway, Docker Compose</span>
                                </div>
                                <ul className="list-disc list-inside text-gray-700 text-xs md:text-sm space-y-0.5 ml-1">
                                    <li>Architected a full-scale modular banking system with 10+ independently deployable microservices including auth, user, account, transaction, card, loan, OTP, and employee services</li>
                                    <li>Built a reactive API Gateway using Spring WebFlux and Spring Cloud Gateway for non-blocking request routing and resilience</li>
                                    <li>Secured all microservices using Spring Security with JWT-based authentication and role-based access control (RBAC)</li>
                                    <li>Designed database layer using Spring Data JPA with PostgreSQL, handling transactional operations across service boundaries</li>
                                    <li>Orchestrated multi-service development and deployment using Docker Compose; deployed frontend on Vercel</li>
                                    <li>Integrated WhatsApp automation module for real-time notification delivery to end users</li>
                                </ul>
                            </div>

                            {/* Project 2 */}
                            <div>
                                <div className="flex flex-wrap items-baseline justify-between gap-1 md:gap-2 mb-1">
                                    <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                                        Convo — Real-Time Chat & Communication Backend{' '}
                                        <a href="https://github.com/ubinox-pi/Convo" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-normal text-xs">[GitHub]</a>
                                    </h3>
                                    <span className="text-[10px] md:text-xs text-gray-600">Spring Boot, WebSocket, STOMP, WebRTC, Firebase</span>
                                </div>
                                <ul className="list-disc list-inside text-gray-700 text-xs md:text-sm space-y-0.5 ml-1">
                                    <li>Built a real-time chat and user presence backend using Spring Boot with WebSocket and STOMP protocol for persistent bidirectional communication</li>
                                    <li>Implemented WebRTC signaling server for peer-to-peer audio and video calling with low-latency media streaming</li>
                                    <li>Integrated Firebase for cloud storage of media files and push notifications for offline message delivery</li>
                                    <li>Engineered client disconnection detection and configurable heartbeat mechanisms to maintain reliable connection state</li>
                                    <li>Designed hybrid media transfer pattern supporting HTTP multipart uploads and STOMP messaging for real-time text</li>
                                </ul>
                            </div>

                            {/* Project 3 */}
                            <div>
                                <div className="flex flex-wrap items-baseline justify-between gap-1 md:gap-2 mb-1">
                                    <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                                        Lovable Clone — AI Full-Stack App Builder & Live Sandbox{' '}
                                        <a href="https://github.com/ubinox-pi/lovable" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-normal text-xs">[GitHub]</a>
                                    </h3>
                                    <span className="text-[10px] md:text-xs text-gray-600">Java 25, Spring Boot 4.1, Spring AI 2.0, Kubernetes, MinIO</span>
                                </div>
                                <ul className="list-disc list-inside text-gray-700 text-xs md:text-sm space-y-0.5 ml-1">
                                    <li>Engineered a distributed AI-powered web development platform enabling users to build full-stack React applications through natural language conversations using Spring AI agentic streaming with SSE</li>
                                    <li>Designed Kubernetes sandbox orchestration with pre-warmed runner pod pools, dynamic pod claiming, and bidirectional MinIO file sync via sidecar containers for instant live previews</li>
                                    <li>Built a Node.js wildcard reverse proxy with Redis-backed route resolution and WebSocket passthrough for Vite HMR</li>
                                    <li>Implemented multi-tenant RBAC with Spring Security method-level authorization, Redis-distributed sessions, and fine-grained project permissions (OWNER, EDITOR, VIEWER)</li>
                                    <li>Integrated Razorpay subscription billing with webhook-driven lifecycle management, daily token usage quotas, and plan-based project limits</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Education */}
                    <section>
                        <h2 className="text-base md:text-lg font-bold text-gray-900 border-b-2 border-gray-900 pb-1 mb-3 md:mb-4 uppercase tracking-wide">
                            Education
                        </h2>
                        <div className="space-y-2 md:space-y-3">
                            <div className="flex flex-col md:flex-row md:flex-wrap justify-between items-start md:items-baseline gap-1 md:gap-2">
                                <div>
                                    <h3 className="font-semibold text-gray-900 text-sm md:text-base">Bachelor of Technology (B.Tech) in Computer Science</h3>
                                    <p className="text-gray-700 text-xs md:text-sm">Silicon Institute of Technology, Sambalpur &mdash; CGPA: 7.44 / 10.0</p>
                                    <p className="text-gray-600 text-xs">Relevant Coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks</p>
                                </div>
                                <span className="text-gray-600 text-xs md:text-sm font-medium">2023 – 2027 (Expected)</span>
                            </div>
                            <div className="flex flex-col md:flex-row md:flex-wrap justify-between items-start md:items-baseline gap-1 md:gap-2">
                                <div>
                                    <h3 className="font-semibold text-gray-900 text-sm md:text-base">Higher Secondary (XII)</h3>
                                    <p className="text-gray-700 text-xs md:text-sm">Jamshedpur Co-operative College (JAC Board)</p>
                                </div>
                                <span className="text-gray-600 text-xs md:text-sm font-medium">2021 – 2023</span>
                            </div>
                            <div className="flex flex-col md:flex-row md:flex-wrap justify-between items-start md:items-baseline gap-1 md:gap-2">
                                <div>
                                    <h3 className="font-semibold text-gray-900 text-sm md:text-base">Secondary (X)</h3>
                                    <p className="text-gray-700 text-xs md:text-sm">Gayatri Shiksha Niketan High School (CBSE)</p>
                                </div>
                                <span className="text-gray-600 text-xs md:text-sm font-medium">2021</span>
                            </div>
                        </div>
                    </section>

                    {/* Certifications */}
                    <section>
                        <h2 className="text-base md:text-lg font-bold text-gray-900 border-b-2 border-gray-900 pb-1 mb-3 md:mb-4 uppercase tracking-wide">
                            Certifications
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 text-xs md:text-sm space-y-1 ml-1">
                            <li>
                                <strong>Spring WebFlux Masterclass: High-Performance Reactive APIs</strong>{' '}
                                <a href="/Spring_WebFlux_Masterclass_High-Performance_Reactive_APIs_Ramjee.jpg" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-normal text-xs">[View Certificate]</a>
                                {' '}— Udemy (Vinoth Selvaraj) <span className="text-gray-500 ml-1">May 2026</span>
                            </li>
                            <li>
                                <strong>Mastering Java Reactive Programming [From Scratch]</strong>{' '}
                                <a href="/Mastering_Java_Reactive_Programming_Ramjee.jpg" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-normal text-xs">[View Certificate]</a>
                                {' '}— Udemy (Vinoth Selvaraj) <span className="text-gray-500 ml-1">Jan 2026</span>
                            </li>
                            <li>
                                <strong>Programming In Java</strong>{' '}
                                <a href="/Programming_In_Java_Ramjee.jpg" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-normal text-xs">[View Certificate]</a>
                                {' '}— NPTEL (Elite Certification) <span className="text-gray-500 ml-1">2025</span>
                            </li>
                            <li>
                                <strong>Database Management System</strong>{' '}
                                <a href="/Data_Base_Management_System_Ramjee.jpg" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-normal text-xs">[View Certificate]</a>
                                {' '}— NPTEL (Elite Certification) <span className="text-gray-500 ml-1">2025</span>
                            </li>
                            <li>
                                <strong>Computer Networks and Internet Protocol</strong>{' '}
                                <a href="/Computer_Networks_and_Internet_Protocol_Ramjee.jpg" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-normal text-xs">[View Certificate]</a>
                                {' '}— NPTEL (Elite Certification) <span className="text-gray-500 ml-1">2025</span>
                            </li>
                        </ul>
                    </section>

                    {/* Additional */}
                    <section>
                        <h2 className="text-base md:text-lg font-bold text-gray-900 border-b-2 border-gray-900 pb-1 mb-3 md:mb-4 uppercase tracking-wide">
                            Additional Information
                        </h2>
                        <div className="text-gray-700 text-xs md:text-sm space-y-0.5 md:space-y-1">
                            <p><strong>Networking:</strong> TCP/IP, HTTP/HTTPS, REST, WebSockets, Wireshark, nmap, DNS</p>
                            <p><strong>Languages:</strong> English, Hindi (Native)</p>
                            <p><strong>Interests:</strong> System Design, Open Source</p>
                        </div>
                    </section>

                </div>
            </div>

            {/* Action Buttons */}
            <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col gap-2 z-50 print:hidden">
                <button
                    onClick={handleDownload}
                    className="flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-accent text-black font-bold rounded-full shadow-lg hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] transition-all duration-300 text-xs md:text-sm"
                >
                    <Printer size={16} />
                    Print
                </button>
                <a
                    href="/Resume.pdf"
                    download="Ramjee_Prasad_Resume.pdf"
                    className="flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-green-600 text-white font-bold rounded-full shadow-lg hover:bg-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300 text-xs md:text-sm"
                >
                    <Download size={16} />
                    Download PDF
                </a>
                <a
                    href="/latex/resume.tex"
                    download="resume.tex"
                    className="flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-zinc-800 text-white font-bold rounded-full shadow-lg hover:bg-zinc-700 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 text-xs md:text-sm border border-zinc-600"
                >
                    <Code size={16} />
                    LaTeX Code
                </a>
            </div>

            {/* Instructions Modal */}
            {showInstructions && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] p-4 print:hidden">
                    <div ref={modalRef} className="bg-zinc-900 rounded-2xl max-w-lg w-full p-6 border border-white/10 relative">
                        <button
                            onClick={() => setShowInstructions(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white"
                            title="Close"
                            aria-label="Close"
                        >
                            <X size={20} />
                        </button>

                        <h3 className="text-xl font-bold text-white mb-2">📄 PDF Settings Guide</h3>
                        <p className="text-xs text-amber-400 mb-4">💡 For best results, use Windows or Mac desktop browser</p>

                        <div className="space-y-3 text-sm text-gray-300">
                            <p className="text-gray-400">Configure these in &quot;More settings&quot;:</p>

                            <div className="bg-black/30 rounded-lg p-4 space-y-2 font-mono text-xs">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Destination:</span>
                                    <span className="text-accent">Save as PDF</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Paper Size:</span>
                                    <span className="text-accent">Tabloid</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Pages per sheet:</span>
                                    <span className="text-accent">1</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Margins:</span>
                                    <span className="text-accent">Minimum</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Scale:</span>
                                    <span className="text-accent">Default</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Headers & Footers:</span>
                                    <span className="text-red-400">☐ Unchecked</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Background Graphics:</span>
                                    <span className="text-red-400">☐ Unchecked</span>
                                </div>
                            </div>

                            <p className="text-gray-500 text-xs">
                                These settings are in &quot;More settings&quot; section of print dialog.
                            </p>
                        </div>

                        <button
                            onClick={startPrint}
                            className="mt-6 w-full py-3 bg-accent text-black font-bold rounded-lg hover:bg-yellow-400 transition-colors"
                        >
                            Open Print Dialog
                        </button>
                    </div>
                </div>
            )}

            {/* Print Styles */}
            <style jsx global>{`
                @media print {
                    @page {
                        margin: 0;
                        size: letter;
                    }
                    html, body, main {
                        background: white !important;
                        margin: 0 !important;
                        padding: 0 !important;
                    }
                    .print\\:hidden {
                        display: none !important;
                    }
                    #resume-content {
                        box-shadow: none !important;
                        margin: 0 !important;
                        max-width: none !important;
                    }
                    header {
                        background: #1f2937 !important;
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }
                }
            `}</style>
        </main>
    );
}
