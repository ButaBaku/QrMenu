import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="footer">
        <h4 className="footer-name">Buta Baku Restaurant</h4>
        
        <div className="socials row">
        
        <div className="col-3 col-md-12">
        <div className="social-card">
                <div className="icon"><FaFacebookF /></div>
                <p>+994123456789</p>
            </div>
            </div>
            <div className="col-3 col-md-12">
        <div className="social-card">
                <div className="icon"><FaFacebookF /></div>
                <p>+994123456789</p>
            </div>
            </div>
            {/* <div className="col-3 col-md-12"> */}
        {/* <div className="social-card">
                <div className="icon"><FaFacebookF /></div>
                <p>+994123456789</p>
            </div>
            </div>
            <div className="social-card">
                <div className="icon"><FaPhoneAlt /></div>
                <p>+994123456789</p>
            </div>
            <div className="social-card">
                <div className="icon"><FaInstagram  /></div>
                <p>+994123456789</p>
            </div> */}
        </div>
    </div>
  )
}

export default Footer