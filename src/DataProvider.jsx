import React, { createContext, useState, useEffect } from 'react';

// Create Context
export const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [info, setInfo] = useState([]);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch all data
    const fetchData = async () => {
      try {
        setLoading(true);
        const categoryResponse = await fetch('http://164.92.190.92/api/v1/category');
  if (!categoryResponse.ok) throw new Error('Failed to fetch categories');
  const categoryData = await categoryResponse.json();
  setCategories(categoryData);

  const subcategoryResponse = await fetch('http://164.92.190.92/api/v1/subcategory');
  if (!subcategoryResponse.ok) throw new Error('Failed to fetch subcategories');
  const subcategoryData = await subcategoryResponse.json();
  setSubcategories(subcategoryData);

  const productResponse = await fetch('http://164.92.190.92/api/v1/product');
  if (!productResponse.ok) throw new Error('Failed to fetch products');
  const productData = await productResponse.json();
  setProducts(productData);

  const infoResponse = await fetch('http://164.92.190.92/api/v1/info');
  if (!infoResponse.ok) throw new Error('Failed to fetch info');
  const infoData = await infoResponse.json();
  setInfo(infoData);

        // const categoryData = await categoryResponse.json();
        // const subcategoryData = await subcategoryResponse.json();
        // const productData = await productResponse.json();
        // const infoData = await infoResponse.json();

        setCategories(categoryData);
        setSubcategories(subcategoryData);
        setProducts(productData);
        setInfo(infoData);

      } catch (err) {
        console.log(err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the fetch runs only once on mount

  return (
    <DataContext.Provider value={{ categories, subcategories, products, info, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
