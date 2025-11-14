'use client';

import { motion } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUp';

interface MetricCardProps {
  label: string;
  value: string;
  change: string;
  delay: number;
  inView: boolean;
}

export function MetricCard({ label, value, change, delay, inView }: MetricCardProps) {
  // Parse numeric value for count-up animation
  const parseValue = (val: string) => {
    const match = val.match(/[\d.]+/);
    return match ? parseFloat(match[0]) : 0;
  };

  const numericValue = parseValue(value);
  const suffix = value.replace(/[\d.]+/, '');
  const decimals = value.includes('.') ? 1 : 0;

  const countUp = useCountUp({
    end: numericValue,
    duration: 1200,
    decimals: decimals,
    suffix: suffix,
  });

  const isPositive = change.startsWith('+');
  const isNegative = change.startsWith('-');

  return (
    <motion.div
      ref={countUp.ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.02, y: -2 }}
      className="bg-surface/50 dark:bg-surface/30 p-4 rounded-lg hover:bg-surface/70 dark:hover:bg-surface/50 transition-all duration-300 hover:shadow-md group"
    >
      <p className="text-sm text-text-secondary mb-1 group-hover:text-text-primary transition-colors">
        {label}
      </p>
      <p className="text-2xl font-bold text-foreground">
        {countUp.value}
      </p>
      <p className={`text-sm font-medium ${
        isPositive
          ? 'text-green-500'
          : isNegative && !label.includes('Bounce')
            ? 'text-red-500'
            : 'text-accent'
      }`}>
        {change}
      </p>
    </motion.div>
  );
}
