"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Keyboard, Zap, Search, Bug, Code2, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import BackToTop from "../../components/BackToTop";

// IntelliJ brand color - vibrant pink/magenta
const intellijPink = "#FC5185";
const intellijBlue = "#087CFA";

// Shortcut card component
function ShortcutCard({
    number,
    title,
    description,
    windowsKey,
    macKey,
    icon: Icon,
    tip
}: {
    number: number;
    title: string;
    description: string;
    windowsKey: string;
    macKey: string;
    icon: React.ElementType;
    tip?: string;
}) {
    const [showMac, setShowMac] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: number * 0.1 }}
            className="relative group"
        >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FC5185]/30 to-[#087CFA]/30 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-300" />
            <div className="relative bg-zinc-900/80 p-4 md:p-6 rounded-xl border border-white/10 hover:border-[#FC5185]/50 transition-all">
                {/* Header */}
                <div className="flex items-start gap-3 md:gap-4 mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-[#FC5185] to-[#087CFA] flex items-center justify-center flex-shrink-0">
                        <Icon size={20} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-[#FC5185] font-bold text-sm">#{number}</span>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-white">{title}</h3>
                    </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm md:text-base mb-4">{description}</p>

                {/* Keyboard shortcut */}
                <div className="bg-black/30 rounded-lg p-3 md:p-4 border border-white/5">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-500 font-mono">Shortcut</span>
                        <button
                            onClick={() => setShowMac(!showMac)}
                            className="text-xs text-[#FC5185] hover:text-[#087CFA] transition-colors"
                        >
                            {showMac ? "Show Windows" : "Show Mac"}
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                        {(showMac ? macKey : windowsKey).split(" + ").map((key, i) => (
                            <span key={i} className="flex items-center gap-1.5">
                                <kbd className="px-2 md:px-3 py-1.5 bg-gradient-to-b from-zinc-700 to-zinc-800 rounded-md text-white font-mono text-sm md:text-base border border-zinc-600 shadow-lg">
                                    {key}
                                </kbd>
                                {i < (showMac ? macKey : windowsKey).split(" + ").length - 1 && (
                                    <span className="text-gray-500">+</span>
                                )}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Pro tip */}
                {tip && (
                    <div className="mt-4 p-2 md:p-3 bg-[#FC5185]/10 border border-[#FC5185]/30 rounded-lg">
                        <p className="text-xs md:text-sm text-gray-300">
                            <span className="text-[#FC5185] font-bold">💡 Pro Tip: </span>
                            {tip}
                        </p>
                    </div>
                )}
            </div>
        </motion.div>
    );
}

const shortcuts = [
    {
        number: 1,
        title: "Search Everywhere",
        description: "The most powerful shortcut in IntelliJ. Find any file, class, symbol, action, or setting in your entire project with a single keystroke.",
        windowsKey: "Shift + Shift",
        macKey: "Shift + Shift",
        icon: Search,
        tip: "Press Tab to switch between 'All', 'Classes', 'Files', 'Symbols', and 'Actions' tabs for more focused results."
    },
    {
        number: 2,
        title: "Generate Code",
        description: "Instantly generate constructors, getters/setters, equals/hashCode, toString, and more. Never write boilerplate code manually again!",
        windowsKey: "Alt + Insert",
        macKey: "Cmd + N",
        icon: Code2,
        tip: "Works inside classes to generate methods, or in directories to create new files and classes."
    },
    {
        number: 3,
        title: "Smart Refactoring",
        description: "Access all refactoring options: rename, extract method/variable, inline, change signature, and more. IntelliJ handles all references automatically.",
        windowsKey: "Ctrl + Alt + Shift + T",
        macKey: "Ctrl + T",
        icon: RefreshCw,
        tip: "Use Shift + F6 for quick rename - it's the most commonly used refactoring operation."
    },
    {
        number: 4,
        title: "Quick Fix / Show Intentions",
        description: "The red light bulb's best friend! Shows all available quick fixes, intentions, and code actions at your cursor position.",
        windowsKey: "Alt + Enter",
        macKey: "Option + Enter",
        icon: Zap,
        tip: "This is your go-to for auto-imports, implementing interfaces, creating methods, and fixing errors."
    },
    {
        number: 5,
        title: "Debug Evaluate Expression",
        description: "While debugging, evaluate any expression, call methods, or inspect variables on the fly without modifying your code.",
        windowsKey: "Alt + F8",
        macKey: "Option + F8",
        icon: Bug,
        tip: "You can also select code in the editor and press this shortcut to evaluate that specific expression."
    }
];

const bonusShortcuts = [
    { keys: "Ctrl + D", mac: "Cmd + D", desc: "Duplicate line" },
    { keys: "Ctrl + Y", mac: "Cmd + Backspace", desc: "Delete line" },
    { keys: "Ctrl + /", mac: "Cmd + /", desc: "Comment line" },
    { keys: "Ctrl + B", mac: "Cmd + B", desc: "Go to declaration" },
    { keys: "Ctrl + Alt + L", mac: "Cmd + Option + L", desc: "Reformat code" },
    { keys: "Ctrl + Shift + F", mac: "Cmd + Shift + F", desc: "Find in files" },
];

export default function IntelliJShortcutsPost() {
    const [showMacBonus, setShowMacBonus] = useState(false);

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white">
            {/* Header */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-4xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
                    <Link
                        href="/#blog"
                        className="flex items-center gap-1 md:gap-2 text-gray-400 hover:text-[#FC5185] transition-colors"
                    >
                        <ArrowLeft size={18} />
                        <span className="text-sm md:text-base">Back</span>
                    </Link>
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-[#FC5185] to-[#087CFA] flex items-center justify-center">
                            <span className="text-white text-xs font-bold">IJ</span>
                        </div>
                        <span className="text-xs md:text-sm font-mono text-[#FC5185]">IntelliJ IDEA</span>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="pt-24 md:pt-32 pb-10 md:pb-16 px-4 md:px-6 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-20 left-10 w-64 md:w-96 h-64 md:h-96 bg-[#FC5185]/10 rounded-full blur-[150px]" />
                    <div className="absolute bottom-20 right-10 w-48 md:w-64 h-48 md:h-64 bg-[#087CFA]/10 rounded-full blur-[100px]" />
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                            <span className="px-2 md:px-3 py-1 bg-[#FC5185]/20 text-[#FC5185] rounded-full text-xs md:text-sm font-mono">
                                IntelliJ IDEA
                            </span>
                            <span className="px-2 md:px-3 py-1 bg-white/5 text-gray-400 rounded-full text-xs md:text-sm">
                                Productivity
                            </span>
                        </div>

                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                            5 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FC5185] to-[#087CFA]">IntelliJ Shortcuts</span> Every Java Dev Should Know
                        </h1>

                        <p className="text-base md:text-xl text-gray-400 mb-6 md:mb-8 leading-relaxed">
                            Master these keyboard shortcuts to 10x your coding speed
                            and impress your colleagues. ⌨️
                        </p>

                        <div className="flex flex-wrap items-center gap-3 md:gap-6 text-xs md:text-sm text-gray-500">
                            <div className="flex items-center gap-1 md:gap-2">
                                <User size={14} />
                                <span>Ramjee Prasad</span>
                            </div>
                            <div className="flex items-center gap-1 md:gap-2">
                                <Calendar size={14} />
                                <span>Dec 22, 2025</span>
                            </div>
                            <div className="flex items-center gap-1 md:gap-2">
                                <Clock size={14} />
                                <span>5 min</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-8 md:py-12 px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-zinc-900/50 p-4 md:p-6 rounded-xl border border-white/5">
                            <div className="flex items-start gap-3">
                                <Keyboard className="text-[#FC5185] flex-shrink-0 mt-1" size={24} />
                                <div>
                                    <h2 className="text-lg md:text-xl font-bold text-white mb-2">Why Keyboard Shortcuts Matter</h2>
                                    <p className="text-sm md:text-base text-gray-400">
                                        Every second you spend reaching for your mouse is a second you could be writing code.
                                        IntelliJ IDEA is packed with shortcuts that can dramatically speed up your workflow.
                                        Here are the <strong className="text-[#FC5185]">5 essential shortcuts</strong> that every Java developer should memorize.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Shortcuts Grid */}
            <section className="py-8 md:py-12 px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-4 md:space-y-6">
                        {shortcuts.map((shortcut) => (
                            <ShortcutCard key={shortcut.number} {...shortcut} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Bonus Shortcuts */}
            <section className="py-8 md:py-12 px-4 md:px-6 bg-gradient-to-b from-transparent via-[#FC5185]/5 to-transparent">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-[#FC5185]">🎁</span> Bonus Quick Shortcuts
                        </h2>

                        <div className="flex justify-end mb-4">
                            <button
                                onClick={() => setShowMacBonus(!showMacBonus)}
                                className="text-xs md:text-sm text-[#FC5185] hover:text-[#087CFA] transition-colors"
                            >
                                {showMacBonus ? "Show Windows" : "Show Mac"}
                            </button>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                            {bonusShortcuts.map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-zinc-900/50 p-3 md:p-4 rounded-lg border border-white/10 hover:border-[#FC5185]/50 transition-all"
                                >
                                    <div className="text-xs text-gray-500 mb-1">{item.desc}</div>
                                    <kbd className="text-[#FC5185] font-mono text-sm md:text-base">
                                        {showMacBonus ? item.mac : item.keys}
                                    </kbd>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Conclusion */}
            <section className="py-12 md:py-16 px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-4">🚀 Practice Makes Perfect!</h2>
                        <p className="text-sm md:text-base text-gray-400 mb-8 max-w-2xl mx-auto">
                            Start using these shortcuts today. It might feel slow at first, but within a week,
                            they'll become second nature and you'll wonder how you ever coded without them.
                        </p>

                        <Link
                            href="/blog/spring-boot-annotations"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FC5185] to-[#087CFA] text-white font-bold rounded-lg hover:opacity-90 transition-opacity"
                        >
                            Read: Spring Boot Annotations
                            <ArrowLeft size={18} className="rotate-180" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-4 md:px-6 border-t border-white/5">
                <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm">
                    <p>Written by <span className="text-[#FC5185]">Ramjee Prasad</span> • Backend Developer</p>
                </div>
            </footer>

            <BackToTop />
        </main>
    );
}
