'use client';

import { useEffect, useRef, useState } from 'react';
import { serviceGroups } from '@/data/siteData';

const stats = [
  {
    value: serviceGroups.length,
    suffix: '',
    label: 'Integrated service areas'
  },
  { value: 25, suffix: '+', label: 'Projects completed' },
  { value: 20, suffix: '+', label: 'Satisfied clients' },
  { value: 57, suffix: '', label: 'Markets supplied' }
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [counts, setCounts] = useState(() => stats.map(() => 0));
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCounts(stats.map((stat) => stat.value));
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 1400;
    const start = performance.now();
    let frame = 0;

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounts(stats.map((stat) => Math.round(stat.value * eased)));

      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [hasStarted]);

  return (
    <section
      className='impact-strip'
      ref={sectionRef}
      aria-labelledby='impact-heading'
    >
      <div className='container'>
        <div className='impact-strip__grid'>
          {stats.map((stat, index) => (
            <article key={stat.label}>
              <span>0{index + 1}</span>
              <strong>
                {counts[index]}
                {stat.suffix}
              </strong>
              <p>{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
