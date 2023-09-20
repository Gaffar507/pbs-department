import React from 'react'
import Navbar from '../../../../components/navbar/Navbar'
import Hero from '../../../../components/hero/Hero'
import Footer from '../../../../components/footer/Footer'
import { Link } from 'react-router-dom'
import './fundProjects.css';

const Fund2 = () => {
  return (
    <div className='fund-container'>
        <div className="navbar">
            <Navbar/>
        </div>
        <div className="hero">
          <Hero title={'Research Projects'}/>
        </div>
        <div className="fund-main-container">
            <div className='fund-card-container'>
                <h3>A STUDY ON THE ORIGIN, DEVELOPMENT AND NATURE OF BUDDHIST ICONOGRAPHY.</h3>
                <div className="fund-main-title">
                    <p>Principle Investigator: <span>Dr. Delip Kumar Barua , Professor , Department of Pali and Buddhist Studies</span></p>
                    <p>Co-Investigator:</p>
                    <section>
                    <p>Duration: <span>One Year</span></p>
                    <p>Amount: <span>88000.00</span></p>
                    </section>
                    <p>Funding Authority: <span>Dhaka University</span></p>
                </div>
                <h3>PROJECT DETAILS</h3>
            </div>
            <Link className='fund-back-btn' to={'/funded-projects'}>Go back to previous page</Link>
        </div>
        <Footer/>
    </div>
  )
}

export default Fund2
