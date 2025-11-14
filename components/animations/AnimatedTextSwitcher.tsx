'use client';

import { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';

export interface AnimatedTextSwitcherProps {
  words: string[];
  duration?: number; // default: 2500ms
  transitionDuration?: number; // default: 800ms
  className?: string;
  startDelay?: number; // delay before starting animation (default: 0)
}

const AnimatedTextSwitcher = memo(function AnimatedTextSwitcher({
  words,
  duration = 2500,
  transitionDuration = 800,
  className = '',
  startDelay = 0,
}: AnimatedTextSwitcherProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Start animation after delay
  useEffect(() => {
    let visibilityTimeout: NodeJS.Timeout | null = null;
    
    if (startDelay > 0) {
      const timeout = setTimeout(() => {
        setHasStarted(true);
        // Small delay before showing to allow fade-in
        visibilityTimeout = setTimeout(() => setIsVisible(true), 100);
      }, startDelay);
      
      return () => {
        clearTimeout(timeout);
        if (visibilityTimeout) {
          clearTimeout(visibilityTimeout);
        }
      };
    } else {
      setHasStarted(true);
      setIsVisible(true);
    }
  }, [startDelay]);

  // Cycle through words - fixed dependency issue
  useEffect(() => {
    if (!hasStarted || words.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        setPrevIndex(prev);
        return (prev + 1) % words.length;
      });
    }, duration);

    return () => clearInterval(interval);
  }, [hasStarted, words.length, duration]);

  // Early return for empty words
  if (words.length === 0) {
    return null;
  }

  // Don't show anything until delay is complete
  if (!hasStarted) {
    return null;
  }

  const currentWord = words[currentIndex] || words[0];
  const prevWord = words[prevIndex] || words[0];
  const showPrev = prevIndex !== currentIndex;

  return (
    <motion.span
      className={`inline-block relative ${className}`}
      aria-live="polite"
      aria-atomic="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        minHeight: '1.2em', // Prevent layout shift
      }}
    >
      {/* Previous word fading out */}
      {showPrev && (
        <motion.span
          key={`prev-${prevIndex}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: transitionDuration / 1000,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block text-accent absolute inset-0"
        >
          {prevWord}
        </motion.span>
      )}
      {/* Current word fading in */}
      <motion.span
        key={`current-${currentIndex}`}
        initial={{ opacity: showPrev ? 0 : (isVisible ? 1 : 0) }}
        animate={{ opacity: 1 }}
        transition={{
          duration: transitionDuration / 1000,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="inline-block text-accent relative"
      >
        {currentWord}
      </motion.span>
    </motion.span>
  );
});

export default AnimatedTextSwitcher;
