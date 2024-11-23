import React, { useState } from 'react'
import InfoText from './InfoText'
import CategoryCard from './CategoryCard'
import { mockCategories } from '../data/mockCategories';

const Categories = () => {

    const [selectedDategory , setSelectedCategory] = useState(mockCategories[0]);
  return (
    <div className='categories'>
        <div className="container">
            <InfoText text="Servis haqqı : 10%"/>

            <div className="category-box">
                <div className="category-list">
                    {
                        mockCategories.map((data , c)=>(
                            <CategoryCard 
                                data={data}  
                                handleState={setSelectedCategory}
                                active={selectedDategory.id == data.id}
                            />
                        ))
                    }                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Categories