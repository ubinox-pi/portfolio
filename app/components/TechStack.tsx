"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const categories = {
    "Languages": [
        { name: "Java", version: "21", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Reactive Java", version: "Flow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain-wordmark.svg" },
        { name: "C++", version: "20", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "Python", version: "3.12", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Android", version: "SDK", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
    ],
    "Frameworks": [
        { name: "Spring Boot", version: "3.2", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { name: "Spring WebFlux", version: "6.0", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" },
        { name: "Microservices", version: "Arch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
        { name: "Vaadin", version: "24", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vaadin/vaadin-original.svg" },
        { name: "Hibernate", version: "6.0", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg" },
        { name: "GraphQL", version: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
    ],
    "Databases": [
        { name: "PostgreSQL", version: "16", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Redis", version: "7.0", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
        { name: "MongoDB", version: "7.0", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", version: "8.0", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Firebase", version: "Realtime", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    ],
    "DevOps & Tools": [
        { name: "Docker", version: "24.0", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Git", version: "2.4", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Jenkins", version: "2.4", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
        { name: "Kafka", version: "3.6", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
        { name: "RabbitMQ", version: "3.12", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg" },
        { name: "AWS", version: "Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Gradle", version: "8.0", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-original.svg" },
        { name: "Maven", version: "3.9", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg" },
        { name: "Postman", version: "10", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
        { name: "JUnit5", version: "5.10", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-original.svg" },
    ],
    "Operating Systems": [
        { name: "Red Hat", version: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redhat/redhat-original.svg" },
        { name: "Ubuntu", version: "22.04", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" },
        { name: "Linux", version: "Kernel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    ],
    "Security": [
        { name: "JWT", version: "Auth", icon: "https://jwt.io/img/pic_logo.svg" },
        { name: "OAuth2", version: "Security", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oauth/oauth-original.svg" },
        { name: "Spring Security", version: "6.0", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    ]
};

export default function TechStack() {
    const [activeTab, setActiveTab] = useState("Languages");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <section id="skills" className="py-24 px-6 relative">
            <div className="max-w-6xl mx-auto bg-zinc-900/30 backdrop-blur-md p-8 rounded-2xl border border-white/5">
                <div className="flex items-center gap-4 mb-12">
                    <span className="text-2xl md:text-3xl text-accent font-bold">02.</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">Technical Arsenal</h2>
                    <div className="h-[1px] bg-white/20 flex-grow" />
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    <div className="hidden lg:block">
                        <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
                            {Object.keys(categories).map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveTab(cat)}
                                    className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-mono transition-all duration-300 border ${activeTab === cat
                                        ? "bg-accent/10 border-accent text-accent shadow-[0_0_10px_rgba(250,204,21,0.2)]"
                                        : "bg-white/5 border-white/5 text-gray-400 hover:text-white hover:border-white/20"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>



                        <motion.div
                            layout
                            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                        >
                            <AnimatePresence mode="popLayout">
                                {categories[activeTab as keyof typeof categories].map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.2, delay: index * 0.05 }}
                                        className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-accent/50 hover:bg-white/10 transition-all group flex flex-col items-center justify-center text-center gap-2 cursor-pointer"
                                    >
                                        <div className="h-12 w-12 flex items-center justify-center">
                                            <img
                                                src={skill.icon}
                                                alt={skill.name}
                                                className="max-h-full max-w-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                                            />
                                        </div>
                                        <div>
                                            <div className="text-white font-bold text-sm">{skill.name}</div>
                                            <div className="text-xs text-gray-500 font-mono">v{skill.version}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-purple-500/20 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative bg-[#0d1117] p-4 md:p-6 rounded-lg border border-white/10 shadow-2xl font-mono text-xs md:text-sm overflow-hidden h-[350px] md:h-[500px] flex flex-col">
                            <div className="flex items-center justify-center lg:justify-between border-b border-white/5 pb-4 mb-4">
                                <div className="hidden lg:flex gap-2">
                                    <div className="w-3 h-3 text-gray-500">_</div>
                                    <div className="w-3 h-3 text-gray-500">□</div>
                                    <div className="w-3 h-3 text-gray-500">x</div>
                                </div>
                                {/* Desktop Filename */}
                                <div className="hidden lg:block text-xs text-gray-500">pom.xml - {activeTab}</div>

                                {/* Mobile Dropdown - VS Code Style File Picker */}
                                <div className="lg:hidden relative z-50">
                                    <button
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className="flex items-center gap-2 text-xs font-mono text-accent bg-white/5 px-3 py-1.5 rounded border border-white/10 hover:bg-white/10 transition-colors"
                                    >
                                        <span>{activeTab}.xml</span>
                                        {isDropdownOpen ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                                    </button>

                                    {/* Dropdown Menu */}
                                    <AnimatePresence>
                                        {isDropdownOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="absolute top-full left-0 mt-2 w-48 bg-[#0d1117] border border-white/10 rounded-lg shadow-xl overflow-hidden"
                                            >
                                                {Object.keys(categories).map((cat) => (
                                                    <button
                                                        key={cat}
                                                        onClick={() => {
                                                            setActiveTab(cat);
                                                            setIsDropdownOpen(false);
                                                        }}
                                                        className={`w-full text-left px-4 py-2 text-xs font-mono border-l-2 hover:bg-white/5 transition-colors flex items-center justify-between ${activeTab === cat
                                                            ? "border-accent text-white bg-white/5"
                                                            : "border-transparent text-gray-400"
                                                            }`}
                                                    >
                                                        {cat}.xml
                                                    </button>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>


                            <div className="overflow-y-auto custom-scrollbar flex-grow">
                                <div className="text-gray-500 mb-2">&lt;!-- {activeTab} Dependencies --&gt;</div>
                                <div className="text-gray-400">&lt;<span className="text-pink-400">dependencies</span>&gt;</div>

                                <div className="pl-4 space-y-1 my-2">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeTab}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {categories[activeTab as keyof typeof categories].map((skill) => (
                                                <div key={skill.name} className="hover:bg-white/5 p-1 rounded transition-colors -ml-2 pl-2">
                                                    <div className="text-gray-400">&lt;<span className="text-pink-400">dependency</span>&gt;</div>
                                                    <div className="pl-4">
                                                        <span className="text-gray-400">&lt;</span><span className="text-blue-400">groupId</span><span className="text-gray-400">&gt;</span>
                                                        <span className="text-white">com.{skill.name.toLowerCase().replace(/\s+/g, '.')}</span>
                                                        <span className="text-gray-400">&lt;/</span><span className="text-blue-400">groupId</span><span className="text-gray-400">&gt;</span>
                                                    </div>
                                                    <div className="pl-4">
                                                        <span className="text-gray-400">&lt;</span><span className="text-blue-400">artifactId</span><span className="text-gray-400">&gt;</span>
                                                        <span className="text-yellow-300">{skill.name.toLowerCase().replace(/\s+/g, '-')}</span>
                                                        <span className="text-gray-400">&lt;/</span><span className="text-blue-400">artifactId</span><span className="text-gray-400">&gt;</span>
                                                    </div>
                                                    <div className="pl-4">
                                                        <span className="text-gray-400">&lt;</span><span className="text-blue-400">version</span><span className="text-gray-400">&gt;</span>
                                                        <span className="text-green-400">{skill.version}</span>
                                                        <span className="text-gray-400">&lt;/</span><span className="text-blue-400">version</span><span className="text-gray-400">&gt;</span>
                                                    </div>
                                                    <div className="text-gray-400">&lt;/<span className="text-pink-400">dependency</span>&gt;</div>
                                                </div>
                                            ))}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                                <div className="text-gray-400">&lt;/<span className="text-pink-400">dependencies</span>&gt;</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
