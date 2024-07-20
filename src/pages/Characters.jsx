// Components
import Header from '../components/Header'
import HeroList from '../components/HeroList/HeroList'
import Footer from '../components/Footer'
import Input from '../components/UI/input/Input'
import Select from '../components/UI/select/Select'
import Button from '../components/UI/button/Button'
import Loader from '../components/UI/loader/Loader'

// Styles
import "../assets/styles/_App.scss"
import "../assets/styles/mixins.scss"

// Hooks and service
import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect, useMemo, useState } from 'react'
import { Hero } from '../components/API/Hero'
import { useFetching } from '../components/hooks/useFetching'

function Characters() {

    const [sort, setSort] = useState("") 
    const [findQuery, setFindQuery] = useState("")
    const [herous,setHerous] = useState([]) 
    const navigate = useNavigate()

    useEffect(() => {
        if(localStorage.getItem("list")) {
            let list = JSON.parse(localStorage.getItem("list"))
            setHerous([...list])
        }
    },[])

    const [fetching, isLoaded] = useFetching(async () => {
        
        
        if(findQuery) {
            localStorage.removeItem("list")
            setHerous([])
            let response = await Hero.getAll(`http://gateway.marvel.com/v1/public/characters?ts=1&nameStartsWith=${findQuery}&limit=50&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a`)
            localStorage.setItem("list",`${JSON.stringify(response.data.data.results)}`)
            setHerous([...response.data.data.results])
        } else {
            let list = JSON.parse(localStorage.getItem("list"))
            setHerous([...list])
        }
    })

    function sortHerous(herous, sort) {
        let sorted =  useMemo(() => {
            if(sort) {
                return [...herous].sort((a,b) => a[sort].localeCompare(b[sort]))
            }
            return herous
        },[herous,sort])

        return sorted
    }
    
    let listHerous = sortHerous(herous, sort)

  return (
    <>
        <Header/>
        <HeroList/>
        <div className='characters'>
            <div className='characters__content'>
                <div className='characters__box'>
                    <h1 className='characters__title'>Hi, Hero. In this place you can find your character, and information about him</h1>
                    <div className='characters__search'>
                        <Input value={findQuery} onChange={(e) => setFindQuery(e.target.value)} type="text" placeholder="Find by name"/>
                        <Button onClick={() => fetching()}>Find</Button>
                        <div className='characters__search__sort'>
                            <Select value={sort} onChange={setSort} options={[
                                {
                                    name:"Sort by name",
                                    value:"name",
                                },
                                {
                                    name:"Sort by description",
                                    value:"description",
                                }
                            ]}/>
                        </div>
                    </div>
                    <div className='characters__list'>
                        {isLoaded === true ? <Loader /> : listHerous.length === 0 ? <p className='hero__nothing'>Nothing...</p> :
                         listHerous.map((hero) => {
                            const {name,id,thumbnail:{path, extension}} = hero
                            return <div key={id} id={id} className='hero'>
                                <img className='hero__img' src={`${path}.${extension}`} alt="" />
                                <p className='hero__name'>{name}</p>
                                <Link to={`/Characters/${id}`}>
                                    <Button>More</Button>
                                </Link>
                            </div>
                         })
                        }
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    </>
  )
}

export default Characters