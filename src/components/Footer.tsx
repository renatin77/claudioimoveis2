"use client";

import Link from "next/link";
import { MessageCircle, Mail } from "lucide-react";
import { broker, getWhatsAppLink } from "@/data/broker";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--glass-border)] bg-foreground/[0.02] dark:bg-foreground/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div>
            <Link
              href="/"
              className="font-serif text-2xl font-bold text-foreground"
            >
              <span className="text-gold">
                {broker.nome.split(" ")[0]}
              </span>{" "}
              {broker.nome.split(" ").slice(1).join(" ")}
            </Link>
            <p className="mt-3 text-sm text-foreground/60 max-w-xs">
              Especialista em empreendimentos do Minha Casa Minha Vida no Rio de
              Janeiro. Parcelas que cabem no seu bolso.
            </p>
            <p className="mt-2 text-xs text-foreground/40">
              CRECI {broker.creci}
            </p>
          </div>

          <div>
            <h3 className="font-serif text-sm font-semibold text-foreground mb-4">
              Navegação
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Início" },
                { href: "/#imoveis", label: "Imóveis" },
                { href: "/#sobre", label: "Sobre" },
                { href: "/contato", label: "Contato" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/60 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-sm font-semibold text-foreground mb-4">
              Contato
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-foreground/60 hover:text-gold transition-colors duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${broker.email}`}
                  className="flex items-center gap-2 text-sm text-foreground/60 hover:text-gold transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  {broker.email}
                </a>
              </li>
              <li>
                <a
                  href={broker.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-foreground/60 hover:text-gold transition-colors duration-200"
                >
                   <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
                  @claudio_corretordeimoveis
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-sm font-semibold text-foreground mb-4">
              Empreendimentos
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/imovel/parque-piedade", label: "Parque Piedade" },
                { href: "/imovel/residencial-cartola", label: "Residencial Cartola" },
                { href: "/imovel/residencial-cartola-ii", label: "Residencial Cartola II" },
                { href: "/imovel/condominio-rosa", label: "Condomínio Rosa" },
                { href: "/imovel/farol-da-guanabara", label: "Farol da Guanabara" },
                { href: "/imovel/condominio-candeeiro", label: "Condomínio Candeeiro" },
                { href: "/imovel/condominio-lamparina", label: "Condomínio Lamparina" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/60 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--glass-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground/40">
            &copy; {new Date().getFullYear()} {broker.nome}. CRECI{" "}
            {broker.creci}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-foreground/30 text-center">
            Imóveis do Minha Casa Minha Vida pela Cury Construtora. Imagens
            ilustrativas. Consulte o estande de vendas.
          </p>
        </div>
      </div>
    </footer>
  );
}
