import React from 'react'
import Navbar from '../../../components/navbar/Navbar'
import Hero from '../../../components/hero/Hero'
import Footer from '../../../components/footer/Footer'
import { Link } from 'react-router-dom'
import {CgProfile} from 'react-icons/cg'
import membersData from '../../../assets/data/membersData'
import { useGlobalContext } from '../../../assets/data/context';
import './research.css'

const ResearchArea = () => {
  const value = useGlobalContext();
  const { dispatch } = value;
  const{name,image,title,contact}=membersData.chairman
  return (
    <div className='research-area-container'>
        <div className="navbar">
            <Navbar/>
        </div>
        <div className="hero">
          <Hero title={'Research Area'}/>
        </div>
        <div className="reasearch-main-container">
          <h3 className='research-title'>FACULTY RESEARCH INTERESTS</h3>
            <div className="research-members-info">
              <div>
                <Link className='research-link' to={`/research-area/member-info/${membersData.chairman.url}`} state={{image, name, title, contact}} onClick={()=>dispatch({type:'r-member-info', payload:'/research-area'})}>
                <h3 style={{fontWeight:"bold"}}>{<CgProfile/>}{membersData.chairman.name}</h3>
              </Link>
              <p>Department of Pali and Buddhist Studies</p>
              <hr className='research-bar' />
              </div>
              {membersData.teachers.map((data)=>{
                  const{name,image,title,contact}=data
                return<div key={data.id}>
                  <Link className='research-link' to={`/research-area/member-info/${membersData.chairman.url}`} state={{image, name, title, contact}} onClick={()=>dispatch({type:'r-member-info', payload:'/research-area'})}><h3 style={{fontWeight:"bold"}}>{<CgProfile/>}{name}</h3></Link>
                  <p>Department of Pali and Buddhist Studies</p>
                  <hr className='research-bar' />
              </div>
              })}
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ResearchArea
