import React from 'react'
import FoodCard from './FoodCard'
import InfoText from './InfoText'

const Foods = ({index,language , categoryTitle="" , data=[]}) => {
  console.log("data.ingridientsAZ",data.ingridientsAZ);
  return (
    <div className="foods" id='meal-list'>
        <div className="container">
            <InfoText text={categoryTitle} id={`subcategory-${categoryTitle}`} />
            <div className="row">
              {
                data.map((item,index)=>(
                  <FoodCard 
                    index={index}
                    key={item.id}
                    img={item.image} 
                    name={item[`title${language}`]} 
                    price={item.price} 
                    desc={item.ingridientsAZ}
                  />
                ))
              }
            </div>
        </div>
    </div>
  )
}

export default Foods