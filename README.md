# S Hari Shankar — Developer Portfolio Website

## Overview

A modern, responsive, static developer portfolio website for **S Hari Shankar**, Computer Science Engineering student at Rajalakshmi Institute of Technology (affiliated with Anna University).

The UI adopts the modern, high-contrast dark architectural design aesthetic (emerald green & slate, ambient glowing mesh, geometric photo frame) translated into a modular **React + Vite + Tailwind CSS** architecture.

All personal information, educational milestones, internships, technical projects, certifications, and awards are strictly derived from verified resume data without fabrication.

---

## Tech Stack

- **Framework:** React 18 (Functional components, React hooks)
- **Build Tooling:** Vite 6
- **Styling:** Tailwind CSS, Google Fonts (Geist, Inter, JetBrains Mono), Google Material Symbols
- **Icons:** Material Symbols Outlined & Vector SVGs
- **Form Forwarding:** Automated inbox routing via Web3Forms API directly to `harishankarism@gmail.com`

---

## Features

- **Single Source of Truth:** Centralized data configuration in `src/data/portfolioData.js`.
- **Architectural Hero:** Geometric back-frame with the user's verified portrait, floating quote pill, status badge, and quick metrics.
- **Automated Contact Form:** When visitors submit the contact form, their message is automatically dispatched directly to `harishankarism@gmail.com`.
- **Capabilities Matrix:** Core Domains, Systems & Data Architecture (MongoDB, Algorithms, Sensors), and verified Soft Skills.
- **Projects Showcase:** 4 verified projects (Water Level Predicting System, Learning Management System, E-Voting System, Library Management System).
- **Chronicle Timeline:** Dual internships (CODTECH IT Solutions & Heavy Vehicles Factory HVF) and academic milestones (8.49 CGPA, 85.0%, 93.4%).
- **Recognition & Certifications:** ISRO, NPTEL, UiPath, MongoDB certifications, alongside 1st place hackathon awards and Best Paper on Fault Tolerance.
- **Interactive Light / Dark Mode:** Native theme switcher toggling dark/light mode across the application.
- **Resume Integration:** PDF asset bundled in `public/resume.pdf` with direct download buttons.

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Create production build for Vercel
npm run build
```

---

## Deployment to Vercel

1. Push the project to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. Vercel will automatically build the `dist/` directory using `npm run build`.
