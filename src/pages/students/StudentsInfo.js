import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import Footer from '../../components/footer/Footer'
import {FaRegHandPointRight} from 'react-icons/fa'
import './studentInfo.css'

const StudentsInfo = ({data}) => {
    const[studentsData, setData]=useState('')
    useEffect(()=>{
        if (data) {
            setData(data)
        }
    },[data])
  return (
    <div className='students-container'>
        <div className="navbar">
            <Navbar/>
        </div>
        <div className="hero">
          <Hero title={studentsData}/>
        </div>
        <div className="main-students-container">
            <div className="students-box">
                <p>No Data found about <FaRegHandPointRight/> </p> <h3> {studentsData}!</h3>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default StudentsInfo
