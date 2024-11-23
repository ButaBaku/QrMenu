import React, { useState } from 'react'

import logo from '../assets/img/logo_dark.jpg'
import { LANGUAGE, LANGUAGE_LIST } from '../data/langugage';

const Header = ({handleLanguage}) => {

    const [language , setLanguage] = useState(LANGUAGE.DEFAULT);

  return (
    <header>
        <div className="container">
            <div className="header-box">
                <div className="logo-box">
                    <img src={logo} alt="" />
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