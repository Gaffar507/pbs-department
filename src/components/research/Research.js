import React from 'react'
import { Link } from 'react-router-dom'
import {BiChevronsRight} from 'react-icons/bi'
import './research.css'

const Research = () => {
  return (
    <div className='research-container'>
      <div className="left-research">
        <h3>RESEARCH NEWS</h3>
        <div className="research-news">
            <Link to={'/research-area'}>
                <p>View All Research News</p>
            </Link>
        </div>
      </div>
      <div className="notice-board">
        <h3>NOTICE BOARD</h3>
        <section className='notice-title'>
          <p>পালি এন্ড বুদ্ধিস্ট স্টাডিজ বিভাগে নিয়মিত মাস্টার্স প্রোগ্রামে শূন্য আসনে ভর্তি বিজ্ঞপ্তি</p>
          <span style={{fontWeight:'bolder'}}>Published on:</span> <span>July 26, 2023</span>
          <hr />
        </section>
        <Link className='notice-btn'>View All <BiChevronsRight style={{fontSize:'1.3rem'}}/></Link>
      </div>
    </div>
  )
}

export default Research
