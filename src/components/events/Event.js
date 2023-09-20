import React from 'react'
import{AiOutlineClockCircle} from 'react-icons/ai';
import {FaMapLocationDot}from 'react-icons/fa6'
import {HiPlusSm} from 'react-icons/hi'
import { Link } from 'react-router-dom'
import './event.css'
const Event = () => {
  return (
    <div className='event-container'>
        <div className="news-title">
            <h1>Recent and Upcoming Events</h1> <hr className='title-bar' />
        </div>
        {/* event card  */}
        <div className="event-card">
            <div className="left-event">
                <div className="event-title">
                    <h1>25</h1>
                    <span>FEB, 2021</span>
                </div>
                <hr className='event-bar1' />
            </div>
            <div className="right-event">
                <h3>Second International e-Conference on Celebrating 100 years of the University of Dhaka: Reflections from the International Alumni</h3>
                <div className="event-icons">
                    <span><AiOutlineClockCircle/></span> <hr className='event-bar2' /> <span><FaMapLocationDot/></span>
                </div>
                <p>Second International e-Conference on Celebrating 100 years of the University of Dhaka: Reflections from the International Alumni</p>
                <button><Link to={'#'} className='event-btn'><HiPlusSm className='plus'/>Read More</Link></button>
            </div>
        </div>
        <div className="all-events">
            <Link to={'#'}>
                <p>View All Events</p>
            </Link>
        </div>
    </div>
  )
}

export default Event
