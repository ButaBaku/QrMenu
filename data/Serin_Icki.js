const serin_icki = [
    {
        id: 1,
        name: "Badamlı Premium qazlı",
        nameEng: "Badamlı Premium sparkling water",
        gram: "(0,33 / 0,75)",
        desc: "",
        descEng: "",
        price: "2.00 / 4.00",
    },

    {
        id: 2,
        name: "Badamlı Premium qazsız",
        nameEng: "Badamlı Premium still water",
        gram: "(0,33 / 0,75)",
        desc: "",
        descEng: "",
        price: "2.00 / 4.00",
    },

    {
        id: 3,
        name: "Cola",
        nameEng: "Cola",
        gram: "(0,33)",
        desc: "",
        descEng: "",
        price: 3.00,
    },

    {
        id: 4,
        name: "Fanta",
        nameEng: "Fanta",
        gram: "(0,33)",
        desc: "",
        descEng: "",
        price: 3.00,
    },

    {
        id: 5,
        name: "Sprite",
        nameEng: "Sprite",
        gram: "(0,33)",
        desc: "",
        descEng: "",
        price: 3.00,
    },

    {
        id: 6,
        name: "İce Tea",
        nameEng: "İce Tea",
        gram: "(0,33)",
        desc: "",
        descEng: "",
        price: 3.00,
    },

    {
        id: 7,
        name: "Enerji içkisi (Red Bull)",
        nameEng: "Energy drink (Red Bull)",
        gram: "",
        desc: "",
        descEng: "",
        price: 6.00,
    },

    {
        id: 8,
        name: "Təbii Şirə",
        nameEng: "Natural juice",
        gram: "(0,33)",
        desc: "",
        descEng: "",
        price: 3.00,
    },

    {
        id: 9,
        name: "Təbii Şirə-Swell",
        nameEng: "Natural juice - Swell",
        gram: "(0,75)",
        desc: "",
        descEng: "",
        price: 7.00,
    },

    {
        id: 10,
        name: "Kompot",
        nameEng: "Compote",
        gram: "(1lt)",
        desc: "",
        descEng: "",
        price: 3.00,
    },

    {
        id: 11,
        name: "Natakhtari",
        nameEng: "Natakhtari",
        gram: "(0,5l)",
        desc: "(Düşes,Tərxun)",
        descEng: "(Dushes/tarkhun)",
        price: 3.00,
    },

    {
        id: 12,
        name: "Evsayağı Soyuq Çay",
        nameEng: "Homemade cold tea",
        gram: "(0,35)",
        desc: "",
        descEng: "",
        price: 3.00,
    },

    {
        id: 13,
        name: "Evsayağı Limonad",
        nameEng: "Homemade lemonade",
        gram: "(0.35)",
        desc: "",
        descEng: "",
        price: 3.00,
    },

    {
        id: 14,
        name: "Ayran",
        nameEng: "Ayran",
        gram: "(0,33)",
        desc: "",
        descEng: "",
        price: 3.00,
    },

    {
        id: 15,
        name: "Alma fresh",
        nameEng: "Frech apple juice",
        gram: "(0,33)",
        desc: "",
        descEng: "",
        price: 8.00,
    },

    {
        id: 16,
        name: "Portağal fresh",
        nameEng: "Fresh orange juice",
        gram: "(0,33)",
        desc: "",
        descEng: "",
        price: 8.00,
    },

    {
        id: 17,
        name: "Qreyfrut fresh",
        nameEng: "Fresh grapefruit juice",
        gram: "(0,33)",
        desc: "",
        descEng: "",
        price: 8.00,
    },

    {
        id: 18,
        name: "Ananas fresh",
        nameEng: "Ananas fresh",
        gram: "(0,33)",
        desc: "",
        descEng: "",
        price: 10.00,
    },   
]

const serin_icki_div = document.getElementById('serin-ickiler');
const serin_icki_btn = document.querySelector(".serin_icki_Btn")
var serin_icki_inner = "";

serin_icki.map((item)=>{
    serin_icki_inner+= `
    <div class="col-12 col-md-6">
    <div class="mehsul">
      <div class="name-price">
      <p class="${func(item)}">${item.name} <span class="gram">${item.gram}</span></p>
      <span class="${func_price(item.price)}">${item.price} AZN</span>
        </div>
        <div class="desc">${item.desc}</div>

    </div>
  </div>
    `
})

serin_icki_btn.onclick=()=>{
    if(serin_icki_div.innerHTML==""){
        serin_icki_div.innerHTML = serin_icki_inner;
    }else{
        serin_icki_div.innerHTML="";  
    }
}

serin_icki_div.innerHTML = "";