'use client';

import { motion } from 'framer-motion';
import { ReactNode, memo } from 'react';

interface FallingTechBadgeProps {
  children: ReactNode;
  index: number;
  className?: string;
}

const FallingTechBadge = memo(function FallingTechBadge({
  children,
  index,
  className = ''
}: FallingTechBadgeProps) {
  // Pre-calculate random rotation for consistency
  const initialRotation = (index * 7) % 30 - 15; // Deterministic "random" rotation

  return (
    <motion.div
      className={`will-change-transform ${className}`}
      initial={{
        opacity: 0,
        transform: `translateY(-100px) translateZ(0) rotate(${initialRotation}deg)`,
      }}
      whileInView={{
        opacity: 1,
        transform: 'translateY(0) translateZ(0) rotate(0deg)',
      }}
      transition={{
        type: 'spring',
        damping: 20, // Increased damping for less bouncing
        stiffness: 150, // Increased stiffness for quicker settling
        delay: index * 0.05, // Reduced delay for quicker animation
        mass: 0.5, // Reduced mass for lighter feel
      }}
      viewport={{ once: true, margin: '50px' }} // Reduced margin for earlier trigger
      whileHover={{
        transform: 'scale(1.05) translateZ(0)', // Simpler hover effect
        transition: {
          duration: 0.2,
          ease: 'easeOut'
        }
      }}
      style={{
        willChange: 'transform, opacity',
        transform: 'translateZ(0)', // Force GPU layer
      }}
    >
      {children}
    </motion.div>
  );
});

export default FallingTechBadge;