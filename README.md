<div align="center">
  <img src="./public/LightOS-Logo Transparent.png" alt="LightOS Logo" width="400" />

  <h1>🌍 LightOS : Smart Public Lighting System</h1>
  <p><strong>Next-Generation Connected Infrastructure by Autometra Technologies</strong></p>
</div>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React_Three_Fiber-black?style=for-the-badge&logo=react&logoColor=61DAFB" alt="R3F" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Framer_Motion-white?style=for-the-badge&logo=framer&logoColor=black" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP" />
</p>

---

## 📖 Overview

Welcome to the **LightOS** web presentation project. 

This repository contains a high-end, highly interactive React application designed as the primary marketing and product showcase landing page for **LightOS**. LightOS is a small, smart hardware device that upgrades ordinary streetlights into a connected network. It allows cities to monitor, control, and fix all their lights remotely from one simple dashboard, eliminating daylight energy waste and cutting down on expensive manual inspections.

The goal of this project is to create an immersive, cinematic browsing experience to introduce the hardware. By leveraging heavily optimized scroll-driven 3D animations, interactive WebGL device models, and premium glassmorphic UI elements, the web experience perfectly communicates the vision of modernizing public infrastructure.

---

## 🎨 UI / UX & Animation Highlights

This landing page was built to stand out, completely centered around motion, 3D, and user interaction:

- **Immersive GSAP Hero Scene:** Features a dynamic street scene with a driving car and glowing animated double-sided streetlights that intelligently illuminate as the user scrolls, driven entirely by `GSAP` and `ScrollTrigger`.
- **Interactive 3D Hardware Model:** Built with `React Three Fiber` and `Drei`. Users can seamlessly grab, rotate, and explore the highly detailed LightOS device in full 3D right inside the "About" section.
- **Scroll-Driven Storytelling:** Powered by `@studio-freight/lenis` allowing buttery smooth scrolling across all sections.
- **Dynamic Cursor Effect:** A custom fluid, gradient-based glow follows the mouse pointer, providing a seamless tactile feel on desktop.
- **Glassmorphism & Tilt Cards:** Features complex layered gradients, vivid mix-blend-screen effects, and extremely high contrast typography.
- **Interactive Device Mockups:** Live visual demonstrations of the dashboard monitoring interface inside realistic device frames.

---

## 🛠️ Tech Stack & Tools

### **Core**
- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

### **3D & Rendering**
- **WebGL Rendering:** [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) 
- **3D Helpers:** [@react-three/drei](https://github.com/pmndrs/drei)

### **Styling & Icons**
- **CSS Framework:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

### **Animations & Effects**
- **Framer Motion:** Declarative motion, staggered reveals, and interactive gesture animations.
- **GSAP & ScrollTrigger:** Industry-standard performant scroll and timeline-driven animations used heavily in the dynamic Hero layout.
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
│   │   ├── About.tsx       # Features the interactive 3D Model of the LightOS device
│   │   ├── Contact.tsx     # Contact & Deployment inquiry form
│   │   ├── CursorGlow.tsx  # Interactive mouse glow effect
│   │   ├── Hero.tsx        # Immersive GSAP-driven scrolling Hero scene with street lamps
│   │   ├── Latest.tsx      # Core platform features and statistics
│   │   ├── LightOSDevice.tsx # The 3D geometry code for the hardware model
│   │   ├── Showcase.tsx    # App Dashboard showcase inside a laptop mockup
│   │   └── SmoothScroll.tsx# Lenis smooth-scrolling context provider
├── public/                 # Static assets (images, moon texture, transparent logos)
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

Open [http://localhost:3000](http://localhost:3000) in your browser to experience the 3D landing page.

---

## 🤝 Connect & Collaborate!

I am always incredibly happy to collaborate on new and exciting projects, discuss innovative tech, or connect with awesome people in the developer community! 

This project was built and designed by **Ayush Kumar Jena**. If you liked this UI/UX & WebGL exploration or want to work together, feel free to reach out directly through any of my platforms:

- 🔗 **Portfolio:** [ayushkumarjena.in](https://www.ayushkumarjena.in/)
- 💼 **LinkedIn:** [Ayush Kumar Jena](https://www.linkedin.com/in/ayush-kumar-jena-b19151321/)
- 🐦 **Twitter / X:** [@AyushJena1504](https://x.com/AyushJena1504)
- 📸 **Instagram:** [@ig_ayush099](https://www.instagram.com/ig_ayush099/?hl=en)

> **_"Building beautiful, animated, and highly performant web experiences."_** 💡
