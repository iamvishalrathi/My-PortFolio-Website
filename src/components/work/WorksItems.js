import React from 'react'

const WorksItems = ({ item }) => {
  return (
    <div className='work__card fixed-height' key={item.id}>
      <img src={item.image} alt='' className='work__img' />
      <h1 className='work__title'>{item.title}</h1>
      <p className='work__description'>{item.description}</p>
      <a href={item.link} target='_blank' className='work__button'>
        Check Out <i className='bx bx-right-arrow-alt work__button-icon'></i>
      </a>
    </div>
  )
}

export default WorksItems