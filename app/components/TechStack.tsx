"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SectionHeading from "./ui/SectionHeading";
import { Reveal, EASE } from "./ui/Reveal";

interface TechItem {
    name: string;
    version: string;
    icon: string;
    description?: string;
}

const categories: Record<string, TechItem[]> = {
    Languages: [
        { name: "Java", version: "21 / 25", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", description: "Virtual threads, records, pattern matching" },
        { name: "Reactive Java", version: "Project Reactor", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain-wordmark.svg", description: "Mono, Flux, backpressure streams" },
        { name: "C++", version: "20", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", description: "Data structures & low-level memory" },
        { name: "Python", version: "3.12", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", description: "Automation & scripting pipelines" },
        { name: "Android", version: "Modern SDK", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg", description: "Native mobile client development" },
    ],
    Frameworks: [
        { name: "Spring Boot", version: "3.4 / 4.x", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", description: "Microservices & enterprise REST APIs" },
        { name: "Spring WebFlux", version: "6.x", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg", description: "Non-blocking reactive Netty runtime" },
        { name: "Spring Security", version: "6.x", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", description: "JWT, OAuth2, RBAC filter chains" },
        { name: "GraphQL", version: "Java Engine", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", description: "Schema-driven flexible API querying" },
        { name: "Vaadin", version: "24", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vaadin/vaadin-original.svg", description: "Full-stack Java web applications" },
        { name: "Hibernate / JPA", version: "6.x", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg", description: "ORM, 2nd-level caching, criteria queries" },
        { name: "Spring Cloud", version: "2024.x", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", description: "Gateway routing, Eureka & distributed config" },
        { name: "Spring AI", version: "2.0", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg", description: "LLM orchestration & agentic streaming" },
    ],
    Databases: [
        { name: "PostgreSQL", version: "16", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", description: "ACID transactions, indexing, partitioning" },
        { name: "Redis", version: "7.2", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", description: "In-memory caching, distributed locks, pub/sub" },
        { name: "Firebase", version: "Realtime", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", description: "Realtime database & cloud messaging" },
        { name: "MongoDB", version: "7.0", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", description: "Document store & dynamic schemas" },
        { name: "MySQL", version: "8.0", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", description: "Relational persistence & query tuning" },
        { name: "Neo4j", version: "5.x", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg", description: "Graph algorithms & social connections" },
        { name: "MinIO", version: "S3 Compatible", icon: "https://dl.min.io/logo/Minio_logo_light/Minio_logo_light.svg", description: "Distributed blob storage" },
    ],
    Security: [
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
    ],
};

const catKeys = Object.keys(categories);

export default function TechStack() {
    const [activeTab, setActiveTab] = useState("Languages");

    return (
        <section id="skills" className="relative px-4 py-28 md:px-6 md:py-36">
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    index="02"
                    label="Stack"
                    title={[
                        "Tools I reach for",
                        <span key="l2" className="serif-italic text-muted">every single day.</span>,
                    ]}
                    intro="Production-grade Java ecosystem, reactive runtimes, distributed persistence, security and cloud infrastructure."
                />

                {/* Category tabs */}
                <Reveal>
                    <div className="mb-10 flex flex-wrap gap-2 border-b border-line pb-4">
                        {catKeys.map((cat) => {
                            const isActive = activeTab === cat;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setActiveTab(cat)}
                                    className={`relative rounded-full px-4 py-2 font-mono text-xs tracking-wide transition-colors duration-300 ${
                                        isActive
                                            ? "text-foreground"
                                            : "text-muted hover:text-foreground"
                                    }`}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="stack-tab"
                                            className="absolute inset-0 rounded-full bg-surface-2 ring-1 ring-inset ring-line-strong"
                                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{cat}</span>
                                </button>
                            );
                        })}
                    </div>
                </Reveal>

                {/* Skill grid */}
                <motion.div layout className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
                    <AnimatePresence mode="popLayout">
                        {categories[activeTab].map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.96 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.96 }}
                                transition={{ duration: 0.3, delay: index * 0.04, ease: EASE }}
                                className="group flex items-start gap-4 bg-background p-5 transition-colors duration-300 hover:bg-surface"
                            >
                                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-surface transition-colors duration-300 group-hover:border-accent/30">
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        width={28}
                                        height={28}
                                        className="max-h-7 max-w-7 object-contain transition-transform duration-500 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-sm font-medium text-foreground transition-colors duration-300 group-hover:text-accent">
                                            {skill.name}
                                        </span>
                                        <span className="leader" />
                                        <span className="shrink-0 font-mono text-[10px] text-subtle">
                                            {skill.version}
                                        </span>
                                    </div>
                                    {skill.description && (
                                        <p className="mt-1.5 text-xs leading-relaxed text-muted line-clamp-2">
                                            {skill.description}
                                        </p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
