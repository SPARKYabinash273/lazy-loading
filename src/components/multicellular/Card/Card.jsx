import React from "react";
import "./Card.scss";
import star from "../../../assets/icons/star.svg";
import assureIcon from '../../../assets/icons/assureIcon.png';
import like from '../../../assets/icons/like.svg';
const Card = (props) => {
  return (
    <div className="card">
      <img
        className="card-img"
        src={props.image}
        alt=""
      />
      <div className="card-body">
        <div className="card-title">
          <p>{props.title}</p>
        </div>
        <div class="card-spec">{props.specification}</div>
        <div className='rating-container'>
          <span>
            <div className="card-rating">
             {props.rating}
              <img src={star} alt="" />
            </div>
          </span>
          <span className='review-count'>
            (31)
          </span>
          <span>
           {props.assure?   <img  className='assure-icon' src={assureIcon} height='21' alt=""/> :null}
          </span>
          
        </div>
       
        <div className="price-container">
              <div className="price-tag discount">
             ${props.discount }
              </div>
              <div className="price-tag mrp">
              ${(props.mrp + (props.mrp % props.offer)).toFixed( 2 )}
              </div>
              <div className="price-tag offer">
                  {props.offer}% Off
              </div>
          </div>
      
        
       <div className="card-like-container">
           <img src={like} alt=""/>
       </div>
      </div>
    </div>
  );
};
export default Card;
