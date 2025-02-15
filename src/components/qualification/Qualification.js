import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
  const [toggleState, setToggleState] = useState(2);
  const toggleTab = (index) => {
    setToggleState(index)
  }
  return (
    <section className='qualification section' id='qualifications'>
      <h2 className='section__title'>Qualification</h2>
      <span className='section__subtitle'>My personel journey</span>


      <div className='qualification__container container'>
        <div className='qualification__tabs'>
          <div className={toggleState === 1 ?
            'qualification__button qualification__active button--flex'
            : 'qualification__button button--flex'}
            onClick={() => toggleTab(1)}>
            <i className='uil uil-graduation-cap qualification__icon'></i>
            {"  "}Education
          </div>

          <div className={toggleState === 2 ?
            'qualification__button qualification__active button--flex'
            : 'qualification__button button--flex'}
            onClick={() => toggleTab(2)}>
            <i className='uil uil-briefcase-alt qualification__icon'></i>{"  "}Experience
          </div>
        </div>

        <div className='qualification__sections'>
          <div className={toggleState === 1 ? 'qualification__content qualification__content-active'
            : 'qualification__content'}>
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>BTech CSE</h3>
                <span className='qualification__subtitle'>Maharaja Agrasen Institute of Technology, Delhi</span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i> 2022-2026
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'>Senior Secondary School</h3>
                <span className='qualification__subtitle'>Kendriya Vidyalaya, Delhi</span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i> 2020-2022
                </div>
              </div>
            </div>

            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Secondary School</h3>
                <span className='qualification__subtitle'>D.A.V. Centenary Public School, Delhi</span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i> 2014-2020
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                {/* <span className='qualification__line'></span> */}
              </div>
            </div>
          </div>

          <div className={toggleState === 2 ? 'qualification__content qualification__content-active'
            : 'qualification__content'}>
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Full Stack Developer</h3>
                <span className='qualification__subtitle'>Truxie Startup</span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i> Nov 2024 - Present
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>
              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
              <div>
                <h3 className='qualification__title'>NCC Corporal</h3>
                <span className='qualification__subtitle'>Maharaja Agrasen Institute of Technology, Delhi</span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i> 2022-2025
                </div>
              </div>
            </div>
            
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Full Stack Developer</h3>
                <span className='qualification__subtitle'>CoderOne</span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i> Jun 2024 - Aug 2024
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Qualification
