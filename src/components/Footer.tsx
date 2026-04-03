import React from 'react'
import { contactDetails, socialLinks } from '../data/contact'

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear()

    const quickLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <footer className="bg-dark-900 text-white border-t border-dark-900">
            <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 py-12">
                <div className="grid grid-cols-12 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="col-span-12 md:col-span-4 space-y-4">
                        <div className="flex items-center space-x-2">
                            <span className="text-sm font-mono tracking-tight">NL</span>
                        </div>
                        <p className="text-dark-100 text-xs leading-relaxed font-mono">
                            Full-stack engineer building secure, scalable systems with React, APIs, and cloud infrastructure.
                        </p>
                        <div className="flex space-x-2">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 border border-white flex items-center justify-center hover:bg-white hover:text-dark-900 transition-all duration-200"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-12 md:col-span-4 space-y-4">
                        <h3 className="text-xs font-mono tracking-wider text-dark-400">QUICK LINKS</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link, i) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-dark-100 hover:text-white transition-colors duration-200 font-mono text-xs"
                                    >
                                        <span className="text-dark-500 mr-2">{String(i + 1).padStart(2, '0')}</span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-span-12 md:col-span-4 space-y-4">
                        <h3 className="text-xs font-mono tracking-wider text-dark-400">CONTACT</h3>
                        <div className="space-y-2 font-mono text-xs">
                            <p className="text-dark-100">{contactDetails.email}</p>
                            <p className="text-dark-100">{contactDetails.phone}</p>
                            <p className="text-dark-100">{contactDetails.location}</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-dark-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-dark-400 text-xs font-mono">
                        © {currentYear} Nick Lina
                    </p>
                    <p className="text-dark-400 text-xs font-mono">
                        React · Vite · TypeScript
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

