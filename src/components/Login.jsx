import React, { useEffect, useRef, useState } from 'react'
import "../assets/styles/_App.scss"
import Button from './UI/button/Button'
import { Link } from 'react-router-dom'

function Login() {

  let user = JSON.parse(localStorage.getItem("user"))
  let text;
  
  if(user) {
    text = user.name
  } else {
    text = "Log In"
  }

  function deleteUser() {
    if(user) {
      localStorage.removeItem("user")
      return
    }
  }

  return (
    <div className='log'>
        <Link  to={user ? "" : "/Marvel/Registration"}>
          <Button  >{text}</Button>
        </Link>
        <Button onClick={() => deleteUser()}>Log Out</Button>
    </div>
  )
}

export default Login