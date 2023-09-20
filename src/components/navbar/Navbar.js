/* eslint-disable */
import React, { useState } from 'react'
import logo from '../../assets/images/DU-Logo.png'
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa6'
import{RxCross1} from 'react-icons/rx'
import { BiChevronDown,BiChevronUp} from 'react-icons/bi'
import { useGlobalContext } from '../../assets/data/context';
import './navbar.css'

const Navbar = () => {
  const value = useGlobalContext();
  const { dispatch, makeHover,data,click,clickData } = value;
  const [toggle, setToggle]=useState(false)
  return (
      <div className="navbar-container">
        <div className='upside'>
          <h1>Department of Pali and Buddhist Studies</h1>
        </div>
        <div className='navbar-main'>
            <div className="navbar-left">
              <Link to='/'> <img src={logo} alt="du logo" /></Link>
            </div>
            <div className='navbar-right'>
              <div className='link-container'>
                <div className="nav-link" style={{paddingTop:'.3rem'}}>
                  <Link to='/'>HOME</Link>
                </div>
              </div>
              <div className='link-container'>
                <div className='nav-link' onMouseOver={()=>dispatch({type:'true&about', payload:'about'})} onMouseLeave={()=>dispatch('false')}>
                  <p>ABOUT</p>
                  <span>{<BiChevronDown style={{fontSize:'1.3rem',}}/>}</span>
                </div>
                <div className={`${makeHover ,data==='about'?'sub-link show-sub-link':'sub-link'}`} onMouseOver={()=>dispatch({type:'true&about', payload:'about'})} onMouseLeave={()=>dispatch('false')}>
                  <Link to="/about/history">HISTORY</Link> <hr className='h-line' />
                  <Link to="/about/mission">MISSION & VISION</Link>
                </div>
              </div>
              <div className='link-container'>
                <div className="nav-link" onMouseOver={()=>dispatch({type:'true&academic', payload:'academic'})} onMouseLeave={()=>dispatch('false')}>
                  <p>ACADEMIC</p>
                  <span>{<BiChevronDown style={{fontSize:'1.3rem',}}/>}</span>
                </div>
                <div className={`${makeHover,data==='academic'?'sub-link show-sub-link':'sub-link'}`} onMouseOver={()=>dispatch({type:'true&academic', payload:'academic'})}  onMouseLeave={()=>dispatch('false')}>
                  <Link to="/programs">PROGRAMS</Link> <hr className='h-line' />
                  <Link to="/calender">ACADEMIC CALENDER</Link>
                </div>
              </div>
              <div className='link-container'>
                <div className="nav-link" onMouseOver={()=>dispatch({type:'true&people', payload:'people'})} onMouseLeave={()=>dispatch('false')}>
                  <p>PEOPLE</p>
                  <span>{<BiChevronDown style={{fontSize:'1.3rem',}}/>}</span>
                </div>
                <div className={`${makeHover,data==='people'?'sub-link show-sub-link':'sub-link'}`} onMouseOver={()=>dispatch({type:'true&people', payload:'people'})}  onMouseLeave={()=>dispatch('false')}>
                  <Link to="/members">FACULTY MEMBERS</Link> <hr className='h-line' />
                  <Link to="/staffs">OFFICERS AND STAFFS</Link>
                </div>
              </div>
              <div className='link-container'>
                <div className="nav-link" onMouseOver={()=>dispatch({type:'true&research', payload:'research'})} onMouseLeave={()=>dispatch('false')}>
                  <p>RESEARCH</p>
                  <span>{<BiChevronDown style={{fontSize:'1.3rem',}}/>}</span>
                </div>
                <div className={`${makeHover,data==='research'?'sub-link show-sub-link':'sub-link'}`} onMouseOver={()=>dispatch({type:'true&research', payload:'research'})}  onMouseLeave={()=>dispatch('false')}>
                  <Link to="/research-area">RESEARCH AREA</Link> <hr className='h-line' />
                  <Link to="/funded-projects">FUNDED PROJECTS</Link> <hr className='h-line' />
                  <Link to="/publications">PUBLICATIONS</Link> <hr className='h-line' />
                  <Link to="/facilities">RESEARCH FACILITIES</Link>
                </div>
              </div>
              <div className='link-container'>
                <div className="nav-link" onMouseOver={()=>dispatch({type:'true&students', payload:'students'})} onMouseLeave={()=>dispatch('false')}>
                  <p>STUDENTS</p>
                  <span>{<BiChevronDown style={{fontSize:'1.3rem',}}/>}</span>
                </div>
                <div className={`${makeHover,data==='students'?'sub-link show-sub-link':'sub-link'}`} onMouseOver={()=>dispatch({type:'true&students', payload:'students'})}  onMouseLeave={()=>dispatch('false')}>
                  <Link to="/students" onClick={()=>dispatch({type:'students-activities', payload:'Students Activities'})}>STUDENTS ACTIVITIES</Link> <hr className='h-line' />
                  <Link to="/students" onClick={()=>dispatch({type:'students-activities', payload:'Academic Achievements'})}>ACADEMIC ACHIEVIMENTS</Link> <hr className='h-line' />
                  <Link to="/students" onClick={()=>dispatch({type:'students-activities', payload:'Scholarships & Financial Aids'})}>SCHOLARSHIPS & FINANCIAL AIDS</Link>
                </div>
              </div>
              <div className='link-container'>
                <div className="nav-link" onMouseOver={()=>dispatch({type:'true&alumni', payload:'alumni'})} onMouseLeave={()=>dispatch('false')}>
                  <p>ALUMNI</p>
                  <span>{<BiChevronDown style={{fontSize:'1.3rem',}}/>}</span>
                </div>
                <div className={`${makeHover,data==='alumni'?'sub-link show-sub-link':'sub-link'}`} onMouseOver={()=>dispatch({type:'true&alumni', payload:'alumni'})}  onMouseLeave={()=>dispatch('false')}>
                  <Link  to="/alumni">NOTABLE ALUMNI</Link>
                </div>
              </div>
              <div className='link-container'>
                <div className="nav-link"  style={{paddingTop:'.3rem'}}>
                  <Link to='/contact' >CONTACT</Link>
                </div>
              </div>
            </div>
        </div>


        {/* for mini window navbar style starts */}
        <div className="mini-window-navbar">
            <div className="mini-left-container">
              <span className='nav-bar' onClick={()=>setToggle((pre)=>!pre)}>{toggle?<RxCross1 className='nav-bar-icon'/>:<FaBars className='nav-bar-icon'/>}</span>
              <Link to='/' onClick={()=>setToggle((pre)=>!pre)}> <img src={logo} alt="du logo" /></Link>
            </div>
            <div className={`${toggle?'mini-right-container show-navbar':'mini-right-container'}`}>
              <div className='mini-link-container'>
              <Link to={'/'} className="mini-nav-link nav-link-contact"  onClick={()=>setToggle((pre)=>!pre)} style={{paddingTop:'.3rem'}}>
                  <p>HOME</p>
                </Link>
              </div>
              <hr className='mini-line' />
              <div className='mini-link-container'>
                <div className='mini-nav-link' onClick={()=>dispatch({type:'click&about', payload:'about'})} >
                  <p>ABOUT</p>
                  <span>{click&&clickData==='about'?<BiChevronUp/>:<BiChevronDown/>}</span>
                </div>
                <div className={`${click&&clickData==='about'?'mini-sub-links show-sub-links'  :'mini-sub-links'}`}>
                  <Link to="/about/history" onClick={()=>setToggle((pre)=>!pre)}>HISTORY</Link>
                  <Link to="/about/mission" onClick={()=>setToggle((pre)=>!pre)}>MISSION & VISION</Link>
                </div>
              </div>
              <hr className='mini-line' />
              <div className='mini-link-container'>
                <div className="mini-nav-link" onClick={()=>dispatch({type:'click&academic', payload:'academic'})}>
                  <p>ACADEMIC</p>
                  <span>{click&&clickData==='academic'?<BiChevronUp/>:<BiChevronDown/>}</span>
                </div>
                <div className={`${click&&clickData==='academic'?'mini-sub-links show-sub-links'  :'mini-sub-links'}`} >
                  <Link to="/programs" onClick={()=>setToggle((pre)=>!pre)}>PROGRAMS</Link> 
                  <Link to="/calender" onClick={()=>setToggle((pre)=>!pre)}>ACADEMIC CALENDER</Link>
                </div>
              </div>
              <hr className='mini-line' />
              <div className='mini-link-container'>
                <div className="mini-nav-link" onClick={()=>dispatch({type:'click&people', payload:'people'})}>
                  <p>PEOPLE</p>
                  <span>{click&&clickData==='people'?<BiChevronUp/>:<BiChevronDown/>}</span>
                </div>
                <div className={`${click&&clickData==='people'?'mini-sub-links show-sub-links'  :'mini-sub-links'}`} >
                  <Link to="/members" onClick={()=>setToggle((pre)=>!pre)}>FACULTY MEMBERS</Link>
                  <Link to="/staffs" onClick={()=>setToggle((pre)=>!pre)}>OFFICERS AND STAFFS</Link>
                </div>
              </div>
              <hr className='mini-line' />
              <div className='mini-link-container'>
                <div className="mini-nav-link" onClick={()=>dispatch({type:'click&research', payload:'research'})} >
                  <p>RESEARCH</p>
                  <span>{click&&clickData==='research'?<BiChevronUp/>:<BiChevronDown/>}</span>
                </div>
                <div className={`${click&&clickData==='research'?'mini-sub-links show-sub-links'  :'mini-sub-links'}`} >
                  <Link to="/research-area" onClick={()=>setToggle((pre)=>!pre)}>RESEARCH AREA</Link> 
                  <Link to="/funded-projects" onClick={()=>setToggle((pre)=>!pre)}>FUNDED PROJECTS</Link> 
                  <Link to="/publications" onClick={()=>setToggle((pre)=>!pre)}>PUBLICATIONS</Link> 
                  <Link to="/facilities" onClick={()=>setToggle((pre)=>!pre)}>RESEARCH FACILITIES</Link>
                </div>
              </div>
              <hr className='mini-line' />
              <div className='mini-link-container'>
                <div className="mini-nav-link" onClick={()=>dispatch({type:'click&students', payload:'students'})}>
                  <p>STUDENTS</p>
                  <span>{click&&clickData==='students'?<BiChevronUp/>:<BiChevronDown/>}</span>
                </div>
                <div className={`${click&&clickData==='students'?'mini-sub-links show-sub-links'  :'mini-sub-links'}`}>
                  <Link to="/students" onClick={()=>setToggle((pre)=>!pre) || dispatch({type:'students-activities', payload:'Students Activities'})}>STUDENTS ACTIVITIES</Link> 
                  <Link to="/students" onClick={()=>setToggle((pre)=>!pre) || dispatch({type:'students-activities', payload:'Academic Achievements'})}>ACADEMIC ACHIEVIMENTS</Link> 
                  <Link to="/students" onClick={()=>setToggle((pre)=>!pre) || dispatch({type:'students-activities', payload:'Scholarships & Financial Aids'})}>SCHOLARSHIPS & FINANCIAL AIDS</Link>
                </div>
              </div>
              <hr className='mini-line' />
              <div className='mini-link-container'>
                <div className="mini-nav-link" onClick={()=>dispatch({type:'click&alumni', payload:'alumni'})}>
                  <p>ALUMNI</p>
                  <span>{click&&clickData==='alumni'?<BiChevronUp/>:<BiChevronDown/>}</span>
                </div>
                <div className={`${click&&clickData==='alumni'?'mini-sub-links show-sub-links'  :'mini-sub-links'}`}>
                  <Link  to="/alumni"  onClick={()=>setToggle((pre)=>!pre)}>NOTABLE ALUMNI</Link>
                </div>
              </div>
              <hr className='mini-line' />
              <div className='mini-link-container'>
                <Link to={'/contact'} className="mini-nav-link nav-link-contact"  onClick={()=>setToggle((pre)=>!pre)}  style={{paddingTop:'.3rem'}}>
                  <p>CONTACT</p>
                </Link>
              </div>
            </div>
        </div>
      </div>
  )
}

export default Navbar
