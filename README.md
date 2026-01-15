# Nick Lina - Portfolio Website

A modern, high-performance portfolio website built with React, TypeScript, and Vite. Features an ultra-modern design with smooth animations, optimized loading, and easy deployment.

## 🚀 Features

- **Modern Design**: Tech-themed with glass morphism effects and smooth animations
- **Lightning Fast**: Optimized for performance with lazy loading and code splitting
- **Fully Responsive**: Works perfectly on all devices
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Accessibility**: WCAG compliant with keyboard navigation
- **Easy Deployment**: One-click deployment to Vercel

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/nicklina/portfolio-2025.git
   cd portfolio-2025
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📧 Contact Form Setup

The contact form uses **EmailJS** (free tier: 200 emails/month) to send emails without a backend server.

### Setup Steps:

1. **Create EmailJS Account**
   - Sign up at [https://www.emailjs.com/](https://www.emailjs.com/)
   - Free tier includes 200 emails per month

2. **Add Email Service**
   - Go to [Email Services](https://dashboard.emailjs.com/admin/integration)
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions
   - **Copy your Service ID**

3. **Create Email Template**
   - Go to [Email Templates](https://dashboard.emailjs.com/admin/template)
   - Click "Create New Template"
   - Use these template variables:
     ```
     From: {{from_name}} <{{from_email}}>
     Subject: {{subject}}
     
     Message:
     {{message}}
     ```
   - Set "To Email" to your email address (e.g., `nicktlina@gmail.com`)
   - **Copy your Template ID**

4. **Get Public Key**
   - Go to [Account](https://dashboard.emailjs.com/admin/account/general)
   - **Copy your Public Key**

5. **Configure Environment Variables**
   - Create a `.env` file in the root directory:
     ```env
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```
   - **Important**: Add `.env` to `.gitignore` (already included)

6. **Deploy to Vercel**
   - Add the same environment variables in your Vercel project settings:
     - Go to your project → Settings → Environment Variables
     - Add each variable with the `VITE_` prefix
   - Redeploy your site

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Projects.tsx    # Projects showcase
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx      # Footer
│   └── ...
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── App.tsx            # Main app component
└── main.tsx           # Entry point
```

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.tsx` - Name and title
- `src/components/About.tsx` - Skills, experience, achievements
- `src/components/Projects.tsx` - Project details
- `src/components/Contact.tsx` - Contact information
- `src/components/Footer.tsx` - Footer links

### Styling
- Colors: Edit `tailwind.config.js`
- Global styles: Modify `src/index.css`
- Component styles: Update individual component files

### Content
- Projects: Add/remove projects in `src/components/Projects.tsx`
- Skills: Update skill categories in `src/components/About.tsx`
- Social links: Update in `src/components/Header.tsx` and `src/components/Contact.tsx`

## 🚀 Deployment with Vercel

### Option 1: Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

### Option 2: Vercel Dashboard

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings

2. **Configure Domain**
   - Add your custom domain in Vercel dashboard
   - Update DNS settings as instructed

### Option 3: GitHub Integration

1. **Connect GitHub**
   - Link your GitHub account to Vercel
   - Select your repository
   - Vercel will auto-deploy on every push

## ⚡ Performance Features

- **Code Splitting**: Automatic code splitting with Vite
- **Lazy Loading**: Images and components load on demand
- **Optimized Assets**: Minified and compressed for production
- **Caching**: Proper cache headers for static assets
- **Preloading**: Critical resources preloaded

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to Vercel

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) for the build tool
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide](https://lucide.dev/) for icons

---

**Built with ❤️ by Nick Lina**