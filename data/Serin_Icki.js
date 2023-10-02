const serin_icki = [
    {
        id: 1,
        name: "Badamlı Premium qazlı",
        gram: "(0,33 / 0,75)",
        desc: "",
        price: "2.00 / 4.00",
    },

    {
        id: 2,
        name: "Badamlı Premium qazsız",
        gram: "(0,33 / 0,75)",
        desc: "",
        price: "2.00 / 4.00",
    },

    {
        id: 3,
        name: "Cola",
        gram: "(0,33)",
        desc: "",
        price: 3.00,
    },

    {
        id: 4,
        name: "Fanta",
        gram: "(0,33)",
        desc: "",
        price: 3.00,
    },

    {
        id: 5,
        name: "Sprite",
        gram: "(0,33)",
        desc: "",
        price: 3.00,
    },

    {
        id: 6,
        name: "İce Tea",
        gram: "",
        desc: "",
        price: 3.00,
    },

    {
        id: 7,
        name: "Enerji içkisi (Red Bull)",
        gram: "",
        desc: "",
        price: 6.00,
    },

    {
        id: 8,
        name: "Təbii Şirə",
        gram: "(0,33)",
        desc: "",
        price: 3.50,
    },

    {
        id: 9,
        name: "Təbii Şirə-Swell",
        gram: "(0,75)",
        desc: "",
        price: 7.00,
    },

    {
        id: 10,
        name: "Kompot",
        gram: "(1lt)",
        desc: "",
        price: 3.00,
    },

    {
        id: 11,
        name: "Natakhtari",
        gram: "(0,5l)",
        desc: "(Düşes,Tərxun)",
        price: 3.00,
    },

    {
        id: 12,
        name: "Evsayağı Soyuq Çay",
        gram: "(0,35)",
        desc: "",
        price: 3.00,
    },

    {
        id: 13,
        name: "Evsayağı",
        gram: "(0,33)",
        desc: "",
        price: 3.00,
    },

    {
        id: 14,
        name: "Ayran",
        gram: "(0,33)",
        desc: "",
        price: 3.00,
    },

    {
        id: 15,
        name: "Alma fresh",
        gram: "(0,33)",
        desc: "",
        price: 8.00,
    },

    {
        id: 16,
        name: "Portağal fresh",
        gram: "(0,33)",
        desc: "",
        price: 8.00,
    },

    {
        id: 17,
        name: "Qreyfrut fresh",
        gram: "(0,33)",
        desc: "",
        price: 8.00,
    },

    {
        id: 18,
        name: "Ananas fresh",
        gram: "(0,33)",
        desc: "",
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