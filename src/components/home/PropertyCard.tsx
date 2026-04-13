"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, BedDouble, ArrowRight } from "lucide-react";
import { Property } from "@/data/properties";
import GlassCard from "@/components/ui/GlassCard";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {

  return (
    <Link href={`/imovel/${property.slug}`} className="block">
      <GlassCard hover padding="p-0" className="overflow-hidden group">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={property.imagens[0]?.src || "/images/zona-portuaria-hero.jpeg"}
            alt={property.imagens[0]?.alt || property.titulo}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute top-4 left-4">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase glass ${
              property.status === "Lançamento"
                ? "text-white bg-gold/80"
                : "text-gold"
            }`}>
              {property.status}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-white leading-tight">
              {property.titulo}
            </h3>
            <div className="flex items-center gap-1.5 mt-1 text-white/70">
              <MapPin className="w-3.5 h-3.5" />
              <span className="text-sm">{property.bairro}</span>
            </div>
          </div>
        </div>

        <div className="p-5">
          <p className="text-sm text-foreground/60 line-clamp-2">
            {property.subtitulo}
          </p>

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-[var(--glass-border)]">
            <div className="flex items-center gap-1.5 text-foreground/50">
              <BedDouble className="w-4 h-4" />
              <span className="text-sm">{property.quartos}</span>
            </div>
            <span className="flex items-center gap-1 text-sm font-medium text-gold group-hover:gap-2 transition-all duration-200">
              Saiba mais <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </GlassCard>
    </Link>
  );
}
