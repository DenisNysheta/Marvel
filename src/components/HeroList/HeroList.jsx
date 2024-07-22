import React, { useEffect, useLayoutEffect, useState } from 'react'
import cl from "./HeroList.module.scss"
import { getListbackground } from '../../assets/data/data'

function HeroList() {

    const [isLoading, setLoading] = useState(0)
    const [herous, setHerous] = useState([...getListbackground()])

  useLayoutEffect(() => {
    setTimeout(() => {
      setLoading(1)
    },500)
  },[])

  return (
    <div className={cl.list}>
        {herous.map( hero => {
            const {id,thumbnail: {path, extension}} = hero
            if(path.includes("not_available") != true ) {
                let boxJpg = <div key={id} style={{opacity: isLoading}} className={cl.list__hero} ><img src={`${path}.${extension}`} alt={hero.name}/></div>
                return boxJpg
            }
        })}
    </div>
  )
}

export default HeroList

