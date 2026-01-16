import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

interface LazyImageProps {
    src: string
    alt: string
    className?: string
    placeholder?: string
    srcSet?: string
    sizes?: string
}

const LazyImage: React.FC<LazyImageProps> = ({
    src,
    alt,
    className = '',
    placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWUyOTNiIi8+PC9zdmc+',
    srcSet,
    sizes,
}) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [isInView, setIsInView] = useState(false)
    const [node, entry] = useIntersectionObserver({
        threshold: 0.1,
        freezeOnceVisible: true,
    })

    React.useEffect(() => {
        if (entry?.isIntersecting) {
            setIsInView(true)
        }
    }, [entry])

    const handleLoad = () => {
        setIsLoaded(true)
    }

    return (
        <div ref={node} className={`relative overflow-hidden ${className}`}>
            {/* Placeholder */}
            <motion.img
                src={placeholder}
                alt=""
                className="absolute inset-0 w-full h-full object-cover blur-sm"
                initial={{ opacity: 1 }}
                animate={{ opacity: isLoaded ? 0 : 1 }}
                transition={{ duration: 0.3 }}
            />

            {/* Actual image */}
            {isInView && (
                <motion.img
                    src={src}
                    alt={alt}
                    srcSet={srcSet}
                    sizes={sizes}
                    onLoad={handleLoad}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{
                        opacity: isLoaded ? 1 : 0,
                        scale: isLoaded ? 1 : 1.1
                    }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                />
            )}

            {/* Loading overlay */}
            {!isLoaded && isInView && (
                <div className="absolute inset-0 flex items-center justify-center bg-dark-800/50">
                    <div className="w-8 h-8 border-2 border-primary-500/30 border-t-primary-500 rounded-full animate-spin" />
                </div>
            )}
        </div>
    )
}

export default LazyImage

