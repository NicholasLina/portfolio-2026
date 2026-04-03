import React from 'react'
import {
    ExternalLink,
    Github,
    Code,
} from 'lucide-react'
import LazyImage from './LazyImage'

const Projects: React.FC = () => {
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

    return (
        <section id="projects" className="py-24 relative bg-dark-50">
            <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
                <div className="mb-16 grid grid-cols-12 gap-6">
                    <div className="col-span-12 lg:col-span-3">
                        <div className="font-mono text-xs text-dark-500 tracking-wider">
                            003 — PROJECTS
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-9 space-y-6">
                        <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-tight">
                            Featured Projects
                        </h2>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {projects.map((project, idx) => (
                        <div
                            key={project.id}
                            className="bg-white border border-dark-200 overflow-hidden hover:border-dark-900 transition-colors duration-200"
                        >
                            {/* Project Image */}
                            <div className="relative h-64 bg-dark-100 overflow-hidden border-b border-dark-200">
                                {project.image ? (
                                    <LazyImage
                                        src={project.image}
                                        srcSet={
                                            project.image2x
                                                ? `${project.image} 600w, ${project.image2x} 1200w`
                                                : undefined
                                        }
                                        sizes="(min-width: 1024px) 50vw, 100vw"
                                        alt={`${project.title} preview`}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Code className="w-12 h-12 text-dark-300" />
                                    </div>
                                )}
                            </div>

                            {/* Project Content */}
                            <div className="p-8">
                                <div className="flex items-start justify-between mb-4 gap-4">
                                    <h3 className="text-xl font-light tracking-tight">
                                        {project.title}
                                    </h3>
                                    <span className="font-mono text-xs text-dark-500">{String(idx + 1).padStart(2, '0')}</span>
                                </div>

                                <p className="text-dark-700 mb-6 leading-relaxed text-sm font-sans">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-6 pb-6 border-b border-dark-200">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-dark-50 text-dark-900 text-xs font-mono border border-dark-200"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="grid grid-cols-2 gap-3">
                                    {project.showCode !== false && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-secondary flex items-center justify-center space-x-2 text-xs"
                                        >
                                            <Github className="w-4 h-4" />
                                            <span>Code</span>
                                        </a>
                                    )}
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`btn-primary flex items-center justify-center space-x-2 text-xs ${project.showCode === false ? 'col-span-2' : ''}`}
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        <span>Live</span>
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

