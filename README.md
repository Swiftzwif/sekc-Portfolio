# Portfolio Website

A sophisticated, dark-themed portfolio website built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion. Inspired by mantis.works aesthetic with smooth animations and modern interactions.

## Features

### Core Functionality
- **Dark Theme Design**: Elegant #0a0a0a background with high contrast white text
- **Smooth Animations**: Letter-by-letter text reveals, scroll-triggered animations, and hover effects
- **Custom Loader**: Percentage counter with smooth loading transition
- **Interactive Navigation**: Real-time clock display, location indicator, and mobile-responsive menu
- **Custom Cursor**: Desktop cursor effect with hover states
- **Smooth Scrolling**: Seamless navigation between sections

### Sections
- **Hero**: Large statement text with animated reveal
- **Projects**: Interactive showcase with hover effects and category filtering
- **Services**: Expandable cards revealing service details
- **About**: Skills showcase and personal information
- **Contact**: Multiple contact methods with availability status

## Tech Stack

- **Framework**: Next.js 16.0.1 (App Router)
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Fonts**: Space Grotesk & Inter (via next/font)

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx        # Root layout with fonts
│   ├── page.tsx          # Main page with all sections
│   ├── globals.css       # Global styles and CSS variables
│   ├── loading.tsx       # Loading state
│   ├── error.tsx         # Error boundary
│   └── not-found.tsx     # 404 page
├── components/
│   ├── animations/       # Animation components
│   │   ├── Loader.tsx
│   │   ├── ScrollReveal.tsx
│   │   └── TextReveal.tsx
│   ├── effects/          # Visual effects
│   │   └── CursorEffect.tsx
│   ├── layout/           # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   ├── sections/         # Page sections
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   └── utils/            # Utility components
│       └── SmoothScroll.tsx
└── public/               # Static assets
```

## Customization

### Colors
Edit the CSS variables in `app/globals.css`:

```css
:root {
  --background: #0a0a0a;
  --foreground: #ffffff;
  --accent: #00d9ff;
  /* ... */
}
```

### Content
- Update personal information in component files
- Replace placeholder images in the Projects section
- Modify contact information in Contact and Footer components

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Run production build
- `npm run lint` - Run ESLint

## Performance Optimizations

- Server Components by default
- Dynamic imports for code splitting
- Optimized animations with Framer Motion
- Lazy loading for images
- Smooth scroll behavior
- Efficient re-renders with React.memo where needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

MIT License - feel free to use this project for your own portfolio!

## Acknowledgments

- Design inspired by mantis.works
- Built with Next.js and the React ecosystem
