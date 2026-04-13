"use client";

import { properties } from "@/data/properties";
import PropertyCard from "./PropertyCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PropertyGrid() {
  return (
    <section id="imoveis" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase text-gold border border-gold/30 glass mb-4">
              Empreendimentos
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Nossos Imóveis
            </h2>
            <p className="mt-4 text-foreground/60 max-w-2xl mx-auto">
              Conheça os 7 empreendimentos Cury disponíveis na região do Rio de
              Janeiro. Todos com lazer completo e localização privilegiada.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {properties.map((property, index) => (
            <ScrollReveal key={property.slug} delay={index * 50}>
              <PropertyCard property={property} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
