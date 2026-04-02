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
        <section id="about" className="py-20 relative bg-dark-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={ref} className="mb-16">
                    <h2 className="text-5xl md:text-7xl font-bold mb-8 uppercase tracking-tight">
                        About Me
                    </h2>
                    <div className="w-24 h-2 bg-primary-600 mb-8" />
                    <p className="text-base md:text-lg text-dark-900 max-w-3xl leading-relaxed mb-6 border-l-4 border-dark-900 pl-6">
                        I design and build reliable full-stack systems with an emphasis on security, maintainability, and scalability. My expertise spans modern React frontends, robust APIs, and cloud-based infrastructure, with a strong focus on type safety, testing, and CI/CD pipelines.
                    </p>
                    <p className="text-base md:text-lg text-dark-900 max-w-3xl leading-relaxed border-l-4 border-dark-900 pl-6">
                        I've delivered internal tools and production applications across enterprise and agency environments, working closely with product, design, and compliance teams to transform complex requirements into practical, high-quality solutions.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {skills.map((skill) => (
                        <div
                            key={skill.category}
                            className="bg-white border-4 border-dark-900 p-8 hover:translate-x-1 hover:translate-y-1 transition-transform duration-150 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                        >
                            <div className="w-16 h-16 bg-primary-600 border-4 border-dark-900 flex items-center justify-center mb-6">
                                <skill.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-6 uppercase tracking-tight">{skill.category}</h3>
                            <div className="space-y-3">
                                {skill.technologies.map((tech) => (
                                    <div
                                        key={tech}
                                        className="flex items-center text-sm font-mono font-bold uppercase"
                                    >
                                        <div className="w-2 h-2 bg-dark-900 mr-3" />
                                        {tech}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Experience & Achievements */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Experience */}
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold uppercase tracking-tight mb-8">Experience</h3>
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
                                    className="bg-white p-6 border-4 border-dark-900 hover:translate-x-1 hover:translate-y-1 transition-transform duration-150 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                                >
                                    <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                                        <h4 className="text-lg font-bold uppercase">{exp.title}</h4>
                                        <span className="text-sm font-mono font-bold bg-dark-900 text-white px-3 py-1">{exp.period}</span>
                                    </div>
                                    <p className="text-primary-600 font-bold mb-3 uppercase text-sm tracking-wide">{exp.company}</p>
                                    <p className="text-dark-700 leading-relaxed">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold uppercase tracking-tight mb-8">Key Achievements</h3>
                        <div className="space-y-4">
                            {achievements.map((achievement, index) => (
                                <div
                                    key={index}
                                    className="flex items-start space-x-4 bg-white p-5 border-4 border-dark-900"
                                >
                                    <div className="w-12 h-12 bg-primary-600 border-4 border-dark-900 flex items-center justify-center flex-shrink-0">
                                        <achievement.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-dark-900 font-bold mb-1 uppercase text-sm tracking-wide">{achievement.text}</p>
                                        <p className="text-dark-700 text-sm leading-relaxed">{achievement.subtext}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Personal Touch */}
                        <div className="bg-dark-900 text-white p-6 border-4 border-dark-900 mt-8">
                            <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">Beyond Code</h4>
                            <p className="text-dark-100 leading-relaxed mb-4">
                                When I'm not coding, you'll find me in the backcountry—hiking, camping, and exploring. Nature helps me reset, think clearly, and see the elegance in systems.
                            </p>
                            <p className="text-dark-100 leading-relaxed">
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

