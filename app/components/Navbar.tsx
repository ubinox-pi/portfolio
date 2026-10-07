"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
    { name: "About", path: "/#about" },
    { name: "Skills", path: "/#skills" },
    { name: "Experience", path: "/#experience" },
    { name: "Projects", path: "/#projects" },
    { name: "Certifications", path: "/#certifications" },
    { name: "Blog", path: "/#blog" },
    { name: "Contact", path: "/#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3 md:pt-4 transition-all duration-300">
            <motion.nav
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`w-full max-w-6xl flex items-center justify-between px-5 md:px-7 py-3 rounded-2xl md:rounded-full transition-all duration-300 border ${
                    scrolled
                        ? "bg-[#090a0f]/80 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/60"
                        : "bg-[#0e1017]/60 backdrop-blur-lg border-white/5 shadow-lg shadow-black/30"
                }`}
            >
                {/* Brand / Logo */}
                <Link href="/" className="flex items-center gap-2.5 group">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                    </span>
                    <span className="font-semibold text-sm md:text-base text-white tracking-tight group-hover:text-amber-400 transition-colors">
                        Ramjee Prasad
                    </span>
                    <span className="hidden sm:inline-block text-[11px] font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
                        Backend Engineer
                    </span>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-1 lg:gap-2">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.path}
                                className="px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition-all duration-200"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right Action */}
                <div className="hidden md:flex items-center gap-3">
                    <Link
                        href="/resume"
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 shadow-md shadow-amber-500/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <FileText size={13} />
                        Resume
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-zinc-300 hover:text-white p-1.5 rounded-lg hover:bg-white/5 transition-colors"
                    aria-label="Toggle navigation menu"
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </motion.nav>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-16 left-4 right-4 bg-[#0e1017]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 md:hidden shadow-2xl shadow-black/80 flex flex-col gap-1 z-50"
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                onClick={() => setIsOpen(false)}
                                className="px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="pt-2 mt-1 border-t border-white/10">
                            <Link
                                href="/resume"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 transition-colors"
                            >
                                <FileText size={14} />
                                View Resume
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
