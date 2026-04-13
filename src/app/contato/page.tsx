"use client";

import { useState } from "react";
import { MessageCircle, Send, Home } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import CTAButton from "@/components/ui/CTAButton";
import { broker, getWhatsAppLink } from "@/data/broker";
import { properties } from "@/data/properties";

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    imovel: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${formData.nome}. ${formData.imovel ? `Tenho interesse no ${formData.imovel}.` : ""} ${formData.mensagem}`.trim();
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${broker.whatsapp}&text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="pt-20 sm:pt-24">
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase text-gold border border-gold/30 glass mb-4">
                Contato
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                Realize o Sonho da Casa Própria
              </h1>
              <p className="mt-4 text-foreground/60 max-w-xl mx-auto">
                Entre em contato e descubra como as parcelas do Minha Casa Minha
                Vida cabem no seu bolso. Lazer completo para toda a família.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <GlassCard padding="p-6 sm:p-8">
                  <h2 className="font-serif text-xl font-semibold text-foreground mb-6">
                    Envie sua mensagem
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground/70 mb-1.5">
                        Nome completo
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.nome}
                        onChange={(e) =>
                          setFormData({ ...formData, nome: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-[var(--glass-border)] text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-gold transition-colors duration-200"
                        placeholder="Seu nome"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground/70 mb-1.5">
                          Telefone
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.telefone}
                          onChange={(e) =>
                            setFormData({ ...formData, telefone: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-[var(--glass-border)] text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-gold transition-colors duration-200"
                          placeholder="(21) 99999-9999"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground/70 mb-1.5">
                          E-mail
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-[var(--glass-border)] text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-gold transition-colors duration-200"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground/70 mb-1.5">
                        Imóvel de interesse
                      </label>
                      <select
                        value={formData.imovel}
                        onChange={(e) =>
                          setFormData({ ...formData, imovel: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-[var(--glass-border)] text-foreground focus:outline-none focus:border-gold transition-colors duration-200"
                      >
                        <option value="">Selecione um imóvel</option>
                        {properties.map((p) => (
                          <option key={p.slug} value={p.titulo}>
                            {p.titulo} — {p.bairro}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground/70 mb-1.5">
                        Mensagem
                      </label>
                      <textarea
                        rows={4}
                        value={formData.mensagem}
                        onChange={(e) =>
                          setFormData({ ...formData, mensagem: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-[var(--glass-border)] text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-gold transition-colors duration-200 resize-none"
                        placeholder="Conte-nos sobre seu interesse..."
                      />
                    </div>

                    <CTAButton type="submit" icon={Send} size="lg">
                      Enviar via WhatsApp
                    </CTAButton>
                  </form>
                </GlassCard>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal delay={100}>
                <GlassCard padding="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <Home className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-serif font-semibold text-foreground">
                        {broker.nome}
                      </p>
                      <p className="text-xs text-foreground/50">
                        CRECI {broker.creci}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/60">
                    {broker.descricao}
                  </p>
                </GlassCard>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <GlassCard padding="p-6" className="text-center">
                  <MessageCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <p className="font-serif font-semibold text-foreground mb-2">
                    Fazer Orçamento
                  </p>
                  <p className="text-sm text-foreground/60 mb-4">
                    Descubra parcelas que cabem no seu bolso pelo Minha Casa Minha Vida.
                  </p>
                  <CTAButton
                    href={getWhatsAppLink()}
                    external
                    icon={MessageCircle}
                  >
                    Fazer Orçamento
                  </CTAButton>
                </GlassCard>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <GlassCard padding="p-6">
                  <p className="font-serif font-semibold text-foreground mb-3">
                    Stand de Vendas
                  </p>
                  <p className="text-sm text-foreground/60">
                    Via Binário do Porto, 778
                    <br />
                    Santo Cristo — Rio de Janeiro/RJ
                  </p>
                </GlassCard>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
