import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { contactInfo, socialLinks } from '../data/contact'

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setFormStatus('sending')

        try {
            // Get EmailJS credentials from environment variables
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            const recipientEmail =
                import.meta.env.VITE_CONTACT_TO_EMAIL || 'nicktlina@gmail.com'

            // Validate configuration
            if (!serviceId || !templateId || !publicKey || !recipientEmail) {
                throw new Error('EmailJS configuration is missing. Please check your environment variables.')
            }

            // Send email using EmailJS
            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_email: recipientEmail,
                },
                publicKey
            )

            setFormStatus('success')
            setFormData({ name: '', email: '', subject: '', message: '' })
            setTimeout(() => setFormStatus('idle'), 5000)
        } catch (error) {
            console.error('EmailJS error:', error)
            setFormStatus('error')
            setTimeout(() => setFormStatus('idle'), 5000)
        }
    }

    return (
        <section id="contact" className="py-24 relative bg-white border-y border-dark-200">
            <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
                <div className="mb-16 grid grid-cols-12 gap-6">
                    <div className="col-span-12 lg:col-span-3">
                        <div className="font-mono text-xs text-dark-500 tracking-wider">
                            004 — CONTACT
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-9 space-y-6">
                        <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-tight">
                            Get In Touch
                        </h2>
                        <div className="w-12 h-px bg-dark-900" />
                        <p className="text-sm md:text-base text-dark-700 leading-relaxed font-sans">
                            Have a project in mind or want to collaborate? I'd love to hear from you. Let's build something amazing together.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-6 lg:gap-12">
                    {/* Contact Information */}
                    <div className="col-span-12 lg:col-span-5 space-y-8">
                        <div>
                            <h3 className="text-lg font-light mb-6 tracking-tight">Let's Connect</h3>
                            <p className="text-dark-700 text-sm leading-relaxed mb-8 font-sans">
                                I'm always interested in new opportunities and exciting projects.
                                Whether you have a question or just want to say hi, I'll try my best to get back to you within 48 hours!
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => {
                                const isStatic = info.href === '#'
                                const cardClass =
                                    'flex items-center gap-4 bg-dark-50 border border-dark-200 p-4 transition-colors duration-200' +
                                    (isStatic ? '' : ' hover:border-dark-900')
                                const inner = (
                                    <>
                                        <div className="w-10 h-10 border border-dark-900 flex items-center justify-center flex-shrink-0">
                                            <info.icon className="w-5 h-5 text-dark-900" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-xs font-mono text-dark-500 tracking-wider">{info.label}</p>
                                            <p className="text-dark-900 font-mono text-sm break-all">{info.value}</p>
                                        </div>
                                    </>
                                )
                                return isStatic ? (
                                    <div key={index} className={cardClass}>
                                        {inner}
                                    </div>
                                ) : (
                                    <a key={index} href={info.href} className={cardClass}>
                                        {inner}
                                    </a>
                                )
                            })}
                        </div>

                        {/* Social Links */}
                        <div className="pt-8 border-t border-dark-200">
                            <h4 className="text-sm font-mono mb-4 tracking-wider text-dark-500">FOLLOW</h4>
                            <div className="flex space-x-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 border border-dark-200 flex items-center justify-center hover:border-dark-900 hover:bg-dark-50 transition-all duration-200"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-4 h-4" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="col-span-12 lg:col-span-7 bg-dark-50 border border-dark-200 p-8">
                        <h3 className="text-lg font-light mb-8 tracking-tight">Send Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-mono mb-2 tracking-wider text-dark-500">
                                        NAME *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-white border border-dark-200 text-dark-900 placeholder-dark-400 focus:outline-none focus:border-dark-900 transition-all duration-200 font-mono text-sm"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-xs font-mono mb-2 tracking-wider text-dark-500">
                                        EMAIL *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-white border border-dark-200 text-dark-900 placeholder-dark-400 focus:outline-none focus:border-dark-900 transition-all duration-200 font-mono text-sm"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-xs font-mono mb-2 tracking-wider text-dark-500">
                                    SUBJECT *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-white border border-dark-200 text-dark-900 placeholder-dark-400 focus:outline-none focus:border-dark-900 transition-all duration-200 font-mono text-sm"
                                    placeholder="What's this about?"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-xs font-mono mb-2 tracking-wider text-dark-500">
                                    MESSAGE *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 bg-white border border-dark-200 text-dark-900 placeholder-dark-400 focus:outline-none focus:border-dark-900 transition-all duration-200 resize-none font-mono text-sm"
                                    placeholder="How can I help you?"
                                />
                            </div>

                            {/* Form Status */}
                            {formStatus === 'success' && (
                                <div className="flex items-center space-x-2 text-green-600 font-mono text-sm">
                                    <CheckCircle className="w-4 h-4" />
                                    <span>Message sent successfully</span>
                                </div>
                            )}

                            {formStatus === 'error' && (
                                <div className="flex items-center space-x-2 text-red-600 font-mono text-sm">
                                    <AlertCircle className="w-4 h-4" />
                                    <span>Failed to send. Please try again</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={formStatus === 'sending'}
                                className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {formStatus === 'sending' ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white animate-spin" />
                                        <span>Sending</span>
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-4 h-4" />
                                        <span>Send</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact

