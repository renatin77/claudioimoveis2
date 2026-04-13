"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin, BedDouble, ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Property } from "@/data/properties";

interface PropertyHeroProps {
  property: Property;
}

export default function PropertyHero({ property }: PropertyHeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const heroImage = property.imagens[0]?.src || "/images/zona-portuaria-hero.jpeg";

  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
      <Image
        src={heroImage}
        alt={property.titulo}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors duration-200 mb-6"
          >
            <ChevronLeft className="w-4 h-4" />
            Voltar
          </Link>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase glass ${
              property.status === "Lançamento"
                ? "text-white bg-gold/80"
                : "text-gold"
            }`}>
              {property.status}
            </span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white/70 glass">
              {property.zona}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {property.titulo}
          </h1>

          <div className="flex flex-wrap items-center gap-4 mt-4 text-white/70">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span>{property.bairro} — {property.cidade}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BedDouble className="w-4 h-4" />
              <span>{property.quartos}</span>
            </div>
          </div>

          <p className="mt-3 text-lg text-white/80">{property.subtitulo}</p>
        </motion.div>
      </div>
    </section>
  );
}
