'use client';

import { memo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = memo(function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <section
      ref={ref}
      id="about"
      className="min-h-screen flex items-center justify-center px-6 md:px-16 relative"
    >
      <div className="container-max relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Message */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-24"
          >
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-16 text-foreground text-center">
              Most websites are slow, cluttered, and built on outdated tech
            </h2>
          </motion.div>

          {/* SwiftNet Solution */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-24"
          >
            <p className="text-[clamp(1.25rem,2.5vw,2rem)] text-text-secondary leading-relaxed mb-24 text-center">
              I build websites that actually work for your business.
            </p>
            <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-text-secondary leading-relaxed mb-16 text-center">
              SwiftNet Solutions exists because too many businesses waste money on websites
              that look pretty but don&apos;t deliver results. Every line of code serves a purpose.
              Every design decision drives action.
            </p>
          </motion.div>

          {/* Key Differentiators */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid md:grid-cols-3 gap-12 mb-32"
          >
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-4">3x</div>
              <p className="text-lg text-text-secondary">Faster Development</p>
              <p className="text-sm text-text-secondary/60 mt-2">Using AI-enhanced workflows</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-4">0.8s</div>
              <p className="text-lg text-text-secondary">Average Load Time</p>
              <p className="text-sm text-text-secondary/60 mt-2">Performance that converts</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-4">100%</div>
              <p className="text-lg text-text-secondary">Accountability</p>
              <p className="text-sm text-text-secondary/60 mt-2">One developer, complete ownership</p>
            </div>
          </motion.div>

          {/* Personal Touch */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="pt-32 border-t border-border mb-32"
          >
            <p className="text-xl text-text-secondary mb-8 text-center">
              Hi, I&apos;m Jaymison Sanchez. Based in Boston, MA.
            </p>
            <p className="text-lg text-text-secondary/80 mb-12 text-center">
              I combine human creativity with AI efficiency to deliver exceptional results.
              When I&apos;m not coding, you&apos;ll find me exploring the latest in AI technology
              or optimizing performance metrics.
            </p>
            <div className="flex justify-center gap-8">
              <a
                href="https://linkedin.com/in/jaymison-sanchez-339639320"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/swiftzwif"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors"
              >
                GitHub
              </a>
              <a
                href="mailto:jsanchez@trajectorygroup.org"
                className="text-text-secondary hover:text-accent transition-colors"
              >
                Email
              </a>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mt-12"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Start Your Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default About;