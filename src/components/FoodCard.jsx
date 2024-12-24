import React from 'react'
// import blankImage from '../assets/img/blankImage.jpg'

const FoodCard = ({index,img,name,price,desc}) => {
  return (
    <div id={`product-${index}`} className="col-12 col-md-4">
      <div className="card food-card">
        <img src={img || "https://raw.githubusercontent.com/ButaBaku/QrMenu/refs/heads/main/images/blankImage.jpg"} className="card-img-top food-img" alt="..." />
        <div className="card-body food-card-body">
          <div className="head-body">
          <h5 className="card-title card-text food-card-name">{name}</h5>
          <h5 className="card-title card-text food-card-price">{price}</h5>
          </div>

          <p className="card-text food-card-desc">{desc}</p>
        </div>
      </div>
    </div>
    
  )
}

export default FoodCard