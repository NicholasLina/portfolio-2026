# Nick Lina - Portfolio Website

A modern, high-performance portfolio website built with React, TypeScript, and Vite. Features an ultra-modern design with smooth animations, optimized loading, and easy deployment.

## 🚀 Features

- **Ultra Modern Design**: Tech-themed with glass morphism effects and smooth animations
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

### Performance Monitoring

The portfolio includes performance optimizations:
- Intersection Observer for scroll-based animations
- Debounced scroll handlers
- Reduced motion support
- Optimized image loading

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) for the build tool
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide](https://lucide.dev/) for icons

---

**Built with ❤️ by Nick Lina**