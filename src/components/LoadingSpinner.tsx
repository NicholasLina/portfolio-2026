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
            transition={{ delay: 1.5, duration: 0.3 }}
            className="fixed inset-0 bg-white flex items-center justify-center z-50"
        >
            <div className="text-center">
                <div className="w-20 h-20 border-8 border-dark-900 border-t-primary-600 animate-spin mx-auto mb-6" />
                <h2 className="text-2xl font-bold uppercase tracking-tight">
                    Loading
                </h2>
            </div>
        </motion.div>
    )
}

export default LoadingSpinner

