import React from 'react'
import { Link } from 'react-router-dom'
import {FcHome} from 'react-icons/fc'
import {AiOutlineDoubleRight}from 'react-icons/ai'

import './hero.css'
const Hero = ({title}) => {
  return (
    <div className='hero-container'>
      <h1>{title}</h1> <hr className='hero-bar' />
      <div className='hero-sublink'>
        <Link to={'/'} className='hero-link'>{<FcHome style={{fontSize:'1.2rem', marginRight:'.2rem'}}/>}Home</Link> <AiOutlineDoubleRight/> <span style={{color:'rgb(255, 153, 0)',backgroundColor:'rgba(0, 0, 0, 0.428)',borderRadius:'.2rem',padding:'.2rem .4rem'}}>{title}</span>
      </div>
    </div>
  )
}

export default Hero
