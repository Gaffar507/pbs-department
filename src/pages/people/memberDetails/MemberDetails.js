import React, { useEffect, useState } from 'react'
import './memberDetails.css'
import {FaArrowLeft} from 'react-icons/fa'
import Navbar from '../../../components/navbar/Navbar'
import Hero from '../../../components/hero/Hero'
import Footer from '../../../components/footer/Footer'
import {useLocation,Link} from 'react-router-dom'
import { useGlobalContext } from '../../../assets/data/context';

const MemberDetails = () => {
    const value = useGlobalContext();
    const { dispatch,activeData,defaultBtn,memberInfo } = value;
    const[ data, setData]=useState({image:'', title:'', name:'', email:'', phone:''
    })
    const location=useLocation()
    const[memberData,setMemberData]=useState('')
    useEffect(()=>{
        if (location.state) {
            const {image, title, name, contact}=location.state
            const{ email, phone}=contact
             setData((pre)=>({...pre,image, title, name,email, phone}))
         }
    },[location.state])
    useEffect(()=>{
        if (memberInfo) {
            setMemberData(memberInfo)
        }
    },[memberInfo])

  return (
    <div className='member-details'>
        <div className="navbar">
            <Navbar/>
        </div>
        <div className="hero">
          <Hero title={'Faculty Member Details'}/>
        </div>
        <div className="member-details-container">
            <div className="member-left-details">
                <div className='details-img'>
                    <img src={data.image} alt={data.name} />
                </div>
                <hr className='member-bar' />
                <div className="left-details-title">
                    <h3 style={{fontWeight:'bold', marginBottom:".6rem"}}>{data.name}</h3>
                    <p style={{fontSize:'.9rem'}}>({data.title})</p>
                    <p>Department of Pali and Buddhist Studies</p>
                </div>
            </div>
            <div className="member-right-details">
                <Link to={`${memberData?'/research-area':'/members'}`} className='member-back-btn'>{memberData ?'Go back to the research area page':'Go back to the all members page'} <FaArrowLeft style={{marginLeft:'.3rem'}}/></Link>
                <ul className="details-links">
                    <li className={`${activeData==='education'||defaultBtn?'link active':'link'}`} onClick={()=>dispatch({type:'activeDefault',payload:'education'})}>Education</li>
                    <li className={`${activeData==='experience'?'link active':'link'}`} onClick={()=>dispatch({type:'active',payload:'experience'})}>Experience</li>
                    <li className={`${activeData==='research'?'link active':'link'}`} onClick={()=>dispatch({type:'active',payload:'research'})}>Research Activities</li>
                    <li className={`${activeData==='membership'?'link active':'link'}`} onClick={()=>dispatch({type:'active',payload:'membership'})}>Membership</li>
                    <li className={`${activeData==='publication'?'link active':'link'}`} onClick={()=>dispatch({type:'active',payload:'publication'})}>Publication</li>
                    <li className={`${activeData==='award'?'link active':'link'}`} onClick={()=>dispatch({type:'active',payload:'award'})}>Award</li>
                    <li className={`${activeData==='contact'?'link active':'link'}`} onClick={()=>dispatch({type:'active',payload:'contact'})}>Contact</li>
                </ul>
                <div className="details-container">
                    {activeData==='education'||defaultBtn?<div>
                        <h2>Education</h2>
                        <p>Academic background will be disclosed soon.</p>
                    </div>:''}
                    {activeData==='experience'?<div>
                        <h2>Experience</h2>
                        <p>Have earned a lot of expartacular experience not only from country but also from abroad. </p>
                    </div>:''}
                    {activeData==='research'?<div>
                        <h2>Research Activities</h2>
                        <h3>Exploring topic : Good Governance and Buddhism</h3>
                        <p>Have earned a lot of expartacular experience not only from country but also from abroad. </p>
                    </div>:''}
                    {activeData==='membership'?<div>
                        <h2>Membership</h2>
                        <p>Have build a lot of expartacular Collaboration & Membership bond not only with inner communities but also with abroad citizen. </p>
                    </div>:''}
                    {activeData==='publication'?<div>
                        <h2>Publication</h2>
                        <p>Have made a lot of expartacular exhibition not only in the country but also in the abroad.
                        Here are some notable example,1. Bangladesh Studies." BBS : Bangladesh Studies (Buddhism). Bangladesh open University Gazipur, Bangladesh: 2012.
                        2. United Nations Day of Vesak 2019, Mindful leadership for Sustainable Peace,Vietnam , pp.189-214 , 2019 .
                        </p>
                    </div>:''}
                    {activeData==='award'?<div>
                        <h2>Award</h2>
                        <p>Have obtained a lot of award and prize not only from inner communities but also from abroad. </p>
                    </div>:''}
                    {activeData==='award'?<div>
                        <h2>Award</h2>
                        <p>Have obtained a lot of award and prize not only from inner communities but also from abroad. </p>
                    </div>:''}
                    {activeData==='contact'?<div style={{lineHeight:'1.8rem'}}>
                        <h3>{data.name}</h3>
                        <p style={{fontSize:'.9rem'}}>{data.title}</p>
                        <p>Department of Pali and Buddhist Studies</p>
                        <p>Faculty of Arts</p>
                        <p>Email: {data.email}</p>
                        <p>Phone: {data.phone}</p>
                    </div>:''}
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default MemberDetails
