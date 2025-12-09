"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const javaKeywords = [
    "@Bean", "public static void", "System.out",
    "extends", "implements", "try/catch",
    "Stream.of()", "Optional<?>", "JVM",
    "SpringApplication", "@Autowired", "List<String>",
    "Runnable", "Thread", "GarbageCollector",
    "dependency-injection", "microservice"
];

export default function JavaBackground() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Base Grid Pattern - Restored */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}
            />

            {/* Spotlight - Brighter & Larger */}
            <motion.div
                className="absolute w-[600px] h-[600px] bg-accent/20 rounded-full blur-[150px]"
                animate={{
                    x: mousePosition.x - 300,
                    y: mousePosition.y - 300
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.1 }} // faster follow
            />

            {/* Floating Keywords */}
            {javaKeywords.map((keyword, i) => {
                // Deterministic positioning
                const top = (i * 17) % 90 + 5;
                const left = (i * 23) % 90 + 5;
                const duration = 15 + (i % 5) * 5;

                return (
                    <motion.div
                        key={i}
                        className="absolute text-gray-500/20 font-mono font-bold select-none whitespace-nowrap"
                        style={{
                            top: `${top}%`,
                            left: `${left}%`,
                            fontSize: `${1 + (i % 3) * 0.5}rem`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.1, 0.4, 0.1], // Higher max opacity
                        }}
                        transition={{
                            duration: duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 2
                        }}
                    >
                        {keyword}
                    </motion.div>
                );
            })}
        </div>
    );
}
