import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-8 md:px-16 py-48">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 text-center"
        >
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] tracking-[-0.02em] mb-12">
            Ready for a website
            <br />
            that actually works?
          </h2>
          <p className="text-[clamp(1.25rem,2vw,1.5rem)] text-gray-500 max-w-3xl mx-auto leading-relaxed">
            No fluff. No excuses. Just results.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <a 
            href="mailto:jamison@swiftnetsolutions.com"
            className="group flex items-center justify-between border-t border-gray-200 py-8 hover:border-gray-400 transition-colors duration-300"
          >
            <span className="text-[clamp(1.25rem,2.5vw,2rem)] tracking-[-0.01em]">
              jamison@swiftnetsolutions.com
            </span>
            <ArrowUpRight className="w-8 h-8 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
          </a>
          
          <div className="grid md:grid-cols-2 gap-8 border-t border-gray-200 pt-12">
            <div>
              <p className="text-gray-400 mb-2 text-sm uppercase tracking-wider">Connect</p>
              <div className="space-y-3">
                <a href="#" className="block text-lg hover:text-gray-600 transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="block text-lg hover:text-gray-600 transition-colors">
                  Twitter
                </a>
                <a href="#" className="block text-lg hover:text-gray-600 transition-colors">
                  GitHub
                </a>
              </div>
            </div>
            <div>
              <p className="text-gray-400 mb-2 text-sm uppercase tracking-wider">Location</p>
              <p className="text-lg">Available remotely worldwide</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
