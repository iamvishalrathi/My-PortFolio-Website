import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = ({ isDark, toggleTheme }) => {
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
  })
  const [toggle, setToggle] = useState(false)
  const [activeNav, setActiveNav] = useState('#home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'qualifications', 'portfolio', 'featured', 'contact'];
      const scrollY = window.pageYOffset;

      sections.forEach(section => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const sectionHeight = sectionElement.offsetHeight;
          const sectionTop = sectionElement.offsetTop - 50;
          
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            setActiveNav(`#${section}`);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check if user previously selected dark theme
    const savedTheme = localStorage.getItem('selected-theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
    }
  }, []);

  return (
    <header className='header'>
      <nav className='nav container'>
        <a href='#home' className='nav__logo'>Vishal Kumar</a>
        <div className={toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className='nav__list grid'>
            <li>
              <a href='#home' onClick={() => setActiveNav('#home')} className={activeNav === "#home" ?
                "nav__link active-link" : 'nav__link'}>
                <i className='uil uil-estate nav__icon'></i> Home
              </a>
            </li>
            <li>
              <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === "#about" ?
                "nav__link active-link" : 'nav__link'}>
                <i className='uil uil-user nav__icon'></i> About
              </a>
            </li>
            <li>
              <a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === "#skills" ?
                "nav__link active-link" : 'nav__link'}>
                <i className='uil uil-file-alt nav__icon'></i> Skills
              </a>
            </li>
            <li>
              <a href='#qualifications' onClick={() => setActiveNav('#qualifications')} className={activeNav === "#qualifications" ?
                "nav__link active-link" : 'nav__link'}>
                <i className='uil uil-briefcase-alt nav__icon'></i> Qualifications
              </a>
            </li>
            <li>
              <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === "#portfolio" ?
                "nav__link active-link" : 'nav__link'}>
                <i className='uil uil-scenery nav__icon'></i> Projects
              </a>
            </li>
            <li>
              <a href='#featured' onClick={() => setActiveNav('#featured')} className={activeNav === "#featured" ?
                "nav__link active-link" : 'nav__link'}>
                <i className='uil uil-star nav__icon'></i> Featured
              </a>
            </li>
            <li>
              <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ?
                "nav__link active-link" : 'nav__link'}>
                <i className='uil uil-message nav__icon'></i> Contact
              </a>
            </li>
            <li>
              <div className='theme-toggle nav__link' onClick={() => {setActiveNav('#theme'); toggleTheme()}}>
                <i className={`bx ${isDark ? 'bx-sun' : 'bx-moon'}`}></i>
                <span className="nav_link theme_text">{isDark ? 'Light' : 'Dark'}</span>
              </div>
            </li>
          </ul>

          <i className='uil uil-times nav__close' onClick={() => setToggle(!toggle)}></i>
        </div>
        <div className='nav__toggle' onClick={() => setToggle(!toggle)}>
          <i className='uil uil-apps'></i>
        </div>
      </nav>
    </header>
  )
}

export default Header