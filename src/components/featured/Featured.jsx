import React from 'react';
import './Featured.css';

// If you want to add Google Drive images, you can follow this same pattern:

// Get the file ID from your Google Drive link (it's the long string after /d/ in the sharing URL)
// Use this format: https://drive.google.com/uc?export=view&id=YOUR_FILE_ID

const Featured = () => {
  const featuredItems = [
    {
      id: 1,
      type: 'achievement',
      title: "Top 10 | HackBlocks1.0",
      platform: "BVCOE & Microsoft Azure",
      date: "Feb 2025",
      image: "/featured/Hackblock1.0.jpg",
      link: "https://www.linkedin.com/posts/iamvishalrathi_project-web3-blockchain-activity-7195300104231133184-3MkR?utm_source=share&utm_medium=member_desktop&rcm=ACoAADMC-BcB4FOXBMr2BSNkVDjR6ivXZywfAoI"
    },
    {
      id: 2,
      type: 'social',
      title: "GenAI BOOTCAMP",
      platform: "Microsoft Azure",
      date: "Feb 2025",
      image: "/featured/GenAI BOOTCAMP.png",
      link: "https://www.linkedin.com/posts/iamvishalrathi_reskill-azuredevelopercommunity-generativeaibootcamp-activity-7194638808364060673-zqIL?utm_source=share&utm_medium=member_desktop&rcm=ACoAADMC-BcB4FOXBMr2BSNkVDjR6ivXZywfAoI"
    },
    {
      id: 3,
      type: 'achievement',
      title: "3rd Position | Logic Maze",
      platform: "TechCom MAIT",
      date: "Jan 2025",
      image: "/featured/Logic Maze.jpg",
      link: "#"
    },
    {
      id: 4,
      type: 'social',
      title: "UAS Bootcamp",
      platform: "C-DAC",
      date: "Jan 2025",
      image: "/featured/Drone_UAS Workshop.jpg",
      link: "https://www.linkedin.com/posts/iamvishalrathi_uas-dronetechnology-capacitybuilding-activity-7232765162896666624-BWd7?utm_source=share&utm_medium=member_desktop&rcm=ACoAADMC-BcB4FOXBMr2BSNkVDjR6ivXZywfAoI"
    },
    {
      id: 5,
      type: 'social',
      title: "Kartavya Fest",
      platform: "National Cadet Corps",
      date: "Jan 2025",
      image: "/featured/KARTAVYA'24.jpg",
      link: "https://www.linkedin.com/posts/iamvishalrathi_mait-ncc-teamwork-activity-7187393601620905984-2e7z?utm_source=share&utm_medium=member_desktop&rcm=ACoAADMC-BcB4FOXBMr2BSNkVDjR6ivXZywfAoI"
    },
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
