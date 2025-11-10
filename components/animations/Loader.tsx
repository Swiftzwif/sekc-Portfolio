'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef, memo } from 'react';

interface LoaderProps {
  onComplete?: () => void;
  duration?: number;
}

const Loader = memo(function Loader({ onComplete, duration = 1500 }: LoaderProps) {
  const [percentage, setPercentage] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const rafRef = useRef<number | null>(null);
  const startTime = useRef<number>(0);

  useEffect(() => {
    startTime.current = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime.current;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = easeOutQuart(progress);
      const currentPercentage = Math.floor(easeProgress * 100);

      setPercentage(currentPercentage);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setIsComplete(true);
          onComplete?.();
        }, 100);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [duration, onComplete]);

  // Easing function for smoother animation
  function easeOutQuart(t: number): number {
    return 1 - Math.pow(1 - t, 4);
  }

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 bg-[#0a0a0a] flex items-center justify-center will-change-transform"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            transform: 'translateZ(0)', // Force GPU layer
          }}
        >
          <div className="relative">
            <motion.div
              className="text-[clamp(4rem,10vw,8rem)] font-bold text-white tabular-nums will-change-transform"
              initial={{ opacity: 0, transform: 'scale(0.9) translateZ(0)' }}
              animate={{ opacity: 1, transform: 'scale(1) translateZ(0)' }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              style={{
                willChange: 'transform, opacity',
              }}
            >
              {percentage.toString().padStart(3, '0')}
            </motion.div>

            {/* Progress bar - Using transform for GPU acceleration */}
            <div
              className="absolute bottom-0 left-0 h-[2px] bg-white origin-left will-change-transform"
              style={{
                width: '100%',
                transform: `scaleX(${percentage / 100}) translateZ(0)`,
                transition: 'transform 0.05s linear',
                willChange: 'transform',
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default Loader;