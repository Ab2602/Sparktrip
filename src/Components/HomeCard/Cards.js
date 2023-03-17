import React from 'react'
import '../HomeCard/Card.css'
import StarRateIcon from '@mui/icons-material/StarRate';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";



function Cards() {
  return (
    <div className='card-box'>
      {/* <Swiper
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
        
      </Swiper> */}
      <img src='https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768' className="card-img" style={{borderRadius:'1rem'}} /> 
      <div className='card-info'>
      <h4>Jaipur</h4>
      
      <div className='card-rating' >
      <StarRateIcon style={{fontSize:'20px',marginBottom:'10.5px'}}  /> 
      <p style={{marginTop:'7px'}} >4.88</p> 
      </div>
      </div>
       {/* <div className='placeinfo' ><h6>Pricing</h6></div> */}
      
       <p style={{marginTop:'0px',fontWeight:'600'}} >₹8000/Night</p>
      </div>
  )
}

export default Cards;
