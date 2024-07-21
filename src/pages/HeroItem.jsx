// Style
import "../assets/styles/_App.scss"
// Hooks and service
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useFetching } from '../components/hooks/useFetching'
import { Hero } from '../components/API/Hero'
// Components
import Header from '../components/Header'
import Footer from '../components/Footer'
import Loader from '../components/UI/loader/Loader'
import HeroList from '../components/HeroList/HeroList'

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MyContext } from '../main'

function HeroItem() {

    const API = useContext(MyContext)
    const {apiKey, hash} = API

    let {id} = useParams()
    const [hero,setHero] = useState({name: "", description: "", thumbnail: {path: "", extension: ""}})
    const [herouSlides, setHerousSlides] = useState([])
    const [fetching, isLoaded] = useFetching(async () => {
        const hero = await Hero.getAll(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&limit=30&apikey=${apiKey}&hash=${hash}`)
        const heroComics = await Hero.getAll(`https://gateway.marvel.com/v1/public/characters/${id}/comics?ts=1&limit=10&apikey=${apiKey}&hash=${hash}`)
      
        const obj = hero.data.data.results[0]
        const listComics = heroComics.data.data.results
        
        setHero({...obj})
        setHerousSlides([...listComics])
    })

    useEffect(() => {
        fetching()
    },[])
    
  return (
    <>
        <Header/>
        <HeroList/>
           <div className='hero__info'>
            <div className='hero__info__content'>
                <div className='hero__info__box'>
                {isLoaded === true ? <Loader /> :
                <>
                    <div className='hero__info__img'>
                        <img src={`${hero?.thumbnail.path}.${hero?.thumbnail.extension}`} alt="" />
                    </div>
                    <div className='hero__info__description'>
                        <h1>{hero?.name}</h1>
                        <p>{hero.description == "" ? "This character is currently in the modification stage" : hero.description}</p>
                    </div>
                    {herouSlides.length > 0 ? <p className="hero__info__appearence">This character appearance in this comics</p> : null}
                    <div className='hero__info__comics'>
                        <Swiper 
                            modules={[Navigation, Pagination, Autoplay, A11y]}
                            slidesPerView={herouSlides.length > 3 ? 3 : 2}
                            pagination={{ clickable: true }}
                        >   
                            {herouSlides.map((comic) => {
                                const {title, thumbnail: {path, extension},description} = comic
                                return (
                                    <SwiperSlide key={title}>
                                        <div className='slider__item comics-slider__item'>
                                            <img className='comics-slider__img' src={`${path}.${extension}`} alt="" />
                                            <p className='comics-slider__name'>{title}</p>
                                            <p className='slider__description comics-slider__description'>{description === "" ||  path.includes("not_available") || description === null ? "This comic is in the process of being modified, coming soon...." : description}</p>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </>
                }
                </div>
            </div>
        </div>
        <Footer/>
    </>
)
}

export default HeroItem