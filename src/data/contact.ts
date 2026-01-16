import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

export const contactDetails = {
    name: 'Nick Lina',
    email: 'nicktlina@gmail.com',
    phone: '+1 (416) 414-2856',
    location: 'Markham, ON',
    emailHref: 'mailto:nicktlina@gmail.com',
    phoneHref: 'tel:+14164142856',
    locationHref: '#',
}

export const contactInfo = [
    {
        icon: Mail,
        label: 'Email',
        value: contactDetails.email,
        href: contactDetails.emailHref,
    },
    {
        icon: Phone,
        label: 'Phone',
        value: contactDetails.phone,
        href: contactDetails.phoneHref,
    },
    {
        icon: MapPin,
        label: 'Location',
        value: contactDetails.location,
        href: contactDetails.locationHref,
    },
]

export const socialLinks = [
    { icon: Github, href: 'https://github.com/NicholasLina', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/nick-lina-87bb92164/', label: 'LinkedIn' },
    { icon: Mail, href: contactDetails.emailHref, label: 'Email' },
]
