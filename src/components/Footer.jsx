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
        
        {info.phoneNumbers?.[0] &&
        <div className="social-card mb-2 mt-3">
                <div className="icon"><FaPhoneAlt /></div>
                <p className="social-text">0{info.phoneNumbers[0].substring(3)}</p>
            </div>}

            {info.phoneNumbers?.[1] &&
            <div className="social-card mb-2">
                <div className="icon"><FaPhoneAlt /></div>
                <p className="social-text">0{info.phoneNumbers[1].substring(3)}</p>
            </div>}

            {info.phoneNumbers?.[2] &&
            <div className="social-card">
                <div className="icon"><FaPhoneAlt /></div>
                <p className="social-text">0{info.phoneNumbers[2].substring(3)}</p>
            </div>}

            </div>
            <div className="col-6 col-md-3 my-auto">
            <div className="social-card">
                <div className="icon"><FaInstagram  /></div>
                <a href={info.instagram} className="social-text">Instagram</a>
            </div>
            </div>
            </div>
        </div>
        <div className="location">
                <h5>{localStorage.getItem("lang") == "AZ" ? `Ünvan` : `Address`}</h5>
                <p>{localStorage.getItem("lang") ? info.addressAZ : info.addressEN}</p>
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