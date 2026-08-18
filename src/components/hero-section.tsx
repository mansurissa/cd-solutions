"use client";

import { useEffect, useState } from "react";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=1600&q=90",
    alt: "Construction team reviewing work on site",
    title: "Plan. Supply. Build.",
  },
  {
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=90",
    alt: "Construction team working on a major building project",
    title: "Built from the ground up.",
  },
  {
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=90",
    alt: "Materials and logistics operation",
    title: "Where and when you need it.",
  },
];

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="container hero__grid">
        <div className="hero__copy">
          <h1>Solutions that<br />build success.</h1>
          <p className="hero__lead">CD Solutions brings construction, project support, material supply, and site logistics together to move projects forward with clarity.</p>
          <div className="hero__actions">
            <a href="#contact" className="button button--white">Discuss your project</a>
            <a href="#services" className="text-link">Explore services <span>↓</span></a>
          </div>
          <p className="hero__note">From first site assessment to final delivery.</p>
        </div>
        <div className="hero__visual">
          <div className="hero__slides" aria-live="polite">
            {heroSlides.map((slide, index) => (
              <div className={`hero__slide${index === activeSlide ? " hero__slide--active" : ""}`} key={slide.image} aria-hidden={index !== activeSlide}>
                <img src={slide.image} alt={index === activeSlide ? slide.alt : ""} />
              </div>
            ))}
          </div>
          <div className="hero__controls" aria-label="Hero slides">
            {heroSlides.map((slide, index) => (
              <button type="button" className={index === activeSlide ? "is-active" : ""} onClick={() => setActiveSlide(index)} aria-label={`Show slide ${index + 1}`} aria-pressed={index === activeSlide} key={slide.image}>
                0{index + 1}
              </button>
            ))}
          </div>
          <div className="hero__caption"><strong>{heroSlides[activeSlide].title}</strong></div>
        </div>
      </div>
      <div className="hero__rail" aria-hidden="true">CD / 01</div>
    </section>
  );
}
