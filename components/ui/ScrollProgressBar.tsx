'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const heroHeight = window.innerHeight * 1.2; // 120vh hero section
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(Math.max((scrollTop / docHeight) * 100, 0), 100);

      setScrollProgress(progress);
      setShowBar(scrollTop > heroHeight);
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <AnimatePresence>
      {showBar && (
        <motion.div
          className="fixed right-5 top-20 bottom-20 w-2 z-50"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.3 }}
        >
          {/* Background track */}
          <div className="absolute inset-0 bg-white/10 rounded-full" />

          {/* Progress fill */}
          <motion.div
            className="absolute left-0 right-0 top-0 bg-gradient-to-b from-[#00d9ff] via-[#00d9ff] to-[#0099ff] rounded-full"
            style={{
              height: `${scrollProgress}%`,
              boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)'
            }}
            transition={{ ease: "linear", duration: 0.1 }}
          />

          {/* Percentage indicator */}
          <motion.div
            className="absolute -left-12 text-xs font-bold text-accent"
            style={{
              top: `${scrollProgress}%`,
              transform: 'translateY(-50%)'
            }}
            transition={{ ease: "linear", duration: 0.1 }}
          >
            {Math.round(scrollProgress)}%
          </motion.div>

          {/* Electric crackling effect on progress bar */}
          <div className="absolute inset-0 pointer-events-none overflow-visible">
            {/* Lightning bolts */}
            <div
              className="absolute left-1/2 -translate-x-1/2 w-4 h-full"
              style={{
                top: `${scrollProgress - 5}%`,
                filter: 'drop-shadow(0 0 10px #00d9ff) drop-shadow(0 0 20px #fff)',
                animation: 'lightning-bolt 2s infinite'
              }}
            >
              <svg
                viewBox="0 0 20 40"
                className="w-full h-10 text-white opacity-0"
                style={{ animation: 'lightning-bolt 2s infinite' }}
              >
                <path
                  d="M10 0 L5 15 L12 15 L7 30 L15 12 L8 12 Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            {/* Electric sparks */}
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at center ${scrollProgress}%, #00d9ff 0%, transparent 50%)`,
                animation: 'electric-crackle 0.5s infinite',
                mixBlendMode: 'screen'
              }}
            />
          </div>

          {/* Contact Info electric text at bottom */}
          <AnimatePresence>
            {scrollProgress > 90 && (
              <motion.div
                className="absolute -bottom-20 -left-24 whitespace-nowrap"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                <span
                  className="text-sm font-bold text-[#00d9ff]"
                  style={{
                    animation: 'electric-pulse 1s ease-in-out infinite',
                    textShadow: '0 0 10px #00d9ff, 0 0 20px #00d9ff, 0 0 30px #fff'
                  }}
                >
                  Contact Info!
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}