import React, { useContext, useState } from 'react'

import bgImage from "../assets/img/logo_dark.jpg"
import { LANGUAGE, LANGUAGE_LIST } from '../data/langugage';
import { DataContext } from '../DataProvider';

const Header = ({handleLanguage}) => {

    const [language , setLanguage] = useState(LANGUAGE.DEFAULT);
    const { info, loading, error } = useContext(DataContext);
    const [backgroundImage, setBackgroundImage] = useState(info.backgroundImage);
 
    console.log(info);
    console.log("backgroundImage",backgroundImage);
    
    return (
    <header 
  style={{
    backgroundImage: `url('http://164.92.190.92/info/1734292074439-618760612-WhatsApp%20Image%202024-12-15%20at%2023.45.43.jpeg')`,
    // backgroundColor: "#ffffff",
    backgroundSize: "cover",
    backgroundPosition: "center"
    }}
>
        <div className="container">
            <div className="header-box">
                <div className="logo-box">
                    <img src={info.logo} alt="" />
                </div>

                <div className="language-box">
                    <div className="dropdown">
                        <a className="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {language}
                        </a>


                        <ul className="dropdown-menu">
                            {
                                LANGUAGE_LIST.map((lang)=>(
                                    <li key={lang} className={language == lang ? "active-lang" : ""} 
                                        onClick={()=> {
                                                setLanguage(lang)
                                                handleLanguage(lang)
                                            }
                                        }
                                    >
                                        <a className="dropdown-item">{lang}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header