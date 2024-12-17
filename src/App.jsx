import React, { useContext, useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './assets/sass/style.scss';
import Header from './components/Header';
import Meals from './components/Meals';
import { LANGUAGE } from './data/langugage';
import Footer from './components/Footer';
import { DataContext, DataProvider } from './DataProvider';
import loader from "./assets/img/cooking_loader_2.gif";

const App = () => {
  const [language, setLanguage] = useState(LANGUAGE.DEFAULT);
  const { loading, error } = useContext(DataContext);
  const [isSearch,setIsSearch] = useState(false);

  const handleData =(e)=>{
    setIsSearch(e);
  }

  if (loading) {
    return (
      <div className="loading-screen">
        <img src={loader} alt="" style={{"width":"100%"}}/>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-screen">
        <h2>Internetə qoşulun</h2>
      </div>
    );
  }

  return (
    <div>
      <Header tranferDataFunc={handleData} handleLanguage={setLanguage} />
      <Meals handleLanguage={language} inputValue={isSearch} />
      <Footer selectedLanguage={language} />
    </div>
  );
};

const AppWithDataProvider = () => (
  <DataProvider>
    <App />
  </DataProvider>
);

export default AppWithDataProvider;
