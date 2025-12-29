"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black/90 border-t border-white/10 py-8 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    {/* Navigation */}
                    <div>
                        <h3 className="text-accent font-bold mb-3">Navigation</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
                            <li><Link href="/#about" className="text-gray-400 hover:text-white">About</Link></li>
                            <li><Link href="/#projects" className="text-gray-400 hover:text-white">Projects</Link></li>
                            <li><Link href="/#contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-accent font-bold mb-3">Resources</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/resume" className="text-gray-400 hover:text-white">Resume</Link></li>
                            <li><Link href="/blog/git-github-guide" className="text-gray-400 hover:text-white">Git & GitHub Guide</Link></li>
                            <li><Link href="/blog/maven-gradle-guide" className="text-gray-400 hover:text-white">Maven & Gradle Guide</Link></li>
                            <li><Link href="/blog/docker-commands" className="text-gray-400 hover:text-white">Docker Commands</Link></li>
                            <li><Link href="/blog/spring-boot-rest-api" className="text-gray-400 hover:text-white">Spring Boot Tutorial</Link></li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="text-accent font-bold mb-3">Connect</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="https://github.com/ubinox-pi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white flex items-center gap-2">
                                    <Github size={14} /> GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/ramjee-prasad-6b26b4349" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white flex items-center gap-2">
                                    <Linkedin size={14} /> LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="mailto:ashish23481@gmail.com" className="text-gray-400 hover:text-white flex items-center gap-2">
                                    <Mail size={14} /> Email
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* About */}
                    <div>
                        <h3 className="text-accent font-bold mb-3">About Ramjee Prasad</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Backend Developer specializing in Java, Spring Boot, and Microservices.
                            Building scalable applications.
                        </p>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 text-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Ramjee Prasad. All rights reserved.
                    </p>
                    <p className="text-gray-600 text-xs mt-2">
                        <Link href="https://ramjeeprasad.online" className="hover:text-accent">ramjeeprasad.online</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
