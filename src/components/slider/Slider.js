import React, { useEffect, useState } from 'react';
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai'
import { useGlobalContext } from '../../assets/data/context';
import newsData from '../../assets/data/newsData';
import './slider.css';
import { Link } from 'react-router-dom';

const Slider = () => {
  const value = useGlobalContext();
  const { dispatch, showSlide } = value;
  const[data]=useState(newsData)
  let[index, setIndex]=useState(0)

    const handleClick=(type)=>{
        if (type==='next') {
            let total=index+1
            setIndex(total)
            if (total===data.length) {
                setIndex(0)
            }
        }
        if (type==='previous') {
        if (index===0) {
            setIndex(data.length)
        }
            setIndex((pre)=>pre-1)
        }
    }

    useEffect(()=>{
      const myInterval=  setInterval(()=>{
        let total=index+1
        setIndex(total)
        if (total===data.length) {
            setIndex(0)
        }
        },2000)
        return ()=> clearInterval(myInterval)
    })

  return (
    <div className='slider-container'>
      <div className="banner" >
        <div className="banner-back"  onMouseOver={()=>dispatch('true')} onMouseLeave={()=>dispatch('false')}></div>
        <img src={data[index].img} className='banner-image' alt="celebration" />
        <h1>{data[index].title}</h1>
        <button>
          <Link to={'/home/news-silder'} state={{img:data[index].img, title:data[index].title, date:data[index].date, url:data[index].url}}>Read More...</Link>
        </button>
      </div>
      <div className={`${showSlide? 'slider-btn show-btn':'slider-btn'}`} onMouseOver={()=>dispatch('true')} onMouseLeave={()=>dispatch('false')}>
        <AiOutlineDoubleLeft className='btn-1' onClick={()=>handleClick('previous')}/>
        <AiOutlineDoubleRight className='btn-2' onClick={()=>handleClick('next')}/>
      </div>
    </div>
  )
}

export default Slider
