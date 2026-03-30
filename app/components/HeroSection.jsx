'use client';

import { useRef, useEffect, useState } from 'react';

export default function HeroSection() {
  const typingRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/typed.js@2.0.12';
    document.body.appendChild(script);

    script.onload = () => {
      if (typingRef.current && typeof Typed !== 'undefined') {
        const typed = new Typed(typingRef.current, {
          strings: [
            'B.E. CSE (AIML) Student',
            'Sports Player',
            'AI Enthusiast',
            'Web Developer',
            'Quantum Explorer'
          ],
          typeSpeed: 80,
          backSpeed: 60,
          backDelay: 2000,
          loop: true,
        });

        return () => typed.destroy();
      }
    };
  }, []);

  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div>
          <h1 data-aos="fade-up">Subhasini Ravikumar</h1>
          <h2><span ref={typingRef}></span></h2>
          <p data-aos="fade-up" data-aos-delay="100">
            I am Subhasini Ravikumar, an AIML student and sports player from Namakkal, India.
            I am passionate about AI, web development, and quantum computing, and I apply the discipline of sports in every project.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary"><i className="fa-solid fa-paper-plane"></i> Contact Me</a>
            <a href="#projects" className="btn btn-secondary"><i className="fa-solid fa-diagram-project"></i> View Projects</a>
          </div>
        </div>
        <div className="avatar-wrap">
          <div className="avatar">
            <div>
              <i className="fa-solid fa-user"></i>
              <span>Profile Photo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
