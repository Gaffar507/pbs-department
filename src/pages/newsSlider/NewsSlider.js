import React, { useState,useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar';
import Hero from '../../components/hero/Hero';
import Footer from '../../components/footer/Footer'
import {useLocation} from 'react-router-dom'
import newsData from '../../assets/data/newsData';
import './newsSlider.css'

const NewsSlider = () => {
    const location=useLocation()
    const [news, setNews]=useState({
        img:'',
        title:'',
        date:'',
        url:''
    })
    useEffect(()=>{
        if (location.state) {
            const{ img,title,url,date}=location.state
            return setNews((pre)=>({...pre, img,title,date,url}))
         }
    },[location.state])

    const handleClick=(url)=>{
      const newData=newsData.filter((news)=>news.url===url)
      setNews((pre)=>({...pre, img:newData[0].img, title:newData[0].title,date:newData[0].date}))
    }

  return (
    <div className='news-slider'>
        <div className="navbar">
            <Navbar/>
        </div>
        <div className="hero">
          <Hero title={'News Slider'}/>
        </div>
        <div className="news-slider-container">
            <div className="left-news">
                <img src={news.img} alt='news' />
                <div className="news-title">
                  <h2 style={{paddingTop:'.5rem'}}>{news.title}</h2>
                  <p>{news.date}</p>
                </div>
            </div>
            <div className="right-news">
              <h3>SLIDER</h3>
              <div className='sliders'>
              {newsData.map((news, index)=>{
                return <div key={index} className='slider'>
                    <h3 className='slider-link' onClick={()=>handleClick(news.url)}>{news.title}</h3>
                    <p>{news.date}</p>
                    <hr className='h-line' style={{marginTop:'1.5rem'}} />
                </div>
              })}
              </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default NewsSlider
