import React from 'react'

const FoodCard = ({img,name,price,desc}) => {
  return (
    <div className="col-12 col-md-4">
      <div className="card food-card">
        <img src={img} className="card-img-top food-img" alt="..." />
        <div className="card-body food-card-body">
          <div className="head-body">
          <h5 className="card-title card-text food-card-name">{name}</h5>
          <h5 className="card-title card-text food-card-price">{price}azn</h5>
          </div>

          <p className="card-text food-card-desc">{desc}</p>
        </div>
      </div>
    </div>
    
  )
}

export default FoodCard