import React from 'react';
import InfoText from './InfoText';
import blankImage from '../assets/img/blankImage.jpg'

const SearchCards = ({ searchedSubCategoryData, searchedProductData, language }) => {

    const handleScrollToProduct = (index) => {
        const targetElement = document.getElementById(`product-${index}`);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };

    const handleScrollToSubCategory = (titleEN) => {
        const targetElement = document.getElementById(`subcategory-${titleEN}`);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
      
  return (
    <div>
        <InfoText text={language=="AZ"?"Tapılan kateqoriyalar":"Finded categories"} ></InfoText>
        {searchedSubCategoryData.map((i,item)=>{
            return(
              <div key={i} id={`subcategory-${i}`} className="subcategory-card">
                  {item[`title${selectedLanguage}`]}
              </div>
            ) 
        })}
    
    <InfoText text={language=="AZ"?"Tapılan məhsullar":"Finded products"} ></InfoText>
        {searchedProductData.map((i,item)=>{
            return (
              <div key={i} id={`product-${i}`} className="product-card">
                {item[`title${selectedLanguage}`]}
              </div>
            )
        })}

    </div>
  );
};

export default SearchCards;
