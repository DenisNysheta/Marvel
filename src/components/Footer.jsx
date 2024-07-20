import React from 'react'
import "../assets/styles/_App.scss"
import svg from "../assets/sprite.svg"


function Footer() {
  return (
    <div className='footer'>
        <div className='footer__logo'>
        </div>
        <ul className='footer__socials'>
            <li className='footer__link'>
                <a aria-label='instagram' target='_blank' href="https://www.instagram.com/marvel/">
                    <svg>
                        <use xlinkHref={`${svg}#instagram`}></use>
                    </svg>
                </a>
            </li>
            <li className='footer__link'>
                <a aria-label='facebook' target='_blank' href="https://www.facebook.com/MarvelAUNZ/events/?locale=uk_UA&_rdr">
                    <svg>
                        <use xlinkHref={`${svg}#facebook`}></use>
                    </svg>
                </a>
            </li>
            <li className='footer__link'>
                <a aria-label='twitter' target='_blank' href="https://x.com/Marvel?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                    <svg>
                        <use xlinkHref={`${svg}#twitter-icon`}></use>
                    </svg>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Footer