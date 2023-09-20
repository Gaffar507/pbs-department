import React, { useState } from 'react'
import {BsPlus,BsFillEyeFill} from 'react-icons/bs'
import {BiMinus} from 'react-icons/bi'
import {AiFillFileText} from 'react-icons/ai'
import './float.css'

const Float = ({mainTitle,courseInfo}) => {
const[openFloat, setOpenFloat]=useState(false)
const{ no1,no2,no3,no4}= courseInfo.courseNo;
const{ title1, title2, title3,title4}=courseInfo.title;
const{ info1, info2,info3, info4}=courseInfo.info;

  return (
    <div className='float-container'>
      <div className="main-title" onClick={()=>setOpenFloat((pre)=>!pre)}>
        <h3>{mainTitle}</h3> <span>{openFloat?<BiMinus style={{fontWeight:'bolder',fontSize:'1.3rem'}}/>:<BsPlus style={{fontWeight:'bolder',fontSize:'1.5rem'}}/>}</span>
      </div>
      <div className={`${openFloat?'float-info':'hidden-info'}`}>
        <div className="info1">
            <span><AiFillFileText/>PBS{no1}</span> | <span style={{fontWeight:'bold'}}>{title1}</span> | 4 Cr. <button className='float-btn' onClick={()=>alert(info1)}><BsFillEyeFill style={{fontSize:'.8rem'}}/> Preview</button>
        </div>
        <div className="info2">
            <span><AiFillFileText/>PBS{no2}</span> | <span style={{fontWeight:'bold'}}>{title2}</span> | 4 Cr. <button className='float-btn' onClick={()=>alert(info2)}><BsFillEyeFill style={{fontSize:'.8rem'}}/> Preview</button>
        </div>
        <div className="info3">
            <span><AiFillFileText/>PBS{no3}</span> | <span style={{fontWeight:'bold'}}>{title3}</span> | 4 Cr. <button className='float-btn' onClick={()=>alert(info3)}><BsFillEyeFill style={{fontSize:'.8rem'}}/> Preview</button>
        </div>
        <div className={`${title4===undefined?'hidden-info':'info4'}`}>
            <span><AiFillFileText/>PBS{no4}</span> | <span style={{fontWeight:'bold'}}>{title4}</span> | 4 Cr. <button className='float-btn' onClick={()=>alert(info4)}><BsFillEyeFill style={{fontSize:'.8rem'}}/> Preview</button>
        </div>
      </div>
    </div>
  )
}

export default Float
