# Modern Portfolio Website

A stunning, futuristic personal portfolio website built with React, TailwindCSS, and Framer Motion.

## ✨ Features

### 🎨 Design & UI/UX

- **Futuristic Design**: Glassmorphism effects with neon accents
- **Dark Mode**: Dark theme by default with light mode toggle
- **Responsive**: Fully responsive design for all devices
- **Animations**: Smooth Framer Motion animations throughout
- **Typography**: Modern fonts (Poppins/Inter) with gradient text effects

### 🏗️ Sections

- **Hero Section**: Full-screen landing with animated particles and 3D avatar
- **About Me**: Personal introduction with stats and achievements
- **Skills**: Interactive tech stack grid with progress bars
- **Projects**: Featured projects showcase with filtering capabilities
- **Experience**: Timeline layout with education and work experience
- **Contact**: Functional contact form with social links

### 🚀 Tech Stack

- **Frontend**: React 19, TailwindCSS, Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Styling**: Custom CSS with Tailwind utilities

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 20.19+ or 22.12+ (required for Vite 7+)
- npm or yarn

### Quick Start

1. **Clone or download the project**

   ```bash
   cd frontend
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

### Node.js Version Issue

If you're getting a Node.js version error, you have two options:

**Option 1: Upgrade Node.js (Recommended)**

- Download and install Node.js 20.19+ or 22.12+ from [nodejs.org](https://nodejs.org/)

**Option 2: Downgrade Vite (if you can't upgrade Node.js)**

```bash
npm install vite@4.5.3 @vitejs/plugin-react@4.3.1 --save-dev
```

## 📁 Project Structure

```
frontend/
├── public/
│   ├── vite.svg
│   └── resume-placeholder.txt     # Add your resume.pdf here
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Navbar.jsx
│   │   │   └── ParticleBackground.jsx
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── About.jsx
│   │       ├── Skills.jsx
│   │       ├── Projects.jsx
│   │       ├── Experience.jsx
│   │       └── Contact.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── vite.config.js
```

## 🎨 Customization

### 1. Personal Information

Update the following files with your information:

**Hero Section** (`src/components/sections/Hero.jsx`):

- Replace "Your Name" with your actual name
- Update the tagline and description
- Modify social media links

**About Section** (`src/components/sections/About.jsx`):

- Add your personal photo
- Update bio and achievements
- Modify stats if needed

**Skills Section** (`src/components/sections/Skills.jsx`):

- Update tech stack and skill levels
- Add/remove technologies as needed

**Projects Section** (`src/components/sections/Projects.jsx`):

- Replace with your actual projects
- Update images, descriptions, and links
- Modify technologies used

**Experience Section** (`src/components/sections/Experience.jsx`):

- Add your work experience and education
- Update certifications and achievements

**Contact Section** (`src/components/sections/Contact.jsx`):

- Update contact information
- Replace social media links
- Configure form submission (currently simulated)

### 2. Colors & Branding

The color scheme can be customized in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: { /* Your primary colors */ },
      neon: {
        blue: '#00f5ff',    // Customize neon colors
        purple: '#bf00ff',
        pink: '#ff0080',
      }
    }
  }
}
```

### 3. Add Your Resume

1. Export your resume as a PDF
2. Name it `resume.pdf`
3. Place it in the `public` folder
4. The download buttons will automatically work

### 4. Replace Placeholder Images

- Add your profile photo to the About section
- Replace project screenshots with actual images
- Update any placeholder content

## 🌟 Key Features Explained

### Glassmorphism Effects

The portfolio uses custom CSS classes for glassmorphism:

- `.glass` - Main glassmorphism effect
- `.glass-light` - Light mode variant
- `.neon-glow` - Neon glow effects

### Animations

Framer Motion provides smooth animations:

- Page transitions
- Scroll-triggered animations
- Hover effects
- Loading animations

### Responsive Design

Built with mobile-first approach:

- Responsive grid layouts
- Adaptive navigation
- Optimized for all screen sizes

### Performance

- Lazy loading components
- Optimized animations
- Minimal bundle size
- Fast loading times

## 🚀 Deployment

### Netlify (Recommended)

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure domain and settings

### Vercel

1. Connect your GitHub repository
2. Auto-deploy on commits
3. Custom domain support

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 📱 Mobile Optimization

The portfolio is fully optimized for mobile devices:

- Touch-friendly navigation
- Responsive typography
- Optimized animations
- Fast loading on mobile networks

## 🔧 Troubleshooting

### Common Issues

1. **Node.js Version Error**

   - Upgrade to Node.js 20.19+ or downgrade Vite

2. **TailwindCSS Not Working**

   - Ensure `tailwind.config.js` and `postcss.config.js` are configured
   - Check if TailwindCSS directives are in `index.css`

3. **Framer Motion Errors**

   - Check import statements
   - Ensure proper animation syntax

4. **Build Errors**
   - Run `npm run build` to check for production issues
   - Fix any TypeScript or ESLint errors

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider sharing them back with the community!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by Lucide React
- Fonts from Google Fonts
- Built with love using React and TailwindCSS

---

**Happy coding! 🚀**

Make sure to star ⭐ this repository if you found it helpful!+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
