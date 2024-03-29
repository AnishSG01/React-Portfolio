import React from 'react'
import Cta from './Cta'
import me from '../../assets/me.png'
import './header.css'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="header__container">
      <h5>Hello I'm</h5>
      <h1>Anish Ghogare</h1>
      <h5 className="text-light">Software Developer</h5>
      <Cta/>
      <HeaderSocials/>
      <div className="me">
          {/* <img src={me} alt="me" /> */}
      </div>
      
      <a href="#contact" className="scroll__down">Scroll Down</a>
      
      
      
      
      </div>
    </header>
  )
}

export default Header
