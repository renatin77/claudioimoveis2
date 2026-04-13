"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { Property } from "@/data/properties";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface GalleryProps {
  property: Property;
}

const INITIAL_COUNT = 6;

export default function Gallery({ property }: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  if (property.imagens.length === 0) return null;

  const displayedImages = showAll
    ? property.imagens
    : property.imagens.slice(0, INITIAL_COUNT);
  const hasMore = property.imagens.length > INITIAL_COUNT;

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) =>
      i !== null
        ? (i - 1 + property.imagens.length) % property.imagens.length
        : null
    );
  const next = () =>
    setLightboxIndex((i) =>
      i !== null ? (i + 1) % property.imagens.length : null
    );

  return (
    <ScrollReveal>
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Camera className="w-6 h-6 text-gold" />
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
              Imagens
            </h2>
            <span className="text-sm text-foreground/40">
              ({property.imagens.length} fotos)
            </span>
          </div>

          <div
            className={`grid gap-3 ${
              displayedImages.length === 1
                ? "grid-cols-1"
                : displayedImages.length === 2
                ? "grid-cols-2"
                : "grid-cols-2 sm:grid-cols-3"
            }`}
          >
            {displayedImages.map((img, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading={index < 3 ? "eager" : "lazy"}
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
              </button>
            ))}
          </div>

          {hasMore && !showAll && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowAll(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-gold border border-gold/30 glass hover:bg-gold/10 transition-colors duration-200"
              >
                Ver todas as {property.imagens.length} fotos
              </button>
            </div>
          )}
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

              {property.imagens.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prev();
                    }}
                    className="absolute left-4 sm:left-8 w-10 h-10 rounded-full glass flex items-center justify-center text-white z-10"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      next();
                    }}
                    className="absolute right-4 sm:right-8 w-10 h-10 rounded-full glass flex items-center justify-center text-white z-10"
                    aria-label="Próxima"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              <motion.div
                key={lightboxIndex}
                initial={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { scale: 0.95, opacity: 0 }
                }
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                className="relative w-[90vw] h-[70vh] max-w-5xl"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={property.imagens[lightboxIndex]?.src || ""}
                  alt={property.imagens[lightboxIndex]?.alt || ""}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  loading="lazy"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </ScrollReveal>
  );
}
