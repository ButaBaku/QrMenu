import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-brown">
    <div className="container">
    <div className="footer">
        <h4 className="footer-name">Buta Baku Restaurant</h4>
        
        <div className="socials">
        
        <div className="row">
        <div className="col-6 col-md-3">
        <div className="social-card">
                <div className="icon"><FaPhoneAlt /></div>
                <p className="social-text">+994123456789</p>
            </div>
            </div>
            <div className="col-6 col-md-3">
            <div className="social-card">
                <div className="icon"><FaInstagram  /></div>
                <a href="" className="social-text">Instagram</a>
            </div> 
            </div>
            </div>
        </div>
        <div className="location">
                <h5>Ünvan</h5>
                <p>Filan filan yer</p>
            </div>

        <div className="last-footer">
        © Buta Baku
        </div>

    </div>
    </div>
    </div>
  )
}

export default Footer