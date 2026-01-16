import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Code } from 'lucide-react'
import { socialLinks } from '../data/contact'

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'glass-effect shadow-lg backdrop-blur-md'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2"
                    >
                        <Code className="h-8 w-8 text-primary-500" />
                        <span className="text-xl font-bold gradient-text">Nick Lina</span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </nav>

                    {/* Social Links */}
                    <div className="hidden md:flex items-center space-x-4">
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-gray-400 hover:text-primary-500 transition-colors duration-200"
                                aria-label={social.label}
                            >
                                <social.icon className="h-5 w-5" />
                            </motion.a>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-gray-300 hover:text-white transition-colors duration-200"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </motion.button>
                </div>

                {/* Mobile Navigation */}
                <motion.div
                    initial={false}
                    animate={{
                        height: isMobileMenuOpen ? 'auto' : 0,
                        opacity: isMobileMenuOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden overflow-hidden"
                >
                    <div className="py-4 space-y-4">
                        {navItems.map((item) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                whileHover={{ x: 10 }}
                                className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                            >
                                {item.name}
                            </motion.a>
                        ))}
                        <div className="flex space-x-4 pt-4">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="text-gray-400 hover:text-primary-500 transition-colors duration-200"
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-5 w-5" />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.header>
    )
}

export default Header

