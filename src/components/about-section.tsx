export default function AboutSection() {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <div className="about__image-wrap">
          <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1500&q=85" alt="Construction professionals coordinating on site" />
          <div className="about__stamp">CD<br />SOLUTIONS</div>
        </div>
        <div className="about__copy">
          <h2>Practical expertise, connected from the ground up.</h2>
          <p className="about__lead">Good construction depends on more than what happens on site. It needs sound planning, accurate quantities, reliable materials, capable teams, and logistics that arrive at the right time.</p>
          <p>CD Solutions connects those moving parts through a single, coordinated service. Our role is straightforward: understand the requirement, organize the resources, and help deliver work that performs as intended.</p>
          <a href="#contact" className="button button--blue">Work with us</a>
        </div>
      </div>
    </section>
  );
}
