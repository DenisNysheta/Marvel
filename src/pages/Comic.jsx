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


function Comic() {

    const API = useContext(MyContext)
    const {apiKey, hash} = API
    
    let {id} = useParams()
    const [comic,setComic] = useState({name: "", description: "", thumbnail: {path: "", extension: ""}})
    const [comicsSlider, setComicsSlider] = useState([])

    const [fetching, isLoaded] = useFetching(async () => {
        const comic = await Hero.getAll(`https://gateway.marvel.com/v1/public/comics/${id}?ts=1&limit=30&apikey=${apiKey}&hash=${hash}`)
        
        const obj = comic.data.data.results[0]

        setComic({...obj, editors: obj.creators.items})
    })
    
    useEffect(() => {
        fetching()
    },[])

    console.log(comic)

  return (
    <>
        <Header/>
        <HeroList/>
           <div className='hero__info'>
            <div className='hero__info__content'>
                <div className='hero__info__box'>
                {isLoaded === true ? <Loader /> :
                <>
                    <div className='hero__info__img comics__box__img'>
                        <img src={`${comic?.thumbnail.path}.${comic?.thumbnail.extension}`} alt="" />
                    </div>
                    <div className='hero__info__description'>
                        <h1>{comic?.title}</h1>
                        <p>{comic.description == "" || comic.description == null ? "This comic is currently in the modification stage" : comic.description}</p>
                        <div className="hero__info__pages">
                            <p style={{fontSize: 30}}>
                              Pages count: {comic.pageCount}  
                            </p>
                            <ul>
                                {Array.isArray(comic.editors) ? comic.editors.map((editor) => {
                                    return <li className="comic__editor" >Name: {editor.name}, Role: {editor.role}</li>
                                }) : null}
                            </ul>
                        </div>
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

export default Comic