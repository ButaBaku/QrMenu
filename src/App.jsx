import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './assets/sass/style.scss'
import FoodCard from './components/FoodCard'
import Foods from './components/Foods'

const App = () => {
  return (
    <div>
      <Foods headerTitle="Səhər Yeməyi"/>
    </div>
  )
}

export default App