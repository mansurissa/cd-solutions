import { principles } from "@/data/siteData";

export default function WhyUsSection() {
  return (
    <section className="section principles">
      <div className="container principles__grid">
        <div className="principles__title"><h2>Fewer gaps.<br />Better coordination.</h2></div>
        <div className="principles__list">
          {principles.map((principle, index) => <article key={principle.title}><span>0{index + 1}</span><div><h3>{principle.title}</h3><p>{principle.text}</p></div></article>)}
        </div>
      </div>
    </section>
  );
}
