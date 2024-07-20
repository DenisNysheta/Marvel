import React from 'react'
import "../assets/styles/_App.scss"
import Button from './UI/button/Button'

function Login() {
  return (
    <div className='log'>
        <Button>Log In</Button>
        <Button>Log Out</Button>
    </div>
  )
}

export default Login