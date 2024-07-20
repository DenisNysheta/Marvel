import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import "../assets/styles/_App.scss"
import "../assets/styles/mixins.scss"

function Comics() {
  return (
    <div className='comics'>
        <Header/>
            <p>Comics</p>
        <Footer/>
    </div>
  )
}

export default Comics