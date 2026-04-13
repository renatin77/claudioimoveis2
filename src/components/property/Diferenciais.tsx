"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import { Property } from "@/data/properties";

interface DiferenciaisProps {
  property: Property;
}

export default function Diferenciais({ property }: DiferenciaisProps) {
  return (
    <ScrollReveal>
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8">
            Diferenciais
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {property.diferenciais.map((dif, index) => (
              <ScrollReveal key={dif} delay={index * 30}>
                <GlassCard padding="p-3 sm:p-4" className="text-center h-full">
                  <p className="text-sm font-medium text-foreground">
                    {dif}
                  </p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
