import { processSteps } from "@/data/siteData";

export default function ProcessSection() {
  return (
    <section className="section process" id="approach">
      <div className="container">
        <header className="section-intro section-intro--split"><div><h2>A clear route from requirement to delivery.</h2></div><p>Every engagement is scaled to the work, while the fundamentals stay consistent.</p></header>
        <div className="process-grid">
          {processSteps.map((step) => <article className="process-step" key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></article>)}
        </div>
      </div>
    </section>
  );
}
