import { AuroraBackgroundDemo } from "@/components/ui/aurora-background-demo";
import { GlassNavbar } from "@/components/ui/glass-navbar";
import { AboutSection } from "@/components/ui/about-section";
import { ServicesSection } from "@/components/ui/services-section";
import { GallerySection } from "@/components/ui/gallery-section";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { FooterSection } from "@/components/ui/footer-section";

export default function Home() {
  return (
    <>
      <GlassNavbar />
      <AuroraBackgroundDemo />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <FooterSection />
    </>
  );
}
