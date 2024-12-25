import React, { useContext, useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './assets/sass/style.scss';
import Header from './components/Header';
import Meals from './components/Meals';
import { LANGUAGE } from './data/langugage';
import Footer from './components/Footer';
import { DataContext, DataProvider } from './DataProvider';
import Loader from './components/Loader';

const App = () => {
  const [language, setLanguage] = useState();
  const { loading, error } = useContext(DataContext);
  const [isSearch,setIsSearch] = useState(false);

  useEffect(() => {
    if(localStorage.getItem("lang")){
      setLanguage(localStorage.getItem("lang"));   
    }else{
      localStorage.setItem("lang" , LANGUAGE.DEFAULT);
      setLanguage(LANGUAGE.DEFAULT);
    }
  
  },[])

  const handleData =(e)=>{
    setIsSearch(e);
  }

  if (loading) {
    return (
      <Loader />
    );
  }

  if (error) {
    return (
      <div className="loading-screen">
      <img src="thttps://raw.githubuserconten.com/ButaBaku/QrMenu/refs/heads/main/images/no_internet.png" alt="" style={{"width":"100%"}}/>
    </div>
    );
  }

  return (
    <div>
      <Header tranferDataFunc={handleData} handleLanguage={setLanguage} />
      <Meals language={language} inputValue={isSearch} />
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
