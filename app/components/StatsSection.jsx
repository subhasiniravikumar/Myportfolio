'use client';

import { useEffect, useState } from 'react';

export default function StatsSection() {
  const [counters, setCounters] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const targets = [50, 2, 5, 100];
    let hasAnimated = false;

    const animateCounters = () => {
      if (hasAnimated) return;

      const stats = document.getElementById('stats');
      if (!stats) return;

      const sectionPos = stats.getBoundingClientRect().top;
      const screenPos = window.innerHeight / 1.3;

      if (sectionPos < screenPos) {
        hasAnimated = true;
        const duration = 1500;
        const start = performance.now();

        const frame = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          setCounters(targets.map((t) => Math.floor(t * progress)));
          if (progress < 1) {
            requestAnimationFrame(frame);
          }
        };

        requestAnimationFrame(frame);
      }
    };

    const onScroll = () => animateCounters();
    window.addEventListener('scroll', onScroll);
    animateCounters();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="section stats-section" id="stats">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-card" data-aos="zoom-in">
            <div className="stat-number">{counters[0]}+</div>
            <div className="stat-label">Projects & Ideas</div>
          </div>
          <div className="stat-card" data-aos="zoom-in" data-aos-delay="100">
            <div className="stat-number">{counters[1]}</div>
            <div className="stat-label">Gold Medals Won</div>
          </div>
          <div className="stat-card" data-aos="zoom-in" data-aos-delay="200">
            <div className="stat-number">{counters[2]}+</div>
            <div className="stat-label">Years Learning & Growing</div>
          </div>
          <div className="stat-card" data-aos="zoom-in" data-aos-delay="300">
            <div className="stat-number">{counters[3]}%</div>
            <div className="stat-label">Dedication & Passion</div>
          </div>
        </div>
      </div>
    </section>
  );
}
