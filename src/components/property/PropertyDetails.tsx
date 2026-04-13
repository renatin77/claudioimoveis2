"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import { MapPin, BedDouble, Building2, TreePine } from "lucide-react";
import { Property } from "@/data/properties";

interface PropertyDetailsProps {
  property: Property;
}

export default function PropertyDetails({ property }: PropertyDetailsProps) {
  const details = [
    { icon: BedDouble, label: "Quartos", value: property.quartos },
    { icon: MapPin, label: "Bairro", value: property.bairro },
    { icon: Building2, label: "Status", value: property.status },
    { icon: TreePine, label: "Zona", value: property.zona },
  ];

  return (
    <ScrollReveal>
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8">
            Sobre o Empreendimento
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {details.map((detail, index) => (
              <ScrollReveal key={detail.label} delay={index * 50}>
                <GlassCard padding="p-5" className="text-center h-full">
                  <detail.icon className="w-6 h-6 text-gold mx-auto mb-3" />
                  <p className="text-xs text-foreground/50 uppercase tracking-wider">
                    {detail.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-foreground">
                    {detail.value}
                  </p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-foreground/70 leading-relaxed">
              {property.descricao}
            </p>
          </div>

          <div className="mt-8">
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
              Pontos Fortes
            </h3>
            <ul className="space-y-2">
              {property.pontosFortes.map((ponto) => (
                <li
                  key={ponto}
                  className="flex items-start gap-2 text-foreground/70"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  {ponto}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
