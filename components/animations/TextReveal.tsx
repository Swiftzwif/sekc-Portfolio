'use client';

import { motion, useInView, Variants, useScroll, useTransform } from 'framer-motion';
import { useRef, memo } from 'react';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
  useScrollAnimation?: boolean;
}

// Optimized variants using only transform and opacity (GPU accelerated)
const letterFallVariants: Variants = {
  hidden: {
    opacity: 0,
    transform: 'translateY(-50px) translateZ(0) rotateX(-90deg)',
  },
  visible: {
    opacity: 1,
    transform: 'translateY(0px) translateZ(0) rotateX(0deg)',
  },
};

const letterRiseVariants: Variants = {
  hidden: {
    opacity: 0,
    transform: 'translateY(50px) translateZ(0)',
  },
  visible: {
    opacity: 1,
    transform: 'translateY(0px) translateZ(0)',
  },
};

const TextReveal = memo(function TextReveal({
  text,
  className = '',
  delay = 0,
  stagger = 0.02, // Reduced stagger for better performance
  once = true,
  useScrollAnimation = false,
}: TextRevealProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once, amount: 0.5 });

  // Scroll-based animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"]
  });

  const words = text.split(' ');
  const totalChars = text.replace(/\s/g, '').length;

  return (
    <span
      ref={containerRef}
      className={`inline-block ${className}`}
      style={{
        perspective: 1000,
        willChange: 'transform',
        transform: 'translateZ(0)', // Force GPU layer
      }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em]">
          {word.split('').map((char, charIndex) => {
            const absoluteIndex = words.slice(0, wordIndex).join('').length + charIndex;
            const progress = absoluteIndex / totalChars;

            if (useScrollAnimation) {
              // Optimized scroll-triggered progressive reveal
              const yOffset = useTransform(
                scrollYProgress,
                [progress * 0.5, progress * 0.5 + 0.2],
                ['translateY(-30px) translateZ(0)', 'translateY(0px) translateZ(0)']
              );
              const opacity = useTransform(
                scrollYProgress,
                [progress * 0.5, progress * 0.5 + 0.15],
                [0, 1]
              );

              return (
                <motion.span
                  key={`${wordIndex}-${charIndex}`}
                  className="inline-block"
                  style={{
                    transform: yOffset,
                    opacity,
                    willChange: 'transform, opacity',
                  }}
                >
                  {char}
                </motion.span>
              );
            } else {
              // Optimized standard animation (falls from top)
              return (
                <motion.span
                  key={`${wordIndex}-${charIndex}`}
                  className="inline-block overflow-hidden"
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  style={{ willChange: 'transform' }}
                >
                  <motion.span
                    className="inline-block"
                    variants={letterFallVariants}
                    transition={{
                      duration: 0.4, // Reduced duration
                      ease: [0.22, 1, 0.36, 1], // Optimized easing
                      delay: delay + (wordIndex * word.length + charIndex) * stagger,
                    }}
                    style={{
                      transformStyle: 'preserve-3d',
                      willChange: 'transform, opacity',
                    }}
                  >
                    {char}
                  </motion.span>
                </motion.span>
              );
            }
          })}
        </span>
      ))}
    </span>
  );
});

export default TextReveal;