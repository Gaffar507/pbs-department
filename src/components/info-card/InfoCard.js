import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import cardData from '../../assets/data/card'
import mam from '../../assets/images/neru-mam.jpg'
import './infoCard.css'

const InfoCard = () => {
const cutFun=(num, info)=>{
    if (info) {
      return  info.slice(0,num) + '...'
    }
    return
}
  return (
    <div className='info-container'>
        <div className="info-title">
            <div className="left"><marquee><a href="#" className='info-link'>ঢাকা বিশ্ববিদ্যালয়ের পালি এন্ড বুদ্ধিষ্ট স্টাডিজ বিভাগের শিক্ষার্থীদের নিয়ে (০৫-০৯-২৩) Buddhist Iconography বিষয়ের উপর ফিল্ডওয়ার্কের জন্য জাতীয় জাদুঘর পরিদর্শন</a></marquee></div>
            <div className='right'>
                <Link to={'/#'}>
                    <div className="card">
                        <p>CITIZEN CHARTER</p>
                        <BsFillCheckCircleFill className='card-icon'/>
                    </div>
                </Link>
            </div>
        </div>
        <div className="info-cards">
            <div className='info-card-left' id="RouterNavLink">
                <div className="left-card">
                    <h2>{cardData[0].title}</h2>
                    <p>{cutFun('700',cardData[0].info)}<Link to={'/about/history'} className='more-btn'>Show more</Link></p>
                </div>
            </div>
            <div className='info-card-right' id="RouterNavLink">
                <div className="right-card">
                    <h2>Message from Chairman</h2>
                    <img src={mam} alt="chairman" />
                    <h2>{cardData[1].title}</h2>
                    <p>{cutFun('500',cardData[1].info)} <Link to={'/home/message'} className='more-btn'>Show more</Link> </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoCard
