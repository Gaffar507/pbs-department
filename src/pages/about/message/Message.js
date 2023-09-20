import React from 'react'
import Navbar from '../../../components/navbar/Navbar'
import Hero from '../../../components/hero/Hero'
import Footer from '../../../components/footer/Footer'
import neeruMam from '../../../assets/images/neru-mam.jpg'
import message from '../../../assets/data/chairmanMessage'
import './message.css'

const Message = () => {
  return (
    <div className='message-container'>
        <div className="navbar">
            <Navbar/>
        </div>
        <div className="hero">
          <Hero title={'Message from Chairman'}/>
        </div>
        <div className="message-main-container">
            <div className="upper-section">
                <img src={neeruMam} alt="Neeru Barua" />
                <h3>Dr. Neeru Barua</h3>
            </div>
            <div className="bottom-section">
                <p>{message.first}</p> <br />
                <p>{message.second}</p> <br />
                <p>{message.third}</p> <br />
                <p>{message.fourth}</p>
            </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Message
