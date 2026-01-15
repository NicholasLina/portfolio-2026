import '@testing-library/jest-dom'

class MockIntersectionObserver {
    private callback: IntersectionObserverCallback

    constructor(callback: IntersectionObserverCallback) {
        this.callback = callback
    }

    observe() {
        const entry: IntersectionObserverEntry = {
            isIntersecting: true,
            target: document.body,
            boundingClientRect: document.body.getBoundingClientRect(),
            intersectionRatio: 1,
            intersectionRect: document.body.getBoundingClientRect(),
            rootBounds: null,
            time: Date.now(),
        }

        this.callback([entry], this as unknown as IntersectionObserver)
    }

    unobserve() { }

    disconnect() { }
}

Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: MockIntersectionObserver,
})

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    configurable: true,
    value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => { },
        removeListener: () => { },
        addEventListener: () => { },
        removeEventListener: () => { },
        dispatchEvent: () => false,
    }),
})
