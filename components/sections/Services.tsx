'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { LightningIcon, ServerIcon, BrainIcon, ChartIcon } from '@/components/icons';
import { ReactNode } from 'react';

interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: ReactNode;
}

const services: Service[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Modern, responsive interfaces with exceptional user experience',
    details: [
      'React & Next.js applications',
      'TypeScript for type-safe code',
      'Tailwind CSS for rapid styling',
      'Framer Motion animations',
      'Mobile-first responsive design',
    ],
    icon: <LightningIcon size={40} />,
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Scalable server solutions and API architecture',
    details: [
      'Node.js & Express servers',
      'RESTful & GraphQL APIs',
      'PostgreSQL & MongoDB',
      'Authentication & authorization',
      'Cloud deployment (AWS, Vercel)',
    ],
    icon: <ServerIcon size={40} />,
  },
  {
    id: 'ai',
    title: 'AI Integration',
    description: 'Leveraging AI to accelerate development and enhance features',
    details: [
      'OpenAI API integration',
      'Custom chatbots & assistants',
      'AI-powered content generation',
      'Machine learning implementations',
      'Prompt engineering',
    ],
    icon: <BrainIcon size={40} />,
  },
  {
    id: 'optimization',
    title: 'Performance & SEO',
    description: 'Fast-loading, search-optimized websites that rank',
    details: [
      'Core Web Vitals optimization',
      'Technical SEO implementation',
      'Image & asset optimization',
      'Code splitting & lazy loading',
      'Analytics & monitoring setup',
    ],
    icon: <ChartIcon size={40} />,
  },
];

export default function Services() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section id="services" className="section-padding relative">
      <div className="container-max">
        <ScrollReveal>
          <h2 className="text-section-header mb-4">Services</h2>
          <p className="text-xl text-secondary max-w-2xl mb-16">
            Comprehensive web development solutions tailored to your business needs
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <ScrollReveal
              key={service.id}
              delay={index * 0.1}
              animation="fadeUp"
            >
              <motion.div
                className={`relative p-12 bg-surface border border-border rounded-2xl cursor-pointer overflow-hidden group ${
                  expandedCard === service.id ? 'md:col-span-2' : ''
                }`}
                onClick={() => toggleCard(service.id)}
                layout
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              >
                {/* Hover gradient effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="text-white/80">{service.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {service.title}
                        </h3>
                        <p className="text-secondary">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Expand/Collapse indicator */}
                    <motion.div
                      animate={{ rotate: expandedCard === service.id ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl text-secondary"
                    >
                      +
                    </motion.div>
                  </div>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {expandedCard === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      >
                        <div className="pt-6 border-t border-border">
                          <ul className="space-y-3">
                            {service.details.map((detail, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-center gap-3 text-white/80"
                              >
                                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                                {detail}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}