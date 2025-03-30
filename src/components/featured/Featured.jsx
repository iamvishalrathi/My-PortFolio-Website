import React, { useState, useEffect, useRef } from 'react';
import './Featured.css';

const Featured = () => {
  const [showAll, setShowAll] = useState(false);
  const [displayCount, setDisplayCount] = useState(4);
  const sectionRef = useRef(null);

  const featuredItems = [
    {
      id: 1,
      type: 'achievement',
      title: "Top 10 | HackBlocks1.0",
      platform: "BVCOE & Microsoft Azure",
      date: "May 2024",
      image: "/featured/Hackblock1.0.jpg",
      pinned: true,
      link: "https://www.linkedin.com/posts/iamvishalrathi_project-web3-blockchain-activity-7195300104231133184-3MkR?utm_source=share&utm_medium=member_desktop&rcm=ACoAADMC-BcB4FOXBMr2BSNkVDjR6ivXZywfAoI"
    },
    {
      id: 2,
      type: 'achievement',
      title: "3rd Position | Logic Maze",
      platform: "TechCom MAIT",
      date: "March 2024",
      image: "/featured/Logic Maze.jpg",
      pinned: true,
      link: "https://www.linkedin.com/posts/iamvishalrathi_logicmazecompetition-techcom-mait-activity-7176797454900633600-HgSm?utm_source=share&utm_medium=member_desktop&rcm=ACoAADMC-BcB4FOXBMr2BSNkVDjR6ivXZywfAoI"
    },
    {
      id: 3,
      type: 'social',
      title: "GenAI BOOTCAMP",
      platform: "Microsoft Azure",
      date: "May 2024",
      image: "/featured/GenAI BOOTCAMP.png",
      pinned: false,
      link: "https://www.linkedin.com/posts/iamvishalrathi_reskill-azuredevelopercommunity-generativeaibootcamp-activity-7194638808364060673-zqIL?utm_source=share&utm_medium=member_desktop&rcm=ACoAADMC-BcB4FOXBMr2BSNkVDjR6ivXZywfAoI"
    },
    {
      id: 4,
      type: 'social',
      title: "UAS Bootcamp",
      platform: "C-DAC",
      date: "Aug 2024",
      image: "/featured/Drone_UAS Workshop.jpg",
      pinned: false,
      link: "https://www.linkedin.com/posts/iamvishalrathi_uas-dronetechnology-capacitybuilding-activity-7232765162896666624-BWd7?utm_source=share&utm_medium=member_desktop&rcm=ACoAADMC-BcB4FOXBMr2BSNkVDjR6ivXZywfAoI"
    },
    {
      id: 5,
      type: 'social',
      title: "Kartavya Fest",
      platform: "National Cadet Corps",
      date: "March 2024",
      image: "/featured/KARTAVYA'24.jpg",
      pinned: false,
      link: "https://www.linkedin.com/posts/iamvishalrathi_mait-ncc-teamwork-activity-7187393601620905984-2e7z?utm_source=share&utm_medium=member_desktop&rcm=ACoAADMC-BcB4FOXBMr2BSNkVDjR6ivXZywfAoI"
    },
    {
      id: 6,
      type: 'social',
      title: "LogiMat India 2025",
      platform: "Truxie Internship",
      date: "February 2025",
      image: "/featured/Logimat'25.jpg",
      pinned: true,
      link: "https://www.linkedin.com/posts/iamvishalrathi_logimatindia2025-logimat-logistics-activity-7302000150569177088-Cy0k?utm_source=share&utm_medium=member_desktop&rcm=ACoAADMC-BcB4FOXBMr2BSNkVDjR6ivXZywfAoI"
    },
  ].sort((a, b) => {
    // First sort by pinned status
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    // Then sort by date for items with the same pinned status
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 968) {
        setDisplayCount(3);
      } else {
        setDisplayCount(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleItems = showAll ? featuredItems : featuredItems.slice(0, displayCount);
  const hasMoreItems = featuredItems.length > displayCount;

  const handleViewToggle = () => {
    // If we're showing all items and about to collapse, scroll to the top of the section
    if (showAll && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setShowAll(!showAll);
  };

  return (
    <section className="featured section" id="featured" ref={sectionRef}>
      <h2 className="section__title">Featured</h2>
      <span className="section__subtitle">Certifications & Social Updates</span>

      <div className="featured__container container grid">
        {visibleItems.map((item) => (
          <article className="featured__card" key={item.id}>
            <div className="featured__image">
              <img src={item.image} alt={item.title} />
              <div className="featured__platform">
                <i className={`uil ${item.type === 'social' ? 'uil-share-alt' : 'uil-award'
                  }`}></i>
                {item.platform}
              </div>
              {item.pinned && (
                <div className="featured__pin">
                  <i className="uil uil-bookmark"></i>
                </div>
              )}
            </div>
            <div className="featured__content">
              <h3 className="featured__title">{item.title}</h3>
              <span className="featured__date">{item.date}</span>
              <a href={item.link} target="_blank" rel="noreferrer" className='featured__button'> View
                <i className='bx bx-right-arrow-alt featured__button-icon'></i>
              </a>
            </div>
          </article>
        ))}
      </div>

      {hasMoreItems && (
        <div className="featured__view-more">
          <button
            className="featured__view-more-btn"
            onClick={handleViewToggle}
          >
            {showAll ? 'Show Less' : 'View More'}
            <i className={`bx ${showAll ? 'bx-chevron-up' : 'bx-chevron-down'} featured__view-more-icon`}></i>
          </button>
        </div>
      )}
    </section>
  );
};

export default Featured;
