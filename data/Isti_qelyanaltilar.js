const isti_qelyanaltilar = [
  {
    id:1,
    name:"Quzu Kəllə Təndir (Şoulu)",
    nameEng:"Lamb head in tandoor (6 hours cooking)",
    gram: "",
    desc:"(Təndirdə bişirilmiş quzu kəllə, közlənmiş yaşıl bibər və ədviyyatlar ilə)",
    descEng:"(Lamb head baked in tandoor, grilled pepper and spices)",
    price: 19.00,
  },

  {
    id:2,
    name:"Sobada Pendirli Göbələk",
    nameEng:"Cheesy baked mushrooms",
    gram: "",
    desc:"(12 ədəd)",
    descEng:"(12 pieces) ",
    price: 7.00,
  },


  {
    id:3,
    name:"Kükü",
    nameEng:"Kuku herb omelette",
    gram: "(göyərti ilə)", // gram qabaginda yazilir
    desc:"",              // desc altinda yazilir
    descEng:"",
    price: 5.00,
  },


  {
    id:4,
    name:"Pomidor Yumurta",
    nameEng:"Tomatoes with eggs",
    gram: "",
    desc:"",
    descEng:"",
    price: 4.00,
  },

  {
    id:5,
    name:"Naxçıvan Qovurması",
    nameEng:"Nakhchivan gavurma",
    gram: "(250qr.)",
    desc:"",
    descEng:"",
    price: 12.00,
  },

  {
    id:6,
    name:"Kükü Naxçıvan Qovurması İlə",
    nameEng:"Nakhchivan gavurma with kuku",
    gram: "(250qr.)",
    desc:"",
    descEng:"",
    price: 14.00,
  },

  {
    id:7,
    name:"Krevetka Tempura Suxari",
    nameEng:"Crispy shrimp tempura",
    gram: "(250qr.)",
    desc:"(Qızarmış souslu krevet, göbələk, polorosso yarpağı, qovrulmuş küncüt, yaşıl soğan, suxari )",
    descEng:"(Roasted shrimp with sauce, polorosso leaves, toasted sesame seeds, green onion",
    price: 16.00,
  },
  
  
]


const isti_qelyenaltilar_avropa = [
  {
    id: 1,
    name: "Nuggets - Free",
    nameEng: "Nuggets - Free",
    gram: "( 250 qr.)",
    desc: "",
    descEng: "",
    price: 7.00
  },
  {
    id: 2,
    name: "Soğan Halqaları",
    nameEng: "Onion rings",
    gram: "( 180 qr.)",
    desc: "",
    descEng: "",
    price: 5.00
  },
  {
    id: 3,
    name: "BBQ Toyuq Qanadları",
    nameEng: "BBQ chicken rings",
    gram: "( 180 qr.)",
    desc: "",
    descEng: "",
    price: 6.00
  },
  {
    id: 4,
    name: "Mozzarella Sticks",
    nameEng: "Mozzarella Sticks",
    gram: "( 190 qr.)",
    desc: "",
    descEng: "",
    price: 6.00
  },
  {
    id: 5,
    name: "Kalmar Halqaları",
    nameEng: "Calmar rings",
    gram: "( 220 qr.)",
    desc: "",
    descEng: "",
    price: 11.00
  },
  {
    id: 6,
    name: "Krevetka Suxari",
    nameEng: "Shrimp tempura",
    gram: "(150 qr.)",
    desc: "",
    descEng: "",
    price: 12.00
  },
  {
    id: 7,
    name: "Kalmar Şefdən Özəl",
    nameEng: "Special shrimp from chef",
    gram: "( 330 qr.)",
    desc: "",
    descEng: "",
    price: 14.00
  },
  {
    id: 8,
    name: "Chicken Lolita",
    nameEng: "Chicken Lolita",
    gram: "( 130 qr.)",
    desc: "",
    descEng: "",
    price: 6.00
  }
  
  
  
]

const isti_qelyanaltilar_div = document.getElementById("isti-qelyanalti");
const btn_isti_qelyanalti = document.querySelector(".Isti_Qelyanalti_Btn");
var isti_qelyanaltilarinnerDiv = "";

isti_qelyanaltilar.map((item) => {
  isti_qelyanaltilarinnerDiv += `
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


const isti_qelyanaltilar_avropa_div = document.getElementById("isti-qelyanalti-avropa");

var isti_qelyanaltilar_avropainnerDiv ='<p class="avropaMetbexi">Avropa mətbəxi</p>';


isti_qelyenaltilar_avropa.map((item) => {
  isti_qelyanaltilar_avropainnerDiv += `
  <div class="col-12 col-md-6">
                <div class="mehsul">
                  <div class="name-price">
                  <p class="${func(item)}">${item.name} <span class="gram">${item.gram}</span></p>
                  <span class="${func_price(item.price)}">${item.price} AZN</span>
                  </div>
      
                </div>
              </div>
    `;
});



btn_isti_qelyanalti.onclick=()=>{
  if(isti_qelyanaltilar_div.innerHTML==""){
    isti_qelyanaltilar_div.innerHTML = isti_qelyanaltilarinnerDiv;
    isti_qelyanaltilar_avropa_div.innerHTML = isti_qelyanaltilar_avropainnerDiv;

  }else{
    isti_qelyanaltilar_div.innerHTML="";  
    isti_qelyanaltilar_avropa_div.innerHTML = "";
  }
}

isti_qelyanaltilar_div.innerHTML = "";
