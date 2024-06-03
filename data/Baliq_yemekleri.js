const baliq_yemekleri = [
  {
    id: 1,
    name: "Qızıl Balıq(Setkada)",
    nameEng: "Salmon on a grid",
    gram: "(200qr)",
    desc:"",
    descEng: "",
    price: 18.0,
  },
  {
    id: 2,
    name: "Farel",
    nameEng: "Trout",
    gram: "(350qr)",
    desc:"(manqal/tava)",
    descEng: "(grilled/roasted)",
    price: 15.0,
  },
  {
    id: 3,
    name: "Kütüm",
    nameEng: "Kutum",
    gram: "(500qr)",
    desc:"(manqal/tava)",
    descEng: "(grilled/roasted)",
    price: 35.00,
  },
  {
    id: 4,
    name: "Kütüm Ləvəngi",
    nameEng: "Kutum lavangi",
    gram: "",
    desc:"",
    descEng: "",
    price: 40.00,
  },
  {
    id: 5,
    name: "Berj",
    nameEng: "Perch",
    gram: "(350qr)",
    desc:"(manqal/tava)",
    descEng: "(grilled/roasted)",
    price: 25.00,
  },
  {
    id: 6,
    name: "Dorado",
    nameEng: "Dorado",
    gram: "(450qr)",
    desc:"(manqal/tava)",
    descEng: "(grilled/roasted)",
    price: 22.0,
  },
];

const baliq_yemekleri_avropa = [
  {
      id: 1,
      name: "Qızıl Balıq Özəl Sousda",
      nameEng: "Salmon with special sauce",
      gram: "(400qr)",
      desc: "",
      descEng: "",
      price: 25.00,
  },
  {
      id: 2,
      name: "Forel Tərəvəzlərlə",
      nameEng: "Trout with vegetables",
      gram: "(350qr)",
      desc: "",
      descEng: "",
      price: 15.00,
  },
  {
      id: 3,
      name: "İspanaqlı Dorado balığı",
      nameEng: "Dorado with spinach",
      gram: "(360qr)",
      desc: "",
      descEng: "",
      price: 22.00,
  },
  {
      id: 4,
      name: "Tuna File Manqalda",
      nameEng: "Grilled tuna fillet",
      gram: "(280qr)",
      desc: "",
      descEng: "",
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
                  <p class="${func(item)}">${item.name} <span class="gram">${item.gram}</span></p>
                    <span class="${func_price(item.price)}">${item.price} AZN</span>
                  </div>
                  <span class="desc">${item.desc}</span>

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
