const baliq_yemekleri = [
  {
    id: 1,
    name: "Qızıl Balıq(Setkada)",
    gram: "(200qr)",
    desc:"",
    price: 18.0,
  },
  {
    id: 2,
    name: "Farel(Manqal/Tava)",
    gram: "(350qr)",
    desc:"",
    price: 15.0,
  },
  {
    id: 3,
    name: "Kütüm(Manqal/Tava)",
    gram: "(500qr)",
    desc:"",
    price: "25.00 / 35.00",
  },
  {
    id: 4,
    name: "Berj(Manqal/Tava)",
    gram: "(350qr)",
    desc:"",
    price: 25.0,
  },
  {
    id: 5,
    name: "Dorado(Manqal/Tava)",
    gram: "(450qr)",
    desc:"",
    price: 22.0,
  },
];

const baliq_yemekleri_avropa = [
  {
      id: 1,
      name: "Qızıl Balıq Özəl Sousda",
      gram: "(400qr)",
      desc: "",
      price: 22.00,
  },
  {
      id: 2,
      name: "Forel Tərəvəzlərlə",
      gram: "(350qr)",
      desc: "",
      price: 15.00,
  },
  {
      id: 3,
      name: "İspanaqlı Dorado balığı",
      gram: "(360qr)",
      desc: "",
      price: 22.00,
  },
  {
      id: 4,
      name: "Tuna File Manqalda",
      gram: "(280qr)",
      desc: "",
      price: 25.00,
  },
  
  
]



const baliq_yemekleri_div = document.getElementById("baliq-yemekleri");
const Baliq_yemekleriBtn = document.querySelector(".Baliq_yemekleriBtn");
var baliq_yemekleriinnerDiv = "";

baliq_yemekleri.map((item) => {
  baliq_yemekleriinnerDiv += `
  <div class="col-12 col-md-6">
                <div class="mehsul">
                  <div class="name-price">
                    <p>${item.name} <span class="gram">${item.gram}</span></p>
                    <span>${item.price} AZN</span>
                  </div>
      
                </div>
              </div>
    `;
});


const baliq_avropa = document.getElementById("baliq-yemekleri-avropa");

var baliq_yemekleri_avropainnerDiv ='<h2 class="avropaMetbexi">Avropa mətbəxi</h2>';


baliq_yemekleri_avropa.map((item) => {
  baliq_yemekleri_avropainnerDiv += `
  <div class="col-12 col-md-6">
                <div class="mehsul">
                  <div class="name-price">
                    <p>${item.name} <span class="gram">${item.gram}</span></p>
                    <span>${item.price} AZN</span>
                  </div>
      
                </div>
              </div>
    `;
});

Baliq_yemekleriBtn.onclick=()=>{
  if(baliq_yemekleri_div.innerHTML==""){
    baliq_yemekleri_div.innerHTML = baliq_yemekleriinnerDiv;
    // baliq_avropa.innerHTML="baliq_yemekleri_avropainnerDiv";
    baliq_avropa.innerHTML=baliq_yemekleri_avropainnerDiv;

  }else{
    baliq_yemekleri_div.innerHTML="";  
    baliq_avropa.innerHTML="";

  }
}

baliq_yemekleri_div.innerHTML = "";
