'use client';

import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ContactForm from './components/ContactForm';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init({
        duration: 800,
        once: false,
        offset: 100,
        easing: 'ease-in-out',
      });
    }

    // Set year in footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear().toString();
    }
  }, []);

  const downloadResume = () => {
    const resumeContent = `
      <h1>Subhasini Ravikumar</h1>
      <h2>B.E. CSE (AIML) Student | Sports Player</h2>
      <h3>Contact Information</h3>
      <p>Email: rtsubhasini978@gmail.com | Location: Namakkal, India</p>
      <h3>Education</h3>
      <p>B.E. CSE (AIML), 3rd Year, 6th Semester<br/>K.S. Rangasamy College of Technology, Tiruchengode<br/>Future Goal: M.E. AIML in Germany</p>
      <h3>Technical Skills</h3>
      <p>Python, C, C++, Machine Learning, AI Concepts, Qiskit, Web Development</p>
      <h3>Achievements</h3>
      <p>University Gold Medalist in Weight Lifting and Cricket</p>
    `;

    const element = document.createElement('div');
    element.innerHTML = resumeContent;
    element.style.padding = '20px';
    element.style.fontFamily = 'Poppins, sans-serif';

    if (typeof html2pdf !== 'undefined') {
      html2pdf().set({
        margin: 10,
        filename: 'Subhasini_Ravikumar_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
      }).from(element).save();
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />

        <section className="section" id="about">
          <div className="container">
            <h1 className="section-title" data-aos="fade-up">Personal Information</h1>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">My profile at a glance.</p>
            <article className="card" data-aos="fade-up" data-aos-delay="200">
              <p><strong>Name:</strong> Subhasini Ravikumar</p>
              <p><strong>Date of Birth:</strong> 18 July 2006</p>
              <p><strong>Location:</strong> Namakkal, India</p>
              <p><strong>Email:</strong> <a href="mailto:rtsubhasini978@gmail.com">rtsubhasini978@gmail.com</a></p>
              <p><strong>Phone:</strong> Available on request</p>
              <div className="tags">
                <span className="tag"><i className="fa-solid fa-cake-candles"></i> 18 July 2006</span>
                <span className="tag"><i className="fa-solid fa-location-dot"></i> Namakkal, India</span>
                <span className="tag"><i className="fa-solid fa-graduation-cap"></i> AIML Student</span>
                <span className="tag"><i className="fa-solid fa-dumbbell"></i> Sports Player</span>
              </div>
            </article>
          </div>
        </section>

        <section className="section" id="education">
          <div className="container">
            <h1 className="section-title" data-aos="fade-up">Education</h1>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">Current studies and higher education goal.</p>
            <article className="card" data-aos="fade-up" data-aos-delay="200">
              <p><strong>Current:</strong> B.E. CSE (AIML), 3rd Year, 6th Semester</p>
              <p><strong>College:</strong> K.S. Rangasamy College of Technology, Tiruchengode</p>
              <p><strong>Future Plan:</strong> M.E. AIML in Germany</p>
            </article>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="container">
            <h1 className="section-title" data-aos="fade-up">Skills</h1>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">Programming, AI/ML, web, tools, and sports strengths.</p>
            <div className="skills-grid">
              <article className="card">
                <h2 className="section-title" style={{fontSize: '1.3rem', marginBottom: '16px'}}><i className="fa-solid fa-laptop-code"></i> Technical Skills</h2>
                <div className="progress-item">
                  <div className="progress-head"><span>Python</span><span>88%</span></div>
                  <div className="bar"><div className="fill" style={{width: '88%'}}></div></div>
                </div>
                <div className="progress-item">
                  <div className="progress-head"><span>C</span><span>82%</span></div>
                  <div className="bar"><div className="fill" style={{width: '82%'}}></div></div>
                </div>
                <div className="progress-item">
                  <div className="progress-head"><span>C++</span><span>80%</span></div>
                  <div className="bar"><div className="fill" style={{width: '80%'}}></div></div>
                </div>
                <div className="progress-item">
                  <div className="progress-head"><span>Machine Learning & AI</span><span>84%</span></div>
                  <div className="bar"><div className="fill" style={{width: '84%'}}></div></div>
                </div>
                <div className="progress-item">
                  <div className="progress-head"><span>HTML / CSS / JavaScript</span><span>86%</span></div>
                  <div className="bar"><div className="fill" style={{width: '86%'}}></div></div>
                </div>
              </article>
              <article className="card">
                <h2 className="section-title" style={{fontSize: '1.3rem', marginBottom: '16px'}}><i className="fa-solid fa-screwdriver-wrench"></i> Tools & Sports</h2>
                <div className="pills">
                  <span className="pill">VS Code</span><span className="pill">AWS</span><span className="pill">Git</span><span className="pill">GitHub</span>
                  <span className="pill">Cricket</span><span className="pill">Weight Lifting</span><span className="pill">Athletics</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <h1 className="section-title" data-aos="fade-up">Projects</h1>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">Work I have built using AI, cloud, and web technologies.</p>
            <div className="skills-grid">
              <article className="card" data-aos="fade-up" data-aos-delay="150">
                <h2 className="section-title" style={{fontSize: '1.2rem', marginBottom: '8px'}}><i className="fa-solid fa-shirt"></i> T-shirt Design App</h2>
                <p><strong>Tech Stack:</strong> AWS, AI/ML, VS Code</p>
                <p style={{marginTop: '10px'}}><strong>Description:</strong> Generates creative T-shirt design outputs from user prompts using AI-assisted logic.</p>
              </article>
              <article className="card" data-aos="fade-up" data-aos-delay="200">
                <h2 className="section-title" style={{fontSize: '1.2rem', marginBottom: '8px'}}><i className="fa-solid fa-atom"></i> Quantum Circuit Simulation</h2>
                <p><strong>Tech Stack:</strong> Python, Qiskit, Quantum</p>
                <p style={{marginTop: '10px'}}><strong>Description:</strong> Simulated quantum circuits to understand quantum computing fundamentals.</p>
              </article>
              <article className="card" data-aos="fade-up" data-aos-delay="250">
                <h2 className="section-title" style={{fontSize: '1.2rem', marginBottom: '8px'}}><i className="fa-solid fa-globe"></i> Portfolio Website</h2>
                <p><strong>Tech Stack:</strong> Next.js, React, Node.js, Express</p>
                <p style={{marginTop: '10px'}}><strong>Description:</strong> Built and deployed the complete interactive portfolio website.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="achievements">
          <div className="container">
            <h1 className="section-title" data-aos="fade-up">Achievements & Certifications</h1>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">Sports milestones and certification goals.</p>
            <div className="timeline">
              <article className="achievement" data-aos="fade-left">
                <h3><i className="fa-solid fa-dumbbell"></i> University Gold Medalist - Weight Lifting</h3>
                <p>Won university gold medal through consistent training and high-performance execution.</p>
              </article>
              <article className="achievement" data-aos="fade-right">
                <h3><i className="fa-solid fa-trophy"></i> University Gold Medalist - Cricket</h3>
                <p>Won university gold medal with all-round contributions and disciplined teamwork.</p>
              </article>
              <article className="achievement" data-aos="fade-left">
                <h3><i className="fa-solid fa-medal"></i> Dual University Gold Achiever</h3>
                <p>Recognized for securing top honors in both weight lifting and cricket.</p>
              </article>
              <article className="achievement" data-aos="fade-right">
                <h3><i className="fa-solid fa-certificate"></i> AI/ML & Web Certifications</h3>
                <p>Actively pursuing certifications in AI/ML, web development, and cloud services.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="goals">
          <div className="container">
            <h1 className="section-title" data-aos="fade-up">Interests & Career Objectives</h1>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">Domains I love and the roadmap I am following.</p>
            <div className="skills-grid">
              <article className="card">
                <h2 className="section-title" style={{fontSize: '1.2rem', marginBottom: '8px'}}><i className="fa-solid fa-heart"></i> Interests</h2>
                <div className="pills">
                  <span className="pill">AI and Machine Learning</span><span className="pill">Web Development</span>
                  <span className="pill">Quantum Computing</span><span className="pill">Cloud Services</span>
                </div>
              </article>
              <article className="card">
                <h2 className="section-title" style={{fontSize: '1.2rem', marginBottom: '8px'}}><i className="fa-solid fa-bullseye"></i> Goals</h2>
                <p><strong>Short-term:</strong> Complete B.E. with strong projects.</p>
                <p><strong>Mid-term:</strong> Pursue M.E. AIML in Germany.</p>
                <p><strong>Long-term:</strong> Work in AI/ML research or full-stack development.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <h1 className="section-title" data-aos="fade-up">Contact</h1>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">Reach out for collaboration or opportunities.</p>
            <div className="resume-download-area" data-aos="fade-up" data-aos-delay="150" style={{marginBottom: '30px'}}>
              <button onClick={downloadResume} className="btn btn-primary"><i className="fa-solid fa-file-download"></i> Download Resume</button>
            </div>
            <div className="contact-grid">
              <aside className="card">
                <h2 className="section-title" style={{fontSize: '1.3rem', marginBottom: '12px'}}>Contact Details</h2>
                <ul className="contact-list">
                  <li><i className="fa-solid fa-envelope"></i><div><strong>Email:</strong><br /><a href="mailto:rtsubhasini978@gmail.com">rtsubhasini978@gmail.com</a></div></li>
                  <li><i className="fa-solid fa-phone"></i><div><strong>Phone:</strong><br />Available on request</div></li>
                  <li><i className="fa-brands fa-linkedin"></i><div><strong>LinkedIn:</strong><br />Add profile link</div></li>
                  <li><i className="fa-brands fa-github"></i><div><strong>GitHub:</strong><br />Add profile link</div></li>
                </ul>
              </aside>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">&copy; <span id="year"></span> Subhasini Ravikumar. Built with passion in pink.</div>
      </footer>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
    </>
  );
}
