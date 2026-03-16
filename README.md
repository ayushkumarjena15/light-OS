<div align="center">
  <h1>✨ LightOS Landing Page </h1>
  <p><strong>A Premium, Animated, & Interactive Landing Page for LightOS</strong></p>
</div>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Framer_Motion-white?style=for-the-badge&logo=framer&logoColor=black" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP" />
</p>

---

## 📖 Overview

Welcome to the **LightOS** web application project. 

This repository contains a high-end, highly interactive React application designed as the primary marketing landing page for **LightOS**—an ultra-fast and beautifully designed operating system concept built by **Autometra Technologies**. 

The goal of this project is to create an immersive "OS-like" browsing experience. By leveraging heavily optimized scroll-driven animations, dynamic interactive backgrounds, and premium glassmorphic UI elements, the web experience perfectly communicates the vision of LightOS: _an operating system that illuminates your workflow._

---

## 🎨 UI / UX & Animation Highlights

This landing page was built to stand out, completely centered around motion and user interaction:

- **Immersive GSAP Hero Scene:** Features a dynamic street scene with glowing animated lamps that intelligently light up as the user scrolls, driven entirely by `GSAP` and `ScrollTrigger`.
- **Interactive Stars Canvas:** Uses a moving starry background with a highly realistic 3D Moon overlay that enhances the "night mode" aesthetic.
- **Scroll-Driven Storytelling:** Powered by `@studio-freight/lenis` allowing buttery smooth scrolling across all sections.
- **Dynamic Cursor Effect:** A custom fluid, gradient-based glow follows the mouse pointer, providing a seamless tactile feel on desktop.
- **LightOS Desktop Mockup:** Features a beautifully animated mock "LightOS Desktop" interface right inside the browser viewport, complete with a live functioning clock, macOS-like interactive dock, and tooltips.
- **Glassmorphism & 3D Tilt Cards:** Features complex layered gradients, 3D tilt-hover effects on core OS feature cards, vivid mix-blend-screen effects, and extremely high contrast typography.

---

## 🛠️ Tech Stack & Tools

### **Core**
- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

### **Styling & Icons**
- **CSS Framework:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

### **Animations & Effects**
- **Framer Motion:** Declarative motion, staggered reveals, and interactive gesture animations.
- **GSAP & ScrollTrigger:** Industry-standard performant scroll and timeline-driven animations used heavily in the dynamic Hero section.
- **Lenis:** Smooth scrolling engine.

---

## 📂 Project Structure

```text
├── src/
│   ├── app/                # Next.js App Router (pages and layout)
│   │   ├── globals.css     # Global styles including tailwind directives
│   │   ├── layout.tsx      # Root layout of the application
│   │   └── page.tsx        # Main landing page stitching components
│   ├── components/         # Reusable React UI Components
│   │   ├── About.tsx       # "Born from a Simple Idea" - The LightOS story & stats
│   │   ├── Contact.tsx     # Contact form for Autometra Technologies support
│   │   ├── CursorGlow.tsx  # Interactive mouse glow effect
│   │   ├── Features.tsx    # 3D Tilt Cards highlighting core OS features
│   │   ├── Hero.tsx        # Immersive GSAP-driven scrolling Hero scene with street lamps
│   │   ├── Showcase.tsx    # Live animated interactive mockup of the LightOS desktop interface
│   │   ├── SmoothScroll.tsx# Lenis smooth-scrolling context provider
│   │   └── StarsCanvas.tsx # 3D/Interactive starry background & night sky
├── public/                 # Static assets (images, moon texture, etc.)
└── package.json            # Project dependencies and bash scripts
```

---

## 🚀 Getting Started

If you'd like to check out the source code and run the landing page locally:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd lightos-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) in your browser to experience the landing page.

---

## 🤝 Connect & Collaborate!

I am always incredibly happy to collaborate on new and exciting projects, discuss innovative tech, or connect with awesome people in the developer community! 

This project was built and designed by **Ayush Kumar Jena**. If you liked this UI/UX exploration or want to work together, feel free to reach out directly through any of my platforms:

- 🔗 **Portfolio:** [ayushkumarjena.in](https://www.ayushkumarjena.in/)
- 💼 **LinkedIn:** [Ayush Kumar Jena](https://www.linkedin.com/in/ayush-kumar-jena-b19151321/)
- 🐦 **Twitter / X:** [@AyushJena1504](https://x.com/AyushJena1504)
- 📸 **Instagram:** [@ig_ayush099](https://www.instagram.com/ig_ayush099/?hl=en)

> **_"Building beautiful, animated, and highly performant web experiences."_** 💡
