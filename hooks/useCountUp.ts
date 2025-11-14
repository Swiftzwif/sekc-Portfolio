import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface UseCountUpOptions {
  end: number;
  duration?: number; // milliseconds
  decimals?: number;
  start?: number;
  suffix?: string;
  prefix?: string;
}

/**
 * Hook for animating numbers with count-up effect
 * Triggers when element scrolls into view
 */
export function useCountUp({
  end,
  duration = 1000,
  decimals = 0,
  start = 0,
  suffix = '',
  prefix = ''
}: UseCountUpOptions) {
  const [count, setCount] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);
  const frameRef = useRef<number | undefined>(undefined);
  const startTimeRef = useRef<number | undefined>(undefined);

  // Track when element is in view
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    // Only animate once when in view
    if (inView && !hasAnimated) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setHasAnimated(true);

      const animate = (currentTime: number) => {
        if (!startTimeRef.current) {
          startTimeRef.current = currentTime;
        }

        const elapsed = currentTime - startTimeRef.current;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (easeOutCubic for smooth deceleration)
        const easeProgress = 1 - Math.pow(1 - progress, 3);

        const currentCount = start + (end - start) * easeProgress;
        setCount(currentCount);

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(animate);
        } else {
          setCount(end); // Ensure we end at exact value
        }
      };

      frameRef.current = requestAnimationFrame(animate);

      return () => {
        if (frameRef.current) {
          cancelAnimationFrame(frameRef.current);
        }
      };
    }
  }, [inView, hasAnimated, start, end, duration]);

  const displayValue = `${prefix}${count.toFixed(decimals)}${suffix}`;

  return { ref, value: displayValue, rawValue: count };
}
