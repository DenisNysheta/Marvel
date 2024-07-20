import React from 'react'
import Button from './UI/button/Button'
import "../assets/styles/_App.scss"
import { useState } from 'react'

function SwitchButton() {

  localStorage.setItem("theme","dark")
  let color = localStorage.getItem("theme") 

  const [isSwitch, setSwitch] = useState(color)
  document.documentElement.setAttribute("data-theme", isSwitch)


  function switchTheme() {

    if(isSwitch === "dark") {
      localStorage.removeItem("theme")
      localStorage.setItem("theme","light")
      let color = localStorage.getItem("theme")
      setSwitch(color)
      document.documentElement.setAttribute("data-theme", isSwitch)

      return
    } else if(isSwitch === "light"){
      localStorage.removeItem("theme")
      localStorage.setItem("theme","dark")
      let color = localStorage.getItem("theme")
      setSwitch(color)
      document.documentElement.setAttribute("data-theme", isSwitch)

      return
    }
  }

  return (
    <div className="switch">
        <Button aria-label="switch them" onClick={switchTheme}></Button>
    </div>
  )
}

export default SwitchButton