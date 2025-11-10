'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/animations/ScrollReveal';

const skills = {
  'Frontend': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  'Backend': ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs'],
  'Tools & Cloud': ['Git', 'Docker', 'AWS', 'Vercel', 'CI/CD'],
  'AI & Automation': ['OpenAI API', 'Claude', 'Python', 'Automation'],
};

const stats = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Projects Completed', value: '50+' },
  { label: 'Happy Clients', value: '30+' },
  { label: 'Lines of Code', value: '500K+' },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-surface relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <ScrollReveal>
              <h2 className="text-section-header mb-6">About Me</h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-lg text-secondary mb-6 leading-relaxed">
                I'm a full-stack developer based in Lawrence, MA, passionate about creating
                digital experiences that make a real impact. With over 5 years of experience,
                I specialize in building fast, modern web applications that help businesses grow.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg text-secondary mb-8 leading-relaxed">
                My approach combines technical excellence with business understanding, ensuring
                that every project not only looks great but also drives measurable results. I leverage
                cutting-edge AI tools to accelerate development and deliver exceptional value.
              </p>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal delay={0.3}>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-3xl font-bold text-accent mb-1">{stat.value}</div>
                    <div className="text-sm text-secondary">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.8}>
              <motion.a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 text-white hover:text-accent transition-colors"
                whileHover={{ x: 5 }}
              >
                Download Resume
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </motion.a>
            </ScrollReveal>
          </div>

          {/* Skills Grid */}
          <div className="space-y-8">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <ScrollReveal
                key={category}
                delay={0.2 + categoryIndex * 0.1}
                animation="fadeLeft"
              >
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {items.map((skill, index) => (
                      <motion.span
                        key={skill}
                        className="px-4 py-2 bg-[#0a0a0a] border border-border rounded-full text-sm text-white hover:border-accent/50 transition-colors"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: 0.3 + categoryIndex * 0.1 + index * 0.05,
                          duration: 0.3,
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* Call to Action */}
            <ScrollReveal delay={0.6}>
              <div className="p-6 bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-2">
                  Looking for a developer?
                </h3>
                <p className="text-secondary mb-4">
                  I'm always interested in discussing new opportunities and challenging projects.
                </p>
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Let's talk
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}