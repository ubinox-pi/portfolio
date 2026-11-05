"use client";

import type { ReactNode } from "react";
import { MaskLine, Reveal } from "./Reveal";

interface SectionHeadingProps {
    index: string;
    label: string;
    title: ReactNode[];
    intro?: ReactNode;
    aside?: ReactNode;
}

/**
 * Editorial section header:
 *   (01) ABOUT ───────────────────────
 *   Big serif title, line by line
 */
export default function SectionHeading({ index, label, title, intro, aside }: SectionHeadingProps) {
    return (
        <header className="mb-14 md:mb-20">
            <Reveal y={12}>
                <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                    <span className="text-accent">({index})</span>
                    <span>{label}</span>
                    <span className="h-px flex-1 bg-line" />
                </div>
            </Reveal>

            <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <h2 className="font-serif text-[2.6rem] leading-[1.02] tracking-[-0.01em] text-foreground sm:text-6xl md:text-7xl">
                    {title.map((line, i) => (
                        <MaskLine key={i} delay={i * 0.08}>
                            {line}
                        </MaskLine>
                    ))}
                </h2>
                {aside && <Reveal delay={0.2} className="shrink-0">{aside}</Reveal>}
            </div>

            {intro && (
                <Reveal delay={0.15}>
                    <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted md:text-base">{intro}</p>
                </Reveal>
            )}
        </header>
    );
}
