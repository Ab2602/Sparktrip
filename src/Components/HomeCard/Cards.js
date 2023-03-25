import React from 'react'
import '../HomeCard/Card.css'
import StarRateIcon from '@mui/icons-material/StarRate';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import '../HomeCard/Card.css'



function Cards({card = {}}) {
  const {rating,desc,price,title} = card
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
        {card.imgSrc.map((src,i) => (
          <SwiperSlide key={`img-${i}`} >
            <img src={src} className="card-img" style={{borderRadius:'1rem'}} />
          </SwiperSlide>
        ))}
        
      </Swiper>
{/* <img src={imgSrc[0]} className="card-img" style={{borderRadius:'1rem'}} />  */}


  

      <div className='card-info'>
      <h4>{title}</h4>
      
      <div className='card-rating' >
      <StarRateIcon style={{fontSize:'20px',marginBottom:'10.5px'}}  /> 
      <p style={{marginTop:'7px'}} >{rating}</p> 
      </div>
      </div>
       {/* <div className='placeinfo' ><h6>Pricing</h6></div> */}
      
       <p style={{marginTop:'0px',fontWeight:'600'}} >{price}</p>
      </div>
  )
}

export default Cards;
