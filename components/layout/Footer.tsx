'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const footerLinks = {
  'Navigation': [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  'Connect': [
    { label: 'Email', href: 'mailto:jsanchez@trajectorygroup.org' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jaymison-sanchez-339639320/' },
    { label: 'GitHub', href: 'https://github.com/swiftzwif' },
    { label: 'Twitter', href: 'https://twitter.com/JROTHEFINEST' },
    { label: 'Instagram', href: 'https://instagram.com/swiftzwifi' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-border">
      <div className="container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.div
              className="text-2xl font-bold mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-white">Jaymison</span>
              <span className="text-accent ml-1">.</span>
            </motion.div>
            <p className="text-secondary">
              Full-stack developer crafting digital experiences that drive business growth.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-secondary hover:text-white transition-colors inline-block"
                    >
                      <motion.span whileHover={{ x: 5 }} className="inline-block">
                        {link.label}
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary text-sm">
            © {currentYear} Jaymison Sanchez. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-secondary hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-secondary hover:text-white transition-colors text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Back to top button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-3 bg-white text-[#0a0a0a] rounded-full shadow-lg hover:scale-110 transition-transform"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
}
