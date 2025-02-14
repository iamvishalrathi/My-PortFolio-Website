import React from 'react';
import './Featured.css';

const Featured = () => {
  const featuredItems = [
    {
      id: 1,
      type: 'achievement',
      title: "Web Development Certification",
      platform: "Udemy",
      date: "Feb 2025",
      image: "certification.jpg",
      link: "#"
    },
    {
      id: 2,
      type: 'social',
      title: "Latest Project Launch",
      platform: "LinkedIn",
      date: "Feb 2025",
      image: "project.jpg",
      link: "#"
    },
    {
      id: 3,
      type: 'achievement',
      title: "Hackathon Winner",
      platform: "TechFest 2025",
      date: "Jan 2025",
      image: "hackathon.jpg",
      link: "#"
    },
    {
      id: 4,
      type: 'social',
      title: "Open Source Contribution",
      platform: "GitHub",
      date: "Jan 2025",
      image: "github.jpg",
      link: "#"
    }
  ];

  return (
    <section className="featured section" id="featured">
      <h2 className="section__title">Featured</h2>
      <span className="section__subtitle">Achievements & Social Updates</span>

      <div className="featured__container container grid">
        {featuredItems.map((item) => (
          <article className="featured__card" key={item.id}>
            <div className="featured__image">
              <img src={item.image} alt={item.title} />
              <div className="featured__platform">
                <i className={`uil ${
                  item.type === 'social' ? 'uil-share-alt' : 'uil-award'
                }`}></i>
                {item.platform}
              </div>
            </div>
            <div className="featured__content">
              <h3 className="featured__title">{item.title}</h3>
              <span className="featured__date">{item.date}</span>
              <a href={item.link} className="featured__button" target="_blank" rel="noopener noreferrer">
                View <i className="uil uil-arrow-right"></i>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Featured;
