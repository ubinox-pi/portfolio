"use client";

import { Reveal } from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const focus = [
    {
        n: "i.",
        title: "Reactive & async",
        body: "Spring WebFlux, Netty event loops and Project Reactor — non-blocking pipelines that respect backpressure.",
    },
    {
        n: "ii.",
        title: "Microservices",
        body: "Gateway routing, service discovery, JWT auth and Kafka event streams between independently deployable services.",
    },
    {
        n: "iii.",
        title: "Data architecture",
        body: "Relational models in PostgreSQL, caching and locks in Redis, and graph queries in Neo4j when the data is a network.",
    },
];

const education = [
    {
        years: "2023 — 2027",
        title: "B.Tech, Computer Science & Engineering",
        place: "Silicon Institute of Technology, Sambalpur · BPUT",
        note: "CGPA 7.46 / 10 · expected",
        current: true,
    },
    {
        years: "2021 — 2023",
        title: "Higher Secondary (XII), Science",
        place: "Jamshedpur Co-operative College · JAC Board",
        note: "",
    },
    {
        years: "2009 — 2021",
        title: "Secondary School (X)",
        place: "Gayatri Shiksha Niketan High School · CBSE",
        note: "",
    },
];

export default function About() {
    return (
        <section id="about" className="relative px-4 py-28 md:px-6 md:py-36">
            <div className="mx-auto max-w-6xl">
                <SectionHeading index="01" label="About" title={["A bit about me,", <span key="l2" className="serif-italic text-muted">and how I work.</span>]} />

                <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
                    {/* Lead */}
                    <div className="lg:col-span-7">
                        <Reveal>
                            <p className="font-serif text-[1.75rem] leading-[1.3] text-foreground md:text-[2.1rem]">
                                I&rsquo;m a Computer Science undergraduate from Jamshedpur, drawn to the unglamorous half of
                                software — the <span className="serif-italic text-accent">services, queues and databases</span>{" "}
                                that quietly hold everything up.
                            </p>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <div className="mt-10 grid gap-6 text-[15px] leading-relaxed text-muted md:grid-cols-2">
                                <p>
                                    Most of my work lives in the modern Java &amp; Spring ecosystem: microservices, non-blocking APIs
                                    with WebFlux, and event-driven pipelines on Apache Kafka. Good backend engineering, to me, is
                                    the balance between a clean domain and practical operational resilience.
                                </p>
                                <p>
                                    Outside of web services I like building network software from scratch — including a
                                    peer-to-peer file transfer protocol with its own encrypted channels, NAT traversal and onion
                                    routed relays.
                                </p>
                            </div>
                        </Reveal>
                    </div>

                    {/* Focus list */}
                    <div className="lg:col-span-5">
                        <Reveal delay={0.1}>
                            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">What I focus on</p>
                        </Reveal>
                        <ul className="border-t border-line">
                            {focus.map((f, i) => (
                                <li
                                    key={f.title}
                                    className="group border-b border-line transition-colors duration-500 hover:bg-white/[0.015]"
                                >
                                    <Reveal delay={0.12 + i * 0.08} className="grid grid-cols-[2.5rem_1fr] gap-2 py-6">
                                        <span className="font-serif text-lg italic text-accent">{f.n}</span>
                                        <div>
                                            <h3 className="text-lg font-medium text-foreground transition-transform duration-500 group-hover:translate-x-1">
                                                {f.title}
                                            </h3>
                                            <p className="mt-1.5 text-sm leading-relaxed text-muted">{f.body}</p>
                                        </div>
                                    </Reveal>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Education */}
                <div className="mt-24">
                    <Reveal>
                        <div className="mb-6 flex items-baseline justify-between">
                            <h3 className="font-serif text-3xl text-foreground md:text-4xl">Education</h3>
                            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-subtle">Academic record</span>
                        </div>
                    </Reveal>
                    <div className="border-t border-line-strong">
                        {education.map((e, i) => (
                            <Reveal key={e.title} delay={i * 0.08} y={16}>
                                <div className="group grid gap-2 border-b border-line py-6 md:grid-cols-12 md:items-baseline md:gap-6">
                                    <span className="font-mono text-xs tabular-nums text-subtle md:col-span-2">{e.years}</span>
                                    <div className="md:col-span-7">
                                        <div className="flex items-center gap-3 text-lg text-foreground md:text-xl">
                                            {e.title}
                                            {e.current && (
                                                <span className="rounded-full border border-accent/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                                                    Current
                                                </span>
                                            )}
                                        </div>
                                        <div className="mt-1 text-sm text-muted">{e.place}</div>
                                    </div>
                                    <span className="font-mono text-xs text-muted md:col-span-3 md:text-right">{e.note}</span>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
