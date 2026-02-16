"use client";

import { motion } from "framer-motion";
import { Lightbulb, Rocket, Brain, Cloud } from "lucide-react";

const learningItems = [
    {
        title: "Kubernetes",
        description: "Container orchestration, pods, services, and deployments at scale",
        icon: Cloud,
        progress: 40,
        color: "#326CE5",
    },
    {
        title: "System Design",
        description: "Designing scalable distributed systems, load balancing, and caching strategies",
        icon: Brain,
        progress: 55,
        color: "#FF6B6B",
    },
    {
        title: "Cloud Architecture",
        description: "Multi-cloud deployment strategies with AWS and GCP",
        icon: Rocket,
        progress: 35,
        color: "#4285F4",
    },
    {
        title: "Next.js",
        description: "Full-stack React framework for production-grade web applications",
        icon: Lightbulb,
        progress: 60,
        color: "#FFFFFF",
    },
];

export default function CurrentlyLearning() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-4 mb-10">
                    <span className="text-3xl text-accent font-bold">03.</span>
                    <h2 className="text-3xl font-bold text-white">Currently Learning</h2>
                    <div className="h-[1px] bg-white/20 flex-grow hidden md:block" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {learningItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="bg-zinc-900/30 backdrop-blur-md p-5 rounded-xl border border-white/5 hover:border-opacity-50 transition-all duration-300 group"
                            style={{ borderColor: `${item.color}20` }}
                        >
                            <div
                                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                                style={{ backgroundColor: `${item.color}15` }}
                            >
                                <item.icon size={20} style={{ color: item.color }} />
                            </div>

                            <h3 className="text-white font-bold mb-1">{item.title}</h3>
                            <p className="text-gray-400 text-xs mb-4 leading-relaxed">{item.description}</p>

                            <div className="space-y-1.5">
                                <div className="flex justify-between text-[10px]">
                                    <span className="text-gray-500">Progress</span>
                                    <span style={{ color: item.color }}>{item.progress}%</span>
                                </div>
                                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${item.progress}%` }}
                                        transition={{ duration: 1, delay: index * 0.15 }}
                                        viewport={{ once: true }}
                                        className="h-full rounded-full"
                                        style={{ backgroundColor: item.color }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
