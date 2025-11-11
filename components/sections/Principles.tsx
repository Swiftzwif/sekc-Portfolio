'use client';

import { memo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollReveal from '@/components/animations/ScrollReveal';

const principles = [
  {
    title: 'BE LIGHTNING FAST',
    description: 'Your site loads before they blink. Speed equals revenue.',
    icon: '⚡',
  },
  {
    title: 'BE INTENTIONAL',
    description: 'Every pixel earns its place. Zero bloat, maximum impact.',
    icon: '🎯',
  },
  {
    title: 'DRIVE RESULTS',
    description: "Beautiful doesn't pay bills. Performance does.",
    icon: '📈',
  },
  {
    title: 'STAY CUTTING-EDGE',
    description: "Tomorrow's tech today. Never obsolete.",
    icon: '🚀',
  },
];

const Principle = memo(function Principle({
  principle,
  index
}: {
  principle: typeof principles[0];
  index: number;
}) {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 relative"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div className="container-max relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Principle number */}
          <motion.div
            className="text-accent/20 text-[clamp(8rem,20vw,15rem)] font-bold absolute -top-20 -left-10 select-none"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 0.1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
          >
            {(index + 1).toString().padStart(2, '0')}
          </motion.div>

          {/* Icon */}
          <motion.div
            className="text-6xl mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: index * 0.1 + 0.3
            }}
          >
            {principle.icon}
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-[clamp(3rem,8vw,6rem)] font-bold text-foreground mb-8 leading-none"
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
          >
            {principle.title}
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-[clamp(1.5rem,3vw,2.5rem)] text-text-secondary max-w-3xl leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
          >
            {principle.description}
          </motion.p>
        </div>
      </div>

      {/* Background accent */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
      />
    </motion.div>
  );
});

const Principles = memo(function Principles() {
  const { scrollYProgress } = useScroll();

  // Create a parallax effect for the intro text
  const introY = useTransform(scrollYProgress, [0, 0.2], [100, 0]);
  const introOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section id="principles" className="relative">
      {/* Intro - completing the hero story */}
      <motion.div
        className="min-h-[50vh] flex items-center justify-center px-6"
        style={{ y: introY, opacity: introOpacity }}
      >
        <div className="text-center max-w-4xl">
          <h2 className="text-[clamp(2rem,6vw,4rem)] font-bold text-foreground mb-6">
            ...this is what I believe
          </h2>
          <p className="text-xl text-text-secondary">
            Four principles that guide every line of code I write
          </p>
        </div>
      </motion.div>

      {/* Principles */}
      {principles.map((principle, index) => (
        <Principle key={principle.title} principle={principle} index={index} />
      ))}

      {/* Closing statement */}
      <ScrollReveal animation="fadeUp">
        <div className="min-h-[50vh] flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <h3 className="text-[clamp(2rem,5vw,3rem)] font-bold text-foreground mb-6">
              This is SwiftNet Solutions
            </h3>
            <p className="text-xl text-text-secondary mb-12">
              Where principles meet performance
            </p>
            <motion.a
              href="#portfolio"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See the results
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
});

export default Principles;