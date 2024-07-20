import React, { useState } from 'react'
// Style
import "../assets/styles/_App.scss"

// Components
import Header from '../components/Header'
import Background from '../components/Background'
import Slider from '../components/Slider'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'
// Background
import { getListbackground } from '../assets/data/data'

function Home() {

    const [state, setState] = useState(0)
    const [herous, setHerous] = useState([...getListbackground()])
    
  return (
        <>  
            <Header/>
            <Background/>
            <Slider/>
            <div className='text-comics'>
                <p className='background__text'>Find a comic you like related to it</p>
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