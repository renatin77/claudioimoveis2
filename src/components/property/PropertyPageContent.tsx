"use client";

import PropertyHero from "@/components/property/PropertyHero";
import Gallery from "@/components/property/Gallery";
import PropertyDetails from "@/components/property/PropertyDetails";
import Diferenciais from "@/components/property/Diferenciais";
import Plantas from "@/components/property/Plantas";
import Location from "@/components/property/Location";
import WhatsAppFloat from "@/components/property/WhatsAppFloat";
import CTAButton from "@/components/ui/CTAButton";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { MessageCircle } from "lucide-react";
import { Property } from "@/data/properties";
import { broker, getWhatsAppLink } from "@/data/broker";

interface PropertyPageContentProps {
  property: Property;
}

export default function PropertyPageContent({ property }: PropertyPageContentProps) {
  return (
    <>
      <PropertyHero property={property} />
      <Gallery property={property} />
      <PropertyDetails property={property} />
      <Diferenciais property={property} />
      <Plantas property={property} />
      <Location property={property} />

      <section className="py-12 sm:py-16 border-t border-[var(--glass-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="glass rounded-2xl p-8 sm:p-12 text-center gold-glow">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
                Parcelas que cabem no seu bolso
              </h2>
              <p className="mt-3 text-foreground/60 max-w-xl mx-auto">
                Fale com {broker.nome} e descubra como realizar o sonho da casa
                própria pelo Minha Casa Minha Vida.
              </p>
              <div className="mt-6">
                <CTAButton
                  href={getWhatsAppLink(property.titulo)}
                  external
                  icon={MessageCircle}
                  size="lg"
                >
                  Fazer Orçamento
                </CTAButton>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="mt-8 text-xs text-foreground/30 text-center leading-relaxed max-w-3xl mx-auto">
              {property.legal} PARA MAIS INFORMAÇÕES, CONSULTE A CENTRAL DE
              VENDAS DA CURY (CCISA 08 CONSULTORIA IMOBILIÁRIA LTDA.) - CRECI
              23.670-J.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <WhatsAppFloat property={property} />
    </>
  );
}
