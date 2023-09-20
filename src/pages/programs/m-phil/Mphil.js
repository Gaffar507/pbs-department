import React from 'react'
import Navbar from '../../../components/navbar/Navbar';
import Hero from '../../../components/hero/Hero';
import Footer from '../../../components/footer/Footer'
import {Link} from 'react-router-dom';
import {FiClock} from 'react-icons/fi'
import {useGlobalContext} from '../../../assets/data/context';
import desData from '../../../assets/data/programDes'
import Float from '../../../components/floatDiv/Float';
import floatData from '../../../assets/data/floatData';
import './m-phil.css'
const Mphil = () => {
  const value = useGlobalContext();
  const { dispatch, onView1,onView2,onView3} = value;
  const {eightSemester}=floatData;
  return (
    <div className='mphil-container'>
              <div className="navbar">
            <Navbar/>
        </div>
        <div className="hero">
          <Hero title={'M.Phil Program'}/>
        </div>
        <div className="mphil">
          <div className="left-mphil">
      {/* left main side style starts */}
      <div className="left-honours">
            <h1>M.Phil.Degree in Pali and Buddhist Studies</h1>
            <div className="box">
              <section>
                <p style={{fontSize:'.9rem',fontWeight:'bold', paddingBottom:'.3rem'}}>FACULTY</p>
                <p>Arts</p>
              </section>
              <hr className='box-bar' />
              <section>
                <p style={{fontSize:'.9rem',fontWeight:'bold', paddingBottom:'.3rem'}}>DURATION</p>
                <p><FiClock style={{color:'rgb(255, 162, 0)'}}/>2 Years</p>
              </section>
            </div>

    {/* overview design starts */}
          <div className="overview-container">
            <div className={`${onView1?'overview overview-true':'overview'}`} onClick={()=>dispatch('first')}>
              OVERVIEW
            </div>
            <div  className={`${onView2?'overview overview-true':'overview'}`} onClick={()=>dispatch('second')}>
              CURRICULUAM & COURSES
            </div>
            <div className={`${onView3?'overview overview-true':'overview'}`} onClick={()=>dispatch('third')}>
              ALL SYLLABUS
            </div>
          </div>
    {/* overview design starts */}

    {/* overview description design starts */}

  <div className="overview-description">
    {onView1?    <div className='program-des'>
      <h2 style={{fontWeight:'bold'}}>Program Description :-</h2>
      <h3 style={{textAlign:'center', fontWeight:'bold', fontSize:'1.3rem', padding:'.5rem'}}>Introduction</h3>
        <p>{desData.programDes3}</p>
    </div> :''}
    {onView2?    <div className='program-des'>
      <h2>List of Courses(Year/Semester)</h2>
      <div className="floats">
        <Float mainTitle={'First Year'} courseInfo={eightSemester}/>

      </div>
    </div> :''}
    {onView3?    <div className='program-des'>
      <h2>List of Syllabus</h2>
      <p>Syllabus curriculam will be update soon here.</p>
    </div> :''}
  </div>
  {/* overview description design ends */}
   </div>
          </div>
          <div className="right-mission">
                <span><hr className='about-bar'/><h3 style={{fontWeight:'bolder'}}>Academic Programs</h3></span>
                <Link to={'/programs/honours'} className='history-link'>Undergraduate</Link>
                <Link to={'/programs/masters'} className='history-link'>Graduate</Link>
                <Link to={'/programs/m-phil'} className='history-link'>M.Phil</Link>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Mphil
