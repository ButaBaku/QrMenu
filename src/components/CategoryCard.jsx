import React from 'react'

const CategoryCard = ({data, handleState , active=false}) => {
  return (
    <div key={data.id} className={`category-item ${active ? "active-item" : ""}`} onClick={()=> handleState(data)}>
        <div className="image-box">
            <img src={data.image} alt="" />
        </div>

        <div className="text-box">
            <p className='content-text'>{data.title}</p>
        </div>
    </div>
  )
}

export default CategoryCard