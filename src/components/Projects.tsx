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
        <section id="projects" className="py-20 relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={ref} className="mb-16">
                    <h2 className="text-5xl md:text-7xl font-bold mb-8 uppercase tracking-tight">
                        Featured Projects
                    </h2>
                    <div className="w-24 h-2 bg-primary-600 mb-8" />
                    <p className="text-base md:text-lg text-dark-900 max-w-3xl leading-relaxed border-l-4 border-dark-900 pl-6">
                        A selection of projects demonstrating system design, frontend architecture, and reliable production-ready code.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white border-4 border-dark-900 overflow-hidden hover:translate-x-1 hover:translate-y-1 transition-transform duration-150 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 bg-dark-100 overflow-hidden border-b-4 border-dark-900">
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
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Code className="w-16 h-16 text-dark-400" />
                                    </div>
                                )}
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3 uppercase tracking-tight">
                                    {project.title}
                                </h3>

                                <p className="text-dark-700 mb-6 leading-relaxed text-sm">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-dark-900 text-white text-xs font-mono font-bold uppercase border-2 border-dark-900"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col gap-3">
                                    {project.showCode !== false && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-secondary flex items-center justify-center space-x-2 text-xs"
                                        >
                                            <Github className="w-4 h-4" />
                                            <span>CODE</span>
                                        </a>
                                    )}
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary flex items-center justify-center space-x-2 text-xs"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        <span>LIVE DEMO</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects

