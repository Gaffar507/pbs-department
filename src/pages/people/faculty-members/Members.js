import React from 'react'
import Navbar from '../../../components/navbar/Navbar';
import Hero from '../../../components/hero/Hero';
import './members.css'
import membersData from '../../../assets/data/membersData'
import MemberCard from '../../../components/memberCard/MemberCard'
import Footer from '../../../components/footer/Footer';

const Members = () => {
const{ name,title,image,url,contact} = membersData.chairman
  return (
    <div className='members-container'>
        <div className="navbar">
            <Navbar/>
        </div>
        <div className="hero">
          <Hero title={'Faculty Members'}/>
        </div>
<div className="members">
    <div className="chairman">
            <h2 style={{paddingBottom:'1rem'}}>Chairman</h2>
            {<MemberCard name={name} title={title} image={image} url={url} contact={contact}/>}
        </div>
        <div>
            <h2 style={{padding:'1rem'}}>Others Honorable Teachers</h2>
            <div className="teachers">
            {membersData.teachers.map((data)=><MemberCard key={data.id} {...data}/>)}
            </div>
        </div>
</div>
        <Footer/>
    </div>
  )
}

export default Members
