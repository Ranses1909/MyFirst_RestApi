import React from 'react'
import { Link } from 'react-router-dom'
// PLANS FOR NEXT DAY :  make a singleKeyboard page, and when i press buy it puts the keyboard in the cart.
// figure out how to use react-router and if i will need methods for my api
// https://www.mongodb.com/languages/mern-stack-tutorial

const ReadyKeyboards = ({img, price, description, _id}) => {
  // important to destructure because we are passing objects 
  return (
    <div className="keyboards">
      <div className="img-container"> 
        <img src={img} alt={'keyboard'} className="ready-img"/>

    </div>
    <div className="keyboard-footer">
      <p >{description}</p>
      <h4>{price}</h4>
      <Link to={`/details/${_id}`} className='keyboard-detail'>
        details
      </Link>
    </div>
    </div>
  ) 
}

export default ReadyKeyboards