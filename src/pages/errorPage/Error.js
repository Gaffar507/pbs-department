import React from 'react'
import './error.css'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div className='error'>
      <h1>404, page not found!</h1>
      <Link className='error-link' to={'/'}>Go back to Home</Link>
    </div>
  )
}

export default Error
