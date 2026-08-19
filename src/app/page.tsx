import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-section";
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
        <StatsSection />
        <ServicesSection />
        <ProjectSection />
        <AboutSection />
        <ProcessSection />
        <WhyUsSection />
        <ContactSection recipientEmail={process.env.CONTACT_EMAIL || ""} />
      </main>
      <SiteFooter />
    </>
  );
}
