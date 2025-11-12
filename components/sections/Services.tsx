'use client';

import { memo, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { AccordionItem } from '@/components/ui/Accordion';

const services = [
  {
    number: '01',
    title: 'AI-Enhanced Development',
    description: 'I leverage cutting-edge AI to write better code, faster. From GitHub Copilot to Claude, I deliver 3x faster without sacrificing quality.',
  },
  {
    number: '02',
    title: 'Performance-First Architecture',
    description: 'Lightning-fast sites with React, Next.js, and edge computing. Your pages load before users blink.',
  },
  {
    number: '03',
    title: 'Conversion-Optimized Design',
    description: 'Clean, minimal interfaces that guide users to action. Every pixel earns its place.',
  },
  {
    number: '04',
    title: 'Full-Stack Solutions',
    description: 'From database to deployment, I handle the entire stack. One developer, complete accountability.',
  },
  {
    number: '05',
    title: 'Rapid Prototyping',
    description: 'Ideas to MVP in days, not months. AI-powered development means you test faster, pivot smarter.',
  },
];

const Services = memo(function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section
      ref={ref}
      id="services"
      className="min-h-screen flex items-center justify-center px-6 md:px-16 relative"
    >
      <div className="container-max relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-24"
          >
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-foreground text-center">
              The Blended Approach
            </h2>
            <p className="text-xl text-text-secondary mt-4 max-w-3xl mx-auto text-center">
              Human creativity meets AI efficiency. I use the best of both worlds to deliver exceptional results.
            </p>
          </motion.div>

          {/* Services List - Accordion Pattern */}
          <div className="space-y-6 mb-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <AccordionItem
                  isExpanded={expandedService === index}
                  onToggle={() => toggleService(index)}
                  className="rounded-xl hover:bg-surface/30 dark:hover:bg-surface/20 transition-all duration-300"
                  header={
                    <div className="grid md:grid-cols-12 gap-4 md:gap-6 items-center">
                      <div className="md:col-span-2">
                        <span className="text-text-secondary text-lg font-mono">
                          {service.number}
                        </span>
                      </div>
                      <div className="md:col-span-10">
                        <h3 className="text-[clamp(1.25rem,2.5vw,2rem)] font-semibold tracking-[-0.01em] text-foreground group-hover:text-accent transition-colors">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  }
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="mt-4 md:ml-[16.666%] md:pl-6"
                  >
                    <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                </AccordionItem>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="text-center"
          >
            <p className="text-xl text-text-secondary mb-8 text-center">
              Ready for development that moves at the speed of thought?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Let's Talk Strategy
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default Services;