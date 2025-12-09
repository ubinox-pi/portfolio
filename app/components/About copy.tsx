"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
                <span className="text-3xl text-accent font-bold">01.</span>
                <h2 className="text-3xl font-bold text-white">About Ramjee</h2>
                <div className="h-[1px] bg-white/20 flex-grow" />
            </div>

            <div className="grid md:grid-cols-3 gap-10">
                <div className="md:col-span-2 text-gray-400 leading-relaxed space-y-4">
                    <p>
                        Hello! I'm <span className="text-accent">Ramjee Prasad</span>, a highly motivated Computer Science undergraduate (2023-2027) with a deep passion for <span className="text-white">backend development</span> and <span className="text-white">distributed systems</span>.
                    </p>
                    <p>
                        My journey involves deep-diving into <span className="text-accent">Java & Spring Boot</span> ecosystems, building scalable applications, and exploring the depths of OS-level programming. I love turning complex problems into clean, efficient code.
                    </p>
                    <p>
                        Currently, I'm focusing on cloud-native microservices and realtime systems. I'm always looking for new challenges to apply my skills in <span className="text-white">React, Docker, and Kafka</span>.
                    </p>

                    <div className="mt-8">
                        <h3 className="text-white font-bold mb-4">Education</h3>
                        <div className="border-l-2 border-accent pl-4">
                            <div className="text-white font-bold">B.Tech in Computer Science and Engineering</div>
                            <div className="text-gray-500 text-sm">Silicon Institute of Technology | 2023 - 2027</div>
                        </div>
                        <div className="border-l-2 border-accent pl-4 mt-4">
                            <div className="text-white font-bold">12th Grade</div>
                            <div className="text-gray-500 text-sm">Jamshedpur Co-operative College | 2021 - 2023</div>
                        </div>
                        <div className="border-l-2 border-accent pl-4 mt-4">
                            <div className="text-white font-bold">10th Grade</div>
                            <div className="text-gray-500 text-sm">Gayatri Shiksha Niketan High School | 2009 - 2021</div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="aspect-square rounded-lg bg-gray-800 border-2 border-accent relative overflow-hidden group">
                        {/* Placeholder for Profile Image - generating a colorful block for now */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 transition-colors flex items-center justify-center">
                            <span className="text-6xl">👨‍💻</span>
                        </div>
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors duration-300" />
                    </div>
                </div>
            </div>
        </section>
    );
}
