"use client";

import { motion, useReducedMotion } from "framer-motion";
import CTAButton from "@/components/ui/CTAButton";
import { ChevronDown } from "lucide-react";
import { getWhatsAppLink } from "@/data/broker";
import Image from "next/image";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/parque-piedade/Principal.webp"
        alt="Zona Portuária do Rio de Janeiro"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />

      <div className="relative z-20 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase text-gold border border-gold/30 glass mb-6">
            Minha Casa Minha Vida
          </span>
        </motion.div>

        <motion.h1
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.77, 0, 0.175, 1] }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
        >
          Seu novo lar,{" "}
          <span className="text-gold">parcelas que cabem</span>
          <br />
          no seu bolso
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl mx-auto"
        >
          Empreendimentos do Minha Casa Minha Vida com lazer completo,
          localização privilegiada e parcelas acessíveis. Realize o sonho da casa própria.
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <CTAButton href="#imoveis" size="lg">
            Ver Imóveis
          </CTAButton>
          <CTAButton
            href={getWhatsAppLink()}
            external
            variant="outline"
            size="lg"
          >
            Fazer Orçamento
          </CTAButton>
        </motion.div>
      </div>

      <motion.div
        initial={shouldReduceMotion ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
