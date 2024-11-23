import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './assets/sass/style.scss'
import Foods from './components/Foods'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Header />
      <Foods headerTitle="Səhər Yeməyi"/>
      {/* <Footer/>  */}
    </div>
  )
}

export default App