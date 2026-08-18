import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { processSteps, serviceGroups } from "@/data/siteData";

type ServicePageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return serviceGroups.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = serviceGroups.find((item) => item.slug === params.slug);

  if (!service) return {};

  return {
    title: `${service.title} | CD Solutions`,
    description: service.description,
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = serviceGroups.find((item) => item.slug === params.slug);

  if (!service) notFound();

  const relatedServices = serviceGroups.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <SiteHeader />
      <main>
        <section className="service-page-hero">
          <div className="service-page-hero__media">
            <img src={service.heroImage} alt={service.heroAlt} />
          </div>
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span><Link href="/#services">Services</Link><span>/</span><span>{service.title}</span>
            </nav>
            <div className="service-page-hero__grid">
              <h1>{service.title}</h1>
              <div className="service-page-hero__side"><span>{service.number}</span><p>{service.description}</p></div>
            </div>
          </div>
        </section>

        <section className="section service-detail">
          <div className="container service-detail__grid">
            <div className="service-detail__intro">
              <h2>What this service covers.</h2>
              <p>{service.overview}</p>
              <Link href="/#contact" className="button button--blue">Discuss your requirements</Link>
            </div>
            <ol className="scope-list">
              {service.items.map((item, index) => (
                <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item}</h3></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section service-delivery">
          <div className="container">
            <header className="service-delivery__header"><h2>Structured around delivery.</h2><p>Our approach stays clear and accountable, while adapting to the scale and requirements of each engagement.</p></header>
            <div className="service-delivery__grid">
              {processSteps.map((step) => <article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section related-services">
          <div className="container">
            <h2>Related services.</h2>
            <div className="related-services__grid">
              {relatedServices.map((item) => (
                <Link href={`/services/${item.slug}`} key={item.slug}><span>{item.number}</span><h3>{item.title}</h3><p>{item.description}</p></Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
