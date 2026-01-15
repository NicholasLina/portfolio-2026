import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const LoadingSpinner: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000) // Show loading for 2 seconds

        return () => clearTimeout(timer)
    }, [])

    if (!isLoading) return null

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="fixed inset-0 bg-dark-900 flex items-center justify-center z-50"
        >
            <div className="text-center">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-16 h-16 border-4 border-primary-500/30 border-t-primary-500 rounded-full mx-auto mb-4"
                />
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl font-semibold gradient-text"
                >
                    Loading Portfolio...
                </motion.h2>
            </div>
        </motion.div>
    )
}

export default LoadingSpinner

