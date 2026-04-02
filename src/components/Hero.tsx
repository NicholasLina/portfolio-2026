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
        <section className="min-h-screen flex items-center justify-center relative pt-16 bg-white">
            {/* Geometric Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-10 w-32 h-32 border-8 border-primary-600 rotate-12" />
                <div className="absolute bottom-40 left-10 w-40 h-40 bg-dark-900" />
                <div className="absolute top-1/2 right-1/4 w-24 h-24 border-8 border-dark-900" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10">
                {/* Main Heading */}
                <div className="mb-8 mt-10">
                    <h1 className="text-7xl md:text-9xl font-bold mb-4 leading-none uppercase tracking-tight">
                        Nick<br/>Lina
                    </h1>
                    <div className="w-32 h-2 bg-primary-600 mb-6" />
                    <h2 className="text-3xl md:text-5xl font-bold text-dark-900 mb-4 uppercase">
                        Full-stack<br/>Engineer
                    </h2>
                </div>

                {/* Subtitle */}
                <p className="text-base md:text-lg text-dark-700 max-w-2xl mb-12 leading-relaxed border-l-4 border-dark-900 pl-6">
                    Full-stack software engineer with 7+ years of experience building secure, scalable web applications and internal tools across enterprise and agency environments. Strong expertise in React, TypeScript, RESTful APIs, and cloud platforms.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 mb-16">
                    <a href="#projects" className="btn-primary inline-flex items-center uppercase text-sm tracking-wider">
                        View My Work
                    </a>
                    <a href="#contact" className="btn-secondary inline-flex items-center uppercase text-sm tracking-wider">
                        Get In Touch
                    </a>
                </div>

                {/* Tech Stack Preview */}
                <div className="md:flex flex-wrap gap-4 text-sm font-mono hidden">
                    {['React', 'TypeScript', 'MongoDB', 'Python', 'Linux', 'Docker'].map((tech) => (
                        <span
                            key={tech}
                            className="bg-dark-900 text-white px-4 py-2 border-4 border-dark-900 font-bold uppercase"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-8">
                <div className="flex items-center gap-2">
                    <div className="w-1 h-16 bg-dark-900" />
                    <span className="font-mono text-xs uppercase rotate-90 origin-left translate-y-8">Scroll</span>
                </div>
            </div>
        </section>
    )
}

export default Hero

