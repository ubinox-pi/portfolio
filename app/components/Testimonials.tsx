"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
    {
        name: "Professor / Mentor",
        role: "Academic Advisor",
        text: "Ramjee demonstrates exceptional problem-solving skills and a deep understanding of backend systems. His ability to design scalable architectures is beyond his experience level.",
        initials: "PM",
    },
    {
        name: "Team Collaborator",
        role: "Project Partner",
        text: "Working with Ramjee on our Spring Boot projects was a great experience. He writes clean, well-structured code and always ensures proper documentation.",
        initials: "TC",
    },
    {
        name: "Open Source Community",
        role: "GitHub Contributor",
        text: "Ramjee's contributions show a strong grasp of microservices architecture and modern Java practices. His code is production-quality and well-tested.",
        initials: "OS",
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const goTo = (index: number) => {
        setDirection(index > current ? 1 : -1);
        setCurrent(index);
    };

    const prev = () => {
        setDirection(-1);
        setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
    };

    const next = () => {
        setDirection(1);
        setCurrent((c) => (c + 1) % testimonials.length);
    };

    return (
        <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-10">
                    <span className="text-3xl text-accent font-bold">05.</span>
                    <h2 className="text-3xl font-bold text-white">Testimonials</h2>
                    <div className="h-[1px] bg-white/20 flex-grow hidden md:block" />
                </div>

                <div className="relative bg-zinc-900/30 backdrop-blur-md rounded-2xl border border-white/5 p-8 md:p-12 min-h-[250px] flex flex-col justify-center">
                    <Quote size={40} className="text-accent/20 absolute top-6 left-6" />

                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={current}
                            custom={direction}
                            initial={{ opacity: 0, x: direction * 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -direction * 50 }}
                            transition={{ duration: 0.3 }}
                            className="text-center"
                        >
                            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 italic">
                                &ldquo;{testimonials[current].text}&rdquo;
                            </p>

                            <div className="flex items-center justify-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">
                                    {testimonials[current].initials}
                                </div>
                                <div className="text-left">
                                    <div className="text-white font-semibold text-sm">{testimonials[current].name}</div>
                                    <div className="text-gray-400 text-xs">{testimonials[current].role}</div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <button
                        onClick={prev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors p-1"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors p-1"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={20} />
                    </button>

                    <div className="flex justify-center gap-2 mt-6">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-accent w-6" : "bg-white/20 hover:bg-white/40"}`}
                                aria-label={`Go to testimonial ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
