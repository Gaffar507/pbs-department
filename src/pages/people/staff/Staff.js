import React from 'react'
import Navbar from '../../../components/navbar/Navbar';
import Hero from '../../../components/hero/Hero';
import Footer from '../../../components/footer/Footer';
import {FcBusinessman} from 'react-icons/fc'
import {FaPhone} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import './staff.css'
const Staff = () => {
  return (
    <div className='officers-staff'>
        <div className="navbar">
            <Navbar/>
        </div>
        <div className="hero">
          <Hero title={'Officers & Staff'}/>
        </div>
        <div className="staff-container">
          <div className="staff">
            <div className="staff-image">
              <FcBusinessman className='staff-img'/>
            </div>
            <div className="staff-title">
              <h3>Bishwajit Barua</h3>
              <p>Administrative Officer</p>
              <p><FaPhone/> 01911461712</p>
              <p><HiOutlineMail/> baruabishwajit7@gmail.com</p>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Staff
