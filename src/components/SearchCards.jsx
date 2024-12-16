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
      {/* <InfoText text={language === "AZ" ? "Tapılan kateqoriyalar" : "Finded categories"} />
      {searchedSubCategoryData.map((item, index) => (
        <div key={index} id={`subcategory-${item.titleEN}`} className="subcategory-card container">
          <button 
          className='subcategory-btn'
          onClick={() => handleScrollToProduct(item.titleEN)}  
          >{item[`title${language}`]}</button> 
        </div>
      ))} */}

      <InfoText text={language === "AZ" ? "Tapılan məhsullar" : "Finded products"} />
      {searchedProductData.map((item, index) => (
        <div key={index} id={`product-${index}`} 
        className="product-card container"
        onClick={() => handleScrollToProduct(index)}>
  
            <div className="col-12 col-md-4">
      <div className="card food-card">
        <img src={item.image || blankImage} className="card-img-top food-img" alt="..." />
        <div className="card-body food-card-body">
          <div className="head-body">
          <h5 className="card-title card-text food-card-name">{item[`title${language}`]}</h5>
          <h5 className="card-title card-text food-card-price">{item.price}azn</h5>
          </div>

          <p className="card-text food-card-desc">{item.desc}</p>
        </div>
      </div>
    </div>
        </div>
      ))}
    </div>
  );
};

export default SearchCards;
