import React from 'react';
import hijamaImg from '../images/hijama.jpg';
import manualImg from '../images/manual-therapy.jpg';
import zulukImg from '../images/therapy-byzuluk.jpg';
import naturalImg from '../images/natural.jpg';

const Services = () => {
  return (
    <section className="services">
      <h2>Xizmatlar</h2>
      {[
        { img: hijamaImg, title: "Hijoma" },
        { img: manualImg, title: "Manual terapiya" },
        { img: zulukImg, title: "Zuluk bilan davolash" },
        { img: naturalImg, title: "Asal" }
      ].map((item, index) => (
        <div className="service-item" key={index}>
          <img src={item.img} alt={item.title} />
          <div>
            <h3>{item.title}</h3>
            <br />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi minus deserunt facilis sapiente et harum error similique optio...</p>
          </div>
        </div>
      ))}
      <button className="btn3">QABULGA YOZILISH</button>
    </section>
  );
};

export default Services;