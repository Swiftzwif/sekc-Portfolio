"use client";

import { AnimatedSection } from "./ui/AnimatedSection";
import { Button } from "./ui/Button";
import Image from "next/image";

export function FeaturedProject() {
  return (
    <section id="projects" className="section-padding bg-surface">
      <div className="container-max">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fadeUp">
            <span className="text-sm text-accent uppercase tracking-[0.1em] font-medium">
              FEATURED WORK
            </span>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={0.15}>
            <h3 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
              Trajectory Group
            </h3>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={0.3}>
            <p className="text-body text-secondary max-w-3xl mb-8">
              Built the complete platform for Trajectory Group as CTO - a
              full-stack web application featuring responsive design, modern
              UI/UX, and seamless deployment on Vercel. Handled everything from
              initial architecture to production launch, creating a scalable
              foundation for the company's digital presence.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={0.45}>
            <p className="text-base text-tertiary mb-12">
              React • Next.js • TypeScript • Tailwind CSS • Vercel
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={0.6}>
            <div className="relative aspect-video border border-[#1A1A1A] overflow-hidden group cursor-pointer mb-8">
              {/* Placeholder for project screenshot */}
              <div className="w-full h-full bg-[#0A0A0A] flex items-center justify-center">
                <div className="text-center">
                  <p className="text-tertiary mb-2">Project Screenshot</p>
                  <p className="text-sm text-tertiary/50">
                    Trajectory Group Platform
                  </p>
                </div>
              </div>
              {/* Uncomment when you have the actual image */}
              {/* <Image
                src="/trajectory-screenshot.png"
                alt="Trajectory Group Platform"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              /> */}

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={0.75}>
            <Button href="#" external variant="primary" size="md">
              View Live Site
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}