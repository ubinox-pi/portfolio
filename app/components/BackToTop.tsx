"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { EASE } from "./ui/Reveal";

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggle = () => setIsVisible(window.scrollY > 500);
        toggle();
        window.addEventListener("scroll", toggle, { passive: true });
        return () => window.removeEventListener("scroll", toggle);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ ease: EASE }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 grid h-11 w-11 place-items-center rounded-full border border-line-strong bg-surface text-muted shadow-2xl transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-background"
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={18} />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
