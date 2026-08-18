import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import HeroSection from "@/components/hero-section";
import ProcessSection from "@/components/process-section";
import ProjectSection from "@/components/project-section";
import ServicesSection from "@/components/services-section";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import WhyUsSection from "@/components/why-us-section";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectSection />
        <AboutSection />
        <ProcessSection />
        <WhyUsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
