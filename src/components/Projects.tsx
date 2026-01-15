import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
    ExternalLink,
    Github,
    Code,
    ChevronRight,
} from 'lucide-react'

const Projects: React.FC = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
            image: '/api/placeholder/600/400',
            technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
            category: 'Full Stack',
            featured: true,
            github: 'https://github.com/nicklina/ecommerce-platform',
            live: 'https://ecommerce-demo.com',
            stats: { users: '10K+', performance: '99.9%', rating: '4.9' }
        },
        {
            id: 2,
            title: 'AI-Powered Analytics Dashboard',
            description: 'Real-time data visualization dashboard with machine learning insights and predictive analytics.',
            image: '/api/placeholder/600/400',
            technologies: ['React', 'Python', 'TensorFlow', 'D3.js', 'Docker'],
            category: 'AI/ML',
            featured: true,
            github: 'https://github.com/nicklina/ai-analytics',
            live: 'https://analytics-demo.com',
            stats: { accuracy: '95%', speed: '2x faster', users: '5K+' }
        },
        {
            id: 3,
            title: 'Mobile Banking App',
            description: 'Secure mobile banking application with biometric authentication and real-time transaction monitoring.',
            image: '/api/placeholder/600/400',
            technologies: ['React Native', 'Node.js', 'MongoDB', 'JWT', 'Firebase'],
            category: 'Mobile',
            featured: false,
            github: 'https://github.com/nicklina/banking-app',
            live: 'https://banking-demo.com',
            stats: { security: 'Bank-grade', users: '50K+', rating: '4.8' }
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
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

    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center mb-16"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        <span className="gradient-text">Featured Projects</span>
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        A selection of projects demonstrating system design, frontend architecture, and reliable production-ready code.
                    </motion.p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className={`glass-effect rounded-xl overflow-hidden group ${project.featured ? 'lg:col-span-2' : ''
                                }`}
                        >
                            {/* Project Image */}
                            <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-primary-600/20 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Code className="w-16 h-16 text-primary-500/50" />
                                </div>
                                <div className="absolute top-4 right-4">
                                    {project.featured && (
                                        <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                            Featured
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <span className="text-sm text-primary-400 font-medium">
                                        {project.category}
                                    </span>
                                </div>

                                <p className="text-gray-400 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-dark-800 text-gray-300 text-sm rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Stats */}
                                {/* <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                                    {Object.entries(project.stats).map(([key, value]) => (
                                        <div key={key} className="glass-effect p-3 rounded-lg">
                                            <div className="text-lg font-bold text-primary-400">{value}</div>
                                            <div className="text-xs text-gray-400 capitalize">{key}</div>
                                        </div>
                                    ))}
                                </div> */}

                                {/* Action Buttons */}
                                <div className="flex space-x-3">
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex-1 btn-secondary flex items-center justify-center space-x-2"
                                    >
                                        <Github className="w-4 h-4" />
                                        <span>Code</span>
                                    </motion.a>
                                    <motion.a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex-1 btn-primary flex items-center justify-center space-x-2"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        <span>Live Demo</span>
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View More Button */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center mt-12"
                >
                    <motion.a
                        href="https://github.com/nicklina"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-secondary inline-flex items-center space-x-2"
                    >
                        <span>View All Projects</span>
                        <ChevronRight className="w-4 h-4" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects

