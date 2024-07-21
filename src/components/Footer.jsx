import React from 'react'
import "../assets/styles/_App.scss"


function Footer() {
  return (
    <div className='footer'>
        <div className='footer__logo'>
        </div>
        <p className='footer__source '>
        "Data provided by Marvel. © 2014 Marvel"
        </p>
        <ul className='footer__socials'>
            <li className='footer__link'>
                <a aria-label='instagram' target='_blank' href="https://www.instagram.com/marvel/">
                </a>
            </li>
            <li className='footer__link'>
                <a aria-label='facebook' target='_blank' href="https://www.facebook.com/MarvelAUNZ/events/?locale=uk_UA&_rdr">
                </a>
            </li>
            <li className='footer__link'>
                <a aria-label='twitter' target='_blank' href="https://x.com/Marvel?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Footer