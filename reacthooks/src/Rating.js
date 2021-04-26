import React,{useRef} from 'react'
import ReactStars from 'react-rating-stars-component';

const Rating=({rate,handlerating})=>{

    const ratingChanged=(newRating)=>{
        console.log(newRating);
        handlerating(newRating)
    };
    return(
        <div>
            <ReactStars  count={5}
            onChange={ratingChanged}
            size={24}
            value={rate}
            activeColor="#ffd700"
            >
            </ReactStars>
        </div>
    )

}

export default Rating