'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef, ReactNode, memo } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  animation?: 'fadeUp' | 'fadeIn' | 'fadeLeft' | 'fadeRight' | 'scale';
}

// Optimized animations using transform and opacity only
const animations: Record<string, Variants> = {
  fadeUp: {
    hidden: {
      opacity: 0,
      transform: 'translateY(30px) translateZ(0)',
    },
    visible: {
      opacity: 1,
      transform: 'translateY(0) translateZ(0)',
    },
  },
  fadeIn: {
    hidden: {
      opacity: 0,
      transform: 'translateZ(0)',
    },
    visible: {
      opacity: 1,
      transform: 'translateZ(0)',
    },
  },
  fadeLeft: {
    hidden: {
      opacity: 0,
      transform: 'translateX(30px) translateZ(0)',
    },
    visible: {
      opacity: 1,
      transform: 'translateX(0) translateZ(0)',
    },
  },
  fadeRight: {
    hidden: {
      opacity: 0,
      transform: 'translateX(-30px) translateZ(0)',
    },
    visible: {
      opacity: 1,
      transform: 'translateX(0) translateZ(0)',
    },
  },
  scale: {
    hidden: {
      opacity: 0,
      transform: 'scale(0.9) translateZ(0)',
    },
    visible: {
      opacity: 1,
      transform: 'scale(1) translateZ(0)',
    },
  },
};

const ScrollReveal = memo(function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.4, // Reduced duration for snappier animations
  once = true,
  animation = 'fadeUp',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: 0.2 }); // Reduced amount for earlier trigger

  return (
    <motion.div
      ref={ref}
      className={`${className} will-change-transform`}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={animations[animation]}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Optimized easing
      }}
      style={{
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </motion.div>
  );
});

export default ScrollReveal;