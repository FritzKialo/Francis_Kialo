'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Code, Database, Globe, Server, Shield,
    Briefcase, Users, Cpu, TrendingUp, Heart
} from 'lucide-react';
import clsx from 'clsx';

const skillCategories = [
    {
        id: 'programming',
        name: 'Programming',
        icon: Code,
        skills: ['Java', 'C++', 'Object-Oriented Programming', 'HTML', 'CSS', 'JavaScript']
    },
    {
        id: 'web',
        name: 'Web Dev',
        icon: Globe,
        skills: ['Internet Programming', 'Web Design', 'Application Programming', 'E-Commerce Systems']
    },
    {
        id: 'database',
        name: 'Database',
        icon: Database,
        skills: ['SQL', 'DBMS', 'Advanced Database Systems', 'Database Design', 'Data Structures and Algorithms']
    },
    {
        id: 'systems',
        name: 'OS & Networks',
        icon: Server,
        skills: ['Windows Admin', 'Linux Admin', 'Distributed Systems', 'Data Communications', 'Network Admin', 'System Analysis']
    },
    {
        id: 'security',
        name: 'Security',
        icon: Shield,
        skills: ['Cryptography', 'Network Security', 'Info System Security', 'Cybersecurity Best Practices']
    },
    {
        id: 'business',
        name: 'Business',
        icon: Briefcase,
        skills: ['ERP', 'CRM', 'MIS', 'Financial Systems', 'POS', 'Inventory Management', 'Accounting', 'Taxation']
    },
    {
        id: 'engineering',
        name: 'Software Eng',
        icon: Cpu,
        skills: ['Software Development', 'Software Engineering Principles', 'Mobile Computing', 'Mobile App Dev', 'Multimedia Systems']
    },
    {
        id: 'management',
        name: 'Management',
        icon: Users,
        skills: ['Project Management', 'Strategic Management', 'Risk Management', 'HR Management', 'Business Law', 'Corporate Governance']
    },
    {
        id: 'emerging',
        name: 'Emerging Tech',
        icon: TrendingUp,
        skills: ['Artificial Intelligence', 'Machine Learning Concepts', 'Business Statistics', 'Quantitative Analysis']
    },
    {
        id: 'soft',
        name: 'Soft Skills',
        icon: Heart,
        skills: ['Problem Solving', 'Critical Thinking', 'Team Collaboration', 'Communication', 'Analytical Thinking', 'Sales', 'Customer Service']
    }
];

export default function Skills() {
    const [activeTab, setActiveTab] = useState('programming');

    return (
        <section id="skills" className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container px-6 mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-xl text-cyan-400 font-medium mb-2 uppercase tracking-wider">My Expertise</h2>
                    <h3 className="text-4xl md:text-5xl font-bold font-display text-white">Skills & Experience</h3>
                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                        A comprehensive toolkit developed through years of academic excellence and professional practice.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Tabs */}
                    <div className="lg:w-1/3">
                        <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
                            {skillCategories.map((category) => {
                                const Icon = category.icon;
                                const isActive = activeTab === category.id;
                                return (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveTab(category.id)}
                                        className={clsx(
                                            "flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-300 text-left whitespace-nowrap min-w-[200px] lg:min-w-0 border",
                                            isActive
                                                ? "bg-slate-800 border-cyan-500/50 text-white shadow-lg shadow-cyan-500/10"
                                                : "bg-slate-950/50 border-slate-800 text-slate-400 hover:bg-slate-900 hover:text-white hover:border-slate-700"
                                        )}
                                    >
                                        <div className={clsx(
                                            "p-2 rounded-lg transition-colors",
                                            isActive ? "bg-cyan-500 text-white" : "bg-slate-900 text-slate-500"
                                        )}>
                                            <Icon size={20} />
                                        </div>
                                        <span className="font-medium">{category.name}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="lg:w-2/3">
                        <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-8 min-h-[400px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                >
                                    {skillCategories.find(c => c.id === activeTab)?.skills.map((skill, index) => (
                                        <motion.div
                                            key={skill}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className="flex items-center gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-colors group"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-cyan-500 group-hover:scale-150 transition-transform" />
                                            <span className="text-slate-200 font-medium group-hover:text-white transition-colors">
                                                {skill}
                                            </span>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
