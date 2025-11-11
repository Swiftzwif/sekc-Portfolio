import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-8 md:px-16 py-48">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] tracking-[-0.02em] mb-12 max-w-5xl mx-auto">
            Most websites are slow, cluttered, and built on outdated tech
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-[clamp(1.25rem,2.5vw,2rem)] text-gray-500 leading-relaxed mb-16">
            I build websites that actually work for your business.
          </p>
          <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-gray-500 leading-relaxed">
            SwiftNet Solutions exists because too many businesses waste money on websites 
            that look pretty but don't deliver results. Every line of code serves a purpose. 
            Every design decision drives action.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
