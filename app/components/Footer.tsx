"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Stack", href: "/#skills" },
    { label: "Now", href: "/#experience" },
    { label: "Work", href: "/#projects" },
    { label: "Credentials", href: "/#certifications" },
    { label: "Writing", href: "/#blog" },
    { label: "Contact", href: "/#contact" },
];

const articles = [
    { label: "Résumé (ATS PDF)", href: "/resume" },
    { label: "Project Reactor & Flux", href: "/blog/mono-flux-reactive-java" },
    { label: "Git & GitHub Mastery", href: "/blog/git-github-guide" },
    { label: "Maven vs Gradle", href: "/blog/maven-gradle-guide" },
    { label: "Docker Production Guide", href: "/blog/docker-commands" },
    { label: "Spring Boot REST", href: "/blog/spring-boot-rest-api" },
];

const socials = [
    { label: "GitHub", href: "https://github.com/ubinox-pi", Icon: Github },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ramjee-prasad-6b26b4349", Icon: Linkedin },
    { label: "X (Twitter)", href: "https://x.com/ramjee__prasad" },
    { label: "GeeksforGeeks", href: "https://www.geeksforgeeks.org/profile/ramjeeprasad" },
    { label: "Email", href: "mailto:ramjeeprasad.dev@gmail.com", Icon: Mail },
];

export default function Footer() {
    return (
        <footer className="border-t border-line bg-surface/40 px-4 py-16 md:px-6">
            <div className="mx-auto max-w-6xl">
                {/* Top section — big serif CTA */}
                <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
                    <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">
                            Let&rsquo;s work together
                        </p>
                        <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
                            Got a project?{" "}
                            <span className="serif-italic text-accent">Say hello.</span>
                        </h2>
                    </div>
                    <a
                        href="mailto:ramjeeprasad.dev@gmail.com"
                        className="group inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 font-mono text-sm text-foreground transition-colors duration-300 hover:border-accent hover:text-accent"
                    >
                        ramjeeprasad.dev@gmail.com
                        <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                </div>

                {/* Link columns */}
                <div className="mb-14 grid grid-cols-2 gap-8 md:grid-cols-4">
                    <div>
                        <h3 className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-subtle">Index</h3>
                        <ul className="space-y-2.5">
                            {navLinks.map((l) => (
                                <li key={l.href}>
                                    <Link href={l.href} className="text-sm text-muted transition-colors duration-300 hover:text-foreground">
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-subtle">Articles</h3>
                        <ul className="space-y-2.5">
                            {articles.map((l) => (
                                <li key={l.href}>
                                    <Link href={l.href} className="text-sm text-muted transition-colors duration-300 hover:text-foreground">
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-subtle">Connect</h3>
                        <ul className="space-y-2.5">
                            {socials.map((s) => (
                                <li key={s.href}>
                                    <a
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-muted transition-colors duration-300 hover:text-foreground"
                                    >
                                        {s.Icon && <s.Icon size={13} />}
                                        {s.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-subtle">Philosophy</h3>
                        <p className="text-sm leading-relaxed text-muted">
                            Designing resilient, low-latency Java backend architectures, reactive pipelines, and clean modular
                            microservices.
                        </p>
                        <div className="mt-4 flex items-center gap-2 font-mono text-[10px] text-subtle">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                            Next.js 16 · Turbopack · Reactive Core
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
                    <p className="font-mono text-[11px] text-subtle">
                        © {new Date().getFullYear()} Ramjee Prasad. All rights reserved.
                    </p>
                    <Link href="https://www.ramjeeprasad.online" className="font-mono text-[11px] text-subtle transition-colors hover:text-accent">
                        ramjeeprasad.online
                    </Link>
                </div>
            </div>
        </footer>
    );
}
