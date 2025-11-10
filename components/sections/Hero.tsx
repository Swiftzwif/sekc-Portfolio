'use client';

import { motion } from 'framer-motion';
import TextReveal from '@/components/animations/TextReveal';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-[#0f0f0f] opacity-50" />

      {/* Simplified background element - static with subtle opacity */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container-max relative z-10">
        <div className="max-w-5xl overflow-hidden">
          {/* Main headline with letter-by-letter reveal */}
          <h1 className="text-hero mb-8 break-words">
            <TextReveal
              text="I craft digital experiences"
              delay={0.5}
              stagger={0.04}
            />
          </h1>

          {/* Subheadline */}
          <ScrollReveal delay={1.5} animation="fadeUp">
            <p className="text-xl md:text-2xl text-secondary max-w-3xl mb-12 leading-relaxed">
              Full-stack developer specializing in fast, modern web applications
              that drive business growth. Building with React, Next.js, and cutting-edge AI tools.
            </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal delay={1.8} animation="fadeUp">
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#work"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0a0a0a] font-semibold rounded-full transition-all hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </motion.a>

              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-semibold rounded-full transition-all hover:bg-white/10 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}