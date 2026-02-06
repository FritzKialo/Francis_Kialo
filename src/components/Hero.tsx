'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/images/me-1.jpg"
                    alt="Background"
                    fill
                    className="object-cover opacity-20"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950" />
            </div>

            <div className="container relative z-10 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl text-cyan-400 font-medium mb-4 tracking-wide uppercase">
                        Hello, I am
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-display tracking-tight text-white drop-shadow-lg">
                        Francis Kialo
                    </h1>

                    <div className="h-12 md:h-16 mb-8 flex justify-center items-center text-2xl md:text-4xl text-slate-300 font-light">
                        <span className="mr-3">I am a</span>
                        <Typewriter words={["Content Writer", "Freelancer", "Data Analyst", "App Developer"]} />
                    </div>

                    <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl mb-10 leading-relaxed">
                        Delivering excellence since 2022. Expert in EssayPro, PowerBI, and Full-Stack Development.
                        Aligning skills with success.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <a href="#contact" className="px-8 py-3 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-semibold transition-all shadow-lg hover:shadow-cyan-500/25">
                            Hire Me
                        </a>
                        <a href="#skills" className="px-8 py-3 rounded-full border border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-white transition-all">
                            View Skills
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-slate-500"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <ArrowDown className="w-8 h-8" />
            </motion.div>
        </section>
    );
}

function Typewriter({ words }: { words: string[] }) {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // Blinking cursor
    useEffect(() => {
        const timeout = setTimeout(() => setBlink(!blink), 500);
        return () => clearTimeout(timeout);
    }, [blink]);

    // Typing logic
    useEffect(() => {
        if (index >= words.length) {
            setIndex(0);
            return;
        }

        if (subIndex === words[index].length + 1 && !reverse) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt((Math.random() * 30).toString())));
        // Randomize slightly for realism

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words]);

    return (
        <span className="font-bold text-white relative">
            {words[index].substring(0, subIndex)}
            <span className={`absolute -right-1 top-0 bottom-0 w-[2px] bg-cyan-400 transition-opacity ${blink ? 'opacity-100' : 'opacity-0'}`}></span>
        </span>
    );
}
