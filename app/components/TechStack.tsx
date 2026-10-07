"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Layers, FileCode, Check, Copy, Shield, Cloud, Database, Cpu, Wrench } from "lucide-react";

interface TechItem {
    name: string;
    version: string;
    icon: string;
    description?: string;
}

const categories: Record<string, TechItem[]> = {
    "Languages": [
        { name: "Java", version: "21 / 25", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", description: "Virtual threads, records, pattern matching" },
        { name: "Reactive Java", version: "Project Reactor", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain-wordmark.svg", description: "Mono, Flux, backpressure streams" },
        { name: "C++", version: "20", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", description: "Data structures & low-level memory" },
        { name: "Python", version: "3.12", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", description: "Automation & scripting pipelines" },
        { name: "Android", version: "Modern SDK", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg", description: "Native mobile client development" },
    ],
    "Frameworks": [
        { name: "Spring Boot", version: "3.4 / 4.x", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", description: "Microservices & enterprise REST APIs" },
        { name: "Spring WebFlux", version: "6.x", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg", description: "Non-blocking reactive Netty runtime" },
        { name: "Spring Security", version: "6.x", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", description: "JWT, OAuth2, RBAC filter chains" },
        { name: "GraphQL", version: "Java Engine", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", description: "Schema-driven flexible API querying" },
        { name: "Vaadin", version: "24", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vaadin/vaadin-original.svg", description: "Full-stack Java web applications" },
        { name: "Hibernate / JPA", version: "6.x", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg", description: "ORM, 2nd-level caching, criteria queries" },
        { name: "Spring Cloud", version: "2024.x", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", description: "Gateway routing, Eureka & distributed config" },
        { name: "Spring AI", version: "2.0", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg", description: "LLM orchestration & agentic streaming" },
    ],
    "Databases": [
        { name: "PostgreSQL", version: "16", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", description: "ACID transactions, indexing, partitioning" },
        { name: "Redis", version: "7.2", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", description: "In-memory caching, distributed locks, pub/sub" },
        { name: "Firebase", version: "Realtime", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", description: "Realtime database & cloud messaging" },
        { name: "MongoDB", version: "7.0", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", description: "Document store & dynamic schemas" },
        { name: "MySQL", version: "8.0", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", description: "Relational persistence & query tuning" },
        { name: "Neo4j", version: "5.x", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg", description: "Graph algorithms & social connections" },
        { name: "MinIO", version: "S3 Compatible", icon: "https://dl.min.io/logo/Minio_logo_light/Minio_logo_light.svg", description: "Distributed blob storage" },
    ],
    "Security": [
        { name: "JWT", version: "RFC 7519", icon: "https://jwt.io/img/pic_logo.svg", description: "Stateless claims-based authentication" },
        { name: "OAuth2", version: "2.1", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oauth/oauth-original.svg", description: "Delegated authorization & SSO identity" },
        { name: "Spring Security", version: "6.x", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", description: "Method-level RBAC & security filter chains" },
    ],
    "Cloud & DevOps": [
        { name: "Docker", version: "26.x", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", description: "Multi-stage builds & containerization" },
        { name: "Kubernetes", version: "1.30", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", description: "Pod orchestration, manifests & ingress" },
        { name: "Jenkins", version: "2.440", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", description: "Automated CI/CD build & test pipelines" },
        { name: "Google Cloud", version: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", description: "Cloud computing & managed clusters" },
        { name: "AWS", version: "Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", description: "EC2, S3, RDS cloud infrastructure" },
        { name: "Ubuntu", version: "22.04 LTS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg", description: "Debian-based server environment & systemd" },
    ],
    "Messaging & Tools": [
        { name: "Apache Kafka", version: "3.7", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg", description: "Event streaming, consumer groups, partitions" },
        { name: "RabbitMQ", version: "3.13", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg", description: "AMQP message brokering & dead-lettering" },
        { name: "Git", version: "2.44", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", description: "Branching workflows, interactive rebasing" },
        { name: "Maven", version: "3.9", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg", description: "Multi-module builds & dependency trees" },
        { name: "Gradle", version: "8.7", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-original.svg", description: "Kotlin DSL & incremental caching" },
        { name: "JUnit 5", version: "5.10", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-original.svg", description: "Unit, mock & integration tests" },
        { name: "Postman", version: "11.x", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", description: "API contract testing & mock servers" },
    ]
};

export default function TechStack() {
    const [activeTab, setActiveTab] = useState("Languages");
    const [activeConfigFile, setActiveConfigFile] = useState<"pom" | "yml">("pom");

    return (
        <section id="skills" className="py-24 px-4 md:px-6 relative">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                        02 / ARSENAL
                    </span>
                    <div className="h-[1px] bg-white/10 flex-grow" />
                </div>
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                        Technical Arsenal & Infrastructure
                    </h2>
                    <p className="text-zinc-400 text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
                        Production-grade backend engineering stack with deep expertise in the Java ecosystem, reactive asynchronous runtimes, distributed persistence, security, and cloud infrastructure.
                    </p>
                </div>

                {/* Main Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left: Category Navigation & Skill Cards Grid (7 cols) */}
                    <div className="lg:col-span-7 space-y-6">
                        {/* Tab Filter Pills */}
                        <div className="flex flex-wrap gap-2">
                            {Object.keys(categories).map((cat) => {
                                const isActive = activeTab === cat;
                                return (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveTab(cat)}
                                        className={`px-3.5 py-1.5 rounded-xl text-xs font-mono tracking-wide whitespace-nowrap transition-all duration-200 border shrink-0 ${
                                            isActive
                                                ? "bg-amber-500/10 border-amber-500/40 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.15)] font-semibold"
                                                : "bg-[#0e1017]/60 border-white/10 text-zinc-400 hover:text-white hover:border-white/20"
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Interactive Skill Cards Grid */}
                        <motion.div
                            layout
                            className="grid grid-cols-2 sm:grid-cols-3 gap-3.5"
                        >
                            <AnimatePresence mode="popLayout">
                                {categories[activeTab].map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.2, delay: index * 0.03 }}
                                        className="bg-[#0e1017]/70 backdrop-blur-md p-4 rounded-xl border border-white/10 hover:border-amber-500/40 hover:bg-[#0e1017]/95 transition-all duration-300 group flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="flex items-center justify-between mb-3">
                                                <div className="h-10 w-10 p-1.5 rounded-lg bg-white/5 border border-white/5 group-hover:border-amber-500/20 flex items-center justify-center transition-colors">
                                                    <img
                                                        src={skill.icon}
                                                        alt={skill.name}
                                                        width={32}
                                                        height={32}
                                                        className="max-h-full max-w-full object-contain filter group-hover:brightness-110 transition-all"
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <span className="text-[10px] font-mono text-zinc-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                                                    {skill.version}
                                                </span>
                                            </div>

                                            <div className="text-white font-semibold text-sm group-hover:text-amber-300 transition-colors">
                                                {skill.name}
                                            </div>

                                            {skill.description && (
                                                <p className="text-[11px] text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                                                    {skill.description}
                                                </p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    </div>

                    {/* Right: Architectural Code Inspector (5 cols) */}
                    <div className="lg:col-span-5 bg-[#0e1017]/85 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex flex-col h-[520px]">
                        {/* Editor Tab Bar */}
                        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.02]">
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setActiveConfigFile("pom")}
                                    className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono transition-colors ${
                                        activeConfigFile === "pom"
                                            ? "bg-amber-500/10 text-amber-300 border border-amber-500/30"
                                            : "text-zinc-400 hover:text-white"
                                    }`}
                                >
                                    <FileCode size={13} />
                                    pom.xml
                                </button>
                                <button
                                    onClick={() => setActiveConfigFile("yml")}
                                    className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono transition-colors ${
                                        activeConfigFile === "yml"
                                            ? "bg-amber-500/10 text-amber-300 border border-amber-500/30"
                                            : "text-zinc-400 hover:text-white"
                                    }`}
                                >
                                    <Layers size={13} />
                                    application.yml
                                </button>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-mono text-zinc-500">
                                    {activeConfigFile === "pom" ? "Maven 3.9" : "Spring Boot 3.4"}
                                </span>
                            </div>
                        </div>

                        {/* Editor Body */}
                        <div className="p-4 overflow-y-auto font-mono text-xs text-zinc-300 flex-grow custom-scrollbar leading-relaxed">
                            {activeConfigFile === "pom" ? (
                                <div className="space-y-1">
                                    <div className="text-zinc-500">&lt;!-- Enterprise Microservice Dependencies --&gt;</div>
                                    <div className="text-zinc-500">&lt;<span className="text-amber-400">dependencies</span>&gt;</div>
                                    {categories[activeTab].map((skill) => (
                                        <div key={skill.name} className="pl-4 py-1 border-l border-white/5 my-1 hover:bg-white/[0.03] transition-colors">
                                            <div className="text-zinc-500">&lt;<span className="text-amber-400">dependency</span>&gt;</div>
                                            <div className="pl-4 text-zinc-400">
                                                &lt;<span className="text-sky-400">groupId</span>&gt;<span className="text-zinc-200">org.springframework.boot</span>&lt;/<span className="text-sky-400">groupId</span>&gt;
                                            </div>
                                            <div className="pl-4 text-zinc-400">
                                                &lt;<span className="text-sky-400">artifactId</span>&gt;<span className="text-amber-300">{skill.name.toLowerCase().replace(/[\s/.]+/g, '-')}-module</span>&lt;/<span className="text-sky-400">artifactId</span>&gt;
                                            </div>
                                            <div className="pl-4 text-zinc-400">
                                                &lt;<span className="text-sky-400">version</span>&gt;<span className="text-emerald-400">{skill.version}</span>&lt;/<span className="text-sky-400">version</span>&gt;
                                            </div>
                                            <div className="text-zinc-500">&lt;/<span className="text-amber-400">dependency</span>&gt;</div>
                                        </div>
                                    ))}
                                    <div className="text-zinc-500">&lt;/<span className="text-amber-400">dependencies</span>&gt;</div>
                                </div>
                            ) : (
                                <div className="space-y-1 text-zinc-300">
                                    <div className="text-zinc-500"># Spring Boot Production Cluster Configuration</div>
                                    <div><span className="text-amber-400">spring:</span></div>
                                    <div className="pl-4"><span className="text-sky-400">application:</span></div>
                                    <div className="pl-8"><span className="text-sky-400">name:</span> <span className="text-emerald-400">neptune-gateway-service</span></div>
                                    <div className="pl-4"><span className="text-sky-400">threads:</span></div>
                                    <div className="pl-8"><span className="text-sky-400">virtual:</span></div>
                                    <div className="pl-12"><span className="text-sky-400">enabled:</span> <span className="text-amber-300">true</span> <span className="text-zinc-500"># Java 21+ Project Loom</span></div>
                                    <div className="pl-4"><span className="text-sky-400">security:</span></div>
                                    <div className="pl-8"><span className="text-sky-400">oauth2:</span></div>
                                    <div className="pl-12"><span className="text-sky-400">resourceserver:</span></div>
                                    <div className="pl-16"><span className="text-sky-400">jwt:</span></div>
                                    <div className="pl-20"><span className="text-sky-400">issuer-uri:</span> <span className="text-emerald-400">https://auth.neptune.internal</span></div>
                                    <div className="pl-4"><span className="text-sky-400">data:</span></div>
                                    <div className="pl-8"><span className="text-sky-400">redis:</span></div>
                                    <div className="pl-12"><span className="text-sky-400">host:</span> <span className="text-zinc-200">10.0.1.45</span></div>
                                    <div className="pl-12"><span className="text-sky-400">port:</span> <span className="text-emerald-400">6379</span></div>
                                    <div className="pl-4"><span className="text-sky-400">kafka:</span></div>
                                    <div className="pl-8"><span className="text-sky-400">bootstrap-servers:</span> <span className="text-zinc-200">kafka-cluster:9092</span></div>
                                    <div className="pl-8"><span className="text-sky-400">consumer:</span></div>
                                    <div className="pl-12"><span className="text-sky-400">group-id:</span> <span className="text-emerald-400">financial-ledger-group</span></div>
                                    <div><span className="text-amber-400">server:</span></div>
                                    <div className="pl-4"><span className="text-sky-400">port:</span> <span className="text-emerald-400">8080</span></div>
                                </div>
                            )}
                        </div>

                        {/* Editor Status Bar */}
                        <div className="px-4 py-2 border-t border-white/10 bg-white/[0.02] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                            <span className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                Runtime: Reactive Netty Engine
                            </span>
                            <span>UTF-8 • LF</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
