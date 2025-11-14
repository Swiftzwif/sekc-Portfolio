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

// Simplified variants using only translateY and opacity (GPU accelerated, no 3D transforms)
const letterFallVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const TextReveal = memo(function TextReveal({
  text,
  className = '',
  delay = 0,
  stagger = 0.02,
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
        willChange: 'transform, opacity',
      }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em]">
          {word.split('').map((char, charIndex) => {
            const absoluteIndex = words.slice(0, wordIndex).join('').length + charIndex;
            const progress = absoluteIndex / totalChars;

            if (useScrollAnimation) {
              // Create transform motion values using scroll progress
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const yOffset = useTransform(
                scrollYProgress,
                [progress * 0.5, progress * 0.5 + 0.2],
                [-30, 0]
              );
              // eslint-disable-next-line react-hooks/rules-of-hooks
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
                    y: yOffset,
                    opacity,
                    willChange: 'transform, opacity',
                  }}
                >
                  {char}
                </motion.span>
              );
            } else {
              // Simplified animation using only translateY and opacity (no 3D transforms)
              return (
                <motion.span
                  key={`${wordIndex}-${charIndex}`}
                  className="inline-block"
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  variants={letterFallVariants}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                    delay: delay + (wordIndex * word.length + charIndex) * stagger,
                  }}
                  style={{
                    willChange: 'transform, opacity',
                  }}
                >
                  {char}
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
