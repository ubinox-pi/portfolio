"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MapPin, Copy, Check, Send, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import SectionHeading from "./ui/SectionHeading";
import { Reveal, EASE } from "./ui/Reveal";

export default function Contact() {
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);
    const [copiedPhone2, setCopiedPhone2] = useState(false);

    const handleCopy = async (text: string, type: "email" | "phone" | "phone2") => {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(text);
            } else {
                const textArea = document.createElement("textarea");
                textArea.value = text;
                textArea.style.position = "fixed";
                textArea.style.left = "-999999px";
                textArea.style.top = "-999999px";
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                document.execCommand("copy");
                textArea.remove();
            }
            if (type === "email") {
                setCopiedEmail(true);
                setTimeout(() => setCopiedEmail(false), 2000);
            } else if (type === "phone") {
                setCopiedPhone(true);
                setTimeout(() => setCopiedPhone(false), 2000);
            } else {
                setCopiedPhone2(true);
                setTimeout(() => setCopiedPhone2(false), 2000);
            }
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    const contactItems = [
        { label: "Primary Email", value: "ramjeeprasad.dev@gmail.com", type: "email" as const, Icon: Mail, copied: copiedEmail },
        { label: "Business Email", value: "ramjeeprasad@zohomail.in", type: "email" as const, Icon: Mail, copied: copiedEmail },
        { label: "Direct Phone", value: "+91 9801112671", type: "phone" as const, Icon: Phone, copied: copiedPhone },
        { label: "Secondary Phone", value: "+91 8227865178", type: "phone2" as const, Icon: Phone, copied: copiedPhone2 },
    ];

    const socials = [
        { name: "GitHub", href: "https://github.com/ubinox-pi", Icon: Github },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/ramjee-prasad-6b26b4349", Icon: Linkedin },
        { name: "X (Twitter)", href: "https://x.com/ramjee__prasad" },
        { name: "GeeksforGeeks", href: "https://www.geeksforgeeks.org/profile/ramjeeprasad" },
        { name: "Discord", href: "https://discord.com/users/ramjeeprasad" },
    ];

    return (
        <section id="contact" className="relative px-4 py-28 md:px-6 md:py-36">
            <div className="mx-auto max-w-4xl">
                <SectionHeading
                    index="07"
                    label="Contact"
                    title={[
                        "Let\u2019s build",
                        <span key="l2" className="serif-italic text-muted">something together.</span>,
                    ]}
                    intro={
                        <>
                            I&rsquo;m open to{" "}
                            <span className="text-foreground font-medium">Backend Developer</span> and{" "}
                            <span className="text-foreground font-medium">Software Engineer</span> roles. Whether it&rsquo;s
                            distributed systems, microservices benchmarks or an upcoming position — let&rsquo;s connect.
                        </>
                    }
                />

                {/* Contact cards */}
                <Reveal>
                    <div className="grid gap-3 sm:grid-cols-2">
                        {contactItems.map((item) => (
                            <button
                                key={item.value}
                                onClick={() => handleCopy(item.value, item.type)}
                                className="group flex items-center justify-between rounded-xl border border-line bg-surface/40 px-5 py-4 text-left transition-all duration-300 hover:border-accent/30 hover:bg-surface"
                            >
                                <div className="flex items-center gap-3.5 min-w-0">
                                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-surface text-muted transition-colors duration-300 group-hover:border-accent/30 group-hover:text-accent">
                                        <item.Icon size={18} />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-subtle">
                                            {item.label}
                                        </div>
                                        <div className="truncate font-mono text-sm text-foreground">{item.value}</div>
                                    </div>
                                </div>
                                <div className="shrink-0 text-subtle transition-colors duration-300 group-hover:text-accent">
                                    {item.copied ? (
                                        <Check size={16} className="text-emerald-400" />
                                    ) : (
                                        <Copy size={16} />
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>
                </Reveal>

                {/* CTA */}
                <Reveal delay={0.1}>
                    <div className="mt-10 text-center">
                        <a
                            href="mailto:ramjeeprasad.dev@gmail.com"
                            className="group inline-flex items-center gap-3 rounded-full bg-foreground py-3 pl-7 pr-3 text-sm font-semibold text-background transition-colors duration-300 hover:bg-accent"
                        >
                            Compose an email
                            <span className="grid h-9 w-9 place-items-center rounded-full bg-background text-foreground transition-transform duration-500 group-hover:rotate-[-20deg]">
                                <Send size={15} />
                            </span>
                        </a>
                    </div>
                </Reveal>

                {/* Socials & Location */}
                <Reveal delay={0.15}>
                    <div className="mt-14 flex flex-wrap items-center justify-center gap-2 border-t border-line pt-8">
                        <span className="flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 font-mono text-[11px] text-subtle">
                            <MapPin size={12} className="text-accent" />
                            Jamshedpur, India
                        </span>
                        {socials.map((s) => (
                            <a
                                key={s.name}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 font-mono text-[11px] text-subtle transition-colors duration-300 hover:border-accent/30 hover:text-foreground"
                            >
                                {s.Icon && <s.Icon size={12} />}
                                {s.name}
                            </a>
                        ))}
                    </div>
                </Reveal>
            </div>

            {/* Toast */}
            <AnimatePresence>
                {(copiedEmail || copiedPhone || copiedPhone2) && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 30 }}
                        className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 rounded-full border border-accent/30 bg-surface px-5 py-2.5 font-mono text-xs text-foreground shadow-2xl pointer-events-none flex items-center gap-2"
                    >
                        <Check size={14} className="text-emerald-400" />
                        Copied to clipboard
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
