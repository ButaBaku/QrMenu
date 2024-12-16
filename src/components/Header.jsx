import { useContext, useState } from "react";

import bgImage from "../assets/img/logo_dark.jpg";
import { LANGUAGE, LANGUAGE_LIST } from "../data/langugage";
import { DataContext } from "../DataProvider";

const Header = ({ handleLanguage }) => {
  const [language, setLanguage] = useState(LANGUAGE.DEFAULT);
  const { info, loading, error } = useContext(DataContext);
  const [backgroundImage, setBackgroundImage] = useState(info.backgroundImage);

  console.log(info);
  console.log("backgroundImage", backgroundImage);

  return (
    <header
      style={{
        backgroundImage: `url('http://164.92.190.92/info/1734292074439-618760612-WhatsApp%20Image%202024-12-15%20at%2023.45.43.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="header-box">
          <div className="logo-box">
            <img src={info.logo} alt="" />
          </div>
        </div>
      </div>

      <div className="header-info">
        <div className="container">
          <div>
            <p>Servis haqqı: Kabinetlər və zallar 10%,</p>
            <p>Şouproqram 15%</p>
            <div className="social-search">
              <div style={{ display: "flex", gap: 10 }} className="social-box">
                <a href="#" target="_blank" rel="noreferrer">
                  <i className="fa fa-phone"></i>
                </a>

                <a
                  href="https://api.whatsapp.com/message/6OMO3MJC4FHQD1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>

                <a
                  href="https://www.instagram.com/butabaku_restaurant/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>

                <a href="#" target="_blank" rel="noreferrer">
                  <i className="fab fa-tiktok"></i>
                </a>

                <a href="#" target="_blank" rel="noreferrer">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>

              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search"
                  className="search-input"
                  //   onChange={handleSearchChange}
                />

                <div className="search-icon">
                  <i className="fas fa-search"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
