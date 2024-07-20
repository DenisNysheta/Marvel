import React from 'react'
// Components
import Header from './Header'
import Footer from './Footer'
import Background from './Background'
import HeroList from './HeroList/HeroList'
// Styles
import "../assets/styles/_App.scss"
import "../assets/styles/mixins.scss"
import { useRouteError } from 'react-router'
// Img
import back from "../assets/images/backgroundNotFound.png"

function NotFound() {
    const error = useRouteError()

  return (
    <>
        <Header/>
        <HeroList/>
        <div className='not-found'>
                <div className='not-found__content'>
                    <div className='not-found__info'>
                        <img src={back} alt="" />
                        <p className='info__first'>Hero, find another way for yourself</p>
                        <p className='info__second'>
                            Sorry but this page not available, or another problem happend.
                            Come back later
                        </p>
                    </div>
                </div>
            <Footer/>
        </div>
    </>
)
}

export default NotFound