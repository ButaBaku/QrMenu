import React, { useContext, useMemo, useRef, useState } from "react";
import CategoryCard from "./CategoryCard";
import Foods from "./Foods";
import { LANGUAGE } from "../data/langugage";
import { DataContext } from "../DataProvider";


const Meals = ({ selectedLanguage = LANGUAGE.AZ, inputValue }) => {

    const defineCurrentSubCategories=(thisCategory)=>{
        return subcategories.filter((i)=> i.categoryId == thisCategory.id);
    }

    const { categories, subcategories, products, info, loading, error } = useContext(DataContext);

    //Defaults
    const [selectedCategory, setSelectedCategory] = useState(categories[0] ? categories[0] : []);
    const [selectedSubCategories , setSelectedSubCategories] = useState(defineCurrentSubCategories(categories[0]));
    
  const handleChangeCategory = (currentCategory) => {    
    setSelectedCategory(currentCategory);
    const currentSubCategories = currentCategory.subCategories;
    setSelectedSubCategories(defineCurrentSubCategories(currentCategory));  
};


  

  
  return (
    <div className="meals">
      <div className="container">
        <div className="category-box">
          <div className="category-list">
            {categories.map((data, c) => (
              <CategoryCard
                key={c}
                language={selectedLanguage}
                data={data}
                handleState={handleChangeCategory}
                active={selectedCategory.id == data.id}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedSubCategories.map((item, i) => {        
        return (
          <div key={i}>
            <p>{item.title}</p>
            <Foods
              language={selectedLanguage}
              categoryTitle={item[`title${selectedLanguage}`]}
              data={item.products}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Meals;
