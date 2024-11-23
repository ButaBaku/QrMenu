import React, { useState } from 'react'

import logo from '../assets/img/logo_dark.jpg'
import { LANGUAGE, LANGUAGE_LIST } from '../data/langugage';

const Header = () => {

    const [language , setLanguage] = useState(LANGUAGE.AZ);

  return (
    <header>
        <div className="container">
            <div className="header-box">
                <div className="logo-box">
                    <img src={logo} alt="" />
                </div>

                <div className="language-box">
                    <div class="dropdown">
                        <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {language}
                        </a>


                        <ul class="dropdown-menu">
                            {
                                LANGUAGE_LIST.map((lang)=>(
                                    <li className={language == lang ? "active-lang" : ""} onClick={()=> setLanguage(lang)}><a class="dropdown-item" href="#">{lang}</a></li>
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