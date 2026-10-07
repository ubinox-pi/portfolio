"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MapPin, Copy, Check, ArrowUpRight, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);
    const [copiedPhone2, setCopiedPhone2] = useState(false);

    const handleCopy = async (text: string, type: 'email' | 'phone' | 'phone2') => {
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

            if (type === 'email') {
                setCopiedEmail(true);
                setTimeout(() => setCopiedEmail(false), 2000);
            } else if (type === 'phone') {
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

    return (
        <section id="contact" className="py-24 px-4 md:px-6 relative">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-4 justify-center">
                    <span className="font-mono text-xs uppercase tracking-widest text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                        07 / INITIATE CONTACT
                    </span>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative bg-[#0e1017]/85 backdrop-blur-2xl p-8 md:p-14 rounded-3xl border border-white/10 shadow-2xl text-center overflow-hidden"
                >
                    {/* Ambient Radial Accent */}
                    <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

                    <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                        Let's Engineer High-Scale Systems Together
                    </h2>
                    <p className="text-zinc-400 text-sm md:text-base mb-10 max-w-xl mx-auto leading-relaxed">
                        I am actively open to <span className="text-zinc-200 font-semibold">Backend Developer</span> and <span className="text-zinc-200 font-semibold">Software Engineer</span> roles. Whether discussing distributed systems architecture, microservices benchmarks, or an upcoming position, let's connect.
                    </p>

                    {/* Contact Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-left">
                        {/* Primary Email */}
                        <div
                            onClick={() => handleCopy("ramjeeprasad.dev@gmail.com", 'email')}
                            className="group relative cursor-pointer bg-white/[0.03] hover:bg-white/[0.06] p-4 md:p-5 rounded-2xl border border-white/10 hover:border-amber-500/40 transition-all duration-300 flex items-center justify-between"
                        >
                            <div className="flex items-center gap-3.5 min-w-0">
                                <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400 border border-amber-500/20 group-hover:scale-105 transition-transform shrink-0">
                                    <Mail size={20} />
                                </div>
                                <div className="min-w-0">
                                    <div className="text-[11px] font-mono text-zinc-400">Primary Email</div>
                                    <div className="text-white font-mono text-xs md:text-sm truncate font-medium">
                                        ramjeeprasad.dev@gmail.com
                                    </div>
                                </div>
                            </div>
                            <div className="text-zinc-400 p-1.5 rounded-lg group-hover:text-amber-400 transition-colors">
                                {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                            </div>
                        </div>

                        {/* Business Email */}
                        <div
                            onClick={() => handleCopy("ramjeeprasad@zohomail.in", 'email')}
                            className="group relative cursor-pointer bg-white/[0.03] hover:bg-white/[0.06] p-4 md:p-5 rounded-2xl border border-white/10 hover:border-amber-500/40 transition-all duration-300 flex items-center justify-between"
                        >
                            <div className="flex items-center gap-3.5 min-w-0">
                                <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400 border border-amber-500/20 group-hover:scale-105 transition-transform shrink-0">
                                    <Mail size={20} />
                                </div>
                                <div className="min-w-0">
                                    <div className="text-[11px] font-mono text-zinc-400">Direct / Business</div>
                                    <div className="text-white font-mono text-xs md:text-sm truncate font-medium">
                                        ramjeeprasad@zohomail.in
                                    </div>
                                </div>
                            </div>
                            <div className="text-zinc-400 p-1.5 rounded-lg group-hover:text-amber-400 transition-colors">
                                {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                            </div>
                        </div>

                        {/* Primary Phone */}
                        <div
                            onClick={() => handleCopy("+91 9801112671", 'phone')}
                            className="group relative cursor-pointer bg-white/[0.03] hover:bg-white/[0.06] p-4 md:p-5 rounded-2xl border border-white/10 hover:border-amber-500/40 transition-all duration-300 flex items-center justify-between"
                        >
                            <div className="flex items-center gap-3.5 min-w-0">
                                <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400 border border-amber-500/20 group-hover:scale-105 transition-transform shrink-0">
                                    <Phone size={20} />
                                </div>
                                <div className="min-w-0">
                                    <div className="text-[11px] font-mono text-zinc-400">Direct Phone</div>
                                    <div className="text-white font-mono text-xs md:text-sm truncate font-medium">
                                        +91 9801112671
                                    </div>
                                </div>
                            </div>
                            <div className="text-zinc-400 p-1.5 rounded-lg group-hover:text-amber-400 transition-colors">
                                {copiedPhone ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                            </div>
                        </div>

                        {/* Secondary Phone */}
                        <div
                            onClick={() => handleCopy("+91 8227865178", 'phone2')}
                            className="group relative cursor-pointer bg-white/[0.03] hover:bg-white/[0.06] p-4 md:p-5 rounded-2xl border border-white/10 hover:border-amber-500/40 transition-all duration-300 flex items-center justify-between"
                        >
                            <div className="flex items-center gap-3.5 min-w-0">
                                <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400 border border-amber-500/20 group-hover:scale-105 transition-transform shrink-0">
                                    <Phone size={20} />
                                </div>
                                <div className="min-w-0">
                                    <div className="text-[11px] font-mono text-zinc-400">Secondary Contact</div>
                                    <div className="text-white font-mono text-xs md:text-sm truncate font-medium">
                                        +91 8227865178
                                    </div>
                                </div>
                            </div>
                            <div className="text-zinc-400 p-1.5 rounded-lg group-hover:text-amber-400 transition-colors">
                                {copiedPhone2 ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                            </div>
                        </div>
                    </div>

                    {/* Action CTA */}
                    <motion.a
                        href="mailto:ramjeeprasad.dev@gmail.com"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-black font-semibold text-sm shadow-[0_0_25px_rgba(245,158,11,0.25)] hover:shadow-[0_0_35px_rgba(245,158,11,0.4)] transition-all"
                    >
                        <Send size={16} />
                        Compose Email Message
                    </motion.a>

                    {/* Social Network Links */}
                    <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-zinc-400">
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">
                            <MapPin size={14} className="text-amber-400" />
                            <span>Jamshedpur, India</span>
                        </div>
                        <a
                            href="https://github.com/ubinox-pi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 hover:border-amber-500/30 hover:text-amber-300 transition-colors"
                        >
                            <Github size={14} />
                            <span>GitHub</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ramjee-prasad-6b26b4349"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 hover:border-amber-500/30 hover:text-amber-300 transition-colors"
                        >
                            <Linkedin size={14} />
                            <span>LinkedIn</span>
                        </a>
                        <a
                            href="https://x.com/ramjee__prasad"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 hover:border-amber-500/30 hover:text-amber-300 transition-colors"
                        >
                            <span>X (Twitter)</span>
                        </a>
                        <a
                            href="https://www.geeksforgeeks.org/profile/ramjeeprasad"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 hover:border-amber-500/30 hover:text-amber-300 transition-colors"
                        >
                            <span>GeeksforGeeks</span>
                        </a>
                        <a
                            href="https://discord.com/users/ramjeeprasad"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 hover:border-amber-500/30 hover:text-amber-300 transition-colors"
                        >
                            <span>Discord</span>
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Toast Notification */}
            <AnimatePresence>
                {(copiedEmail || copiedPhone || copiedPhone2) && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 30 }}
                        className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#0e1017] text-white px-5 py-2.5 rounded-xl text-xs font-mono border border-amber-500/40 shadow-2xl flex items-center gap-2 z-50 pointer-events-none"
                    >
                        <Check size={14} className="text-emerald-400" />
                        <span>Copied to clipboard</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
