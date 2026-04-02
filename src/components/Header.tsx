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
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${isScrolled
                ? 'bg-white border-b-4 border-dark-900'
                : 'bg-white'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary-600 border-4 border-dark-900" />
                        <span className="text-2xl font-bold uppercase tracking-tight">NL</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-dark-900 font-bold px-6 py-2 border-4 border-transparent hover:border-dark-900 transition-all duration-150 uppercase text-sm tracking-wide"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* Social Links */}
                    <div className="hidden md:flex items-center space-x-2">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 border-4 border-dark-900 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-150"
                                aria-label={social.label}
                            >
                                <social.icon className="h-5 w-5" />
                            </a>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden w-12 h-12 border-4 border-dark-900 flex items-center justify-center hover:bg-dark-900 hover:text-white transition-all duration-150"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 border-t-4 border-dark-900' : 'max-h-0'}`}
                >
                    <div className="py-4 space-y-2">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-dark-900 hover:bg-dark-900 hover:text-white font-bold py-3 px-4 border-4 border-dark-900 uppercase text-sm tracking-wide"
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="flex space-x-2 pt-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 border-4 border-dark-900 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-150"
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header

