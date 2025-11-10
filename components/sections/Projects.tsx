'use client';
import { memo } from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import ScrollReveal from '@/components/animations/ScrollReveal';
import FallingTechBadge from '@/components/animations/FallingTechBadge';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    category: 'Full-Stack Development',
    description: 'Modern e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
    tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind'],
    image: '/api/placeholder/600/400',
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    id: 'project-2',
    title: 'AI Content Generator',
    category: 'AI Integration',
    description: 'AI-powered platform for generating marketing content, blog posts, and social media updates.',
    tech: ['React', 'OpenAI API', 'Node.js', 'MongoDB', 'Framer Motion'],
    image: '/api/placeholder/600/400',
    link: 'https://example.com',
  },
  {
    id: 'project-3',
    title: 'Real Estate Dashboard',
    category: 'Data Visualization',
    description: 'Interactive dashboard for real estate analytics with map integration and predictive insights.',
    tech: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL', 'Mapbox'],
    image: '/api/placeholder/600/400',
    link: 'https://example.com',
  },
  {
    id: 'project-4',
    title: 'Healthcare Portal',
    category: 'Enterprise Solution',
    description: 'Secure patient portal with appointment scheduling, medical records, and telemedicine features.',
    tech: ['Next.js', 'TypeScript', 'AWS', 'PostgreSQL', 'WebRTC'],
    image: '/api/placeholder/600/400',
    github: 'https://github.com',
  },
];

const Projects = memo(function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="work" className="section-padding bg-surface relative">
      <div className="container-max">
        <ScrollReveal>
          <h2 className="text-section-header mb-4">Recent Work</h2>
          <p className="text-xl text-secondary max-w-2xl mb-12">
            Showcasing projects that demonstrate technical excellence and business impact
          </p>
        </ScrollReveal>

        {/* Category Filter */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full border transition-all ${
                  selectedCategory === category
                    ? 'bg-white text-[#0a0a0a] border-white'
                    : 'border-border text-secondary hover:border-white/40 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ScrollReveal
                key={project.id}
                delay={index * 0.1}
                animation="fadeUp"
              >
                <motion.article
                  layout
                  className="group relative bg-[#0a0a0a] border border-border rounded-2xl overflow-hidden"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden bg-surface">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10"
                      initial={{ opacity: 0.3 }}
                      animate={{ opacity: hoveredProject === project.id ? 0.7 : 0.3 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Placeholder for image - replace with actual images */}
                    <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5" />

                    {/* Overlay content on hover */}
                    <AnimatePresence>
                      {hoveredProject === project.id && (
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center z-20 gap-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          {project.link && (
                            <motion.a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 bg-white text-[#0a0a0a] rounded-full hover:scale-110 transition-transform"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                              </svg>
                            </motion.a>
                          )}
                          {project.github && (
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 bg-white text-[#0a0a0a] rounded-full hover:scale-110 transition-transform"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                            </motion.a>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="text-sm text-accent mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-secondary mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <FallingTechBadge
                          key={tech}
                          index={index * 5 + techIndex}
                        >
                          <span className="inline-block px-4 py-2 text-xs border border-border rounded-full text-secondary">
                            {tech}
                          </span>
                        </FallingTechBadge>
                      ))}
                    </div>
                  </div>
                </motion.article>
              </ScrollReveal>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
});

export default Projects;
