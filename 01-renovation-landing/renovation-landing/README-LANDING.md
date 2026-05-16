# Premium Interior Studio Landing Page

A luxurious, modern landing page for an interior architecture studio built with React, TypeScript, and SCSS. Featuring smooth animations, sophisticated design, and premium UI/UX.

## 🎨 Design Highlights

- **Modern Premium Design**: Sophisticated color palette with warm beige accents (#C6A98B)
- **Smooth Animations**: GSAP-powered cinematic animations with cubic-bezier easing
- **Responsive Layout**: Mobile-first approach with careful breakpoints for all devices
- **Custom Scroll**: Lenis smooth scroll for elegant scrolling experience
- **Grain Overlay**: Subtle texture for depth and premium feel
- **Custom Cursor**: Minimalist outlined cursor with hover interactions

## 🏗️ Architecture

### Sections

1. **Header** - Fixed navigation with logo, menu items, and CTA button
2. **Hero** - Full-screen hero with animated heading, description, and featured image
3. **About** - Studio information with metrics and statistics
4. **Services** - List of core services with hover preview images
5. **Featured Projects** - Showcase of completed projects with mixed layouts
6. **Process** - 5-step project workflow visualization
7. **Testimonials** - Auto-rotating client testimonials with carousel controls
8. **CTA** - Large call-to-action section with grid background
9. **Footer** - Multi-column footer with links and contact info

### Component Structure

```
src/
├── components/
│   ├── Header.tsx / Header.scss
│   ├── Hero.tsx / Hero.scss
│   ├── About.tsx / About.scss
│   ├── Services.tsx / Services.scss
│   ├── FeaturedProjects.tsx / FeaturedProjects.scss
│   ├── Process.tsx / Process.scss
│   ├── Testimonials.tsx / Testimonials.scss
│   ├── CTA.tsx / CTA.scss
│   ├── Footer.tsx / Footer.scss
│   └── index.ts
├── styles/
│   ├── variables.scss (Design system)
│   └── global.scss (Global styles & animations)
├── hooks/
│   └── useSmothScroll.ts (Lenis integration)
├── App.tsx / App.scss
└── main.tsx
```

## 🎯 Design System

### Colors

- **Primary Background**: #F5F3EF
- **Secondary Background**: #ECE7E1
- **Primary Text**: #1C1C1C
- **Secondary Text**: #6F6A64
- **Accent**: #C6A98B
- **Dark**: #1C1C1C
- **Darker**: #151515

### Typography

- **Headings**: Neue Montreal / General Sans (500-600 weight)
- **Body**: Inter (400 weight)

### Animations

- **Duration**: 0.6s - 1.4s
- **Easing**: cubic-bezier(0.22, 1, 0.36, 1)
- **Smooth scroll**: Lenis (1.2s duration)

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Server runs on http://localhost:5176

### Production Build

```bash
npm run build
```

Output: `dist/` directory

## 📦 Dependencies

### Core

- **react**: ^19.2.5
- **react-dom**: ^19.2.5

### Animation & Scroll

- **gsap**: ^3.12.2 - Professional animation library
- **lenis**: ^1.1.9 - Smooth scroll implementation

### Styling

- **sass**: ^1.69.5 - SCSS compilation

## 🎬 Animation Features

### Page Load Animations

- Heading reveals with character stagger
- Image scale-up with opacity fade
- Button fade-up animations

### Scroll Animations

- Image reveal masks on scroll
- Staggered element fading
- Number brightening on hover
- Smooth parallax effects

### Interactive Hover Effects

- Navigation underline expansion
- Service image preview appearance
- Project zoom and overlay
- Button elevation and color shifts

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: 768px - 1024px
- **Large**: 1024px+

## ✨ Premium Features

1. **Smooth Scroll**: Lenis integration for cinematic scrolling
2. **GSAP ScrollTrigger**: Smart scroll-triggered animations
3. **Custom Cursor**: Outlined, scaling cursor on interactions
4. **Grain Texture**: Subtle noise overlay for depth
5. **Grid Background**: Decorative grid in dark sections
6. **Blur Effects**: Backdrop blur on cards and elements
7. **Auto-rotating Carousel**: Testimonials with 5-second intervals
8. **Fixed Header**: Sticky navigation with blur effect

## 🔧 Configuration

### SCSS Variables

Edit `src/styles/variables.scss` to customize:

- Colors and palette
- Typography and fonts
- Spacing and layout
- Animation timings and easing
- Breakpoints

### Animations

Modify animation durations and easing in:

- `src/styles/variables.scss` (global settings)
- Individual component SCSS files

## 🎯 Future Enhancements

- [ ] Migrate @import to @use (Sass 3.0 compatibility)
- [ ] Add form validation for contact CTA
- [ ] Implement image lazy loading
- [ ] Add dark mode toggle
- [ ] Performance optimizations (code splitting)
- [ ] SEO enhancements
- [ ] Analytics integration

## 📄 License

Created as a premium portfolio showcase project.

---

**Status**: Production Ready ✅
**Build**: Successful
**Responsive**: Mobile-Optimized
**Performance**: Optimized for smooth 60fps animations
