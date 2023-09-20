import React from 'react'
import Navbar from '../../../components/navbar/Navbar'
import Hero from '../../../components/hero/Hero'
import Footer from '../../../components/footer/Footer'
import { Link } from 'react-router-dom'
import{BiChevronsRight} from 'react-icons/bi'
import './researchProjects.css'

const ResearchProjects = () => {
  return (
    <div className='research-projects-container'>
        <div className="navbar">
            <Navbar/>
        </div>
        <div className="hero">
          <Hero title={'Research Projects'}/>
        </div>
        <div className="r-p-m-container">
            <div className="fund-card">
              <h2>A Study on the Internal ...</h2>
              <div className='fund-card-title'>
                <p><span style={{fontWeight:'bold'}}>Pl: </span>Dr. Sumon Kanti Barua</p>
                <p><span style={{fontWeight:'bold'}}>Duration: </span>One Year</p>
              </div>
              <Link to={'./fund-1'} className='fund-btn'><span>View Details</span><BiChevronsRight/></Link>
            </div>
            <div className="fund-card">
              <h2>A Study on the Origin,...</h2>
              <div className='fund-card-title'>
                <p><span style={{fontWeight:'bold'}}>Pl: </span>Dr. Delip Kumar Barua</p>
                <p><span style={{fontWeight:'bold'}}>Duration: </span>One Year</p>
              </div>
              <Link to={'./fund-2'} className='fund-btn'><span>View Details</span><BiChevronsRight/></Link>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ResearchProjects
