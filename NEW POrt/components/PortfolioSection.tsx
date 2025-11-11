import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'TechFlow Platform',
    metric: '2.1s load time',
    result: '147% increase in conversions',
    image: 'https://images.unsplash.com/photo-1762279389042-9439bfb6c155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwYWJzdHJhY3R8ZW58MXx8fHwxNzYyODQ0ODU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'CodeBase Studio',
    metric: '98/100 performance score',
    result: 'Built in 4 weeks',
    image: 'https://images.unsplash.com/photo-1546900703-cf06143d1239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzYyODEyNTMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'NetConnect Hub',
    metric: 'Zero bloat',
    result: '$50k revenue in first month',
    image: 'https://images.unsplash.com/photo-1636703781908-a5e63be992a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbmV0d29yayUyMHRlY2h8ZW58MXx8fHwxNzYyODczMDI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function PortfolioSection() {
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
            Proof It Works
          </h2>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 1.2, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[16/9] object-cover"
                  />
                </motion.div>
                <motion.div
                  className="absolute top-8 right-8 w-16 h-16 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                >
                  <ArrowUpRight className="w-6 h-6" />
                </motion.div>
              </div>
              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-6">
                  <h3 className="text-[clamp(1.5rem,3vw,3rem)] tracking-[-0.01em] mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-lg">{project.metric}</p>
                </div>
                <div className="md:col-span-6 flex items-end justify-start md:justify-end">
                  <p className="text-[clamp(1rem,1.5vw,1.25rem)] text-gray-700">
                    {project.result}
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
