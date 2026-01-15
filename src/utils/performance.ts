// Performance utilities for the portfolio

export const preloadImage = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => resolve()
        img.onerror = reject
        img.src = src
    })
}

export const preloadImages = async (srcs: string[]): Promise<void> => {
    const promises = srcs.map(src => preloadImage(src))
    await Promise.all(promises)
}

export const debounce = <T extends (...args: any[]) => any>(
    func: T,
    wait: number
): ((...args: Parameters<T>) => void) => {
    let timeout: ReturnType<typeof setTimeout>
    return (...args: Parameters<T>) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => func(...args), wait)
    }
}

export const throttle = <T extends (...args: any[]) => any>(
    func: T,
    limit: number
): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean
    return (...args: Parameters<T>) => {
        if (!inThrottle) {
            func(...args)
            inThrottle = true
            setTimeout(() => (inThrottle = false), limit)
        }
    }
}

export const getDeviceType = (): 'mobile' | 'tablet' | 'desktop' => {
    const width = window.innerWidth
    if (width < 768) return 'mobile'
    if (width < 1024) return 'tablet'
    return 'desktop'
}

export const isReducedMotion = (): boolean => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export const optimizeScroll = (callback: () => void) => {
    let ticking = false

    const update = () => {
        callback()
        ticking = false
    }

    const requestTick = () => {
        if (!ticking) {
            requestAnimationFrame(update)
            ticking = true
        }
    }

    return requestTick
}

