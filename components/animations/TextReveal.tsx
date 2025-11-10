'use client';

import { motion, useInView, Variants, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
  useScrollAnimation?: boolean;
}

const letterFallVariants: Variants = {
  hidden: {
    y: -100,
    opacity: 0,
    rotateX: -90,
  },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
  },
};

const letterRiseVariants: Variants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function TextReveal({
  text,
  className = '',
  delay = 0,
  stagger = 0.03,
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
    <span ref={containerRef} className={`inline-block ${className}`} style={{ perspective: 1000 }}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em]">
          {word.split('').map((char, charIndex) => {
            const absoluteIndex = words.slice(0, wordIndex).join('').length + charIndex;
            const progress = absoluteIndex / totalChars;

            if (useScrollAnimation) {
              // Scroll-triggered progressive reveal
              const yOffset = useTransform(
                scrollYProgress,
                [progress * 0.5, progress * 0.5 + 0.3],
                [-100, 0]
              );
              const opacity = useTransform(
                scrollYProgress,
                [progress * 0.5, progress * 0.5 + 0.2],
                [0, 1]
              );
              const rotateX = useTransform(
                scrollYProgress,
                [progress * 0.5, progress * 0.5 + 0.3],
                [-90, 0]
              );

              return (
                <motion.span
                  key={`${wordIndex}-${charIndex}`}
                  className="inline-block"
                  style={{
                    y: yOffset,
                    opacity,
                    rotateX,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {char}
                </motion.span>
              );
            } else {
              // Standard animation (falls from top)
              return (
                <motion.span
                  key={`${wordIndex}-${charIndex}`}
                  className="inline-block overflow-hidden"
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                >
                  <motion.span
                    className="inline-block"
                    variants={letterFallVariants}
                    transition={{
                      duration: 0.6,
                      ease: [0.4, 0, 0.2, 1],
                      delay: delay + (wordIndex * word.length + charIndex) * stagger,
                    }}
                    style={{ transformStyle: 'preserve-3d' }}
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
}