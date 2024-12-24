import React from 'react'

// import loadingImage from '../assets/img/logo-cream.jpeg'
const Loader = () => {
  return (
    <div className='loading-frame'>
        <div className="loading-container">
            <img src="https://raw.githubusercontent.com/ButaBaku/QrMenu/refs/heads/main/images/logo-cream-VwmW7GcQ-removebg-preview.png" alt="Logo" className="logo" />
            <div className="spinner"></div>
        </div>
    </div>
  )
}

export default Loader