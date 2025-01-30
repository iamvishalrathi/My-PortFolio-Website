import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
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
                <h3 className='qualification__title'>BTech ECE</h3>
                <span className='qualification__subtitle'>Maharaja Agrasen Institute of Technology, Delhi</span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i> 2020-2024
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
                <span className='qualification__subtitle'>St. Mark Senior Secondary Public School, Delhi</span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i> 2019-2020
                </div>
              </div>
            </div>

            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Secondary School</h3>
                <span className='qualification__subtitle'>Christu Jyoti Convent High School, U.P.</span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i> 2016-2017
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
                <h3 className='qualification__title'>Frontend Developer</h3>
                <span className='qualification__subtitle'>GoMechanic</span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i> September 2022 - December 2022
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
                <h3 className='qualification__title'>CDC Coordinator</h3>
                <span className='qualification__subtitle'>Maharaja Agrasen Institute of Technology, Delhi</span>
                <div className='qualification__calendar'>
                  <i className='uil uil-calendar-alt'></i> 2020-2022
                </div>
              </div>
            </div>
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>Frontend Developer</h3>
                <span className='qualification__subtitle'>EventGraphia</span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i> August 2023 - Present
                </div>
              </div>
              <div>
                <span className='qualification__rounder'></span>
                {/* <span className='qualification__line'></span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Qualification
