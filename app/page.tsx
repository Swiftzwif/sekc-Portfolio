'use client';

import { useState } from 'react';
import Loader from '@/components/animations/Loader';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import SmoothScroll from '@/components/utils/SmoothScroll';
import ScrollProgressBar from '@/components/ui/ScrollProgressBar';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Smooth Scroll Handler */}
      <SmoothScroll />

      {/* Initial Loader - Optimized duration */}
      <Loader onComplete={() => setIsLoading(false)} duration={1500} />

      {/* Scroll Progress Bar */}
      {!isLoading && <ScrollProgressBar />}

      {/* Main Content */}
      {!isLoading && (
        <>
          <Header />
          <main>
            <Hero />
            <Projects />
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