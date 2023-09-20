import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import{FcCalendar} from 'react-icons/fc'
import news1 from '../../assets/images/news1.jpg'
import news2 from '../../assets/images/news2.jpg'
import news3 from '../../assets/images/news3.jpg'
import { Link } from 'react-router-dom';
import './latestnews.css'
const LatestNews = () => {
    const programsCard=(title, url,img,info,date)=>{
        return(
          <div className='news-card'>
              <img src={img} alt="news" />
              <h4><FcCalendar/>{date}</h4>
              <h3>{title}</h3>
              <p>{info}</p>
              <hr className='news-card-bar '/>
              <Link to={url} className='news-btn'><span>READ MORE...</span> <span><BsFillCheckCircleFill style={{fontSize:'1.2rem'}}/></span></Link>
          </div>
        )
       }
  return (
    <div className='news-container'>
        <div className="news-title">
        <h1>Latest News</h1> <hr className='title-bar' />
      </div>
        <div className="news-cards">
          {programsCard('ঢাকা বিশ্ববিদ্যালয়ের পালি এন্ড বুদ্ধিষ্ট স্টাডিজ বিভাগের শিক্ষার্থীদের নিয়ে (০৫-০৯-২৩) Buddhist Iconography বিষয়ের উপর ফিল্ডওয়ার্কের জন্য জাতীয় জাদুঘর পরিদর্শন', "#",news1,'ঢাকা বিশ্ববিদ্যালয়ের পালি এন্ড বুদ্ধিষ্ট স্টাডিজ বিভাগের শিক্ষার্থীদের নিয়ে (০৫-০৯-২৩) ...','SEPTEMBER 7, 2023')}
          {programsCard('ঢাকা বিশ্ববিদ্যালয়ের পালি এন্ড বুদ্ধিস্ট স্টাডিজ বিভাগের ২০২২-২০২৩ শিক্ষাবর্ষের ওরিয়েন্টেশন প্রোগ্রাম', "#",news2,'ঢাকা বিশ্ববিদ্যালয়ের পালি এন্ড বুদ্ধিস্ট স্টাডিজ বিভাগের ২০২২-২০২৩ শিক্ষাবর্ষের ওরিয়েন্টেশন ...','AUGUST 16, 2023')}
          {programsCard('ঢাকা বিশ্ববিদ্যালয়ের পালি এন্ড বুদ্ধিস্ট স্টাডিজ বিভাগে PBS English Club এর উদ্বোধন', "#",news3,'আজ (১৪/০৮/২৩) ঢাকা বিশ্ববিদ্যালয়ের পালি এন্ড বুদ্ধিস্ট স্টাডিজ বিভাগে PBS ...','AUGUST 14, 2023')}
        </div>
        <div className="all-news">
            <Link to={'#'}>
                <p>View All News</p>
            </Link>
        </div>
    </div>
  )
}

export default LatestNews
