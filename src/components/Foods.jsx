import React from 'react'
import FoodCard from './FoodCard'
import InfoText from './InfoText'

const Foods = ({language , categoryTitle="" , data=[]}) => {
  return (
    <div className="foods" id='meal-list'>
        <div className="container">
            <InfoText text={categoryTitle} />
            <div className="row">

              {
                data.map((item)=>(
                  <FoodCard 
                    key={item.id}
                    img={item.image} 
                    name={item[`title${language}`]} 
                    price={item.price} 
                    desc={item[`desc${language}`]}
                  />
                ))
              }
            </div>
        </div>
    </div>
  )
}

export default Foods