import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import Footer from '../../components/footer/Footer'
import './alumni.css'
const Alumni = () => {
  return (
    <div className='alumni-container'>
        <div className="navbar">
            <Navbar/>
        </div>
        <div className="hero">
          <Hero title={'Notable Alumni'}/>
        </div>
        <div className="alumni">
            <h2>Yet, have no remarkable data to show!</h2>
        </div>
        <Footer/>
    </div>
  )
}

export default Alumni
