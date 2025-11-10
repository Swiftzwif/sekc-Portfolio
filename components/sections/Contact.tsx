'use client';
import { memo } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/animations/ScrollReveal';
import TextReveal from '@/components/animations/TextReveal';
import { MailIcon, BriefcaseIcon, CodeIcon, LocationIcon } from '@/components/icons';

const contactMethods = [
  {
    label: 'Email',
    value: 'jsanchez@trajectorygroup.org',
    href: 'mailto:jsanchez@trajectorygroup.org',
    icon: <MailIcon size={40} />,
  },
  {
    label: 'LinkedIn',
    value: 'Jaymison Sanchez',
    href: 'https://www.linkedin.com/in/jaymison-sanchez-339639320/',
    icon: <BriefcaseIcon size={40} />,
  },
  {
    label: 'GitHub',
    value: '@swiftzwif',
    href: 'https://github.com/swiftzwif',
    icon: <CodeIcon size={40} />,
  },
  {
    label: 'Location',
    value: 'Boston, MA',
    href: '#',
    icon: <LocationIcon size={40} />,
  },
];

const Contact = memo(function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-section-header mb-8">
              <TextReveal text="Let's Build Something Amazing" />
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xl text-secondary mb-12 max-w-2xl mx-auto">
              Ready to transform your ideas into reality? I'm here to help bring your
              vision to life with modern, performant web solutions.
            </p>
          </ScrollReveal>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <ScrollReveal key={method.label} delay={0.3 + index * 0.1}>
                <motion.a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 bg-surface border border-border rounded-2xl hover:border-accent/50 transition-all"
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="mb-4 text-white/80">{method.icon}</div>
                  <div className="text-sm text-secondary mb-2">{method.label}</div>
                  <div className="text-white group-hover:text-accent transition-colors">
                    {method.value}
                  </div>
                </motion.a>
              </ScrollReveal>
            ))}
          </div>

          {/* Main CTA */}
          <ScrollReveal delay={0.6}>
            <motion.a
              href="mailto:jsanchez@trajectorygroup.org"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0a0a0a] font-semibold rounded-full hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Conversation
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
          </ScrollReveal>

          {/* Availability Status */}
          <ScrollReveal delay={0.8}>
            <div className="mt-12 flex items-center justify-center gap-2">
              <motion.div
                className="w-2 h-2 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm text-secondary">
                Currently available for new projects
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
});

export default Contact;
