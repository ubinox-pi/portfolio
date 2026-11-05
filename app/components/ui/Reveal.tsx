"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export const EASE = [0.16, 1, 0.3, 1] as const;

interface RevealProps {
    children: ReactNode;
    delay?: number;
    y?: number;
    className?: string;
}

/** Fades + lifts content into view once, with a soft blur. */
export function Reveal({ children, delay = 0, y = 28, className }: RevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay, ease: EASE }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/** Text slides up from behind a mask, line by line. */
export function MaskLine({
    children,
    delay = 0,
    className,
    animateOnMount = false,
}: {
    children: ReactNode;
    delay?: number;
    className?: string;
    animateOnMount?: boolean;
}) {
    const animation = { y: "0%" };
    return (
        <span className={`block overflow-hidden pb-[0.08em] -mb-[0.08em] ${className ?? ""}`}>
            <motion.span
                className="block will-change-transform"
                initial={{ y: "110%" }}
                {...(animateOnMount
                    ? { animate: animation }
                    : { whileInView: animation, viewport: { once: true, margin: "-60px" } })}
                transition={{ duration: 1.05, delay, ease: EASE }}
            >
                {children}
            </motion.span>
        </span>
    );
}
