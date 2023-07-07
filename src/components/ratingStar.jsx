import { FaStar } from "react-icons/fa";
import React, { useState } from "react";
import "../components/ratingStar.css"
import { useDispatch } from "react-redux";
import { setPostRate } from "./reducers/api";


const RatingStar = () => {
    const dispatch = useDispatch();
  const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
const handleClick = (ratingValue) => {
    setRating(ratingValue);
    dispatch(setPostRate(ratingValue));
    };
    


    return (
        <div>
            {[...Array(5)].map((star, i) => {

                const ratingValue = i + 1;

                return (
                    <label>
                        <input type="radio" name="rating" value={ratingValue} onClick={() => handleClick(ratingValue)} />
                        <FaStar className="star" color={ratingValue <= (hover || rating) ? 
                            "#ffc107" : "#e4e5e9"} size={20} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)} />
                    </label>
                )
            }
            )}
        </div>
    )

}
export default RatingStar;    