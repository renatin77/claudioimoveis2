"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import CTAButton from "@/components/ui/CTAButton";
import { MessageCircle, Award, Building2, Home } from "lucide-react";
import { broker, getWhatsAppLink } from "@/data/broker";

export default function AboutBroker() {
  return (
    <section id="sobre" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase text-gold border border-gold/30 glass mb-4">
              Seu Corretor
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              {broker.nome}
            </h2>
            <p className="mt-2 text-lg text-gold font-medium">
              CRECI {broker.creci}
            </p>
            <p className="mt-6 text-foreground/60 leading-relaxed">
              {broker.descricao}
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: Home,
                  title: "Minha Casa Minha Vida",
                  desc: "Parcelas que cabem no bolso",
                },
                {
                  icon: Award,
                  title: "Cury Construtora",
                  desc: "Parceria oficial",
                },
                {
                  icon: MessageCircle,
                  title: "Atendimento",
                  desc: "Direto no WhatsApp",
                },
              ].map((item) => (
                <GlassCard key={item.title} padding="p-4" className="text-center">
                  <item.icon className="w-6 h-6 text-gold mx-auto mb-2" />
                  <p className="text-sm font-semibold text-foreground">
                    {item.title}
                  </p>
                  <p className="text-xs text-foreground/50 mt-0.5">
                    {item.desc}
                  </p>
                </GlassCard>
              ))}
            </div>

            <div className="mt-8">
              <CTAButton
                href={getWhatsAppLink()}
                external
                 icon={MessageCircle}
                 size="lg"
              >
                Fazer Orçamento
              </CTAButton>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="relative">
              <GlassCard padding="p-0" className="overflow-hidden aspect-square">
                <div className="w-full h-full bg-gradient-to-br from-gold/20 via-gold/5 to-transparent flex items-center justify-center">
                  <div className="text-center">
                    <Building2 className="w-16 h-16 text-gold/40 mx-auto" />
                    <p className="mt-4 font-serif text-2xl font-bold text-foreground/20">
                      {broker.nome}
                    </p>
                  </div>
                </div>
              </GlassCard>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl glass gold-glow p-4 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-gold">7</span>
                <span className="text-xs text-foreground/60 text-center">
                  Imóveis MCMV
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
