import React, { useContext } from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { DataContext } from '../DataProvider';
const Footer = ({language}) => {

  const { info, loading, error } = useContext(DataContext);

  const currentYear = new Date().getFullYear();
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
                <p className="social-text">{info.phoneNumbers[0]}</p>
            </div>
            </div>
            <div className="col-6 col-md-3">
            <div className="social-card">
                <div className="icon"><FaInstagram  /></div>
                <a href={info.instagram} className="social-text">Instagram</a>
            </div> 
            </div>
            </div>
        </div>
        <div className="location">
                <h5>{language == "AZ" ? `Ünvan` : `Address`}</h5>
                <p>{language == "AZ" ? info.addressAZ : info.addressEN}</p>
            </div>

        <div className="last-footer">
        ©{currentYear} Buta Baku
        </div>

    </div>
    </div>
    </div>
  )
}

export default Footer