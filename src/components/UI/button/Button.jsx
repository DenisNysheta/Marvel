import React, { useEffect, useRef } from 'react'
import cl from "./Button.module.scss"

function Button(props) {

  const {children} = props
  return (
    <button {...props} className={children === "Log In" || children === "Find" ? 
      [cl.btn,cl.btnlogIn].join(" ") : 
      children === "Log Out" ?  
      [cl.btn,cl.btnlogOut].join(" ") : 
      children === "Subscribe" ? [cl.btn,cl.subscribe].join(" ") :
      children === undefined ? cl.btnSwitch : 
      children === "More" ? cl.more : [cl.btn,cl.btnlogIn].join(" ")}>{children}</button>
  )
}

export default Button