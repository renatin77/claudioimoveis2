import { Metadata } from "next";
import { notFound } from "next/navigation";
import { properties, getPropertyBySlug } from "@/data/properties";
import { broker } from "@/data/broker";
import PropertyPageContent from "@/components/property/PropertyPageContent";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const property = getPropertyBySlug(params.slug);
  if (!property) return {};

  return {
    title: property.titulo,
    description: property.descricao,
    openGraph: {
      title: `${property.titulo} | ${broker.nome}`,
      description: property.descricao,
    },
  };
}

export default function PropertyPage({ params }: PageProps) {
  const property = getPropertyBySlug(params.slug);

  if (!property) {
    notFound();
  }

  return <PropertyPageContent property={property} />;
}
