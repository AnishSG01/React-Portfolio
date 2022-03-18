import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaLinkedin} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://github.com" target='_blank'><BsGithub/></a>
        <a href="https://instagram.com" target='_blank'><BsInstagram/></a>
        <a href="https://linkedin.com" target='_blank'><FaLinkedin/></a>
    </div>
  )
}

export default HeaderSocials