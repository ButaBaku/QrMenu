import React, { useContext, useRef, useState } from "react";
import { FaLocationDot, FaTiktok, FaYoutube } from "react-icons/fa6";
import { DataContext } from "../DataProvider";
import { LANGUAGE } from "../data/langugage";
import { FaPhoneAlt } from "react-icons/fa";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

const Header = ({ tranferDataFunc }) => {
  const { info, loading, error } = useContext(DataContext);
  const [backgroundImage, setBackgroundImage] = useState(info.backgroundImage);
  const [logo, setLogo] = useState(info.logo);
  const [lang, setLang] = useState(localStorage.getItem("lang"));
  const searchInput = useRef();

  const handleSearchChange = () => {
    const value = searchInput.current.value;
    if(value){
      tranferDataFunc(value)
    }else{
      tranferDataFunc(false)
    }
  };

  return (
    <header>
      <div className="custom-design">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 325"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="bgImage"
              patternUnits="userSpaceOnUse"
              width="800"
              height="325"
            >
              <image
                href={backgroundImage}
                x="0"
                y="0"
                width="800"
                height="325"
                preserveAspectRatio="xMidYMid slice"
              />
            </pattern>
          </defs>
          <path
            d="M510,200 Q460,200 330,200 Q252,204 208,272 C180,312 132,324 72,324 C36,324 36,324 0,325 L0,0 L800,0 L800,200 L575,200 L330,200 Z"
            fill="url(#bgImage)"
          />
        </svg>

        <img className="logo-img" src={logo} alt="" />
        <a
          href="https://www.google.com/maps/place/40%C2%B024'43.5%22N+49%C2%B057'27.6%22E/@40.4120744,49.955088,17z/data=!3m1!4b1!4m4!3m3!8m2!3d40.4120744!4d49.9576629?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D"
          className="location-part"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLocationDot className="location-icon" />
          {lang == LANGUAGE.AZ ? "Ünvan:" : "Location:"}
          {info[`address${lang.toUpperCase()}`].slice(0, 4)}...
        </a>

        <button
          className="btn lang-btn"
          onClick={() => {
            localStorage.setItem(
              "lang",
              lang == LANGUAGE.AZ ? LANGUAGE.EN : LANGUAGE.AZ
            );
            window.location.reload();
          }}
        >
          {lang == LANGUAGE.AZ ? LANGUAGE.EN : LANGUAGE.AZ}
        </button>

        <div className="social-parts">
          <div className="service-pay">
            <p>{info[`title${lang.toUpperCase()}`]}</p>
          </div>
          
          <div className="header-down">
            <div className="social-platforms">
            <div className="social-icon">
              <a href={`tel:+${info.phoneNumbers[0]}`} className="fa-icon">
                <FaPhoneAlt />
              </a>
            </div>
            <div className="social-icon">
              <a
                href={`https://wa.me/${info.phoneNumbers[0]}`}
                className="fa-icon fa-icon-whatsapp"
              >
                <BsWhatsapp />
              </a>
            </div>
            <div className="social-icon">
              <a
                href={`${info.instagram}`}
                className="fa-icon fa-icon-whatsapp"
              >
                <BsInstagram />
              </a>
            </div>
            <div className="social-icon">
              <a
                href={`${info.tiktok}`}
                className="fa-icon fa-icon-whatsapp"
              >
                <FaTiktok />
              </a>
            </div>
            <div className="social-icon">
              <a
                href={`${info.youtube}`}
                className="fa-icon fa-icon-whatsapp"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className="search-box">
                <input
                  type="text"
                  placeholder={lang == LANGUAGE.AZ ? "Axtar" : "Search"}
                  className="search-input"
                  id="search-input"
                  ref={searchInput}
                  onChange={handleSearchChange}
                />
                <div className="search-icon" onClick={()=>{
                  const contentBox = document.getElementById('menu-content-box'); 
                  contentBox.scrollIntoView(({
                    behavior: "smooth"
                  }))                  
                }}>
                  <i className="fas fa-search"></i>
                </div>
        </div>
        </div>

        
          </div>

      </div>
    </header>
  );
};

export default Header;
