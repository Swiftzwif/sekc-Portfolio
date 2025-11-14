'use client';

import { memo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { Tooltip } from '@/components/ui/Tooltip';
import { MetricCard } from './MetricCard';

const trajectoryImages = [
  {
    src: '/trajectory/trajectory-hero.webp',
    alt: 'Trajectory Group Homepage',
    caption: 'Clean, professional design with focus on credibility',
  },
  {
    src: '/trajectory/trajectory-features.webp',
    alt: 'Features Section',
    caption: 'Clear value proposition and service offerings',
  },
  {
    src: '/trajectory/trajectory-pricing.webp',
    alt: 'Pricing Plans',
    caption: 'Transparent pricing with flexible options',
  },
  {
    src: '/trajectory/trajectory-mobile.webp',
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
  { name: 'Next.js 14', description: 'React framework for production' },
  { name: 'TypeScript', description: 'Typed superset of JavaScript' },
  { name: 'Tailwind CSS', description: 'Utility-first CSS framework' },
  { name: 'Framer Motion', description: 'Animation library for React' },
  { name: 'Vercel', description: 'Cloud platform for deployment' },
  { name: 'PostgreSQL', description: 'Powerful relational database' },
  { name: 'Stripe API', description: 'Payment processing integration' },
  { name: 'SendGrid', description: 'Email delivery service' },
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
    setTimeout(() => setIsAutoPlay(true), 10000);
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
    <section id="portfolio" className="relative">
      {/* Section Header - Full Screen */}
      <div className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="container-max relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Background number */}
              <motion.div
                className="text-accent/20 text-[clamp(8rem,20vw,15rem)] font-bold absolute -top-20 -left-10 select-none pointer-events-none"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 0.1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                01
              </motion.div>

              <h2 className="text-[clamp(3rem,8vw,6rem)] font-bold text-foreground mb-8 leading-none text-center">
                Featured Work
              </h2>
              <p className="text-[clamp(1.5rem,3vw,2.5rem)] text-text-secondary max-w-3xl mx-auto leading-relaxed text-center">
                Real results from real projects. Here&apos;s how we transformed Trajectory Group&apos;s digital presence.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Background accent */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>

      {/* Project Showcase - Full Screen */}
      <div className="min-h-screen flex items-center justify-center px-6 relative bg-surface">
        <div className="container-max relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Interactive Slideshow */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
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
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
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
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                    aria-label="Previous image"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                    aria-label="Next image"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center gap-2 mt-6">
                  {trajectoryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentImage
                          ? 'w-8 bg-accent'
                          : 'w-2 bg-border hover:bg-text-secondary'
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
                  className="inline-flex items-center gap-2 mt-8 text-accent hover:text-accent-hover transition-colors text-lg font-semibold"
                  whileHover={{ x: 5 }}
                >
                  <span>Visit Live Site</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              </motion.div>

              {/* Right: Project Details */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-16"
              >
                {/* Project Title & Description */}
                <div>
                  <h3 className="text-[clamp(2rem,4vw,3rem)] font-bold text-foreground mb-6">
                    Trajectory Group
                  </h3>
                  <p className="text-[clamp(1.125rem,1.5vw,1.25rem)] text-text-secondary leading-relaxed mb-8">
                    Complete digital transformation for a financial consulting firm. Built a high-performance,
                    conversion-optimized platform that establishes trust and drives client acquisition.
                  </p>

                  {/* Performance Metrics */}
                  <div className="grid grid-cols-2 gap-8">
                    {metrics.map((metric, index) => (
                      <MetricCard
                        key={metric.label}
                        label={metric.label}
                        value={metric.value}
                        change={metric.change}
                        delay={0.5 + index * 0.1}
                        inView={inView}
                      />
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-12">
                  <h4 className="text-xl font-semibold text-foreground mb-4">Tech Stack</h4>
                  <div className="flex flex-wrap gap-3">
                    {techStack.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                      >
                        <Tooltip content={tech.description}>
                          <span className="px-4 py-2 bg-accent/10 text-accent rounded-lg text-sm font-medium cursor-pointer hover:bg-accent/20 hover:scale-105 transition-all duration-200 inline-block">
                            {tech.name}
                          </span>
                        </Tooltip>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-12">
                  <h4 className="text-xl font-semibold text-foreground mb-4">Key Features</h4>
                  <ul className="space-y-3">
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
                        transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                        className="flex items-start gap-3 text-text-secondary"
                      >
                        <svg className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-lg">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="pt-12"
                >
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
                  >
                    Let&apos;s Build Your Success Story
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Closing Teaser - Full Screen */}
      <div className="min-h-[50vh] flex items-center justify-center px-6">
        <div className="container-max relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-[clamp(1.25rem,2vw,1.5rem)] text-text-secondary mb-4">
                More success stories coming soon...
              </p>
              <p className="text-lg text-text-secondary/60">
                Currently working on 3 exciting projects in stealth mode
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Portfolio;
