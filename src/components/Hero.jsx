import React from 'react';
import heroImg from '../images/hero-img.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="about-ansormed">
        <div className="hero-text">
          <h1>Tabiiy davolash usullari yordamida kasalliklardan xalos bo'ling.</h1>
          <br /><br />
          <p>Hijoma, manual terapiya, zuluk va turli tabiiy giyohlar sog'ligingizni tiklashga yordam beradi.</p>
        </div>
        <button className="btn2">QABULGA YOZILISH</button>
        <div className="hero-img">
          <img src={heroImg} alt="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;