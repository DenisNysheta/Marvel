import React, { useState } from 'react'
import "../assets/styles/_App.scss"
import Login from './Login'
import capitainAmericaField from "../assets/images/capitainAmerica.png"
import Navigation from './Navigation'
import SwitchButton from './SwitchButton'

function Header() {

  const [isActive, setActive] = useState(false)

  return (
    <div className="header">
      <div className="header__img">
        <img src={capitainAmericaField} alt="" />
      </div>
      <div className={ isActive === true ? 'menu-burger menu-active' : "menu-burger"}>
        <Navigation menuBurger={false}/>
        <Login/>
      </div>
        <SwitchButton />
        <div onClick={() => setActive(!isActive)} className={ isActive === true ? 'burger active' : "burger"}>
          <span></span>
          <span></span>
          <span></span>
        </div>
    </div>
  )
}

export default Header