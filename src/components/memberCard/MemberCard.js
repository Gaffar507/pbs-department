import React from 'react'
import './memberCard.css'
import { Link } from 'react-router-dom'
import {CgProfile} from 'react-icons/cg'
const MemberCard = ({image,name,title,url,contact}) => {
  return (
    <div className='member-card-container'>
     <div className='member-image'>
        <img src={image} alt={name} />
     </div>
      <div className="card-title">
        <h3>{name}</h3>
        <h4>{title}</h4>
      </div>
        <Link to={`/members/member-details/${url}`} state={{image, name, title, contact}} className='member-btn'><span>View Profile </span> <span><CgProfile/></span></Link>
    </div>
  )
}

export default MemberCard
