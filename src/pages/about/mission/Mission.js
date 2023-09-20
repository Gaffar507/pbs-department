import React from 'react'
import Navbar from '../../../components/navbar/Navbar';
import  Hero from '../../../components/hero/Hero';
import Footer from '../../../components/footer/Footer'
import {Link} from 'react-router-dom'
import './mission.css'
const Mission = () => {
  return (
    <div className='mission-container'>
        <div className="navbar">
            <Navbar/>
        </div>
        <div className="hero">
          <Hero title={'Mission & Vision'}/>
        </div>
        <div className="mission">
            <div className="left-mission">
                <article><strong style={{fontSize:'2.5rem'}}>H</strong>ave a crystal clear mission and vision to execute soon.</article>
            </div>
            <div className="right-mission">
                <span><hr className='about-bar'/><h3 style={{fontWeight:'bolder'}}>ABOUT</h3></span>
                <Link to={'/about/history'} className='history-link'>History</Link>
                <Link to={'/about/mission'} className='history-link'>Mission & Vision</Link>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Mission
