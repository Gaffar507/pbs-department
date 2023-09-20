import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import Footer from '../../components/footer/Footer'
import './contact.css'

const Contact = () => {
  return (
    <div className='contact-container'>
        <div className="navbar">
            <Navbar/>
        </div>
        <div className="hero">
          <Hero title={'Contact with Us'}/>
        </div>
        <div className="contact">
            <h3>Department of Pali and Buddhist Studies, Arts Building, Room no 6021, University of Dhaka, Dhaka 1000</h3>
            <section>
                <p>Phone: +88 09666 911 463 (Ext. 7273976)</p>
                <p>Mobile: /6185 01552556374</p>
                <p>E-mail: dept.pbs@du.ac.bd</p>
                <p>Website: dept.pbs@du.ac.bd</p>
            </section>
            <p>If you have an issue or suggestion relating to the Dhaka University website, please contact the webmaster.</p>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact
