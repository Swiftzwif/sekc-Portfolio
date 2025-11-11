import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const services = [
  {
    number: '01',
    title: 'Performance-First Development',
    description: 'Lightning-fast sites built with React, Next.js, and modern frameworks that prioritize speed',
  },
  {
    number: '02',
    title: 'Conversion-Focused Design',
    description: 'Clean, minimal interfaces designed to guide users to action, not distract them',
  },
  {
    number: '03',
    title: 'E-commerce Solutions',
    description: 'Online stores that load instantly and convert browsers into buyers',
  },
  {
    number: '04',
    title: 'Web Application Development',
    description: 'Custom tools and platforms that solve real business problems',
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-8 md:px-16 py-48">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-32 text-center"
        >
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] tracking-[-0.02em]">
            What I Do
          </h2>
        </motion.div>

        <div className="space-y-1">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 1.2, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer"
            >
              <div className="border-t border-gray-200 py-12 grid md:grid-cols-12 gap-8 items-center hover:bg-gray-50 transition-colors duration-500 px-8 -mx-8">
                <div className="md:col-span-2">
                  <span className="text-gray-400 text-lg">{service.number}</span>
                </div>
                <div className="md:col-span-5">
                  <h3 className="text-[clamp(1.5rem,3vw,2.5rem)] tracking-[-0.01em]">
                    {service.title}
                  </h3>
                </div>
                <div className="md:col-span-5">
                  <p className="text-gray-500 text-lg">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
