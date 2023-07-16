import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import '../HomeCard/Card.css'
import StarRateIcon from '@mui/icons-material/StarRate';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { Pagination, Navigation, Virtual } from "swiper";
import '../HomeCard/Card.css'
import { Lazy } from 'react';



function Cards(props) {

  // useEffect(()=>{
  //   axios.get('https://jsonplaceholder.typicode.com/todos/1')
  //   .then((resp)=>{console.log(resp)})
  // },[
  return (
    <div className='card-box'>
        <img  src={props.card.cardPhotos[0].urltemplate} className="card-img" style={{ borderRadius: '1rem' }} /> 
      {/* <img src={imgSrc[0]} className="card-img" style={{borderRadius:'1rem'}} />  */}
      <div className='card-info'>
      <h6>{props.card.title}</h6>

        <div className='card-rating' >
          <StarRateIcon style={{ fontSize: '20px', marginBottom: '10.5px' }} />
          <p style={{ marginTop: '7px' }} >{props.card.bubbleRating.rating}</p>
        </div>
      </div>
      {/* <div className='placeinfo' ><h6>Pricing</h6></div> */}

      <p style={{ marginTop: '0px', fontWeight: '600' }} >{props.card.bubbleRating.count}</p>
    </div>
  )
}

export default Cards;
