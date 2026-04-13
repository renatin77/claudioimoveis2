import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { broker } from "@/data/broker";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${broker.nome} | Imóveis Cury no Rio de Janeiro`,
    template: `%s | ${broker.nome}`,
  },
  description:
    "Especialista em empreendimentos Cury no Rio de Janeiro. Apartamentos de 1 a 3 quartos na planta com lazer completo. CRECI 103666.",
  keywords: [
    "imóveis rio de janeiro",
    "cury construtora",
    "apartamentos na planta",
    "zona portuária rio",
    "lancamentos imobiliarios",
    broker.nome,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
