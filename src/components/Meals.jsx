import React, { useContext, useRef, useState } from 'react'
import InfoText from './InfoText'
import CategoryCard from './CategoryCard'
import Foods from './Foods';
import { LANGUAGE } from '../data/langugage';
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { DataContext } from '../DataProvider';
import SearchCards from './SearchCards';
const Meals = ({selectedLanguage = LANGUAGE.AZ}) => {



    const { categories,subcategories,products,info, loading, error } = useContext(DataContext);
    const [selectedCategory , setSelectedCategory] = useState(categories[0]);

    const [searchedSubCategory,setSearchedSubCategory] = useState();
    const [searchedProduct,setSearchedProduct] = useState([]);
    
    const [isSearch , setIsSearch] = useState(false);

    console.log("subcategories",subcategories);
    console.log("products",products);

    const handleSearchChange = (e) => {


        if(e.target.value.length>3){
            console.log("daxil oldu");
            setIsSearch(true)
            if(selectedLanguage=="AZ"){
                console.log("az daxil oldu");
                console.log(e.target.value);
                const filteredSubcategories = subcategories.filter(sub => sub.titleAZ.toLowerCase().includes(e.target.value.toLowerCase()));
                console.log("filteredSubcategories",filteredSubcategories);                
                const filteredProducts = products.filter(product => product.titleAZ.toLowerCase().includes(e.target.value.toLowerCase()));
                console.log("filteredProducts",filteredProducts);
                
                console.log("searchedSubCategory before set AAA",searchedSubCategory);

                setSearchedSubCategory(filteredSubcategories);

                console.log("getdi??",filteredSubcategories);
                setSearchedProduct(filteredProducts);
                console.log("searchedSubCategory  after AAA",searchedSubCategory);
                console.log("setSearchedProduct AAA",searchedProduct);
            }
            else{
                console.log("end daxil oldu");

                var filteredSubcategories = subcategories.filter(sub => sub.titleEN.toLowerCase().includes(e.target.value.toLowerCase()));
                var filteredProducts = subcategories.filter(product => product.titleEN.toLowerCase().includes(e.target.value.toLowerCase()));

                setSearchedSubCategory(filteredSubcategories);
                setSearchedProduct(filteredProducts);
            console.log("searchedSubCategory AAA",searchedSubCategory);
            console.log("setSearchedProduct AAA",setSearchedProduct);
                
            }

            // console.log("searchedSubCategory AAA",searchedSubCategory);
            
        }else{
            setIsSearch(false)
        }
      };

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
            {/* <div className="services d-flex">

                <div className="location">
                <IoLocation className="location-icon"/>
                <a href="https://www.google.com/maps?q=40.4120744,49.9576629" target="_blank">
  {selectedLanguage == "AZ" ? `Ünvan: ${info.addressAZ}` : `Address: ${info.addressEN}`}
</a>


            <input
                type="text"
                placeholder="Search"
                onChange={handleSearchChange}
                // ref={searchInputRef}
              />
                </div>

            </div> */}
            <div className="service-pay">
            <InfoText text={info[`title${selectedLanguage}`]} />
                </div>

                <div className="socials">
        
                    <div className="social-center">
                    <div className="social-card">
                <div className="icon"><FaPhoneAlt /></div>
                <p className="social-text">{info.phoneNumbers[0]}</p>
            </div>
            
            <div className="social-card">
                <div className="icon"><FaInstagram  /></div>
                <a href={info.instagram} className="social-text">Instagram</a>
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

        {selectedCategory.subCategories.map((item, i) => {
  return (
    <div key={i}>
      <p>{item.title}</p>
      {isSearch?<SearchCards searchedSubCategoryData={searchedSubCategory} searchedProductData={searchedProduct} language={selectedLanguage} />
      
      :

      <Foods
        language={selectedLanguage}
        categoryTitle={item[`title${selectedLanguage}`]}
        data={products.filter(p=>p.subCategoryId==item.id)}
      />
      }
      
    </div>
  );
})}
        

    </div>
  )
}

export default Meals