import React, { useEffect, useState } from 'react'
// Components
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
//Styles
import "../assets/styles/_App.scss"
import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
// Background
import { getListbackground } from '../assets/data/data';

function Slider(props) {

    const {herous} = props
    const [herouSlide, setHerouSlide] = useState([...getListbackground()])
    
    function filterDescription(list) {
        return herouSlide.filter( hero => hero.description !== "")
    }

    let listHerous = filterDescription(herous)

  return (
    <div className="slider">
        <p className='slider__text'>
            Our site provides the latest and 
            updated information regarding characters from 
            the Marvel universe
        </p>
        <div className='slider__box'>
            <Swiper
                 modules={[Navigation, Pagination, Autoplay, A11y]}
                 slidesPerView={3}
                 pagination={{ clickable: true }}
            >
                {listHerous.map(hero => {
                    const {description,name,thumbnail: {path, extension}} = hero
                    if(!(path.includes("not_available"))) {
                        return (
                            <SwiperSlide key={name}>
                                <div className='slider__item'>
                                    <img className='slider__img' src={`${path}.${extension}`} alt="" />
                                    <p className='slider__name'>{name}</p>
                                    <p className='slider__description'>{description}</p>
                                </div>
                            </SwiperSlide>
                        )
                    } 
            })}
            </Swiper>
        </div>
    </div>
  )
}

export default Slider