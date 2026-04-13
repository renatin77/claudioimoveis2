"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import { MapPin, Navigation } from "lucide-react";
import { Property } from "@/data/properties";

interface LocationProps {
  property: Property;
}

export default function Location({ property }: LocationProps) {
  const { empreendimento, standVendas } = property.localizacao;
  const mapsEmbedUrl = `https://maps.google.com/maps?q=${empreendimento.lat},${empreendimento.lng}&z=15&output=embed`;

  return (
    <ScrollReveal>
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="w-6 h-6 text-gold" />
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
              Localização
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <GlassCard padding="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/50 uppercase tracking-wider">
                      Empreendimento
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {empreendimento.endereco}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a
                    href={`https://waze.com/ul?ll=${empreendimento.lat},${empreendimento.lng}&navigate=yes`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gold hover:text-gold-light transition-colors duration-200 flex items-center gap-1"
                  >
                    <Navigation className="w-3 h-3" /> Waze
                  </a>
                  <a
                    href={`https://maps.google.com/maps?daddr=${empreendimento.lat},${empreendimento.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gold hover:text-gold-light transition-colors duration-200 flex items-center gap-1"
                  >
                    <Navigation className="w-3 h-3" /> Google Maps
                  </a>
                </div>
              </GlassCard>

              <GlassCard padding="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/50 uppercase tracking-wider">
                      Stand de Vendas
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {standVendas.endereco}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a
                    href={`https://waze.com/ul?ll=${standVendas.lat},${standVendas.lng}&navigate=yes`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gold hover:text-gold-light transition-colors duration-200 flex items-center gap-1"
                  >
                    <Navigation className="w-3 h-3" /> Waze
                  </a>
                  <a
                    href={`https://maps.google.com/maps?daddr=${standVendas.lat},${standVendas.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gold hover:text-gold-light transition-colors duration-200 flex items-center gap-1"
                  >
                    <Navigation className="w-3 h-3" /> Google Maps
                  </a>
                </div>
              </GlassCard>

              <div className="glass rounded-xl p-5">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                  Sobre a Região
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {property.sobreRegiao}
                </p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-2xl overflow-hidden glass aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[400px]">
                <iframe
                  src={mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Localização do empreendimento"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
