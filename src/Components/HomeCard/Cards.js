import React from 'react'
import '../HomeCard/Card.css'
import StarRateIcon from '@mui/icons-material/StarRate';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../HomeCard/Card.css'
function Cards(props) {
var height=400;
var width=400;
  var imageUrl=props.card.cardPhotos[0].sizes.urlTemplate;
  imageUrl = imageUrl.replace("{width}", width).replace("{height}", height)
  return (
    <div className='card-box'>
        <img  src={imageUrl} className="card-img" style={{ borderRadius: '1rem' }} /> 
      <div className='card-info'>
      <h6>{props.card.title}</h6>
        <div className='card-rating' >
          <StarRateIcon style={{ fontSize: '20px', marginBottom: '10.5px' }} />
          <p style={{ marginTop: '7px' }} >{props.card.bubbleRating.rating}</p>
        </div>
      </div>
      <p style={{ marginTop: '0px', fontWeight: '600' }} >{props.card.priceForDisplay}</p>
    </div>
  )
}
export default Cards;
