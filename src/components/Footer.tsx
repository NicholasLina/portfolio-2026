import React from 'react'
import { motion } from 'framer-motion'
import { Code, Heart } from 'lucide-react'
import { contactDetails, socialLinks } from '../data/contact'

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear()

    const quickLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <footer className="bg-dark-800/50 backdrop-blur-sm border-t border-dark-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        <div className="flex items-center space-x-2">
                            <Code className="h-8 w-8 text-primary-500" />
                            <span className="text-xl font-bold gradient-text">Nick Lina</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Full-stack engineer building secure, scalable systems with React, APIs, and cloud infrastructure.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-4"
                    >
                        <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <motion.a
                                        href={link.href}
                                        whileHover={{ x: 5 }}
                                        className="text-gray-400 hover:text-white transition-colors duration-300"
                                    >
                                        {link.name}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
                        <div className="space-y-2">
                            <p className="text-gray-400">{contactDetails.email}</p>
                            <p className="text-gray-400">{contactDetails.phone}</p>
                            <p className="text-gray-400">{contactDetails.location}</p>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-8 pt-8 border-t border-dark-700 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
                >
                    <p className="text-gray-400 text-sm">
                        © {currentYear} Nick Lina. All rights reserved.
                    </p>
                    <motion.p
                        className="text-gray-400 text-sm flex items-center space-x-1"
                        whileHover={{ scale: 1.05 }}
                    >
                        <span>Made with</span>
                        <Heart className="w-4 h-4 text-red-500" />
                        <span>and modern web technologies</span>
                    </motion.p>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer

