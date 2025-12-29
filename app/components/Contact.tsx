"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MapPin, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);

    const handleCopy = async (text: string, type: 'email' | 'phone') => {
        try {
            // Try modern clipboard API first
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(text);
            } else {
                // Fallback for mobile/non-secure contexts
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
            } else {
                setCopiedPhone(true);
                setTimeout(() => setCopiedPhone(false), 2000);
            }
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <section id="contact" className="py-32 px-6 text-center max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-zinc-900/40 backdrop-blur-md p-12 rounded-2xl border border-white/5"
            >
                <span className="text-accent font-mono text-sm mb-4 block tracking-widest">04. WHAT'S NEXT?</span>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Get In Touch</h2>
                <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                    I'm currently looking for new opportunities in backend development. Whether you have a question about Spring Boot, distributed systems, or just want to say hi, my inbox is always open!
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
                    {/* Email Card */}
                    <div
                        onClick={() => handleCopy("ashish23481@gmail.com", 'email')}
                        className="group relative cursor-pointer bg-black/20 p-6 rounded-xl border border-white/5 hover:border-accent/50 transition-all duration-300"
                    >
                        <div className="absolute top-2 right-2 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                            {copiedEmail ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-accent/10 rounded-full text-accent group-hover:scale-110 transition-transform">
                                <Mail size={24} />
                            </div>
                            <div className="text-left">
                                <div className="text-xs text-gray-400">Email</div>
                                <div className="text-white font-mono text-xs sm:text-sm break-all">ashish23481@gmail.com</div>
                            </div>
                        </div>
                    </div>

                    {/* Phone Card */}
                    <div
                        onClick={() => handleCopy("9801112671", 'phone')}
                        className="group relative cursor-pointer bg-black/20 p-6 rounded-xl border border-white/5 hover:border-accent/50 transition-all duration-300"
                    >
                        <div className="absolute top-2 right-2 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                            {copiedPhone ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-accent/10 rounded-full text-accent group-hover:scale-110 transition-transform">
                                <Phone size={24} />
                            </div>
                            <div className="text-left">
                                <div className="text-xs text-gray-400">Phone</div>
                                <div className="text-white font-mono text-xs sm:text-sm break-all">+91 9801112671</div>
                            </div>
                        </div>
                    </div>


                </div>

                <motion.a
                    href="mailto:ashish23481@gmail.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-black font-bold rounded-full shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] transition-shadow"
                >
                    Say Hello <span role="img" aria-label="wave" className="text-xl">👋</span>
                </motion.a>

                <div className="mt-16 border-t border-white/10 pt-8 flex flex-wrap justify-center gap-6 md:gap-10 text-sm text-gray-400 font-mono">
                    <div className="flex flex-col items-center gap-2 group">
                        <div className="p-2 bg-white/5 rounded-full group-hover:text-white transition-colors"><MapPin size={18} /></div>
                        <span>Jamshedpur</span>
                    </div>
                    <a href="https://github.com/ubinox-pi" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group hover:text-accent transition-colors">
                        <div className="p-2 bg-white/5 rounded-full group-hover:text-accent transition-colors"><Github size={18} /></div>
                        <span>GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/ramjee-prasad-6b26b4349" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group hover:text-accent transition-colors">
                        <div className="p-2 bg-white/5 rounded-full group-hover:text-accent transition-colors"><Linkedin size={18} /></div>
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://discord.com/users/ashishkushwaha_" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group hover:text-accent transition-colors">
                        <div className="p-2 bg-white/5 rounded-full group-hover:text-accent transition-colors">
                            <svg width="18" height="18" viewBox="0 0 127.14 96.36" className="fill-current"><path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.11,77.11,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.82,105.82,0,0,0,126.6,80.22c2.91-27.61-4.15-51.48-18.9-72.15ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" /></svg>
                        </div>
                        <span>Discord</span>
                    </a>
                </div>

                <p className="mt-8 text-xs text-gray-600 font-mono">© 2024 Ramjee Prasad</p>
            </motion.div>

            {/* Toast Notification */}
            <AnimatePresence>
                {(copiedEmail || copiedPhone) && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-2 z-50 pointer-events-none"
                    >
                        <Check size={18} className="text-green-600" />
                        {copiedEmail ? "Email copied to clipboard!" : "Phone copied to clipboard!"}
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
