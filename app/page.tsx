'use client';

import { useState, Suspense, lazy } from 'react';
import dynamic from 'next/dynamic';
import Loader from '@/components/animations/Loader';

// Dynamic imports for better code splitting and performance
const Header = dynamic(() => import('@/components/layout/Header'), {
  ssr: false,
  loading: () => <div className="h-20" />,
});

const Footer = dynamic(() => import('@/components/layout/Footer'), {
  ssr: false,
  loading: () => <div className="h-20" />,
});

const Hero = dynamic(() => import('@/components/sections/Hero'), {
  ssr: false,
  loading: () => <div className="min-h-screen" />,
});

const Principles = dynamic(() => import('@/components/sections/Principles'), {
  ssr: false,
  loading: () => <div className="min-h-screen" />,
});

const Portfolio = dynamic(() => import('@/components/sections/Portfolio'), {
  ssr: false,
  loading: () => <div className="min-h-screen" />,
});

const Services = dynamic(() => import('@/components/sections/Services'), {
  ssr: false,
  loading: () => <div className="min-h-screen" />,
});

const About = dynamic(() => import('@/components/sections/About'), {
  ssr: false,
  loading: () => <div className="min-h-screen" />,
});

const Contact = dynamic(() => import('@/components/sections/Contact'), {
  ssr: false,
  loading: () => <div className="min-h-screen" />,
});

// Lazy load non-critical components
const SmoothScroll = lazy(() => import('@/components/utils/SmoothScroll'));
const ScrollProgressBar = lazy(() => import('@/components/ui/ScrollProgressBar'));
const PerformanceMonitor = lazy(() => import('@/components/utils/PerformanceMonitor'));

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Initial Loader with optimized duration */}
      <Loader onComplete={() => setIsLoading(false)} duration={1200} />

      {/* Main Content with lazy loading */}
      {!isLoading && (
        <>
          {/* Smooth Scroll Handler - Lazy loaded */}
          <Suspense fallback={null}>
            <SmoothScroll />
          </Suspense>

          {/* Scroll Progress Bar - Lazy loaded */}
          <Suspense fallback={null}>
            <ScrollProgressBar />
          </Suspense>

          {/* Performance Monitor - Development only */}
          <Suspense fallback={null}>
            <PerformanceMonitor />
          </Suspense>

          {/* Main sections with dynamic imports */}
          <Header />
          <main className="will-change-auto">
            <Hero />
            <Principles />
            <Portfolio />
            <Services />
            <About />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}