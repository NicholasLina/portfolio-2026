import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Code2, Zap } from 'lucide-react'

const Hero: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    }

    const techIcons = [
        { icon: Code2, label: 'Code' },
        { icon: Zap, label: 'Performance' },
    ]

    return (
        <section className="min-h-screen flex items-center relative pt-16 bg-dark-50">
            <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 w-full">
                <div className="grid grid-cols-12 gap-6">
                    {/* Left column - Main content */}
                    <div className="col-span-12 lg:col-span-8 space-y-8">
                        <div className="space-y-6">
                            <div className="font-mono text-xs text-dark-500 tracking-wider">
                                001 — PORTFOLIO 2026
                            </div>
                            <h1 className="text-6xl md:text-8xl font-light tracking-tight leading-none">
                                Nick Lina
                            </h1>
                            <div className="w-16 h-px bg-dark-900" />
                            <h2 className="text-2xl md:text-3xl font-light text-dark-600 tracking-tight">
                                Full-stack Engineer
                            </h2>
                        </div>

                        <p className="text-sm md:text-base text-dark-700 max-w-2xl leading-relaxed font-sans">
                            Full-stack software engineer with 7+ years of experience building secure, scalable web applications and internal tools across enterprise and agency environments. Strong expertise in React, TypeScript, RESTful APIs, and cloud platforms.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a href="#projects" className="btn-primary inline-flex items-center justify-center text-xs tracking-wider">
                                View Projects
                            </a>
                            <a href="#contact" className="btn-secondary inline-flex items-center justify-center text-xs tracking-wider">
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Right column - Tech stack */}
                    <div className="col-span-12 lg:col-span-4 space-y-6 lg:border-l border-dark-200 lg:pl-8">
                        <div className="font-mono text-xs text-dark-500 tracking-wider">
                            TECH STACK
                        </div>
                        <div className="space-y-3">
                            {['React', 'TypeScript', 'MongoDB', 'Python', 'Linux', 'Docker'].map((tech, i) => (
                                <div key={tech} className="flex items-center gap-3 text-sm">
                                    <span className="font-mono text-dark-400 text-xs w-8">{String(i + 1).padStart(2, '0')}</span>
                                    <span className="font-mono text-dark-900">{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 right-8 font-mono text-xs text-dark-400 tracking-wider">
                SCROLL ↓
            </div>
        </section>
    )
}

export default Hero

