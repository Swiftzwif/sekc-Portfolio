'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import TextReveal from '@/components/animations/TextReveal';
import AnimatedTextSwitcher from '@/components/animations/AnimatedTextSwitcher';

const Hero = memo(function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen px-6 overflow-hidden" style={{ minHeight: '100vh' }}>
      {/* Background - clean and minimal */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-surface" />

      {/* Subtle accent glow */}
      <div className="absolute top-1/3 right-1/3 w-[40rem] h-[40rem] bg-accent/5 rounded-full blur-3xl" />

      {/* Centered content container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-6xl mx-auto">
        {/* Hero text content - centered vertically and horizontally */}
        <div className="flex flex-col items-center justify-center text-center space-y-2 md:space-y-4" role="banner">
          {/* Line 1: HI */}
          <div className="overflow-hidden">
            <h1 className="text-[clamp(1.5rem,6vw,4rem)] font-bold text-foreground">
              <TextReveal
                text="HI"
                delay={0.2}
                stagger={0.06}
              />
            </h1>
          </div>

          {/* Line 2: My Name Is */}
          <div className="overflow-hidden">
            <h2 className="text-[clamp(1.5rem,6vw,4rem)] font-bold text-foreground">
              <TextReveal
                text="My Name Is"
                delay={0.5}
                stagger={0.04}
              />
            </h2>
          </div>

          {/* Line 3: Jaymison Sanchez */}
          <div className="overflow-hidden">
            <h2 className="text-[clamp(2rem,8vw,6rem)] font-bold text-accent">
              <TextReveal
                text="Jaymison Sanchez"
                delay={0.9}
                stagger={0.03}
              />
            </h2>
          </div>

          {/* Line 4: I Believe */}
          <div className="overflow-hidden">
            <h2 className="text-[clamp(1.5rem,6vw,4rem)] font-bold text-foreground">
              <TextReveal
                text="I Believe"
                delay={1.4}
                stagger={0.04}
              />
            </h2>
          </div>

          {/* Line 5: Web Design Should */}
          <div className="overflow-hidden">
            <h2 className="text-[clamp(1.5rem,6vw,4rem)] font-bold text-foreground">
              <TextReveal
                text="Web Design Should"
                delay={1.8}
                stagger={0.04}
              />
            </h2>
          </div>

          {/* Line 6: Animated Text Switcher */}
          <div className="overflow-hidden">
            <h2 className="text-[clamp(1.5rem,6vw,4rem)] font-bold text-foreground">
              <AnimatedTextSwitcher
                words={['Be Lightning Fast', 'Be Intentional', 'Drive Results', 'Stay Cutting-Edge']}
                duration={2500}
                transitionDuration={800}
                startDelay={2500}
                className="font-playfair"
              />
            </h2>
          </div>
        </div>

        {/* Scroll to explore - positioned below hero text */}
        <motion.div
          className="flex flex-col items-center gap-2 mt-16 md:mt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2"
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <span className="text-sm text-text-secondary uppercase tracking-wider">
              scroll to explore
            </span>
            <svg
              className="w-5 h-5 text-text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

export default Hero;
