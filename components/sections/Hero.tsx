'use client';

import { memo, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import TextReveal from '@/components/animations/TextReveal';
import ScrollReveal from '@/components/animations/ScrollReveal';

const Hero = memo(function Hero() {
  const [isClient, setIsClient] = useState(false);
  const { scrollYProgress } = useScroll();

  // Create parallax effect for the last line
  const lastLineY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  const lastLineOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative flex items-center justify-center px-6 overflow-hidden min-h-screen" style={{ minHeight: '100vh' }}>
      {/* Background - clean and minimal */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-surface" />

      {/* Subtle accent glow */}
      <div className="absolute top-1/3 right-1/3 w-[40rem] h-[40rem] bg-accent/5 rounded-full blur-3xl" />

      <div className="container-max relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Multi-line stacked text with story flow */}
          <div className="space-y-4 md:space-y-8">
            {/* Line 1: Hi */}
            <div className="overflow-hidden">
              <h1 className="text-[clamp(2rem,8vw,5rem)] font-bold text-foreground">
                <TextReveal
                  text="Hi"
                  delay={0.2}
                  stagger={0.06}
                />
              </h1>
            </div>

            {/* Line 2: My name's */}
            <div className="overflow-hidden">
              <h2 className="text-[clamp(2rem,8vw,5rem)] font-bold text-foreground">
                <TextReveal
                  text="My name's"
                  delay={0.5}
                  stagger={0.04}
                />
              </h2>
            </div>

            {/* Line 3: Jaymison Sanchez */}
            <div className="overflow-hidden">
              <h2 className="text-[clamp(2.5rem,10vw,7rem)] font-bold text-accent">
                <TextReveal
                  text="Jaymison Sanchez"
                  delay={0.9}
                  stagger={0.03}
                />
              </h2>
            </div>

            {/* Line 4: I Believe */}
            <div className="overflow-hidden">
              <h2 className="text-[clamp(2rem,8vw,5rem)] font-bold text-foreground">
                <TextReveal
                  text="I Believe"
                  delay={1.4}
                  stagger={0.04}
                />
              </h2>
            </div>

            {/* Line 5: Web Design should... (leads to principles) */}
            <motion.div
              className="overflow-hidden"
              style={{
                y: isClient ? lastLineY : 0,
                opacity: isClient ? lastLineOpacity : 1
              }}
            >
              <h2 className="text-[clamp(2rem,8vw,5rem)] font-bold text-foreground">
                <TextReveal
                  text="Web Design should..."
                  delay={1.8}
                  stagger={0.04}
                />
              </h2>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <ScrollReveal delay={2.5} animation="fadeUp">
            <motion.div
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="text-sm text-text-secondary uppercase tracking-wider">Scroll to explore</span>
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
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
});

export default Hero;