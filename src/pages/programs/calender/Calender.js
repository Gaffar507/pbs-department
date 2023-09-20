import React from 'react'
import './calender.css'
import Footer from '../../../components/footer/Footer'
import Navbar from '../../../components/navbar/Navbar';
import Hero from '../../../components/hero/Hero';
import Calnender1 from '../../../assets/images/calender1.png'
import Calnender2 from '../../../assets/images/calender2.png'
import Calnender3 from '../../../assets/images/calender3.png'

const Calender = () => {
  return (
    <div className='calender-container'>
        <div className="navbar">
            <Navbar/>
        </div>
        <div className="hero">
          <Hero title={'Academic Calender'}/>
        </div>
        <div className="calender-box">
            <img src={Calnender1} alt="calender" />
            <img src={Calnender2} alt="calender" />
            <img src={Calnender3} alt="calender" />
        </div>
        <Footer/>
    </div>
  )
}

export default Calender
