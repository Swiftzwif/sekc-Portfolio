import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-8 flex justify-between items-center">
        <motion.div
          whileHover={{ x: 4 }}
          transition={{ duration: 0.3 }}
          className="cursor-pointer"
        >
          <span className="tracking-tight">SwiftNet</span>
        </motion.div>
        
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
        >
          Get in touch
        </motion.a>
      </div>
    </motion.nav>
  );
}
