import React from 'react'
import Navbar from '../../../components/navbar/Navbar'
import Hero from '../../../components/hero/Hero'
import Footer from '../../../components/footer/Footer'
import './publications.css'

const Publications = () => {
  return (
    <div className='publications-container'>
        <div className="navbar">
            <Navbar/>
        </div>
        <div className="hero">
          <Hero title={'Publications'}/>
        </div>
        <div className="facilities-main-container">
            <h2>No data found!</h2>
        </div>
        <Footer/>
    </div>
  )
}

export default Publications
