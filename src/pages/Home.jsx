import React, { useState } from 'react'
// Style
import "../assets/styles/_App.scss"

// Components
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Header from '../components/Header'
import Background from '../components/Background'
import Slider from '../components/Slider'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'
// Background
import { getComics } from '../assets/data/data'

function Home() {

    let slidersComics = getComics()
    let firstSlider = slidersComics.slice(0,10)
    let secondSlider = slidersComics.slice(10,20)

    console.log(firstSlider)
    console.log(secondSlider)

  return (
        <>  
            <Header/>
            <Background/>
            <Slider/>
            <div className='text-comics'>
                <p className='background__text'>Find a comic you like related to it</p>
            </div>
            <div className='comics-slider'>
                <p className='comics-slider__title'>Choose a story that will fully reflect your character</p>
                <div className='comics-slider__box'>
                    <div className='comics-slider__box__slider'>
                        <Swiper
                        modules={[Navigation, Pagination, Autoplay, A11y]}
                        slidesPerView={3}
                        pagination={{ clickable: true }}
                        >
                            {firstSlider.map((comic) => {
                               return (
                                <SwiperSlide>
                                    <div className='slider__item'>
                                        <img className='slider__img' src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="" />
                                        <p  className='slider__name comics-slider__box__title'>{comic.title}</p>
                                    </div>
                                </SwiperSlide>
                               ) 
                            })}
                        </Swiper>
                    </div>
                    <div className='comics-slider__box__slider'>
                        <Swiper
                        modules={[Navigation, Pagination, Autoplay, A11y]}
                        slidesPerView={3}
                        pagination={{ clickable: true }}
                        >
                            {secondSlider.map((comic) => {
                               return (
                                <SwiperSlide>
                                    <div className='slider__item'>
                                        <img className='slider__img' src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="" />
                                        <p  className='slider__name comics-slider__box__title'>{comic.title}</p>
                                    </div>
                                </SwiperSlide>
                               )
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className='try-box'>
                <p className='try-box__title'>Just to try, and choose</p>
            </div>
            <div className='subscribe'>
                <Subscribe />
                <p className='subscribe__text'>
                    Subscribe to us so as not to miss updates that come out every week
                </p>
            </div>
            <Footer/>
        </>
    )
}

export default Home