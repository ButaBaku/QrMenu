import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './assets/sass/style.scss'
import Header from './components/Header'
import Meals from './components/Meals'
import { LANGUAGE } from './data/langugage'
import Footer from './components/Footer'

const App = () => {

  const [language , setLanguage] = useState(LANGUAGE.DEFAULT);
  return (
    <div>
      <Header handleLanguage={setLanguage}/>
      <Meals selectedLanguage={language}/>
      <Footer/> 
    </div>
  )
}

export default App