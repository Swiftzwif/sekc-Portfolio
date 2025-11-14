'use client';

import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItemProps {
  isExpanded: boolean;
  onToggle: () => void;
  header: ReactNode;
  children: ReactNode;
  className?: string;
}

export function AccordionItem({
  isExpanded,
  onToggle,
  header,
  children,
  className = ''
}: AccordionItemProps) {
  return (
    <motion.div
      className={`transition-all duration-300 ${className}`}
      initial={false}
    >
      {/* Header - Always visible, clickable */}
      <button
        onClick={onToggle}
        className="w-full text-left py-6 flex items-center justify-between gap-4 group hover:bg-surface/50 dark:hover:bg-surface/30 transition-all duration-300 rounded-lg px-6 -mx-6"
        aria-expanded={isExpanded}
      >
        <div className="flex-1">
          {header}
        </div>

        {/* Chevron icon */}
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="flex-shrink-0"
        >
          <svg
            className="w-5 h-5 text-text-secondary group-hover:text-accent transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>

      {/* Content - Collapsible */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 0.3, delay: 0.1 }
              }
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 0.2 }
              }
            }}
            className="overflow-hidden"
          >
            <div className="pb-12 px-6 -mx-6">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
