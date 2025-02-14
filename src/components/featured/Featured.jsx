import React from 'react';
import './Featured.css';

const Featured = () => {
  const featuredItems = [
    {
      id: 1,
      type: 'achievement',
      title: "HackBlocks1.0",
      platform: "BVCOE in collab with Microsoft Azure",
      date: "Feb 2025",
      image: "https://drive.google.com/file/d/1rC6_rZHC-Q6zfdq3tX4gBI1fELFvJkQo/view?usp=drive_link",
      link: "https://www.linkedin.com/posts/iamvishalrathi_project-web3-blockchain-activity-7195300104231133184-3MkR?utm_source=share&utm_medium=member_desktop&rcm=ACoAADMC-BcB4FOXBMr2BSNkVDjR6ivXZywfAoI"
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
              <a href={item.link} target="_blank" className='featured__button'> View
                <i className='bx bx-right-arrow-alt featured__button-icon'></i>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Featured;
