"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight, Terminal } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#06070a] border-t border-white/10 py-14 px-4 md:px-6 relative">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {/* Navigation */}
                    <div>
                        <h3 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold mb-4">
                            Index
                        </h3>
                        <ul className="space-y-2.5 text-xs font-mono">
                            <li><Link href="/" className="text-zinc-400 hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/#about" className="text-zinc-400 hover:text-white transition-colors">About</Link></li>
                            <li><Link href="/#skills" className="text-zinc-400 hover:text-white transition-colors">Arsenal</Link></li>
                            <li><Link href="/#experience" className="text-zinc-400 hover:text-white transition-colors">Experience</Link></li>
                            <li><Link href="/#projects" className="text-zinc-400 hover:text-white transition-colors">Systems</Link></li>
                            <li><Link href="/#certifications" className="text-zinc-400 hover:text-white transition-colors">Credentials</Link></li>
                            <li><Link href="/#contact" className="text-zinc-400 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold mb-4">
                            Technical Deep Dives
                        </h3>
                        <ul className="space-y-2.5 text-xs font-mono">
                            <li><Link href="/resume" className="text-zinc-400 hover:text-white transition-colors">Resume (ATS PDF)</Link></li>
                            <li><Link href="/blog/mono-flux-reactive-java" className="text-zinc-400 hover:text-white transition-colors">Project Reactor & Flux</Link></li>
                            <li><Link href="/blog/git-github-guide" className="text-zinc-400 hover:text-white transition-colors">Git & GitHub Mastery</Link></li>
                            <li><Link href="/blog/maven-gradle-guide" className="text-zinc-400 hover:text-white transition-colors">Maven vs Gradle Internals</Link></li>
                            <li><Link href="/blog/docker-commands" className="text-zinc-400 hover:text-white transition-colors">Docker Production Guide</Link></li>
                            <li><Link href="/blog/spring-boot-rest-api" className="text-zinc-400 hover:text-white transition-colors">Spring Boot REST Architecture</Link></li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold mb-4">
                            Network
                        </h3>
                        <ul className="space-y-2.5 text-xs font-mono">
                            <li>
                                <a href="https://github.com/ubinox-pi" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white flex items-center gap-2 transition-colors">
                                    <Github size={13} /> GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/ramjee-prasad-6b26b4349" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white flex items-center gap-2 transition-colors">
                                    <Linkedin size={13} /> LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://x.com/ramjee__prasad" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white flex items-center gap-2 transition-colors">
                                    X (Twitter)
                                </a>
                            </li>
                            <li>
                                <a href="https://www.geeksforgeeks.org/profile/ramjeeprasad" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white flex items-center gap-2 transition-colors">
                                    GeeksforGeeks
                                </a>
                            </li>
                            <li>
                                <a href="mailto:ramjeeprasad.dev@gmail.com" className="text-zinc-400 hover:text-white flex items-center gap-2 transition-colors">
                                    <Mail size={13} /> Email Direct
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Architectural Note */}
                    <div>
                        <h3 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold mb-4">
                            Systems Philosophy
                        </h3>
                        <p className="text-zinc-400 text-xs leading-relaxed mb-4">
                            Dedicated to designing resilient, low-latency Java backend architectures, reactive pipelines, and clean modular microservices.
                        </p>
                        <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-500">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                            Next.js 16 • Turbopack • Reactive Core
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
                    <p>© {new Date().getFullYear()} Ramjee Prasad. All systems operational.</p>
                    <p>
                        <Link href="https://www.ramjeeprasad.online" className="hover:text-amber-400 transition-colors">
                            ramjeeprasad.online
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
