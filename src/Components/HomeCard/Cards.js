import React from 'react'
import '../HomeCard/Card.css'
import StarRateIcon from '@mui/icons-material/StarRate';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";



function Cards({Cards}) {
  return (
    <div className='card-box'>
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        loop={true}
        mousewheel={true}
        cssMode={true}
        pagination
        modules={[Pagination, Navigation]}
        className="swiper-container"
      >
        {Cards.imgSrc.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} className="card-img" style={{borderRadius:'1rem'}} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='card-info'> 
      <h4>{Cards.title}</h4>
      
      <div className='card-rating' >
      <StarRateIcon style={{fontSize:'20px',marginBottom:'10.5px'}}  /> 
      <p style={{marginTop:'7px'}} >{Cards.rating}</p> 
      </div>
      </div>
       {/* <div className='placeinfo' ><h6>Pricing</h6></div> */}
       <p style={{marginTop:'0px',marginBottom:'1rem'}}>Beach and Sea Views</p>
       <p style={{marginTop:'0px',fontWeight:'600'}} >{Cards.price}</p>
      </div>
  )
}

export default Cards;
