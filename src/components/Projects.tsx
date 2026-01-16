import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
    ExternalLink,
    Github,
    Code,
} from 'lucide-react'
import LazyImage from './LazyImage'

const Projects: React.FC = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const projects = [
        {
            id: 1,
            title: 'Canadian Grocery Index',
            description: 'Full-stack web app that turns Statistics Canada data into clear, interactive grocery price insights. It automates data ingestion and analysis, then visualizes trends like top movers, price streaks, and year-over-year changes.',
            image: '/images/projects/CGI-600x400.webp',
            image2x: '/images/projects/CGI-1200x800.webp',
            technologies: ['Next.js', 'Express.js', 'MongoDB', 'Python', 'D3.js', 'Tailwind CSS', 'Vercel'],
            github: 'https://github.com/NicholasLina/grocery-index',
            live: 'https://grocery-index.nicklina.com/',
        },
        {
            id: 2,
            title: 'Rot8n',
            description: 'A music analytics and social app that connects to Spotify via OAuth and JWT for secure access. The API is built with strong safeguards like rate limiting, input validation, comprehensive error handling, CORS, and security headers. ',
            image: '/images/projects/Rot8n-600x400.webp',
            image2x: '/images/projects/Rot8n-1200x800.webp',
            technologies: ['React', 'TypeScript', 'Express.js', 'MongoDB', 'JWT', 'OAuth'],
            showCode: false,
            github: 'https://github.com/NicholasLina/rot8n',
            live: 'https://www.rot8n.ca',
        },
        {
            id: 3,
            title: 'This Portfolio',
            description: 'Personal portfolio showcasing featured projects, a responsive layout, and thoughtful motion design focused on clarity and performance.',
            image: null,
            technologies: ['React', 'TypeScript', 'Vite', 'Vitest', 'Tailwind CSS', 'Framer Motion', 'EmailJS'],
            github: 'https://github.com/NicholasLina/portfolio-2026',
            live: 'https://nicklina.com/',
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
                            className={`glass-effect rounded-xl overflow-hidden group`}
                        >
                            {/* Project Image */}
                            <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-primary-600/20 overflow-hidden">
                                {project.image ? (
                                    <LazyImage
                                        src={project.image}
                                        srcSet={
                                            project.image2x
                                                ? `${project.image} 600w, ${project.image2x} 1200w`
                                                : undefined
                                        }
                                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                        alt={`${project.title} preview`}
                                        className="w-full h-full"
                                    />
                                ) : (
                                    <>
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Code className="w-16 h-16 text-primary-500/50" />
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                </div>

                                <p className="text-gray-400 mb-4 leading-relaxed text-sm">
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
                                    {project.showCode !== false && (
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
                                    )}
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
            </div>
        </section>
    )
}

export default Projects

