"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "./ui/AnimatedSection";

export function Services() {
  const pricingData = [
    {
      label: "INVESTMENT",
      value: "$1,500 - $3,000",
      detail: "Fair pricing for premium work",
    },
    {
      label: "TIMELINE",
      value: "1-2 Weeks",
      detail: "Fast turnaround, no delays",
    },
    {
      label: "BEST FOR",
      value: "Local Businesses",
      detail: "Restaurants, salons, contractors, services",
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-max">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection animation="fadeUp">
            <h2 className="text-section-header text-center mb-16">
              WHAT I BUILD
            </h2>
          </AnimatedSection>

          <div className="text-center mb-16">
            <AnimatedSection animation="fadeUp" delay={0.2}>
              <h3 className="text-subheader mb-6">
                Custom Websites for Local Businesses
              </h3>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={0.3}>
              <p className="text-body text-secondary max-w-3xl mx-auto">
                I build custom websites for local businesses who need modern,
                mobile-responsive sites that actually bring in customers. No
                templates, no bloat - just clean code, fast loading times, and
                designs that convert.
              </p>
            </AnimatedSection>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingData.map((item) => (
              <StaggerItem key={item.label}>
                <div className="border border-[#1A1A1A] p-8 hover:border-[#00D9FF]/20 transition-all duration-300">
                  <p className="text-sm text-accent uppercase tracking-wider mb-4">
                    {item.label}
                  </p>
                  <p className="text-2xl md:text-3xl font-bold mb-3">
                    {item.value}
                  </p>
                  <p className="text-base text-tertiary">{item.detail}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}