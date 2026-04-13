"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import CTAButton from "@/components/ui/CTAButton";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/data/broker";

export default function CTASection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gold/20 via-gold/10 to-gold/5" />
            <div className="absolute inset-0 glass" />
            <div className="relative z-10 text-center py-16 sm:py-20 px-6">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                Realize o sonho da casa própria
              </h2>
              <p className="mt-4 text-foreground/60 max-w-xl mx-auto">
                Entre em contato agora e descubra como as parcelas do Minha Casa
                Minha Vida cabem no seu bolso. Lazer completo para toda a família.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <CTAButton
                  href={getWhatsAppLink()}
                  external
                  icon={MessageCircle}
                  size="lg"
                >
                  Fazer Orçamento
                </CTAButton>
                <CTAButton href="/#imoveis" variant="outline" size="lg">
                  Ver Todos os Imóveis
                </CTAButton>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
