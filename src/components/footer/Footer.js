import React from 'react';
import{HiOutlineMail,HiOutlinePhoneOutgoing} from 'react-icons/hi'
import {AiOutlineRight,AiOutlineTwitter,AiFillYoutube} from 'react-icons/ai'
import{FaFacebookF} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="top-part">
        <div className="contact-section">
          <h3 style={{fontWeight:'bold'}}>Contact</h3>
          <section>
            <p>Department of Pali and Buddhist Studies</p>
            <p>Dhaka University Campus, Dhaka-1000.</p>
          </section>
          <section>
            <p><HiOutlineMail/> dept.pbs@du.ac.bd</p>
            <p><HiOutlinePhoneOutgoing/> +88 09666 911 463 (Ext7273976)</p>
          </section>
          <section>
            <h4>Follow Us On</h4>
            <div className="contact-links">
              <FaFacebookF style={{fontSize:"1.5rem",color:'rgb(255, 166, 0)'}}/> <hr className='contact-bar' /> <AiOutlineTwitter style={{fontSize:"1.5rem",color:'rgb(255, 166, 0)'}}/> <hr className='contact-bar' /> <AiFillYoutube style={{fontSize:"1.5rem",color:'rgb(255, 166, 0)'}}/>
            </div>
          </section>
        </div>
        <div className="links-section">
          <h3 style={{fontWeight:'bold'}}>Other Links</h3>
          <div className="all-links">
            <Link className='footer-link'><AiOutlineRight/> Career</Link>
            <hr className='link-bar'/>
            <Link className='footer-link'><AiOutlineRight/> Webmail</Link>
            <hr className='link-bar' />
            <Link className='footer-link'><AiOutlineRight/> Website</Link>
          </div>

        </div>
        <div className="map-section">
          <h3 style={{fontWeight:'bold'}}>Find Us on Map</h3>
          <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.3664695052917!2d90.3907569741878!3d23.734307678681382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8c1e6da3533%3A0xf6941ebc0e2a8d44!2sDepartment%20of%20Pali%20%26%20Buddhists%20Studies%20University%20Of%20Dhaka!5e0!3m2!1sen!2sbd!4v1694545996885!5m2!1sen!2sbd" width="400" height="280" title='503' allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      <div className="bottom-part">
        <article>© 2023 University of Dhaka. All Rights Reserved.</article>
        <article>Design, Development, Maintenance and Clone by <span style={{color:'rgb(255, 166, 0)'}}>Abdul Gaffar</span>.</article>
      </div>
    </div>
  )
}

export default Footer;
