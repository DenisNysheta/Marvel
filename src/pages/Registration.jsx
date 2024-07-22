import React, { useState, useRef, useContext } from 'react'
import "../assets/styles/_App.scss"
import venom from "../assets/images/backRegistration.png"
import Header from '../components/Header'
import Footer from '../components/Footer'
import Background from '../components/Background'
import HeroList from '../components/HeroList/HeroList'
import Button from '../components/UI/button/Button'
import Input from '../components/UI/input/Input'
import { MyContext } from '../main'

function Registration() {


    const [registrValues, setRegistrValues] = useState({name: "", email: "", password: ""})

    const succes = useRef()
    const lose = useRef()
    const inCorrect = useRef()
    
    function registr(e) {
        e.preventDefault()
        let namePattern =  /^[a-z ,.'-]+$/i
        let emailPattern =  /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u
    
        let notCorrect = inCorrect.current
    
        if(namePattern.test(registrValues.name) == false) {
          notCorrect.style.opacity = 1
          setTimeout(() => {
            notCorrect.style.opacity = 0
          },2000)
          return
        } 
    
        if(emailPattern.test(registrValues.email) == false) {
          notCorrect.style.opacity = 1
          setTimeout(() => {
            notCorrect.style.opacity = 0
          },2000)
          return
        } 

        if(registrValues.password.length < 5) {
          notCorrect.style.opacity = 1
          setTimeout(() => {
            notCorrect.style.opacity = 0
          },2000)
          return
        }
        
        succes.current.style.opacity = 1

        setTimeout(() => {
            succes.current.style.opacity = 0
        },1000)

        let obj = {
            ...registrValues
        }

        localStorage.setItem("user",JSON.stringify(obj))
        setRegistrValues({name: "", email: "", password: ""})
    }

  return (
    <>
        <Header />
        <div className='registration'>
            <HeroList/>
            <div className='registration__back'>
              <div className='registration__box'>
                <div>
                  <form className='registration__values' onSubmit={(e) => registr(e)} action="post">
                    <div ref={succes} className='form__succes registr__succes'></div>
                    <div ref={lose} className='form__lose'>You already log in</div>
                    <div ref={inCorrect} className='form__incorect'>Incorrect values in inputs</div>
                    <Input maxLength={6} value={registrValues.name} type="text" onChange={(e) => setRegistrValues({...registrValues, name: e.target.value})} placeholder='Your name hero'/>
                    <Input value={registrValues.email} type="email" onChange={(e) => setRegistrValues({...registrValues, email: e.target.value})} placeholder='Your email'/>
                    <Input value={registrValues.password} type="password" onChange={(e) => setRegistrValues({...registrValues, password: e.target.value})} placeholder='Your password'/>
                    <Button type="submit">
                        Registration
                    </Button>
                    <p className='registration__text'>
                        Hi, if you now on this page we can't find you, so please registration on our website
                    </p>
                  </form>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default Registration