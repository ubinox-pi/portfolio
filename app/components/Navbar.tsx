"use client";

import Link from "next/link";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { EASE } from "./ui/Reveal";

const navItems = [
    { name: "About", id: "about" },
    { name: "Stack", id: "skills" },
    { name: "Now", id: "experience" },
    { name: "Work", id: "projects" },
    { name: "Credentials", id: "certifications" },
    { name: "Writing", id: "blog" },
    { name: "Contact", id: "contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState<string>("");

    const { scrollYProgress } = useScroll();
    const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Scroll-spy: highlight the section currently in the middle of the viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: "-45% 0px -50% 0px" }
        );
        navItems.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <>
            {/* Reading progress */}
            <motion.div
                style={{ scaleX: progress }}
                className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-accent"
                aria-hidden="true"
            />

            <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
                <motion.nav
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
                    className={`flex w-full max-w-6xl items-center justify-between rounded-full py-2 pl-3 pr-2 transition-all duration-500 ${
                        scrolled ? "glass" : "border border-transparent"
                    }`}
                    aria-label="Primary"
                >
                    {/* Monogram */}
                    <Link href="/" className="group flex items-center gap-3" aria-label="Ramjee Prasad — home">
                        <span className="relative grid h-9 w-9 place-items-center rounded-full border border-line-strong bg-surface font-serif text-lg italic text-foreground transition-colors duration-300 group-hover:border-accent group-hover:text-accent">
                            rp
                        </span>
                        <span className="hidden flex-col leading-tight sm:flex">
                            <span className="text-sm font-semibold tracking-tight text-foreground">Ramjee Prasad</span>
                            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">Backend · Java</span>
                        </span>
                    </Link>

                    {/* Desktop links */}
                    <ul className="hidden items-center lg:flex">
                        {navItems.map((item) => {
                            const isActive = active === item.id;
                            return (
                                <li key={item.id} className="relative">
                                    <a
                                        href={`/#${item.id}`}
                                        className={`relative z-10 block px-3.5 py-2 text-[13px] transition-colors duration-300 ${
                                            isActive ? "text-foreground" : "text-muted hover:text-foreground"
                                        }`}
                                    >
                                        {item.name}
                                    </a>
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-active"
                                            className="absolute inset-0 rounded-full bg-white/[0.06] ring-1 ring-inset ring-white/[0.06]"
                                            transition={{ type: "spring", stiffness: 380, damping: 32 }}
                                        />
                                    )}
                                </li>
                            );
                        })}
                    </ul>

                    <div className="flex items-center gap-2">
                        <Link
                            href="/resume"
                            className="group hidden items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-[13px] font-semibold text-background transition-colors duration-300 hover:bg-accent sm:inline-flex"
                        >
                            Résumé
                            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </Link>

                        {/* Mobile toggle */}
                        <button
                            onClick={() => setIsOpen((v) => !v)}
                            className="relative grid h-10 w-10 place-items-center rounded-full border border-line-strong lg:hidden"
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isOpen}
                        >
                            <span
                                className={`absolute h-px w-4 bg-foreground transition-transform duration-300 ${
                                    isOpen ? "rotate-45" : "-translate-y-[3px]"
                                }`}
                            />
                            <span
                                className={`absolute h-px w-4 bg-foreground transition-transform duration-300 ${
                                    isOpen ? "-rotate-45" : "translate-y-[3px]"
                                }`}
                            />
                        </button>
                    </div>
                </motion.nav>
            </header>

            {/* Mobile full-screen menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ clipPath: "circle(0% at calc(100% - 44px) 40px)" }}
                        animate={{ clipPath: "circle(150% at calc(100% - 44px) 40px)" }}
                        exit={{ clipPath: "circle(0% at calc(100% - 44px) 40px)" }}
                        transition={{ duration: 0.7, ease: EASE }}
                        className="fixed inset-0 z-40 flex flex-col justify-between bg-surface px-6 pb-10 pt-28 lg:hidden"
                    >
                        <ul className="space-y-1">
                            {navItems.map((item, i) => (
                                <li key={item.id} className="overflow-hidden">
                                    <motion.a
                                        href={`/#${item.id}`}
                                        onClick={() => setIsOpen(false)}
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: 0.7, delay: 0.15 + i * 0.05, ease: EASE }}
                                        className="flex items-baseline gap-4 py-1 font-serif text-5xl text-foreground"
                                    >
                                        <span className="font-mono text-xs text-accent">0{i + 1}</span>
                                        {item.name}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center justify-between border-t border-line pt-6"
                        >
                            <Link
                                href="/resume"
                                onClick={() => setIsOpen(false)}
                                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background"
                            >
                                View Résumé <ArrowUpRight size={15} />
                            </Link>
                            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">Jamshedpur, IN</span>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
