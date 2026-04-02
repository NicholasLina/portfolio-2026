import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { contactInfo, socialLinks } from '../data/contact'

const Contact: React.FC = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
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
        <section id="contact" className="py-20 relative bg-dark-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={ref} className="mb-16">
                    <h2 className="text-5xl md:text-7xl font-bold mb-8 uppercase tracking-tight">
                        Get In Touch
                    </h2>
                    <div className="w-24 h-2 bg-primary-600 mb-8" />
                    <p className="text-base md:text-lg text-dark-900 max-w-3xl leading-relaxed border-l-4 border-dark-900 pl-6">
                        Have a project in mind or want to collaborate? I'd love to hear from you. Let's build something amazing together.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-3xl font-bold mb-6 uppercase tracking-tight">Let's Connect</h3>
                            <p className="text-dark-700 leading-relaxed mb-8">
                                I'm always interested in new opportunities and exciting projects.
                                Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <a
                                    key={index}
                                    href={info.href}
                                    className="flex items-center space-x-4 bg-white p-4 border-4 border-dark-900 hover:translate-x-1 hover:translate-y-1 transition-transform duration-150 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                                >
                                    <div className="w-12 h-12 bg-primary-600 border-4 border-dark-900 flex items-center justify-center">
                                        <info.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-mono font-bold uppercase text-dark-600">{info.label}</p>
                                        <p className="text-dark-900 font-bold">{info.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="pt-8">
                            <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">Follow Me</h4>
                            <div className="flex space-x-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-14 h-14 border-4 border-dark-900 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-150"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-6 h-6" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 border-4 border-dark-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                        <h3 className="text-3xl font-bold mb-8 uppercase tracking-tight">Send Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-mono font-bold uppercase mb-2">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-white border-4 border-dark-900 text-dark-900 placeholder-dark-400 focus:outline-none focus:border-primary-600 transition-all duration-150"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-xs font-mono font-bold uppercase mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-white border-4 border-dark-900 text-dark-900 placeholder-dark-400 focus:outline-none focus:border-primary-600 transition-all duration-150"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-xs font-mono font-bold uppercase mb-2">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-white border-4 border-dark-900 text-dark-900 placeholder-dark-400 focus:outline-none focus:border-primary-600 transition-all duration-150"
                                    placeholder="What's this about?"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-xs font-mono font-bold uppercase mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 bg-white border-4 border-dark-900 text-dark-900 placeholder-dark-400 focus:outline-none focus:border-primary-600 transition-all duration-150 resize-none"
                                    placeholder="How can I help you?"
                                />
                            </div>

                            {/* Form Status */}
                            {formStatus === 'success' && (
                                <div className="flex items-center space-x-2 text-green-600 font-bold">
                                    <CheckCircle className="w-5 h-5" />
                                    <span>Message sent successfully!</span>
                                </div>
                            )}

                            {formStatus === 'error' && (
                                <div className="flex items-center space-x-2 text-red-600 font-bold">
                                    <AlertCircle className="w-5 h-5" />
                                    <span>Failed to send message. Please try again.</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={formStatus === 'sending'}
                                className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {formStatus === 'sending' ? (
                                    <>
                                        <div className="w-5 h-5 border-4 border-white/30 border-t-white animate-spin" />
                                        <span>SENDING...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        <span>SEND MESSAGE</span>
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

