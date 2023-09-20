import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../components/navbar/Navbar';
import  Hero from '../../../components/hero/Hero';
import Footer from '../../../components/footer/Footer'
import {PiStudentFill} from 'react-icons/pi'
import {FaCrown} from 'react-icons/fa'
import {BsBookHalf} from 'react-icons/bs'
import './programs.css'

const Programs = () => {
  return (
    <div className='programs'>
          <div className="navbar">
            <Navbar/>
        </div>
        <div className="hero">
          <Hero title={'All Programs Here'}/>
        </div>
        <div className="programs-list">
          <Link to={'/programs/honours'} className='program-link'><PiStudentFill className='program-icon'/> <span>Honours</span></Link>
          <Link to={'/programs/masters'} className='program-link'><BsBookHalf className='program-icon'/><span>Masters</span> </Link>
          <Link to={'/programs/m-phil'} className='program-link'><FaCrown className='program-icon'/><span>M-phil</span> </Link>
        </div>
        <Footer/>
    </div>
  )
}

export default Programs
