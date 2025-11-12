'use client';

import { memo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Contact = memo(function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <section
      ref={ref}
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 md:px-16 relative"
    >
      <div className="container-max relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-24"
          >
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.1] tracking-[-0.02em] mb-12 text-foreground text-center">
              Ready for a website
              <br />
              that actually works?
            </h2>
            <p className="text-[clamp(1.25rem,2vw,1.5rem)] text-text-secondary leading-relaxed text-center">
              No fluff. No excuses. Just results.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8 mb-24"
          >
            {/* Primary Email */}
            <a
              href="mailto:jsanchez@trajectorygroup.org"
              className="group flex items-center justify-between border-t border-border py-8 hover:border-accent transition-colors duration-300"
            >
              <span className="text-[clamp(1.25rem,2.5vw,2rem)] font-medium tracking-[-0.01em] text-foreground group-hover:text-accent transition-colors">
                jsanchez@trajectorygroup.org
              </span>
              <svg
                className="w-8 h-8 text-text-secondary opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 17L17 7M17 7H7M17 7V17"
                />
              </svg>
            </a>

            {/* Connect & Location Grid */}
            <div className="grid md:grid-cols-2 gap-8 border-t border-border pt-12">
              <div>
                <p className="text-text-secondary/60 mb-4 text-sm uppercase tracking-wider">
                  Connect
                </p>
                <div className="space-y-3">
                  <a
                    href="https://www.linkedin.com/in/jaymison-sanchez-339639320/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-lg text-foreground hover:text-accent transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://twitter.com/JROTHEFINEST"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-lg text-foreground hover:text-accent transition-colors"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://github.com/swiftzwif"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-lg text-foreground hover:text-accent transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <div>
                <p className="text-text-secondary/60 mb-4 text-sm uppercase tracking-wider">
                  Location
                </p>
                <p className="text-lg text-foreground">Boston, MA</p>
                <p className="text-base text-text-secondary mt-2">
                  Available remotely worldwide
                </p>
              </div>
            </div>
          </motion.div>

          {/* Availability Status */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-2 mb-24"
          >
            <motion.div
              className="w-2 h-2 bg-green-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm text-text-secondary">
              Currently available for new projects
            </span>
          </motion.div>

          {/* SwiftNet Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <p className="text-xl font-bold text-accent mb-2">SwiftNet Solutions</p>
            <p className="text-sm text-text-secondary">
              Where speed meets sophistication
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default Contact;