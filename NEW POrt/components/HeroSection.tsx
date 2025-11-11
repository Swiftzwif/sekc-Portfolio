import { motion } from 'motion/react';

const lines = [
  'Hi',
  "My name's",
  'Jaymison Sanchez',
  'I Believe',
  'Web Design should',
];

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-between px-6 md:px-8 pt-32 pb-20 md:pt-0 md:pb-0 md:justify-center relative overflow-hidden">
      <div className="w-full max-w-[90vw] md:max-w-6xl mx-auto flex-1 flex items-center md:flex-none">
        <div className="space-y-8 md:space-y-6 lg:space-y-8 text-center w-full">
          {lines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1.2, 
                delay: index * 0.15, 
                ease: [0.22, 1, 0.36, 1] 
              }}
            >
              <h1 className="text-[clamp(2rem,10vw,7rem)] leading-[1] tracking-[-0.02em]">
                {line}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="text-center md:absolute md:bottom-16 md:left-1/2 md:-translate-x-1/2 text-sm text-gray-400 mt-12 md:mt-0"
      >
        Scroll to explore
      </motion.div>
    </section>
  );
}
