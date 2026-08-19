import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "About Us | CD Solutions",
  description:
    "CD Solutions builds lasting value through quality construction, reliable materials, and practical project solutions.",
};

const values = ["Quality", "Integrity", "Reliability", "Innovation", "Professionalism", "Community Impact"];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section about-page about-page-hero">
          <div className="container about-page__top-grid">
            <div>
              <p className="about-page__eyebrow">About us</p>
              <h1 className="about-page__title">About us</h1>
            </div>
            <div className="about-page__hero-images">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85"
                alt="Construction team reviewing a site plan"
              />
              <img
                src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=85"
                alt="Built infrastructure and materials on a site"
              />
            </div>
          </div>
        </section>

        <section className="section about-page-content">
          <div className="container about-page__content-grid">
            <article className="about-page__block">
              <h2>Why We Exist</h2>
              <p>To build better places, improve communities, and create lasting value through quality construction, reliable materials, and professional project solutions.</p>
            </article>

            <article className="about-page__block">
              <h2>What We Believe</h2>
              <p>We believe construction is more than building structures. It is a way to create opportunities, improve lives, support communities, and contribute to sustainable economic growth.</p>
            </article>

            <article className="about-page__block">
              <h2>Our Vision</h2>
              <p>To become a trusted regional leader in construction, construction materials, consultancy, and logistics by expanding our operations, empowering people, and delivering innovative and sustainable solutions.</p>
            </article>

            <article className="about-page__block">
              <h2>Our Mission</h2>
              <p>To provide quality construction services, reliable materials, professional expertise, and efficient logistics while delivering practical solutions that meet our clients&apos; needs and exceed expectations.</p>
            </article>

            <article className="about-page__block">
              <h2>Our Story</h2>
              <p>CD Solutions was founded in 2023 by Cedric Cyuzuzo with the vision of creating a company that connects construction, materials, consultancy, and logistics under one reliable service.</p>
              <p>Since its establishment, CD Solutions has focused on providing practical solutions that help individuals, businesses, contractors, and developers successfully move their projects forward.</p>
            </article>

            <article className="about-page__block">
              <h2>Our Values</h2>
              <div className="about-page__values">
                {values.map((value) => (
                  <span key={value}>{value}</span>
                ))}
              </div>
              <p>We are committed to building lasting relationships with our clients while creating positive impact through every project we undertake.</p>
            </article>
          </div>
        </section>

        <section className="section about-page__cta">
          <div className="container about-page__cta-grid">
            <p>Ready to build with a partner who delivers practical, reliable, and accountable support?</p>
            <Link href="/#contact" className="button button--blue">Start a project</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
