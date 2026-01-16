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
        <section className="min-h-screen flex items-center justify-center relative pt-16">
            {/* Background Elements */}
            <div className="absolute inset-0 tech-grid opacity-30" />

            {/* Floating Tech Icons */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {techIcons.map((tech, index) => (
                    <motion.div
                        key={tech.label}
                        className="absolute hero-tech-icon"
                        data-tech={tech.label.toLowerCase()}
                        style={{
                            left: `${20 + index * 60}%`,
                            top: `${30 + index * 40}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                            duration: 4 + index,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        <div className="glass-effect p-4 rounded-full">
                            <tech.icon className="h-8 w-8 text-primary-500" />
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
            >
                {/* Main Heading */}
                <motion.div variants={itemVariants} className="mb-8">
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold mb-6"
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <span className="gradient-text text-shadow-lg">Nick Lina</span>
                    </motion.h1>
                    <motion.h2
                        className="text-2xl md:text-4xl font-semibold text-gray-300 mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        Full-stack Engineer
                    </motion.h2>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    variants={itemVariants}
                    className="text-md md:text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
                >
                    Full-stack software engineer with 7+ years of experience building secure, scalable web applications and internal tools across enterprise and agency environments. Strong expertise in React, TypeScript, RESTful APIs, and cloud platforms. Proven ability to deliver compliant, well-tested systems in collaboration with cross-functional teams.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                >
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary inline-flex items-center"
                    >
                        View My Work
                    </motion.a>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-secondary inline-flex items-center"
                    >
                        Get In Touch
                    </motion.a>
                </motion.div>

                {/* Tech Stack Preview */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap justify-center gap-4 text-sm text-gray-500"
                >
                    {['React', 'TypeScript', 'MongoDB', 'Python', 'Linux', 'Docker'].map((tech) => (
                        <motion.span
                            key={tech}
                            className="glass-effect px-3 py-1 rounded-full"
                            whileHover={{ scale: 1.1, color: '#0ea5e9' }}
                            transition={{ duration: 0.2 }}
                        >
                            {tech}
                        </motion.span>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <ChevronDown className="h-6 w-6 text-gray-400" />
            </motion.div>
        </section>
    )
}

export default Hero

