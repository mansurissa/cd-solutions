import { capabilities } from "@/data/siteData";

export default function ProjectSection() {
  return (
    <section className="section capabilities" id="capabilities">
      <div className="container">
        <header className="section-intro section-intro--light"><h2>Capability across the project lifecycle.</h2></header>
        <div className="capability-grid">
          {capabilities.map((capability, index) => (
            <article className="capability-card" key={capability.title}>
              <img src={capability.image} alt="" /><div className="capability-card__shade" />
              <div className="capability-card__content"><span>0{index + 1}</span><p>{capability.label}</p><h3>{capability.title}</h3></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
