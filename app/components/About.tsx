"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "./ui/AnimatedSection";

export function About() {
  const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind",
    "Framer Motion",
    "Vercel",
    "AI Tools",
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-content">
        <AnimatedSection animation="fadeUp">
          <h2 className="text-section-header mb-10">WHO I AM</h2>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={0.2}>
          <p className="text-body text-secondary mb-12 leading-relaxed">
            I'm a 21-year-old full-stack developer from Lawrence, MA, building
            modern websites for businesses that need results fast. I combine
            AI-assisted development with hands-on coding to deliver clean,
            conversion-focused sites in 1-2 weeks. Currently working as an
            electrical apprentice by day, building the future of web
            development by night.
          </p>
        </AnimatedSection>

        <StaggerContainer className="flex flex-wrap gap-3">
          {techStack.map((tech, index) => (
            <StaggerItem key={tech}>
              <div className="px-6 py-3 border border-[#1A1A1A] text-sm hover:border-[#00D9FF]/30 hover:text-[#00D9FF] transition-all duration-300 cursor-default">
                {tech}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}