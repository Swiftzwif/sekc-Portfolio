'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import { ThemeToggle } from '../theme-toggle';

const navItems = [
  { label: 'Work', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [time, setTime] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md bg-background/80 border-b border-border' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="container-max">
        <nav className="flex items-center justify-between py-6">
          {/* Logo/Name */}
          <Link href="/" className="group">
            <motion.div
              className="text-2xl font-bold tracking-tight"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-foreground">SwiftNet</span>
            </motion.div>
          </Link>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <Link
                  href={item.href}
                  className="relative text-text-secondary hover:text-foreground transition-colors duration-300 group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-accent origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right side - Time, Location, Theme, CTA */}
          <div className="flex items-center gap-4 text-sm">
            <motion.div
              className="hidden lg:flex items-center gap-2 text-text-secondary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="font-mono tabular-nums">{time || '00:00:00'}</span>
            </motion.div>
            <motion.div
              className="hidden lg:flex items-center gap-2 text-text-secondary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Boston, MA</span>
            </motion.div>

            {/* Theme Toggle */}
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <ThemeToggle />
            </motion.div>

            {/* Get in touch CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <Link
                href="#contact"
                className="hidden md:inline-flex items-center justify-center px-5 py-2.5 bg-accent hover:bg-accent-hover text-white rounded-lg font-medium transition-all duration-200 border-2 border-foreground/20 dark:border-accent/50 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
              >
                Get in touch
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative w-8 h-8 flex items-center justify-center"
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <span className="sr-only">Menu</span>
              <div className="space-y-1.5">
                <span className="block w-6 h-[2px] bg-foreground"></span>
                <span className="block w-6 h-[2px] bg-foreground"></span>
              </div>
            </motion.button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </motion.header>
  );
}
