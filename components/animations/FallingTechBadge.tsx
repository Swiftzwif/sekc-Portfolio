'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FallingTechBadgeProps {
  children: ReactNode;
  index: number;
  className?: string;
}

export default function FallingTechBadge({ children, index, className = '' }: FallingTechBadgeProps) {
  return (
    <motion.div
      className={className}
      initial={{
        y: -200,
        opacity: 0,
        rotate: Math.random() * 30 - 15 // Random initial rotation between -15 and 15 degrees
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        rotate: 0
      }}
      transition={{
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay: index * 0.1, // Stagger based on index
        duration: 1.5
      }}
      viewport={{ once: true, margin: "100px" }}
      whileHover={{
        scale: 1.1,
        rotate: [0, -5, 5, -5, 0], // Wiggle effect on hover
        transition: { duration: 0.3 }
      }}
    >
      {children}
    </motion.div>
  );
}