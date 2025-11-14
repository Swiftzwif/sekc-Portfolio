"use client";

import { AnimatedSection } from "./ui/AnimatedSection";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center gradient-fade">
      <div className="container-max text-center">
        <AnimatedSection animation="fadeUp">
          <h2 className="text-6xl md:text-7xl font-bold mb-12">
            LET&apos;S BUILD SOMETHING
          </h2>
        </AnimatedSection>

        <div className="space-y-6 mb-16">
          <AnimatedSection animation="fadeUp" delay={0.2}>
            <motion.a
              href="mailto:jsanchez@trajectorygroup.org"
              className="block text-2xl text-accent hover:underline underline-offset-4 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              jsanchez@trajectorygroup.org
            </motion.a>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fadeIn" delay={0.4}>
          <p className="text-sm text-tertiary">
            Based in Boston, MA • Available for projects
          </p>
        </AnimatedSection>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-1/2 left-10 w-32 h-32 bg-[#00D9FF]/5 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-10 w-48 h-48 bg-[#00D9FF]/3 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
}