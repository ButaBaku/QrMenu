import React, { useState } from 'react'
import InfoText from './InfoText'
import CategoryCard from './CategoryCard'
import { mockCategories } from '../data/mockCategories';
import Foods from './Foods';
import { mockMealData } from '../data/mockMeal';
import { LANGUAGE } from '../data/langugage';

const Meals = ({selectedLanguage = LANGUAGE.AZ}) => {


    const [selectedDategory , setSelectedCategory] = useState(mockCategories[0]);
    
    const handleChangeCategory=(e)=>{
        setSelectedCategory(e);
        document.getElementById('meal-list').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    } 

  return (
    <div className='meals'>
        <div className="container">
            <InfoText text="Servis haqqı : 10%"/>
            
            <InfoText text={`Correctly pass to component ${selectedLanguage}`}/>

            <div className="category-box">
                <div className="category-list">
                    {
                        mockCategories.map((data , c)=>(
                            <CategoryCard 
                                key={c}
                                language={selectedLanguage}
                                data={data}  
                                handleState={handleChangeCategory}
                                active={selectedDategory.id == data.id}
                            />
                        ))
                    }                    
                </div>
            </div>
            
        </div>

        <Foods
            language={selectedLanguage}
            categoryTitle={selectedDategory[`title${selectedLanguage}`]} 
            data={mockMealData}
        />


    </div>
  )
}

export default Meals