import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Slider from '../../components/slider/Slider'
import './home.css'
import InfoCard from '../../components/info-card/InfoCard'
import AcademicPrograms from '../../components/academicPrograms/AcademicPrograms'
import LatestNews from '../../components/latestNews/LatestNews'
import Event from '../../components/events/Event'
import Research from '../../components/research/Research'
import Blurinfo from '../../components/blurInfo/Blurinfo'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
        <div className="container">
          <div className="navbar">
            <Navbar/>
          </div>
          <div className="slider">
            <Slider/>
          </div>
          <div className="information-card">
            <InfoCard/>
          </div>
          <div className="academic-programs">
            <AcademicPrograms/>
          </div>
          <div className="latest-news">
            <LatestNews/>
          </div>
          <div className="events">
            <Event/>
          </div>
          <div className="research">
            <Research/>
          </div>
          <div className="blur-info">
            <Blurinfo/>
          </div>
          <div className="footer">
            <Footer/>
          </div>
      </div>
  )
}

export default Home
