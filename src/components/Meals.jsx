import React, { useContext, useMemo, useRef, useState } from "react";
import CategoryCard from "./CategoryCard";
import Foods from "./Foods";
import { LANGUAGE } from "../data/langugage";
import { DataContext } from "../DataProvider";
import FoodCard from "./FoodCard";
import InfoText from "./InfoText";


const Meals = ({ language, inputValue }) => {

    const defineCurrentSubCategories=(thisCategory)=>{
        return subcategories.filter((i)=> i.categoryId == thisCategory.id);
    }

    const { categories, products , subcategories, info, loading, error } = useContext(DataContext);

    const [searchProducts , setSearchProducts] = useState(products);    

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
                language={language}
                data={data}
                handleState={handleChangeCategory}
                active={selectedCategory.id == data.id}
              />
            ))}
          </div>
        </div>
      </div>
    

    {
        !inputValue ?

        <div>
            {

                selectedSubCategories.map((item, i) => {        
                    return (
                        <div key={i}>
                        <p>{item.title}</p>
                        <Foods
                        language={language}
                        categoryTitle={item[`title${language}`]}
                        data={item.products}
                        />
                    </div>
                    );
                })
            }
        </div>

          :
        // Axtaris sistemi
        
        <div>
            <InfoText text={language== LANGUAGE.AZ ? "Axtarış nəticəsində tapılanlar" : "Found products"} />
            {
                products.filter((i)=> i[`title${language}`].toLowerCase().includes(inputValue.toLowerCase()))
                .map((item)=>(
                    <FoodCard
                        key={item.id}
                        img={item.image} 
                        name={item[`title${language}`]} 
                        price={item.price} 
                        desc={item.ingridientsAZ}
                    />
                ))
            }
        </div>


    }
    </div>
  );
};

export default Meals;
