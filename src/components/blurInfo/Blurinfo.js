import React from 'react'
import {HiMiniUserGroup} from 'react-icons/hi2'
import {ImManWoman} from 'react-icons/im'
import {FaUserGraduate} from 'react-icons/fa'
import './blurinfo.css'

const Blurinfo = () => {
  return (
    <div  className='blur-container'>
      <div className="main-blur">
        <div className="blur">
            <HiMiniUserGroup className='blur-icon'/>
        </div>
        <h2>14</h2>
        <h4>Total Faculty Members</h4>
      </div>
      <div className="main-blur">
        <div className="blur">
            <ImManWoman className='blur-icon'/>
        </div>
        <h2>363</h2>
        <h4>Total Students</h4>
      </div>
      <div className="main-blur">
        <div className="blur">
            <FaUserGraduate className='blur-icon'/>
        </div>
        <h2>172</h2>
        <h4>Total Female Students</h4>
      </div>
    </div>
  )
}

export default Blurinfo
