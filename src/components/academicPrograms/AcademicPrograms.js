import React from 'react';
import './academicPrograms.css';
import { BsFillCheckCircleFill } from 'react-icons/bs'
import bihar from '../../assets/images/bihar.jpg'
import { Link } from 'react-router-dom';

const AcademicPrograms = () => {
   const programsCard=(title, url)=>{
    return(
      <div className='program-card'>
          <img src={bihar} alt="bihar" />
          <h3>{title}</h3>
          <hr className='program-card-bar'/>
          <Link to={url} className='program-btn'><span>READ MORE...</span> <span><BsFillCheckCircleFill style={{fontSize:'1.2rem'}}/></span></Link>
      </div>
    )
   }

  return (
    <div className='programs-container'>
      <div className="programs-title">
        <h1>Academic Programs</h1> <hr className='title-bar' />
      </div>
        <div className="programs-card">
          {programsCard('Bachelor of Arts Honours in Pali and Buddhist Studies', "/programs/honours")}
          {programsCard('Master of Arts Degree in Pali and Buddhist Studies', "/programs/masters")}
          {programsCard('M. Phil. Degree in Pali and Buddhist Studies', "/programs/m-phil")}
        </div>
    </div>
  )
}

export default AcademicPrograms
