import React, { useEffect, useRef, useState } from 'react'
import "../assets/styles/_App.scss"
import HeroList from './HeroList/HeroList'
import { getListbackground } from '../assets/data/data'

function Background() {

    const [isLoading,setLoading] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setLoading(1)
        },300)
    },[])

  return (
    <div className="background">
        <p style={{opacity: isLoading}} className="background__text">
            Explore your favourite character
        </p>
        <HeroList />
    </div>
  )
}

export default Background