import React from 'react';
import Navbar from '../../../components/navbar/Navbar';
import  Hero from '../../../components/hero/Hero';
import Footer from '../../../components/footer/Footer'
import {Link} from 'react-router-dom'
import './history.css';

const History = () => {
  return (
    <div className='history-container'>
        <div className="navbar">
            <Navbar/>
        </div>
        <div className="hero">
          <Hero title={'History'}/>
        </div>
        <div className="history">
          <div className="left-history">
              <section> <strong style={{fontSize:'3rem'}}>P</strong>ali language and Literature is considered as an important store house of the information regarding ancient education, culture, history and tradition of this subcontinent. Pali language belongs to Middle Indo-Aryan Language family. Pali Literature contains the Buddha’s teaching and Philosophy and many ingredients of socio-political and cultural history of pre-Christian era are found in Pali literature. Realizing its importance the authority of Dhaka University took initiative to include the subject in the academic curriculum and imparting knowledge in different ways from the inception of the University. Since 1921 it has been studied in the Department of Sanskrit and Bangla, from 1937 it has been included in the Department of Sanskrit, from 1950 it has been studied under the Department of Bangla and Sanskrit. From 1970 it has been studied under the Department of Bangla and Sanskrit. In 2006 Pali became a separate Department departing from Sanskrit and the Department came to know as <strong style={{fontSize:'1.1rem'}}>“Department of Pali and Buddhist Studies.”</strong> From 2006-2007 session the Pali and Buddhist Studies Department has been carrying its own academic activities with dignity and honor as full-fledged Department.</section>
              <section>Now-a-says, the Department offering 4 years B.A. Honors Degree course and 1 year Master Degree course. Besides, M.Phil. and Ph. D courses are conducting. Now academic and official acrivities ofteh Department are conducting in the fifth floor ofArts Building under faculty of Arts.</section>
              <section>There is a rich library with valuable books and manuscripts in this Department. There is also a research Center, established in 2008, called “Center for Buddhist Heritage and Culture” under the Department, which conduct lectures, seminars, symposiums and various research activities. By the collaboration of the Department this Center has arranged an International Seminar in 2018 on “Buddhism: Civilization and Culture”. Many scholars from home and abroad took part in the Seminar. Moreover, every year Rabindra Bijoy Barua Memorial Lecture is arranged by the Department, which is started from 2012 and eminent scholars from home and abroad are invited to deliver the memorial lecture.</section>
              <section>Every year the Department arranges study tour, cultural function, Debate, picnic etc. to enrich the knowledge of the students. The students of the Department also take part in the national games and sports organized by the University. They also take part in the academic and voluntary activities of abroad. It is mention worth that some students of this Department took part in Indian Delegation Program and China-Bangladesh Youth Program organized by the government of those countries. Some students of this Department also took part in the DUCSU Election and elected members of DUCSU. Moreover, Many students of this Department occupied high position in the Government service and played vital role in the Development of Bangladesh.</section>
          </div>
          <div className="right-history">
            <span><hr className='about-bar'/><h3 style={{fontWeight:'bolder'}}>ABOUT</h3></span>
            <Link to={'/about/history'} className='history-link'>History</Link>
            <Link to={'/about/mission'} className='history-link'>Mission & Vision</Link>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default History
