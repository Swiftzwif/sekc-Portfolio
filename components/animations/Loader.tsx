'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface LoaderProps {
  onComplete?: () => void;
  duration?: number;
}

export default function Loader({ onComplete, duration = 2000 }: LoaderProps) {
  const [percentage, setPercentage] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const increment = 100 / (duration / 20); // Update every 20ms
    const timer = setInterval(() => {
      setPercentage(prev => {
        const next = Math.min(prev + increment, 100);
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsComplete(true);
            onComplete?.();
          }, 200);
        }
        return next;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [duration, onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 bg-[#0a0a0a] flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="relative">
            <motion.div
              className="text-[clamp(4rem,10vw,8rem)] font-bold text-white tabular-nums"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {Math.floor(percentage).toString().padStart(3, '0')}
            </motion.div>

            {/* Progress bar */}
            <motion.div
              className="absolute bottom-0 left-0 h-[2px] bg-white origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: percentage / 100 }}
              transition={{ duration: 0.1, ease: 'linear' }}
              style={{ width: '100%' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}