import React, { useEffect, useRef, useState } from 'react'
import Input from './UI/input/Input'
import Button from './UI/button/Button'
import "../assets/styles/_App.scss"

function Subscribe() {

  const [value, setValue] = useState({name: "", email: ""})
  const succes = useRef()
  const lose = useRef()
  const inCorrect = useRef()
  
  // RegExp for name and email
  let namePattern =  /^[a-z ,.'-]+$/i
  let emailPattern =  /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u

  function sendtoLocaleStorage(e) {
    e.preventDefault()
    
    let succesful = succes.current
    let subscibed = lose.current
    let notCorrect = inCorrect.current

    let storage = Object.keys(localStorage).join(" ")  

    if(namePattern.test(value.name)) {
      console.log("Name done")
    } else {
      notCorrect.style.opacity = 1
      setTimeout(() => {
        notCorrect.style.opacity = 0
      },2000)
      return
    }

    if(emailPattern.test(value.email)) {
      console.log("Email done")
    } else {
      notCorrect.style.opacity = 1
      setTimeout(() => {
        notCorrect.style.opacity = 0
      },2000)
      return
    }

    if(storage.includes(value.email)) {
      subscibed.style.opacity = 1
      setTimeout(() => {
        subscibed.style.opacity = 0
        setValue({name: "", email: ""})
      },1000)
      return
    } else {
      let obj = {
        id: +((Math.random() * 1000).toFixed(0)),
        ...value
      }
  
      succesful.style.opacity = 1
      setTimeout(() => {
        succesful.style.opacity = 0
        setValue({name: "", email: ""})
      },1000)
  
      localStorage.setItem(`${value.email}(${obj.id})`,JSON.stringify(obj))
      return
    }

  }

  return (
    <form className='form__subscribe' onSubmit={(e) => sendtoLocaleStorage(e)}>
        <div ref={succes} className='form__succes'></div>
        <div ref={lose} className='form__lose'></div>
        <div ref={inCorrect} className='form__incorect'>Incorrect values in inputs</div>
        <Input  value={value.name} onChange={(e) => setValue({...value, name: e.target.value})} type="text" placeholder="Your name hero"/>
        <Input  value={value.email} onChange={(e) => setValue({...value, email: e.target.value})} type="email" placeholder="Your email"/>
        <Button type="submit">Subscribe</Button>
    </form>
  )
}

export default Subscribe