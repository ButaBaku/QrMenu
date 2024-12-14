import React, { createContext, useState, useEffect } from 'react';

// Create Context
export const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [products, setProducts] = useState([]);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch all data
    const fetchData = async () => {
      try {
        setLoading(true);
        const categoryResponse = await fetch('http://164.92.190.92/api/v1/category');
        const subcategoryResponse = await fetch('http://164.92.190.92/api/v1/subcategory');
        const productResponse = await fetch('http://164.92.190.92/api/v1/product');

        // Check if all responses are successful
        if (!categoryResponse.ok || !subcategoryResponse.ok || !productResponse.ok) {
          throw new Error('Failed to fetch data from one or more APIs');
        }

        const categoryData = await categoryResponse.json();
        const subcategoryData = await subcategoryResponse.json();
        const productData = await productResponse.json();

        setCategories(categoryData);
        setSubcategories(subcategoryData);
        setProducts(productData);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the fetch runs only once on mount

  return (
    <DataContext.Provider value={{ categories, subcategories, products, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
