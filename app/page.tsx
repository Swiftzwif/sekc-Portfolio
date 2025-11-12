'use client';

import { useState, Suspense, lazy } from 'react';
import dynamic from 'next/dynamic';
import Script from 'next/script';
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

  // JSON-LD Structured Data for SEO
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jaymison Sanchez',
    url: 'https://swiftnetsolutions.net',
    jobTitle: 'Full-Stack Web Developer',
    description: 'Full-stack developer crafting digital experiences that drive business growth.',
    sameAs: [
      'https://www.linkedin.com/in/jaymison-sanchez-339639320/',
      'https://github.com/swiftzwif',
      'https://twitter.com/JROTHEFINEST',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SwiftNet Solutions',
    url: 'https://swiftnetsolutions.net',
    description: 'No fluff. No excuses. Just results. Building lightning-fast websites that drive real business growth.',
    creator: {
      '@type': 'Person',
      name: 'Jaymison Sanchez',
    },
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SwiftNet Solutions',
    url: 'https://swiftnetsolutions.net',
    description: 'High-performance web development agency',
    sameAs: [
      'https://www.linkedin.com/in/jaymison-sanchez-339639320/',
      'https://github.com/swiftzwif',
      'https://twitter.com/JROTHEFINEST',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'jsanchez@trajectorygroup.org',
      availableLanguage: ['en'],
    },
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

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
          <main id="main-content" className="will-change-auto">
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