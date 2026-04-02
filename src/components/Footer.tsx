    return (
        <footer className="bg-dark-900 text-white border-t-8 border-dark-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-primary-600 border-4 border-white" />
                            <span className="text-2xl font-bold uppercase tracking-tight">NL</span>
                        </div>
                        <p className="text-dark-100 leading-relaxed font-mono text-sm">
                            Full-stack engineer building secure, scalable systems with React, APIs, and cloud infrastructure.
                        </p>
                        <div className="flex space-x-2">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 border-4 border-white flex items-center justify-center hover:bg-primary-600 transition-all duration-150"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold uppercase tracking-tight">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-dark-100 hover:text-primary-600 transition-colors duration-150 font-mono text-sm font-bold uppercase"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold uppercase tracking-tight">Get In Touch</h3>
                        <div className="space-y-2 font-mono text-sm">
                            <p className="text-dark-100">{contactDetails.email}</p>
                            <p className="text-dark-100">{contactDetails.phone}</p>
                            <p className="text-dark-100">{contactDetails.location}</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t-4 border-white flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-dark-100 text-sm font-mono font-bold uppercase">
                        © {currentYear} Nick Lina
                    </p>
                    <p className="text-dark-100 text-sm font-mono font-bold uppercase">
                        Built with React + Vite
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

