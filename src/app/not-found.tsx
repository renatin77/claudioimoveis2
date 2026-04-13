"use client";

import { ChevronLeft } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="font-serif text-4xl font-bold text-foreground mb-4">
          Imóvel não encontrado
        </h1>
        <p className="text-foreground/60 mb-8">
          O imóvel que você procura não está disponível.
        </p>
        <CTAButton href="/" icon={ChevronLeft}>
          Voltar ao início
        </CTAButton>
      </div>
    </div>
  );
}
