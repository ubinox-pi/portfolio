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
                                <a href="https://github.com/ubinox-pi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white flex items-center gap-2" aria-label="Follow Ramjee Prasad on GitHub">
                                    <Github size={14} /> GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/ramjee-prasad-6b26b4349" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white flex items-center gap-2" aria-label="Connect with Ramjee Prasad on LinkedIn">
                                    <Linkedin size={14} /> LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/ramjeeprasad.java" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white flex items-center gap-2" aria-label="Follow Ramjee Prasad on Instagram">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://x.com/ramjee__prasad" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white flex items-center gap-2" aria-label="Follow Ramjee Prasad on X (Twitter)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                    X (Twitter)
                                </a>
                            </li>
                            <li>
                                <a href="https://www.geeksforgeeks.org/profile/ramjeeprasad" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white flex items-center gap-2" aria-label="Ramjee Prasad profile on GeeksforGeeks">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.292-.594h2.264l.062.09c.091.144.198.278.321.398.257.25.562.445.9.578a2.91 2.91 0 0 0 2.038-.037c.291-.115.556-.283.782-.496.226-.213.397-.47.495-.756.098-.287.124-.594.074-.895a2.203 2.203 0 0 0-1.33-1.691 3.07 3.07 0 0 0-1.232-.28h-1.33v-2.15h1.207a2.72 2.72 0 0 0 1.103-.22 2.163 2.163 0 0 0 1.186-1.211 2.018 2.018 0 0 0 .05-1.268 1.99 1.99 0 0 0-.455-.792 2.146 2.146 0 0 0-.73-.537 2.67 2.67 0 0 0-1.76-.075 2.02 2.02 0 0 0-.617.324 1.94 1.94 0 0 0-.46.483 2.138 2.138 0 0 0-.289.63l-.053.18h-2.209a3.847 3.847 0 0 1 .42-1.397 4.023 4.023 0 0 1 .933-1.13 4.199 4.199 0 0 1 1.302-.75 4.77 4.77 0 0 1 1.584-.27 4.88 4.88 0 0 1 1.615.249 4.1 4.1 0 0 1 1.303.712 3.336 3.336 0 0 1 .865 1.102 3.118 3.118 0 0 1 .306 1.377 3.19 3.19 0 0 1-.317 1.399 3.37 3.37 0 0 1-.89 1.1 3.25 3.25 0 0 1 1.185 1.036 3.04 3.04 0 0 1 .574 1.7 3.324 3.324 0 0 1-.14 1.058zM8.934 6.117h1.327a3.77 3.77 0 0 0-.34-.89 4.107 4.107 0 0 0-2.3-1.911 4.615 4.615 0 0 0-1.585-.265 4.712 4.712 0 0 0-1.602.262 4.187 4.187 0 0 0-1.317.753 3.94 3.94 0 0 0-.92 1.149A3.878 3.878 0 0 0 1.75 6.6h2.26l.041-.114c.066-.182.165-.35.293-.495.127-.146.28-.268.45-.362a2.53 2.53 0 0 1 1.142-.262c.382.001.759.082 1.104.239.346.157.647.388.878.675.23.287.376.623.426.979.05.355.003.717-.138 1.054a2.23 2.23 0 0 1-.68.88 2.49 2.49 0 0 1-.97.499 3.074 3.074 0 0 1-1.099.084h-.925v2.131h1.022c.413 0 .815.1 1.177.286.362.186.67.459.897.794.228.335.36.72.387 1.118.027.398-.053.796-.232 1.157a2.31 2.31 0 0 1-.782.867 2.77 2.77 0 0 1-1.053.458 3.202 3.202 0 0 1-1.175.005 2.8 2.8 0 0 1-1.062-.42 2.32 2.32 0 0 1-.77-.818 2.56 2.56 0 0 1-.333-1.086l-.014-.106H1.75c.012.473.108.94.283 1.378.25.625.637 1.18 1.134 1.626a4.49 4.49 0 0 0 1.63.99 5.33 5.33 0 0 0 1.923.332 5.18 5.18 0 0 0 1.891-.328 4.47 4.47 0 0 0 1.6-.97 3.82 3.82 0 0 0 1.013-1.523 4.07 4.07 0 0 0 .214-1.916 3.482 3.482 0 0 0-.593-1.492 3.507 3.507 0 0 0-1.218-1.087 3.442 3.442 0 0 0 .882-1.053 3.047 3.047 0 0 0 .32-1.426 3.135 3.135 0 0 0-.333-1.419z" /></svg>
                                    GeeksforGeeks
                                </a>
                            </li>
                            <li>
                                <a href="mailto:ashish23481@gmail.com" className="text-gray-400 hover:text-white flex items-center gap-2" aria-label="Email Ramjee Prasad">
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
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Ramjee Prasad. All rights reserved.
                    </p>
                    <p className="text-gray-400 text-xs mt-2">
                        <Link href="https://www.ramjeeprasad.online" className="hover:text-accent">ramjeeprasad.online</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
