import React from 'react'
import FoodCard from './FoodCard'
import seherYemek from "../assets/testImg/seherYemek.jpg"
import InfoText from './InfoText'

const Foods = ({headerTitle}) => {
  return (
    <div className="foods">
        <div className="container">
            <InfoText text={headerTitle} />
            <div className="row">
                <FoodCard img={seherYemek} name="Səhər yeməyi (2 nəfərlik)" price={20} desc="
                                                                            Pomidor, xiyar, yaşıl zeytun, qara zeytun, ağ pendir, motal pendiri, qauda pendiri, naduqi şoru, kərə yağı, qaymaq, doktor kolbasası, ovçu kolbasası, qaynadılmış sosiska,  qaynadılmış yumurta, kəsmikli blinçik, pomidor yumurta, yumurta sosiska, bal, əncir mürəbbəsi, çiyələk cemi, şokolad yağı, siqara börəyi, french tost,  çörək, çay                                                                        "/>
                <FoodCard img={seherYemek} name="Səhər yeməyi (2 nəfərlik)"/>
                <FoodCard img={seherYemek} name="Səhər yeməyi (2 nəfərlik)"/>
                <FoodCard img={seherYemek} name="Səhər yeməyi (2 nəfərlik)"/>
                <FoodCard img={seherYemek} name="Səhər yeməyi (2 nəfərlik)"/>
                <FoodCard img={seherYemek} name="Səhər yeməyi (2 nəfərlik)"/>
            </div>
        </div>
    </div>
  )
}

export default Foods