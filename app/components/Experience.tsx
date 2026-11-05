"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { Reveal, EASE } from "./ui/Reveal";

export default function Experience() {
    return (
        <section id="experience" className="relative px-4 py-28 md:px-6 md:py-36">
            <div className="mx-auto max-w-4xl">
                <SectionHeading
                    index="03"
                    label="Now"
                    title={[
                        "No corporate badge",
                        <span key="l2" className="serif-italic text-muted">yet — just conviction.</span>,
                    ]}
                    intro="A candid snapshot of where I am, the work I've shipped on my own, and my readiness to contribute to a real production stack."
                />

                {/* Timeline block */}
                <div className="space-y-8">
                    {/* Current status card */}
                    <Reveal>
                        <div className="rounded-2xl border border-line bg-surface/50 p-8 md:p-10">
                            <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                                </span>
                                Current phase
                            </div>

                            <h3 className="font-serif text-3xl text-foreground md:text-4xl">
                                Continuous Learning &amp; <span className="serif-italic text-accent">Building</span>
                            </h3>

                            <div className="mt-8 grid gap-6 text-[15px] leading-relaxed text-muted md:grid-cols-2">
                                <p>
                                    I don&rsquo;t have a &ldquo;Previous Experience&rdquo; section because I haven&rsquo;t worked at a
                                    company yet. What I do have is a growing portfolio of self-initiated systems — microservice
                                    architectures, P2P protocols, AI sandboxing platforms — each built from scratch and pushed to
                                    production-grade completeness.
                                </p>
                                <p>
                                    I&rsquo;m <span className="text-foreground font-medium">actively ready</span> to integrate into
                                    your engineering team, adapt to your stack, and deploy my skills against real-world backend
                                    challenges. I learn fast, I ship clean code, and I care about the craft.
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    {/* Scan results — styled as a minimal checklist */}
                    <Reveal delay={0.1}>
                        <div className="grid gap-3 sm:grid-cols-3">
                            {[
                                { label: "Corporate history", value: "None yet", accent: false },
                                { label: "Skill depth", value: "Production-grade", accent: true },
                                { label: "Growth trajectory", value: "Exponential", accent: true },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="flex items-center justify-between rounded-xl border border-line bg-surface/40 px-5 py-4"
                                >
                                    <span className="text-sm text-muted">{item.label}</span>
                                    <span
                                        className={`rounded-full px-3 py-1 font-mono text-[11px] font-medium ${
                                            item.accent
                                                ? "border border-accent/30 bg-accent/10 text-accent"
                                                : "border border-line-strong bg-surface text-subtle"
                                        }`}
                                    >
                                        {item.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </Reveal>

                    {/* CTA */}
                    <Reveal delay={0.15}>
                        <div className="flex items-center justify-between rounded-xl border border-line px-6 py-5">
                            <div>
                                <p className="text-sm text-muted">Interested in working together?</p>
                                <p className="text-xs text-subtle">Backend, distributed systems, Java &amp; Spring</p>
                            </div>
                            <Link
                                href="#contact"
                                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-colors duration-300 hover:bg-accent"
                            >
                                Let&rsquo;s talk
                                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
