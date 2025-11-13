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

  // Start animation after delay
  useEffect(() => {
    if (startDelay > 0) {
      const timeout = setTimeout(() => {
        setHasStarted(true);
      }, startDelay);
      return () => clearTimeout(timeout);
    } else {
      setHasStarted(true);
    }
  }, [startDelay]);

  // Cycle through words
  useEffect(() => {
    if (!hasStarted || words.length === 0) return;

    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [hasStarted, words.length, duration, currentIndex]);

  // Early return for empty words
  if (words.length === 0) {
    return null;
  }

  // Show first word before animation starts
  if (!hasStarted) {
    return (
      <span className={`inline-block text-accent ${className}`}>
        {words[0]}
      </span>
    );
  }

  const currentWord = words[currentIndex] || words[0];
  const prevWord = words[prevIndex] || words[0];
  const showPrev = prevIndex !== currentIndex;

  return (
    <span
      className={`inline-block relative ${className}`}
      aria-live="polite"
      aria-atomic="true"
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
        initial={{ opacity: showPrev ? 0 : 1 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: transitionDuration / 1000,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="inline-block text-accent relative"
      >
        {currentWord}
      </motion.span>
    </span>
  );
});

export default AnimatedTextSwitcher;
