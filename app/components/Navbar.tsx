"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, Code, User, Briefcase, Mail, Cpu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const navItems = [
        { name: "home", path: "/", icon: Terminal },
        { name: "about", path: "#about", icon: User },
        { name: "skills", path: "#skills", icon: Cpu },
        { name: "projects", path: "#projects", icon: Code }, // Using Code icon for projects
        { name: "experience", path: "#experience", icon: Briefcase },
        { name: "contact", path: "#contact", icon: Mail },
    ];

    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-md border-b border-white/10"
        >
            <div className="flex items-center space-x-2">
                <Terminal size={18} className="text-accent" />
                <span className="ml-4 font-mono text-sm text-gray-400 hidden sm:inline-block">
                    user@ramjee-portfolio: ~$
                </span>
                <span className="ml-4 font-mono text-sm text-gray-400 sm:hidden">
                    ~/portfolio
                </span>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                    <li key={item.name}>
                        <Link
                            href={item.path}
                            className="flex items-center space-x-1 font-mono text-sm text-gray-400 hover:text-accent transition-colors"
                        >
                            <span className="text-accent">&gt;</span>
                            <span>{item.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Toggle */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-accent p-2 hover:bg-white/10 rounded-full transition-colors"
            >
                {isOpen ? <span className="text-xl">✕</span> : <span className="text-xl">☰</span>}
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute top-full left-0 right-0 bg-zinc-900/95 backdrop-blur-xl border-b border-white/10 p-4 md:hidden flex flex-col space-y-4 shadow-2xl"
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.path}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 text-gray-300 hover:text-accent transition-all"
                        >
                            <item.icon size={18} />
                            <span className="font-mono text-sm">&gt; {item.name}</span>
                        </Link>
                    ))}
                </motion.div>
            )}
        </motion.nav>
    );
}
