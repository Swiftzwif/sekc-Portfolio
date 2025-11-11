import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const principles = [
  {
    title: 'FAST',
    description: 'Your site loads in seconds, not minutes. Speed = conversions.',
  },
  {
    title: 'INTENTIONAL',
    description: 'Every element has a purpose. No bloat, no waste.',
  },
  {
    title: 'PROFITABLE',
    description: 'Design that brings in customers and revenue, not just looks.',
  },
  {
    title: 'MODERN',
    description: "Built with cutting-edge tech that won't be outdated next year.",
  },
];

export function PrinciplesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6 md:px-8 py-32 md:py-48">
      <div className="w-full max-w-7xl mx-auto">
        <div className="space-y-32 md:space-y-48">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ 
                duration: 1.2, 
                delay: index * 0.3, 
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="text-center"
            >
              <h2 className="text-[clamp(2.5rem,8vw,6rem)] leading-[1] tracking-[-0.02em] mb-8">
                {principle.title}
              </h2>
              <p className="text-[clamp(1.25rem,3vw,2rem)] text-gray-500 max-w-3xl mx-auto leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
