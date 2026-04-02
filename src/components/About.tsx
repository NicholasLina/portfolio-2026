import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
    Code,
    Database,
    Cloud,
    Zap,
    Shield,
    Users,
    Award,
    ChevronRight
} from 'lucide-react'

const About: React.FC = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const skills = [
        {
            category: 'Frontend',
            icon: Code,
            technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'D3.js'],
            color: 'from-blue-500 to-cyan-500'
        },
        {
            category: 'Backend',
            icon: Database,
            technologies: ['Node.js', 'Express.js', 'Python', 'MongoDB', 'PostgreSQL'],
            color: 'from-green-500 to-emerald-500'
        },
        {
            category: 'Cloud & DevOps',
            icon: Cloud,
            technologies: ['Docker', 'Grafana', 'CI/CD', 'GCP', 'Azure'],
            color: 'from-purple-500 to-pink-500'
        }
    ]

    const achievements = [
        { icon: Zap, text: 'Automated workflows saving 100+ hours/month', subtext: 'Designed scheduling and internal tooling that eliminated significant manual effort.', color: 'text-yellow-500' },
        { icon: Shield, text: 'Delivered secure, compliant enterprise tools', subtext: 'Implemented SSO, automated UI testing, and met internal security and risk standards.', color: 'text-green-500' },
        { icon: Users, text: 'Reduced infrastructure costs by 80%', subtext: 'Reconfigured hosting, deployment, and CI/CD pipelines to improve efficiency.', color: 'text-blue-500' },
        { icon: Award, text: 'Improved reliability through testing & documentation', subtext: 'Introduced automated UI tests, API documentation, and system diagrams to support long-term maintainability.', color: 'text-purple-500' },
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
        <section id="about" className="py-24 relative bg-white border-y border-dark-200">
            <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
                <div ref={ref} className="mb-16 grid grid-cols-12 gap-6">
                    <div className="col-span-12 lg:col-span-3">
                        <div className="font-mono text-xs text-dark-500 tracking-wider">
                            002 — ABOUT
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-9 space-y-6">
                        <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-tight">
                            About Me
                        </h2>
                        <div className="w-12 h-px bg-dark-900" />
                        <p className="text-sm md:text-base text-dark-700 leading-relaxed font-sans">
                            I design and build reliable full-stack systems with an emphasis on security, maintainability, and scalability. My expertise spans modern React frontends, robust APIs, and cloud-based infrastructure, with a strong focus on type safety, testing, and CI/CD pipelines.
                        </p>
                        <p className="text-sm md:text-base text-dark-700 leading-relaxed font-sans">
                            I've delivered internal tools and production applications across enterprise and agency environments, working closely with product, design, and compliance teams to transform complex requirements into practical, high-quality solutions.
                        </p>
                    </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-12 gap-6 mb-16">
                    {skills.map((skill, idx) => (
                        <div
                            key={skill.category}
                            className="col-span-12 md:col-span-4 bg-white border border-dark-200 p-8 hover:border-dark-900 transition-colors duration-200"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <skill.icon className="w-5 h-5 text-dark-900" />
                                <h3 className="text-lg font-light tracking-tight">{skill.category}</h3>
                            </div>
                            <div className="space-y-2">
                                {skill.technologies.map((tech, i) => (
                                    <div
                                        key={tech}
                                        className="flex items-center text-xs font-mono"
                                    >
                                        <span className="text-dark-400 mr-3">{String(i + 1).padStart(2, '0')}</span>
                                        <span className="text-dark-900">{tech}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Experience & Achievements */}
                <div className="grid grid-cols-12 gap-12">
                    {/* Experience */}
                    <div className="col-span-12 lg:col-span-7 space-y-8">
                        <div className="flex items-center gap-4">
                            <span className="font-mono text-xs text-dark-500 tracking-wider">EXPERIENCE</span>
                            <div className="flex-1 h-px bg-dark-200" />
                        </div>
                        <div className="space-y-6">
                            {[
                                {
                                    title: 'Software Engineer, Cyber Risk',
                                    company: 'Deloitte',
                                    period: '2025 - Present',
                                    description: 'Design and build secure, AI-driven internal tools supporting cyber incident response. Deliver compliant, well-tested React and TypeScript applications integrated with enterprise identity systems and internal APIs.'
                                },
                                {
                                    title: 'Full Stack Developer',
                                    company: 'TLN Media Group',
                                    period: '2018 - 2025',
                                    description: 'Built and maintained full-stack web applications for internal operations and external clients. Developed RESTful APIs, modern frontend interfaces, and automated workflows across cloud environments.'
                                },
                                {
                                    title: 'Programming Instructor',
                                    company: 'Codezilla',
                                    period: '2017-2018',
                                    description: 'Taught foundational programming concepts, problem-solving, and software logic through hands-on lessons and structured curricula.'
                                }
                            ].map((exp, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-dark-200 p-6 hover:border-dark-900 transition-colors duration-200"
                                >
                                    <div className="flex justify-between items-start mb-3 gap-4">
                                        <h4 className="text-base font-light">{exp.title}</h4>
                                        <span className="text-xs font-mono text-dark-500 whitespace-nowrap">{exp.period}</span>
                                    </div>
                                    <p className="text-dark-900 font-mono text-xs mb-3 tracking-wider">{exp.company}</p>
                                    <p className="text-dark-700 text-sm leading-relaxed font-sans">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Achievements */}
                    <div className="col-span-12 lg:col-span-5 space-y-8">
                        <div className="flex items-center gap-4">
                            <span className="font-mono text-xs text-dark-500 tracking-wider">ACHIEVEMENTS</span>
                            <div className="flex-1 h-px bg-dark-200" />
                        </div>
                        <div className="space-y-4">
                            {achievements.map((achievement, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-dark-200 p-5 hover:border-dark-900 transition-colors duration-200"
                                >
                                    <div className="flex items-start gap-4">
                                        <achievement.icon className="w-5 h-5 text-dark-900 flex-shrink-0 mt-1" />
                                        <div className="flex flex-col space-y-2">
                                            <p className="text-dark-900 font-light text-sm leading-tight">{achievement.text}</p>
                                            <p className="text-dark-600 text-xs leading-relaxed font-sans">{achievement.subtext}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Personal Touch */}
                        <div className="bg-dark-900 text-white border border-dark-900 p-6 mt-8">
                            <h4 className="text-sm font-mono mb-4 tracking-wider">BEYOND CODE</h4>
                            <p className="text-dark-100 text-xs leading-relaxed mb-3 font-sans">
                                When I'm not coding, you'll find me in the backcountry—hiking, camping, and exploring. Nature helps me reset, think clearly, and see the elegance in systems.
                            </p>
                            <p className="text-dark-100 text-xs leading-relaxed font-sans">
                                I'm also a musician, and the creativity, collaboration, and iterative mindset it requires shapes how I tackle challenges and innovate in my work.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About

