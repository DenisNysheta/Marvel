import React from 'react'
import cl from "./Input.module.scss"

function Input(props) {

  const {type, placeholder} = props

  return (
    <input className={placeholder.includes("Your name hero") || placeholder.includes("Your email") ? cl.subscribe : placeholder.includes("Find by name") ? cl.find : null}  {...props}/>
)
}

export default Input