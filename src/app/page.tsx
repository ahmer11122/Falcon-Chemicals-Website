import { AuroraBackgroundDemo } from "@/components/ui/aurora-background-demo";
import { GlassNavbar } from "@/components/ui/glass-navbar";
import { TrustBanner } from "@/components/ui/trust-banner";
import { AboutSection } from "@/components/ui/about-section";
import { ServicesSection } from "@/components/ui/services-section";
import { GallerySection } from "@/components/ui/gallery-section";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { FooterSection } from "@/components/ui/footer-section";
import { SplashClient } from "@/components/ui/splash-client";

export default function Home() {
  return (
    <>
      <SplashClient />
      <GlassNavbar />
      <AuroraBackgroundDemo />
      <TrustBanner />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <GallerySection />
      <FooterSection />
    </>
  );
}
