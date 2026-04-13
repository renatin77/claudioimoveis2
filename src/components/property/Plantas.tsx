"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Ruler } from "lucide-react";
import { Property } from "@/data/properties";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface PlantasProps {
  property: Property;
}

export default function Plantas({ property }: PlantasProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  if (property.plantas.length === 0) return null;

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + property.plantas.length) % property.plantas.length : null
    );
  const next = () =>
    setLightboxIndex((i) =>
      i !== null ? (i + 1) % property.plantas.length : null
    );

  return (
    <ScrollReveal>
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Ruler className="w-6 h-6 text-gold" />
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
              Plantas
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {property.plantas.map((planta, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="relative aspect-[3/4] rounded-xl overflow-hidden group cursor-pointer glass"
              >
                <Image
                  src={planta.src}
                  alt={planta.alt}
                  fill
                  className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 pointer-events-none" />
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
              onClick={closeLightbox}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 w-10 h-10 rounded-full glass flex items-center justify-center text-white z-10"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              {property.plantas.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prev(); }}
                    className="absolute left-4 sm:left-8 w-10 h-10 rounded-full glass flex items-center justify-center text-white z-10"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); next(); }}
                    className="absolute right-4 sm:right-8 w-10 h-10 rounded-full glass flex items-center justify-center text-white z-10"
                    aria-label="Próxima"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              <motion.div
                key={lightboxIndex}
                initial={shouldReduceMotion ? { opacity: 1 } : { scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                className="relative w-[90vw] h-[80vh] max-w-4xl"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={property.plantas[lightboxIndex]?.src || ""}
                  alt={property.plantas[lightboxIndex]?.alt || ""}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </ScrollReveal>
  );
}
