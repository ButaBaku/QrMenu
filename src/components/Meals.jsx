import React, { useContext, useState } from 'react'
import InfoText from './InfoText'
import CategoryCard from './CategoryCard'
import Foods from './Foods';
import { LANGUAGE } from '../data/langugage';
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { DataContext } from '../DataProvider';
const Meals = ({selectedLanguage = LANGUAGE.AZ}) => {



    const { categories,subcategories,products, loading, error } = useContext(DataContext);
    const [selectedCategory , setSelectedCategory] = useState(categories[0]);
    console.log("categories",categories);
    console.log("subcategories",subcategories);
    console.log("products",products);
    console.log("selected category",selectedCategory);
 
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
            <div className="services d-flex">

                <div className="location">
                <IoLocation className="location-icon"/>
                <a href="https://www.google.com/maps?q=40.4120744,49.9576629" target="_blank">
  Ünvan: Rüstəm Rüstəmov 2524, Baku
</a>

                </div>

            </div>
            <div className="service-pay">
                <InfoText text="Servis haqqı : 10%"/>
                </div>

                <div className="socials">
        
                    <div className="social-center">
                    <div className="social-card">
                <div className="icon"><FaPhoneAlt /></div>
                <p className="social-text">+994503020203</p>
            </div>
            
            <div className="social-card">
                <div className="icon"><FaInstagram  /></div>
                <a href="https://www.instagram.com/butabaku_restaurant" className="social-text">Instagram</a>
            </div> 
                    </div>
            </div>
            <div className="category-box">
                <div className="category-list">
                    {categories.map((data , c)=>(
                            <CategoryCard 
                                key={c}
                                language={selectedLanguage}
                                data={data}  
                                handleState={handleChangeCategory}
                                active={selectedCategory.id == data.id}
                            />
                        ))
                    }                    
                </div>
            </div>
            
        </div>

        {console.log("bu",selectedCategory.subCategories)}
        {selectedCategory.subCategories.map((item, i) => {
  return (
    <div key={i}>
      <p>{item.title}</p>
      <Foods
        language={selectedLanguage}
        categoryTitle={item[`title${selectedLanguage}`]}
        data={products.filter(p=>p.subCategoryId==item.id)}
      />
    </div>
  );
})}
        

    </div>
  )
}

export default Meals