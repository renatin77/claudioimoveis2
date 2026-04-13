import HeroSection from "@/components/home/HeroSection";
import PropertyGrid from "@/components/home/PropertyGrid";
import AboutBroker from "@/components/home/AboutBroker";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PropertyGrid />
      <AboutBroker />
      <CTASection />
    </>
  );
}
