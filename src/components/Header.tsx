import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
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
                ? 'bg-white border-b border-dark-200'
                : 'bg-dark-50'
                }`}
        >
            <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <span className="text-sm font-mono tracking-tight">NL</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, i) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-dark-900 font-mono text-xs tracking-wider hover:text-dark-600 transition-colors duration-200"
                            >
                                <span className="text-dark-400 mr-2">{String(i + 1).padStart(2, '0')}</span>
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* Social Links */}
                    <div className="hidden md:flex items-center space-x-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-dark-600 hover:text-dark-900 transition-colors duration-200"
                                aria-label={social.label}
                            >
                                <social.icon className="h-4 w-4" />
                            </a>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-dark-900 hover:text-dark-600 transition-colors duration-200"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 border-t border-dark-200' : 'max-h-0'}`}
                >
                    <div className="py-4 space-y-3">
                        {navItems.map((item, i) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-dark-900 hover:text-dark-600 font-mono text-xs tracking-wider py-2"
                            >
                                <span className="text-dark-400 mr-2">{String(i + 1).padStart(2, '0')}</span>
                                {item.name}
                            </a>
                        ))}
                        <div className="flex space-x-4 pt-4 border-t border-dark-200">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-dark-600 hover:text-dark-900 transition-colors duration-200"
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-4 w-4" />
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

