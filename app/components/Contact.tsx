"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MapPin, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);
    const [copiedPhone2, setCopiedPhone2] = useState(false);

    const handleCopy = async (text: string, type: 'email' | 'phone' | 'phone2') => {
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

                    {/* Primary Phone Card */}
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
                                <div className="text-xs text-gray-400">Phone (Primary)</div>
                                <div className="text-white font-mono text-sm whitespace-nowrap">+91 9801112671</div>
                            </div>
                        </div>
                    </div>

                    {/* Secondary Phone Card */}
                    <div
                        onClick={() => handleCopy("8227865178", 'phone2')}
                        className="group relative cursor-pointer bg-black/20 p-6 rounded-xl border border-white/5 hover:border-accent/50 transition-all duration-300"
                    >
                        <div className="absolute top-2 right-2 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                            {copiedPhone2 ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-accent/10 rounded-full text-accent group-hover:scale-110 transition-transform">
                                <Phone size={24} />
                            </div>
                            <div className="text-left">
                                <div className="text-xs text-gray-400">Phone (Secondary)</div>
                                <div className="text-white font-mono text-sm whitespace-nowrap">+91 8227865178</div>
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

                <div className="mt-16 border-t border-white/10 pt-8 grid grid-cols-4 sm:grid-cols-7 gap-4 md:gap-6 text-xs sm:text-sm text-gray-400 font-mono max-w-2xl mx-auto">
                    <div className="flex flex-col items-center gap-2 group">
                        <div className="p-2 bg-white/5 rounded-full group-hover:text-white transition-colors"><MapPin size={18} /></div>
                        <span className="text-center">Jamshedpur</span>
                    </div>
                    <a href="https://github.com/ubinox-pi" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group hover:text-accent transition-colors">
                        <div className="p-2 bg-white/5 rounded-full group-hover:text-accent transition-colors"><Github size={18} /></div>
                        <span>GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/ramjee-prasad-6b26b4349" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group hover:text-accent transition-colors">
                        <div className="p-2 bg-white/5 rounded-full group-hover:text-accent transition-colors"><Linkedin size={18} /></div>
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://www.instagram.com/ramjeeprasad.java" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group hover:text-accent transition-colors">
                        <div className="p-2 bg-white/5 rounded-full group-hover:text-accent transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                        </div>
                        <span>Instagram</span>
                    </a>
                    <a href="https://x.com/ramjee__prasad" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group hover:text-accent transition-colors">
                        <div className="p-2 bg-white/5 rounded-full group-hover:text-accent transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                        </div>
                        <span>X</span>
                    </a>
                    <a href="https://www.geeksforgeeks.org/profile/ramjeeprasad" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group hover:text-accent transition-colors">
                        <div className="p-2 bg-white/5 rounded-full group-hover:text-green-500 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-.517.006-1.02.048-1.512.126C6.078.69 2.426 4.084 1.438 8.532c-.32 1.44-.426 2.93-.326 4.406.214 3.166 1.552 6.09 3.768 8.222C7.096 23.388 10.466 24 12 24c1.534 0 4.904-.612 7.12-2.84 2.216-2.132 3.554-5.056 3.768-8.222.1-1.476-.006-2.966-.326-4.406C21.574 4.084 17.922.69 13.512.126A12.01 12.01 0 0012 0zm0 2c3.95 0 7.278 2.638 8.232 6.258.258 1.024.344 2.086.258 3.142-.164 2.434-1.192 4.68-2.894 6.328C16.004 19.328 14.1 20 12 20s-4.004-.672-5.596-2.272c-1.702-1.648-2.73-3.894-2.894-6.328-.086-1.056 0-2.118.258-3.142C4.722 4.638 8.05 2 12 2z" />
                                <path d="M8 7.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5h2.5v-2.5c0-1.38-1.12-2.5-2.5-2.5zm8 0c-1.38 0-2.5 1.12-2.5 2.5v2.5H16c1.38 0 2.5-1.12 2.5-2.5S17.38 7.5 16 7.5z" />
                            </svg>
                        </div>
                        <span className="hidden sm:inline">GeeksforGeeks</span>
                        <span className="sm:hidden">GFG</span>
                    </a>
                    <a href="https://discord.com/users/ramjeeprasad" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group hover:text-accent transition-colors">
                        <div className="p-2 bg-white/5 rounded-full group-hover:text-accent transition-colors">
                            <svg width="18" height="18" viewBox="0 0 127.14 96.36" className="fill-current"><path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.11,77.11,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.82,105.82,0,0,0,126.6,80.22c2.91-27.61-4.15-51.48-18.9-72.15ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" /></svg>
                        </div>
                        <span>Discord</span>
                    </a>
                </div>

                <p className="mt-8 text-xs text-gray-600 font-mono">© 2026 Ramjee Prasad</p>
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
