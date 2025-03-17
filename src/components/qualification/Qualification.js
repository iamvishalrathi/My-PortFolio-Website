import React, { useState } from 'react'
import './qualification.css'

const educationData = [
  {
    title: "BTech CSE",
    subtitle: "Maharaja Agrasen Institute of Technology, Delhi",
    period: "2022-2026",
    cgpa: "8.398 CGPA"
  },
  {
    title: "Senior Secondary School",
    subtitle: "Kendriya Vidyalaya, Delhi",
    period: "2020-2022",
    cgpa: "94% in CBSE Board"
  },
  {
    title: "Secondary School",
    subtitle: "D.A.V. Centenary Public School, Delhi",
    period: "2014-2020",
    cgpa: "93.4% in CBSE Board"
  }
];

const experienceData = [
  {
    title: "Full Stack Developer",
    subtitle: "Truxie Startup",
    period: "Nov 2024 - Present",
    role: "Intern"
  },
  {
    title: "Full Stack Developer",
    subtitle: "CoderOne",
    period: "Jun 2024 - Aug 2024",
    role: "Intern"
  },
  {
    title: "Startup Sphere Society",
    subtitle: "MAIT",
    period: "2022-2026",
    role: "Technical Head"
  },
  {
    title: "National Cadet Corps",
    subtitle: "MAIT",
    period: "2022-2025",
    role: "Corporal"
  },
];

const achievementsData = [
  {
    title: "NCC Fest Organiser",
    subtitle: "Kartavya'24 & 25",
    period: "2024 & 2025",
    description: "Organised 10+ events"
  },
  {
    title: "Hackathon Winner",
    subtitle: "HackBlocks1.0",
    period: "May 2024",
    description: "Top 10 Finalists",
  },
  {
    title: "Coding Competition Winner",
    subtitle: "LogicMaze",
    period: "March 2024",
    description: "Bagged 3rd place"
  },
];

// Define tabs data to make it more maintainable
const tabsData = [
  { id: 1, name: "Education", icon: "uil-graduation-cap", data: educationData },
  { id: 2, name: "Experience", icon: "uil-briefcase-alt", data: experienceData },
  { id: 3, name: "Achievements", icon: "uil-trophy", data: achievementsData }
];

const Qualification = () => {
  const [toggleState, setToggleState] = useState(2);

  // Content component to avoid repetition
  const QualificationContent = ({ data }) => (
    <div>
      <h3 className='qualification__title'>{data.title}</h3>
      <span className='qualification__subtitle'>{data.subtitle}</span>
      <div className='qualification__calendar'>
        <i className='uil uil-calendar-alt'></i> {data.period}
      </div>
      {data.role && (
        <p className='qualification__description'>
          <i className='uil uil-user'></i> {data.role}
        </p>
      )}
      {data.cgpa && (
        <div className='qualification__cgpa'>
          <i className='uil uil-award'></i> {data.cgpa}
        </div>
      )}
      {data.description && (
        <div className='qualification__description'>
          <i className='uil uil-trophy'></i>{data.description}
        </div>
      )}
    </div>
  );

  // Simplified QualificationItem
  const QualificationItem = ({ data, index, total }) => (
    <div className='qualification__data'>
      {index % 2 === 0 ? (
        <>
          <QualificationContent data={data} />
          <div>
            <span className='qualification__rounder'></span>
            {index !== total - 1 && <span className='qualification__line'></span>}
          </div>
        </>
      ) : (
        <>
          <div></div>
          <div>
            <span className='qualification__rounder'></span>
            {index !== total - 1 && <span className='qualification__line'></span>}
          </div>
          <QualificationContent data={data} />
        </>
      )}
    </div>
  );

  return (
    <section className='qualification section' id='qualifications'>
      <h2 className='section__title'>Qualification</h2>
      <span className='section__subtitle'>My Personal Journey</span>

      <div className='qualification__container container'>
        <div className='qualification__tabs'>
          {tabsData.map(tab => (
            <div
              key={tab.id}
              className={`qualification__button ${toggleState === tab.id ? 'qualification__active' : ''} button--flex`}
              onClick={() => setToggleState(tab.id)}
            >
              <i className={`uil ${tab.icon} qualification__icon`}></i>{"  "}{tab.name}
            </div>
          ))}
        </div>

        <div className='qualification__sections'>
          {tabsData.map(tab => (
            <div
              key={tab.id}
              className={`qualification__content ${toggleState === tab.id ? 'qualification__content-active' : ''}`}
            >
              {tab.data.map((item, index) => (
                <QualificationItem
                  key={index}
                  data={item}
                  index={index}
                  total={tab.data.length}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Qualification
