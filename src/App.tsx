import React, { Suspense, lazy, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingSpinner from './components/LoadingSpinner'
import { isReducedMotion } from './utils/performance'

// Lazy load heavy components for better performance
const TechBackground = lazy(() => import('./components/TechBackground'))

const App: React.FC = () => {
    useEffect(() => {
        // Disable animations if user prefers reduced motion
        if (isReducedMotion()) {
            document.documentElement.style.setProperty('--animation-duration', '0s')
        }
    }, [])

    return (
        <div className="min-h-screen bg-dark-50 relative overflow-x-hidden">
            {/* Grid background */}
            <div className="fixed inset-0 tech-grid opacity-40" />

            {/* Main content */}
            <div className="relative z-10">
                <Header />
                <main>
                    <Hero />
                    <About />
                    <Projects />
                    <Contact />
                </main>
                <Footer />
            </div>

            {/* Loading overlay for initial load */}
            <LoadingSpinner />
        </div>
    )
}

export default App