import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../assets/styles/_App.scss"

function Navigation(props) {

  const {menuBurger} = props

  return (
    <ul className={menuBurger === true ? "menu menu-list" : "menu"}>
        <Link to="/Marvel" className='menu__link'>
            <p>Home</p>
        </Link>
        <Link to="/Characters" className='menu__link'>
            <p>Characters</p>
        </Link>
        <Link to="/Comics" className='menu__link'>
            <p>Comics</p>
        </Link>
    </ul>
  )
}

export default Navigation