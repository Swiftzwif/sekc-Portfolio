# Project Context

## Project Overview
- **Name**: SEKC Portfolio
- **Type**: Personal Portfolio Website
- **Tech Stack**: Next.js 16, React 19, TypeScript (strict), Tailwind CSS v4, Framer Motion, next-themes
- **Status**: In Progress - Fixing Text Centering Issues

## Architecture Decisions
- 2025-11-11: Using Next.js 16 App Router for modern React patterns
- 2025-11-11: Tailwind CSS v4 with PostCSS for styling
- 2025-11-11: Framer Motion for smooth animations
- 2025-11-11: Dynamic imports and code splitting for performance
- 2025-11-11: Dark mode support via next-themes
- 2025-11-12: Identified Tailwind v4 CSS specificity issue with text-center class - must apply directly to text elements

## Current Tasks
### Active
None

### Completed
- GitHub Admin: Created 7 focused commits - 2025-11-12
  1. feat(ui): add Accordion and Tooltip components
  2. feat(services): refactor Services section with accordion pattern
  3. fix: resolve text centering issues in About, Contact, Portfolio, Services sections
  4. perf: add security headers and cache-busting configuration
  5. a11y: update design tokens for WCAG AA compliance
  6. chore: add SEO metadata and site configuration
  7. build: optimize trajectory images from PNG to WebP
- Coordinator: Analyzed task and created execution plan - 2025-11-12
- Frontend Engineer: Fixed text centering issues in Services section - 2025-11-12
- Coordinator: Added cache-busting configuration to next.config.js - 2025-11-12

### Blocked
None

## File Structure
```
sekc-Portfolio/
├── app/
│   ├── components/
│   ├── providers/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── error.tsx
│   ├── loading.tsx
│   └── not-found.tsx
├── components/
│   ├── animations/
│   │   ├── Loader.tsx
│   │   ├── TextReveal.tsx
│   │   ├── FallingTechBadge.tsx
│   │   └── ScrollReveal.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Principles.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Services.tsx (FIXED)
│   │   ├── About.tsx (VERIFIED - CORRECT)
│   │   └── Contact.tsx
│   ├── ui/
│   │   └── ScrollProgressBar.tsx
│   └── utils/
│       ├── SmoothScroll.tsx
│       └── PerformanceMonitor.tsx
├── public/
├── .claude/
│   └── project-context.md
├── package.json
├── tsconfig.json
├── next.config.ts
└── CLAUDE.md
```

## Dependencies
### Production
- next@16.0.1
- react@19.2.0
- react-dom@19.2.0
- framer-motion@11.11.0
- next-themes@0.4.6
- react-intersection-observer@10.0.0

### Development
- typescript@5.x
- tailwindcss@4.x
- @tailwindcss/postcss@4.x
- eslint@9.x
- eslint-config-next@16.0.1

## Environment Variables
None currently required

## API Contracts
None currently - static portfolio site

## Design Tokens
Currently using Tailwind defaults with CSS custom properties for theming

## Git Status
- **Current Branch**: main
- **Last Commit**: 9b40a95 - build: optimize trajectory images from PNG to WebP
- **Files Changed**: 7 commits created, 41 files modified/added/deleted
- **Commits Ahead**: 7 ahead of origin/main
- **Pending Changes**: package.json and package-lock.json (dependency updates - not committed)
- **Remote**: Ready to push to origin

## Known Issues
### Text Centering Problem - RESOLVED 2025-11-12
- **Root Cause**: Tailwind v4 CSS specificity - `text-center` on containers doesn't inherit to child text elements
- **Solution**: Apply `text-center` directly to `<h2>`, `<h3>`, and `<p>` elements
- **Fixed Sections**:
  - Services.tsx - Added `text-center` to lines 58, 61, 124 (h2 and p elements)
  - About.tsx - Already correctly implemented with text-center on all text elements
- **Pattern Applied**: Removed `text-center` from container divs, added directly to text elements

## Notes
- Project already has performance optimizations (dynamic imports, code splitting)
- TEXT_CENTERING_FIX_SUMMARY.md exists documenting previous fix attempts
- test-centering.html exists for visual testing
- No testing framework configured yet
- No deployment configuration visible yet
