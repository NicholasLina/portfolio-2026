import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import Contact from '../Contact'
import emailjs from '@emailjs/browser'

vi.mock('@emailjs/browser', () => ({
    default: {
        send: vi.fn(),
    },
}))

const mockSend = emailjs.send as unknown as ReturnType<typeof vi.fn>

const fillForm = async () => {
    await userEvent.type(screen.getByLabelText(/name \*/i), 'Jane Doe')
    await userEvent.type(screen.getByLabelText(/email \*/i), 'jane@example.com')
    await userEvent.type(screen.getByLabelText(/subject \*/i), 'Hello')
    await userEvent.type(screen.getByLabelText(/message \*/i), 'Test message')
}

describe('Contact form', () => {
    beforeEach(() => {
        vi.clearAllMocks()
        vi.stubEnv('VITE_EMAILJS_SERVICE_ID', 'service')
        vi.stubEnv('VITE_EMAILJS_TEMPLATE_ID', 'template')
        vi.stubEnv('VITE_EMAILJS_PUBLIC_KEY', 'public_key')
        vi.stubEnv('VITE_CONTACT_TO_EMAIL', 'nick@example.com')
    })

    afterEach(() => {
        vi.unstubAllEnvs()
    })

    it('renders required fields and submit button', () => {
        render(<Contact />)

        expect(screen.getByLabelText(/name \*/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/email \*/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/subject \*/i)).toBeInTheDocument()
        expect(screen.getByLabelText(/message \*/i)).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
    })

    it('submits the form and calls EmailJS with expected payload', async () => {
        mockSend.mockResolvedValueOnce({ status: 200, text: 'OK' })

        render(<Contact />)
        await fillForm()
        await userEvent.click(screen.getByRole('button', { name: /send message/i }))

        await waitFor(() => {
            expect(mockSend).toHaveBeenCalledTimes(1)
        })

        expect(mockSend).toHaveBeenCalledWith(
            'service',
            'template',
            {
                from_name: 'Jane Doe',
                from_email: 'jane@example.com',
                subject: 'Hello',
                message: 'Test message',
                to_email: 'nick@example.com',
            },
            'public_key'
        )

        expect(await screen.findByText(/message sent successfully/i)).toBeInTheDocument()
    })

    it('shows an error when configuration is missing', async () => {
        const consoleError = vi.spyOn(console, 'error').mockImplementation(() => { })

        vi.unstubAllEnvs()
        vi.stubEnv('VITE_EMAILJS_SERVICE_ID', '')
        vi.stubEnv('VITE_EMAILJS_TEMPLATE_ID', '')
        vi.stubEnv('VITE_EMAILJS_PUBLIC_KEY', '')
        vi.stubEnv('VITE_CONTACT_TO_EMAIL', '')

        render(<Contact />)
        await fillForm()
        await userEvent.click(screen.getByRole('button', { name: /send message/i }))

        expect(await screen.findByText(/failed to send message/i)).toBeInTheDocument()
        expect(mockSend).not.toHaveBeenCalled()

        consoleError.mockRestore()
    })
})
