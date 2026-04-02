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
            className="fixed inset-0 bg-dark-50 flex items-center justify-center z-50"
        >
            <div className="text-center">
                <div className="w-12 h-12 border border-dark-900 border-t-transparent animate-spin mx-auto mb-4" />
                <h2 className="text-xs font-mono tracking-wider text-dark-500">
                    LOADING
                </h2>
            </div>
        </motion.div>
    )
}

export default LoadingSpinner

