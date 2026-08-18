import { serviceGroups } from "@/data/siteData";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <header className="section-intro">
          <h2>One team. Every essential part of the build.</h2>
          <p>Choose a complete delivery partner or engage us for the specialist support your project needs.</p>
        </header>
        <div className="service-grid">
          {serviceGroups.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card__top"><span className="service-card__number">{service.number}</span></div>
              <h3><Link href={`/services/${service.slug}`}>{service.title}</Link></h3><p>{service.description}</p>
              <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
              <Link className="service-card__link" href={`/services/${service.slug}`}>View service</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
