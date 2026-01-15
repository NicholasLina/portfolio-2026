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
        <section id="about" className="py-20 relative">
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
                        <span className="gradient-text">About Me</span>
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        I design and build reliable full-stack systems with a focus on security, maintainability, and scalability. My work spans modern React frontends, well-structured APIs, and cloud-based infrastructure, with an emphasis on type safety, testing, and CI/CD.
                    </motion.p>
                    <br></br>
                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        I've delivered internal tools and production applications in both enterprise and agency settings, collaborating closely with product, design, and compliance stakeholders to turn complex requirements into practical solutions.
                    </motion.p>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.category}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="glass-effect p-6 rounded-xl group"
                        >
                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <skill.icon className="w-full h-full text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-white">{skill.category}</h3>
                            <div className="space-y-2">
                                {skill.technologies.map((tech) => (
                                    <div
                                        key={tech}
                                        className="flex items-center text-sm text-gray-400 group-hover:text-white transition-colors duration-200"
                                    >
                                        <ChevronRight className="w-4 h-4 mr-2 text-primary-500" />
                                        {tech}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Experience & Achievements */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                >
                    {/* Experience */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h3 className="text-2xl font-bold text-white mb-6">Experience</h3>
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
                                <motion.div
                                    key={index}
                                    whileHover={{ x: 10 }}
                                    className="glass-effect p-6 rounded-lg border-l-4 border-primary-500"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                                        <span className="text-sm text-gray-400">{exp.period}</span>
                                    </div>
                                    <p className="text-primary-400 font-medium mb-2">{exp.company}</p>
                                    <p className="text-gray-400">{exp.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Achievements */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h3 className="text-2xl font-bold text-white mb-6">Key Achievements</h3>
                        <div className="space-y-4">
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.02 }}
                                    className="flex items-center space-x-4 glass-effect p-4 rounded-lg"
                                >
                                    <achievement.icon className={`w-6 h-6 ${achievement.color} flex-shrink-0`} />
                                    <div className="flex flex-col">
                                        <p className="text-gray-300">{achievement.text}</p>
                                        <p className="text-gray-400 text-sm">{achievement.subtext}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Personal Touch */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="glass-effect p-6 rounded-lg mt-8"
                        >
                            <h4 className="text-lg font-semibold text-white mb-3">Beyond Code</h4>
                            <p className="text-gray-400 leading-relaxed">
                                Outside of software, I spend a lot of time in nature—camping, hiking, and exploring the backcountry whenever I can. Being outdoors helps me reset, think clearly, and appreciate simple, well-designed systems.
                            </p>
                            <p className="text-gray-400 leading-relaxed mt-4">
                                I'm also a musician, which influences how I approach creativity, collaboration, and iteration. Both music and time outdoors shape how I problem-solve and bring balance to my work as an engineer.
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default About

