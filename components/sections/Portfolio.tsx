'use client';

import { memo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const trajectoryImages = [
  {
    src: '/trajectory/trajectory-hero.png',
    alt: 'Trajectory Group Homepage',
    caption: 'Clean, professional design with focus on credibility',
  },
  {
    src: '/trajectory/trajectory-features.png',
    alt: 'Features Section',
    caption: 'Clear value proposition and service offerings',
  },
  {
    src: '/trajectory/trajectory-pricing.png',
    alt: 'Pricing Plans',
    caption: 'Transparent pricing with flexible options',
  },
  {
    src: '/trajectory/trajectory-mobile.png',
    alt: 'Mobile Responsive',
    caption: 'Flawless experience across all devices',
  },
];

const metrics = [
  { label: 'Load Time', value: '0.8s', change: '-65%' },
  { label: 'Performance Score', value: '98', change: '+41%' },
  { label: 'Conversion Rate', value: '4.2%', change: '+127%' },
  { label: 'Bounce Rate', value: '22%', change: '-58%' },
];

const techStack = [
  'Next.js 14',
  'TypeScript',
  'Tailwind CSS',
  'Framer Motion',
  'Vercel',
  'PostgreSQL',
  'Stripe API',
  'SendGrid',
];

const Portfolio = memo(function Portfolio() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Auto-advance slideshow
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % trajectoryImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToSlide = (index: number) => {
    setCurrentImage(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000); // Resume after 10s
  };

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % trajectoryImages.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const prevSlide = () => {
    setCurrentImage((prev) => (prev - 1 + trajectoryImages.length) % trajectoryImages.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  return (
    <section id="portfolio" className="py-24 px-6 bg-surface">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[clamp(2.5rem,6vw,4rem)] font-bold text-foreground mb-4">
            Featured Work
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Real results from real projects. Here's how we transformed Trajectory Group's digital presence.
          </p>
        </motion.div>

        {/* Main Portfolio Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Interactive Slideshow */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative aspect-[16/10] bg-border rounded-2xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={trajectoryImages[currentImage].src}
                    alt={trajectoryImages[currentImage].alt}
                    fill
                    className="object-cover object-top"
                    priority={currentImage === 0}
                  />
                  {/* Caption Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <p className="text-white text-sm font-medium">
                      {trajectoryImages[currentImage].caption}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Previous image"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Next image"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {trajectoryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImage
                      ? 'w-8 bg-accent'
                      : 'bg-border hover:bg-text-secondary'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Live Site Link */}
            <motion.a
              href="https://trajectorygroup.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-accent hover:text-accent-hover transition-colors"
              whileHover={{ x: 5 }}
            >
              <span className="font-semibold">Visit Live Site</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Right: Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Project Title & Description */}
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Trajectory Group
              </h3>
              <p className="text-text-secondary mb-6">
                Complete digital transformation for a financial consulting firm. Built a high-performance,
                conversion-optimized platform that establishes trust and drives client acquisition.
              </p>

              {/* Performance Metrics */}
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="bg-background p-4 rounded-lg border border-border"
                  >
                    <p className="text-sm text-text-secondary mb-1">{metric.label}</p>
                    <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                    <p className={`text-sm font-medium ${
                      metric.change.startsWith('+') ? 'text-green-500' : 'text-accent'
                    }`}>
                      {metric.change}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                    className="px-3 py-1.5 bg-accent/10 text-accent rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Key Features</h4>
              <ul className="space-y-2">
                {[
                  'Lightning-fast page loads with Next.js ISR',
                  'Secure payment processing with Stripe',
                  'Advanced analytics and conversion tracking',
                  'Mobile-first responsive design',
                  'SEO optimized for maximum visibility',
                  'Automated email workflows with SendGrid',
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    className="flex items-start gap-2 text-text-secondary"
                  >
                    <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 1.2 }}
              className="pt-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-colors"
              >
                Let's Build Your Success Story
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Additional Projects Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-24 text-center"
        >
          <p className="text-text-secondary mb-4">
            More success stories coming soon...
          </p>
          <p className="text-sm text-text-secondary/60">
            Currently working on 3 exciting projects in stealth mode
          </p>
        </motion.div>
      </div>
    </section>
  );
});

export default Portfolio;