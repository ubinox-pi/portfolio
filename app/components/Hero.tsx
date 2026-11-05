"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Coffee, Github, Linkedin } from "lucide-react";
import { EASE, MaskLine } from "./ui/Reveal";

const stack = [
    "Java 25",
    "Spring Boot 4",
    "Spring WebFlux",
    "Apache Kafka",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Kubernetes",
    "Spring AI",
    "Project Reactor",
    "Neo4j",
    "Spring Security",
];

const stats = [
    { value: "10+", label: "Microservices built" },
    { value: "05", label: "Verified certifications" },
    { value: "07", label: "Technical articles" },
    { value: "’27", label: "B.Tech CSE, graduating" },
];

function useISTClock() {
    const [time, setTime] = useState<string | null>(null);
    useEffect(() => {
        const fmt = new Intl.DateTimeFormat("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
            timeZone: "Asia/Kolkata",
        });
        const tick = () => setTime(fmt.format(new Date()));
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);
    return time;
}

function PortraitCard() {
    const ref = useRef<HTMLDivElement>(null);
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 150, damping: 18 });
    const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 150, damping: 18 });
    const glareX = useTransform(mx, [-0.5, 0.5], ["0%", "100%"]);

    const onMove = (e: React.MouseEvent) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        mx.set((e.clientX - rect.left) / rect.width - 0.5);
        my.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    const onLeave = () => {
        mx.set(0);
        my.set(0);
    };

    return (
        <div className="relative mx-auto w-full max-w-[340px] [perspective:1100px]">
            <motion.div
                ref={ref}
                onMouseMove={onMove}
                onMouseLeave={onLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="glass group relative rounded-[22px] p-2.5"
            >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[16px] bg-surface-2">
                    <Image
                        src="/ramjee_passport.png"
                        alt="Portrait of Ramjee Prasad, backend developer"
                        fill
                        priority
                        sizes="(max-width: 1024px) 80vw, 340px"
                        className="object-cover object-top grayscale-[40%] sepia-[12%] transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0 group-hover:sepia-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    {/* moving glare */}
                    <motion.div
                        style={{ left: glareX }}
                        className="pointer-events-none absolute -top-1/2 h-[200%] w-1/3 -translate-x-1/2 rotate-12 bg-white/[0.07] blur-2xl"
                    />
                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-white/80">
                        <span>Fig. 01 — The author</span>
                        <span>2026</span>
                    </div>
                </div>
                <div className="flex items-center justify-between px-2 pb-1 pt-3 font-mono text-[10.5px] text-muted">
                    <span className="flex items-center gap-2">
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        </span>
                        Open to opportunities
                    </span>
                    <span>JSR · IN</span>
                </div>
            </motion.div>

            {/* Rotating stamp */}
            <motion.div
                initial={{ scale: 0, rotate: -40 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 1.1, ease: EASE }}
                className="absolute -bottom-8 -left-8 grid h-[118px] w-[118px] place-items-center rounded-full bg-accent text-[#1a0f05] shadow-[0_20px_40px_-12px_rgba(242,134,46,0.45)] sm:-left-12"
            >
                <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full animate-spin-slow" aria-hidden="true">
                    <defs>
                        <path id="stamp-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
                    </defs>
                    <text fontSize="10" fontFamily="var(--font-jetbrains)" fontWeight={600} fill="currentColor">
                        <textPath href="#stamp-circle" textLength="272" lengthAdjust="spacing">
                            OPEN TO WORK · BACKEND · JAVA ·
                        </textPath>
                    </text>
                </svg>
                <Coffee size={26} strokeWidth={1.75} />
            </motion.div>
        </div>
    );
}

export default function Hero() {
    const time = useISTClock();

    return (
        <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-4 pb-10 pt-32 md:px-6 md:pt-36">
            <div className="mx-auto w-full max-w-6xl">
                {/* Meta row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="mb-10 flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-subtle md:mb-14"
                >
                    <span>
                        <span className="text-accent">package</span> com.ramjeeprasad;
                    </span>
                    <span className="hidden sm:inline">Backend Engineer — Java &amp; Spring</span>
                    <span className="tabular-nums">
                        Jamshedpur, IN · {time ?? "--:--:--"} IST
                    </span>
                </motion.div>

                <div className="grid items-end gap-14 lg:grid-cols-12 lg:gap-10">
                    {/* Copy */}
                    <div className="lg:col-span-8">
                        <h1 className="font-serif text-[3.1rem] leading-[0.98] tracking-[-0.02em] text-foreground sm:text-7xl lg:text-[5.4rem] xl:text-[6rem]">
                            <span className="sr-only">Ramjee Prasad — Backend Developer. </span>
                            <MaskLine animateOnMount delay={0.25}>I build the backend</MaskLine>
                            <MaskLine animateOnMount delay={0.35}>
                                you&rsquo;ll <span className="serif-italic text-accent">never</span> have
                            </MaskLine>
                            <MaskLine animateOnMount delay={0.45}>
                                to think about<span className="text-accent">.</span>
                            </MaskLine>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.75, ease: EASE }}
                            className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg"
                        >
                            Hi, I&rsquo;m <span className="text-foreground">Ramjee Prasad</span> — a CS undergrad who spends most
                            days inside Spring Boot, WebFlux and Kafka. I care about clean domain models, honest APIs, and
                            services that degrade gracefully instead of falling over.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
                            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
                        >
                            <a
                                href="#projects"
                                className="group inline-flex items-center gap-3 rounded-full bg-foreground py-2 pl-6 pr-2 text-sm font-semibold text-background transition-colors duration-300 hover:bg-accent"
                            >
                                See selected work
                                <span className="grid h-9 w-9 place-items-center rounded-full bg-background text-foreground transition-transform duration-500 group-hover:rotate-[-45deg]">
                                    <ArrowDownRight size={16} />
                                </span>
                            </a>
                            <Link href="/resume" className="link-underline inline-flex items-center gap-1.5 text-sm text-foreground">
                                Read the résumé <ArrowUpRight size={14} />
                            </Link>
                            <div className="flex items-center gap-2">
                                <a
                                    href="https://github.com/ubinox-pi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub profile"
                                    className="grid h-10 w-10 place-items-center rounded-full border border-line-strong text-muted transition-colors duration-300 hover:border-foreground hover:text-foreground"
                                >
                                    <Github size={16} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/ramjee-prasad-6b26b4349"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn profile"
                                    className="grid h-10 w-10 place-items-center rounded-full border border-line-strong text-muted transition-colors duration-300 hover:border-foreground hover:text-foreground"
                                >
                                    <Linkedin size={16} />
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Portrait */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
                        className="lg:col-span-4"
                    >
                        <PortraitCard />
                    </motion.div>
                </div>

                {/* Stats */}
                <motion.dl
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.1 }}
                    className="mt-20 grid grid-cols-2 border-t border-line md:grid-cols-4"
                >
                    {stats.map((s, i) => (
                        <div
                            key={s.label}
                            className={`py-6 pr-4 ${i % 2 === 1 ? "pl-4 md:pl-6" : ""} ${i > 1 ? "border-t border-line md:border-t-0" : ""} ${
                                i > 0 ? "md:border-l md:border-line md:pl-6" : ""
                            }`}
                        >
                            <dt className="sr-only">{s.label}</dt>
                            <dd className="font-serif text-4xl text-foreground md:text-5xl">{s.value}</dd>
                            <dd className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">{s.label}</dd>
                        </div>
                    ))}
                </motion.dl>
            </div>

            {/* Marquee */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.3 }}
                className="marquee-mask relative -mx-4 mt-4 overflow-hidden border-y border-line py-5 md:-mx-6"
                aria-hidden="true"
            >
                <div className="animate-marquee flex w-max">
                    {[0, 1].map((dup) => (
                        <div key={dup} className="flex shrink-0 items-center">
                            {stack.map((tech) => (
                                <span key={`${dup}-${tech}`} className="flex items-center">
                                    <span className="px-6 font-serif text-2xl italic text-muted md:text-3xl">{tech}</span>
                                    <span className="text-accent">✦</span>
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
