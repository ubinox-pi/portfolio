"use client";

import { ArrowRight, ArrowUpRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import SectionHeading from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    readTime: string;
    category: string;
    tags: string[];
}

const blogPosts: BlogPost[] = [
    {
        slug: "mono-flux-reactive-java",
        title: "Mastering Mono & Flux in Reactive Java",
        description:
            "Deep dive into reactive programming with Project Reactor. Publisher-Subscriber model, backpressure mechanisms, and building real-world reactive pipelines.",
        date: "February 16, 2026",
        readTime: "18 min read",
        category: "Reactive Systems",
        tags: ["Reactive Java", "Spring WebFlux", "Project Reactor"],
    },
    {
        slug: "git-github-guide",
        title: "Git & GitHub Mastery for Backend Engineers",
        description:
            "Production guide to version control. Branching topologies, interactive rebasing, merge strategies, atomic commits, and enterprise pull request workflows.",
        date: "December 15, 2025",
        readTime: "20 min read",
        category: "DevOps & Workflows",
        tags: ["Git", "GitHub", "DevOps"],
    },
    {
        slug: "maven-gradle-guide",
        title: "Java Build Mastery: Maven vs Gradle Internals",
        description:
            "Complete guide to Java build systems. Dependency resolution trees, plugin lifecycles, daemon performance, and multi-module project configuration.",
        date: "December 10, 2025",
        readTime: "25 min read",
        category: "Build Tooling",
        tags: ["Maven", "Gradle", "Java"],
    },
    {
        slug: "docker-commands",
        title: "Docker Production Reference & Optimization",
        description:
            "Essential Docker patterns for backend services: multi-stage builds, non-root users, volume persistence, internal networking, and Docker Compose orchestration.",
        date: "December 5, 2025",
        readTime: "10 min read",
        category: "Containers",
        tags: ["Docker", "DevOps", "Microservices"],
    },
    {
        slug: "intellij-shortcuts",
        title: "5 IntelliJ Shortcuts Every Java Dev Should Know",
        description:
            "Productivity amplification for Java developers. Structural search & replace, bytecode analysis, inline refactoring, and debugging breakpoints in IntelliJ IDEA.",
        date: "November 28, 2025",
        readTime: "5 min read",
        category: "Tooling Rigor",
        tags: ["IntelliJ", "Productivity"],
    },
    {
        slug: "spring-boot-rest-api",
        title: "Building Production-Ready REST APIs with Spring Boot",
        description:
            "Comprehensive blueprint for enterprise Spring Boot APIs: controller design, validation annotations, global exception handlers, and DTO mapping patterns.",
        date: "November 12, 2025",
        readTime: "12 min read",
        category: "API Architecture",
        tags: ["Spring Boot", "REST API", "Java"],
    },
];

export default function Blog() {
    return (
        <section id="blog" className="relative px-4 py-28 md:px-6 md:py-36">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    index="06"
                    label="Writing"
                    title={[
                        "I write about",
                        <span key="l2" className="serif-italic text-muted">what I learn.</span>,
                    ]}
                    intro="Practical deep dives into reactive paradigms, container architectures, build tool internals and resilient Java backend design."
                    aside={
                        <Link
                            href="/blog"
                            className="link-underline inline-flex items-center gap-1.5 font-mono text-xs text-accent"
                        >
                            All articles <ArrowUpRight size={13} />
                        </Link>
                    }
                />

                {/* Article list */}
                <div className="border-t border-line-strong">
                    {blogPosts.map((post, i) => (
                        <Reveal key={post.slug} delay={i * 0.06} y={16}>
                            <Link
                                href={`/blog/${post.slug}`}
                                className="group grid gap-3 border-b border-line py-7 transition-colors duration-500 hover:bg-surface/40 md:grid-cols-12 md:items-baseline md:gap-6 md:py-8"
                            >
                                {/* Meta */}
                                <div className="flex items-center gap-4 md:col-span-3">
                                    <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[10px] text-subtle">
                                        {post.category}
                                    </span>
                                    <span className="flex items-center gap-1 font-mono text-[10px] text-subtle">
                                        <Clock size={10} />
                                        {post.readTime}
                                    </span>
                                </div>

                                {/* Title + Desc */}
                                <div className="md:col-span-7">
                                    <h3 className="text-lg font-medium text-foreground transition-colors duration-300 group-hover:text-accent">
                                        {post.title}
                                    </h3>
                                    <p className="mt-1.5 text-sm leading-relaxed text-muted line-clamp-2">
                                        {post.description}
                                    </p>
                                </div>

                                {/* Date + Arrow */}
                                <div className="flex items-center justify-between md:col-span-2 md:flex-col md:items-end md:gap-2">
                                    <span className="flex items-center gap-1.5 font-mono text-[10px] text-subtle">
                                        <Calendar size={10} />
                                        {post.date.split(",")[0]}
                                    </span>
                                    <ArrowRight
                                        size={14}
                                        className="text-subtle transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
                                    />
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
