import React, { useEffect, useState } from 'react'
import { projectsData, projectsNav } from './Data'
import WorksItems from './WorksItems'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'

const Works = () => {
    const [item, setItem] = useState({ name: 'all' })
    const [projects, setProjects] = useState([])
    const [active, setActive] = useState(0)

    useEffect(()=>{
        if(item.name === 'all'){
            setProjects(projectsData)
        } else {
            const newProjects = projectsData.filter((project) => {
                return project.category.toLowerCase() === item.name
            })
            setProjects(newProjects)
        }
    },[item])

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() })
        setActive(index)
    }

  return (
    <div>
        <div className='work__filters'>
        {projectsNav.map((item, index)=>{
            return (
                <span onClick={(e)=>{handleClick(e, index)}} 
                className={`${active === index ? 'active-work' : 
                ''} work__item`} key={index}>{item.name}</span>
            )
        })}
        </div>

        <Swiper className='work__container container grid'
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          758:{
            slidesPerView: 1,
            spaceBetween: 48
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 38,
          },
          992: {
            slidesPerView: 1,
          }
        }}
        modules={[Pagination]}>
            {projects.map((item)=>{
                return <SwiperSlide key={item.id} style={{"display":"flex", "justifyContent":"center"}}><WorksItems item={item} key={item.id} /></SwiperSlide>
            })}
        </Swiper>
    </div>
  )
}

export default Works