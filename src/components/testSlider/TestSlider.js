import { Navigation, Pagination,Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import newsData from '../../assets/data/newsData';
import './TestSlider.css';
import { Link } from 'react-router-dom';

const TestSlider = () => {
  return (
    <div className='slider-container'>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      loop='true'
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide> 
        <div className="slide">
        <div className="img-box">
            <div className="banner-back"></div>
            <img src={newsData[0].img} alt="news" />
        </div>
        <div className="title-box">
            <h1>{newsData[0].title}</h1>
            <span className='slide-bar'></span>
            <Link className='title-link' to={'/home/news-silder'} state={{img:newsData[0].img, title:newsData[0].title, date:newsData[0].date, url:newsData[0].url}}>Read More...</Link>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className="slide">
        <div className="img-box">
            <div className="banner-back"></div>
            <img src={newsData[1].img} alt="news" />
        </div>
        <div className="title-box">
            <h1>{newsData[1].title}</h1>
            <span className='slide-bar'></span>
            <Link className='title-link' to={'/home/news-silder'} state={{img:newsData[1].img, title:newsData[1].title, date:newsData[1].date, url:newsData[1].url}}>Read More...</Link>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className="slide">
        <div className="img-box">
            <div className="banner-back"></div>
            <img src={newsData[2].img} alt="news" />
        </div>
        <div className="title-box">
            <h1>{newsData[2].title}</h1>
            <span className='slide-bar'></span>
            <Link className='title-link' to={'/home/news-silder'} state={{img:newsData[2].img, title:newsData[2].title, date:newsData[2].date, url:newsData[2].url}}>Read More...</Link>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className="slide">
        <div className="img-box">
            <div className="banner-back"></div>
            <img src={newsData[3].img} alt="news" />
        </div>
        <div className="title-box">
            <h1>{newsData[3].title}</h1>
            <span className='slide-bar'></span>
            <Link className='title-link' to={'/home/news-silder'} state={{img:newsData[3].img, title:newsData[3].title, date:newsData[3].date, url:newsData[3].url}}>Read More...</Link>
        </div>
        </div>
        </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default TestSlider
