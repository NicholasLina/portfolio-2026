import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'

const isVitest = process.env.VITEST === 'true'

export default defineConfig({
    plugins: [
        react(),
        ...(!isVitest
            ? [
                  checker({
                      typescript: true,
                      overlay: { initialIsOpen: false },
                  }),
              ]
            : []),
    ],
    test: {
        environment: 'jsdom',
        setupFiles: ['./src/test/setup.ts'],
        css: true,
        globals: true
    },
    build: {
        outDir: 'dist',
        sourcemap: false,
        minify: 'terser',
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                    animations: ['framer-motion']
                }
            }
        }
    }
})
