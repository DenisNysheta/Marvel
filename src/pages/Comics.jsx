import React, { useContext, useState, useMemo, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Input from '../components/UI/input/Input'
import Button from '../components/UI/button/Button'
import Select from '../components/UI/select/Select'
import Loader from '../components/UI/loader/Loader'
import { Link } from 'react-router-dom'

import { Hero } from '../components/API/Hero'
import "../assets/styles/_App.scss"
import "../assets/styles/mixins.scss"
import HeroList from '../components/HeroList/HeroList'
import { MyContext } from '../main'
import { useFetching } from '../components/hooks/useFetching'

function Comics() {

  const API = useContext(MyContext)
  const {apiKey, hash} = API
  const [findQuery, setFindQuery] = useState("")
  const [sort, setSort] = useState("")
  const [loaded, setLoaded] = useState(0)
  
  const [comics,setComics] = useState([]) 

  const [fetching, isLoaded] = useFetching(async () => {
    if(findQuery) {
        localStorage.removeItem("listComics")
        setComics([])

        let response = await Hero.getAll(`https://gateway.marvel.com/v1/public/comics?ts=1&titleStartsWith=${findQuery}&apikey=${apiKey}&hash=${hash}`)
        localStorage.setItem("listComics",`${JSON.stringify(response.data.data.results)}`)
        
        setComics([...response.data.data.results])
    } else {
        let list = JSON.parse(localStorage.getItem("listComics"))
        setComics([...list])
    }
  })

  useEffect(() => {
    if(localStorage.getItem("listComics")) {
        let list = JSON.parse(localStorage.getItem("listComics"))
        setComics([...list])
    }

    setTimeout(() => {
      setLoaded(1)
  },100)
  
},[])

  function sortComics(comics, sort) {
    let sorted =  useMemo(() => {
        if(sort) {
            return [...comics].sort((a,b) => a[sort].localeCompare(b[sort]))
        }
        return comics
    },[comics,sort])

    return sorted
  }

  const listComics = sortComics(comics, sort)

  return (
    <>
      <Header/>
      <HeroList />
      <div className='comics'>
        <div className='comics__content'>
          <div className='comics__box'>
            <h1 className='comics__box__title'>Hero, in this place you cand find your favourite comic strip</h1>
            <div className='comics__box__search'>
                {localStorage.getItem("user") ? 
                  <>
                    <Input value={findQuery} onChange={(e) => setFindQuery(e.target.value)} type="text" placeholder="Find by name"/>
                    <Button onClick={() => fetching()}>Find</Button>
                  </> : <p>Sorry but you need log in, or register on our website</p>
                }
                <div className='comics__box__sort'>
                    <Select value={sort} onChange={setSort} options={[
                        {
                          name:"Sort by title",
                          value:"title",
                        },
                        {
                          name:"Sort by description",
                          value:"description",
                        }
                    ]}/>
                </div>
            </div>
            <div className='comics__box__list'>
              {isLoaded === true ? <Loader /> : listComics.length === 0 ? <p className='hero__nothing'>Nothing...</p> :
               listComics.map((comic) => {
                  const {title,id,thumbnail:{path, extension}} = comic
                  return <div style={{opacity: loaded}} key={id} id={id} className='hero comic'>
                    <img className='hero__img' src={`${path}.${extension}`} alt="" />
                    <p className='hero__name'>{title}</p>
                    {localStorage.getItem("user") ? 
                      <>
                      <Link to={`/Marvel/Comics/${id}`}>
                        <Button>More</Button>
                      </Link>
                      </> : null
                    }
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

export default Comics