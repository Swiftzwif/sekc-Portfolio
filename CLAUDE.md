# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 portfolio website project using the App Router architecture with TypeScript, Tailwind CSS v4, and ESLint v9.

## Common Development Commands

```bash
# Start development server (port 3000 with hot reload)
npm run dev

# Build for production (creates .next directory)
npm run build

# Run production build
npm start

# Run ESLint checks
npm run lint
```

## Architecture & Key Patterns

### Technology Stack
- **Framework:** Next.js 16.0.1 with App Router (not Pages Router)
- **Language:** TypeScript with strict mode enabled
- **Styling:** Tailwind CSS v4 with PostCSS, dark mode support via CSS custom properties
- **Fonts:** Geist font family (Sans and Mono) loaded via next/font

### Project Structure
- `app/` - Next.js App Router components and pages
  - `layout.tsx` - Root layout with font configuration and metadata
  - `page.tsx` - Home page component with responsive Tailwind styling
  - `globals.css` - Global styles with Tailwind imports and CSS variables
- `public/` - Static assets (images, icons)
- Path alias: `@/*` maps to project root for clean imports

### Key Configuration Details
- **TypeScript:** Strict mode, ES2017 target, path aliases enabled
- **ESLint:** Flat config format (v9), extends Next.js recommended rules
- **Build Output:** `.next/` directory (gitignored)
- **Server Components:** Default for all components unless 'use client' is specified

### Development Notes
- The project is currently a clean Next.js scaffold from create-next-app
- No testing framework is configured yet
- Dark mode is supported through CSS media queries and Tailwind dark: utilities
- Image optimization is handled automatically via Next.js Image component