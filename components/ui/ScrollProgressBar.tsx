'use client';

import { useEffect, useState, useRef, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollProgressBar = memo(function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBar, setShowBar] = useState(false);
  const rafRef = useRef<number | null>(null);
  const lastScrollY = useRef(0);

  const updateScrollProgress = useCallback(() => {
    const scrollTop = window.scrollY;

    // Only update if scroll changed significantly (throttle)
    if (Math.abs(scrollTop - lastScrollY.current) < 5) {
      return;
    }

    lastScrollY.current = scrollTop;
    const heroHeight = window.innerHeight * 1.2; // 120vh hero section
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(Math.max((scrollTop / docHeight) * 100, 0), 100);

    setScrollProgress(progress);
    setShowBar(scrollTop > heroHeight);
  }, []);

  const handleScroll = useCallback(() => {
    // Cancel any pending animation frame
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    // Schedule update with requestAnimationFrame for smooth 60fps
    rafRef.current = requestAnimationFrame(updateScrollProgress);
  }, [updateScrollProgress]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScrollProgress(); // Initial update

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleScroll, updateScrollProgress]);

  return (
    <AnimatePresence>
      {showBar && (
        <motion.div
          className="fixed right-5 top-20 bottom-20 w-2 z-50 will-change-transform"
          initial={{ opacity: 0, transform: 'translateX(10px) translateZ(0)' }}
          animate={{ opacity: 1, transform: 'translateX(0) translateZ(0)' }}
          exit={{ opacity: 0, transform: 'translateX(10px) translateZ(0)' }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          {/* Background track */}
          <div className="absolute inset-0 bg-white/10 rounded-full" />

          {/* Progress fill - Using transform instead of height for better performance */}
          <div
            className="absolute left-0 right-0 top-0 bottom-0 bg-gradient-to-b from-[#00d9ff] via-[#00d9ff] to-[#0099ff] rounded-full origin-top will-change-transform"
            style={{
              transform: `scaleY(${scrollProgress / 100}) translateZ(0)`,
              boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)',
            }}
          />

          {/* Percentage indicator - Optimized */}
          <div
            className="absolute -left-12 text-xs font-bold text-accent will-change-transform"
            style={{
              transform: `translateY(${(scrollProgress / 100) * (window.innerHeight - 160 - 40)}px) translateY(-50%) translateZ(0)`,
            }}
          >
            {Math.round(scrollProgress)}%
          </div>

          {/* Simplified electric effect - removed complex animations */}
          <div
            className="absolute inset-0 pointer-events-none rounded-full"
            style={{
              background: `linear-gradient(to bottom, transparent, rgba(0, 217, 255, ${scrollProgress / 200}) ${scrollProgress}%, transparent)`,
              filter: 'blur(4px)',
            }}
          />

          {/* Contact Info text at bottom - simplified */}
          <AnimatePresence>
            {scrollProgress > 90 && (
              <motion.div
                className="absolute -bottom-20 -left-24 whitespace-nowrap"
                initial={{ opacity: 0, transform: 'translateY(10px) translateZ(0)' }}
                animate={{ opacity: 1, transform: 'translateY(0) translateZ(0)' }}
                exit={{ opacity: 0, transform: 'translateY(10px) translateZ(0)' }}
              >
                <span className="text-sm font-bold text-[#00d9ff]">
                  Contact Info!
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default ScrollProgressBar;