const isti_qelyanaltilar = [
    {
        id: 1,
        name: "Quzu Kəllə Təndir (Şoulu)",
        gram: "",
        desc: "Təndirdə bişirilmiş quzu kəllə, közlənmiş yaşıl bibər və ədviyyatlar ilə",
        price: 19.00,
    },
    {
        id: 2,
        name: "Sobada Pendirli Göbələk",
        gram: "(12 ədəd)",
        desc: "",
        price: 7.00,
    },
    {
        id: 3,
        name: "Kükü",
        gram: "",
        desc: "göyərti ilə",
        price: 6.00,
    },
    {
        id: 4,
        name: "Naxçıvan Qovurması",
        gram: "(250qr)",
        desc: "",
        price: 12.00,
    },
    {
        id: 5,
        name: "Kükü Naxçıvan Qovurması ilə",
        gram: "(250 qr)",
        desc: "",
        price: 14.00,
    },
    {
        id: 6,
        name: "Krevetka Tempura Suxari",
        gram: "(250qr)",
        desc: "Qızarmış souslu Krevet, göbələk, polorosso yarpağı, qovrulmuş küncüt, yaşıl soğan suxari",
        price: 16.00,
    },
]


const isti_qelyenaltilar_avropa = [
  {
      id: 1,
      name: "Nuggets - Free",
      gram: "(250qr)",
      desc: "",
      price: 7.00,
  },
  {
      id: 2,
      name: "Soğan Halqaları",
      gram: "(180qr)",
      desc: "",
      price: 5.00,
  },
  {
      id: 3,
      name: "BBQ Toyuq Qanadları",
      gram: "(180qr)",
      desc: "",
      price: 6.00,
  },
  {
      id: 4,
      name: "Mozzarella Stıcks",
      gram: "(190qr)",
      desc: "",
      price: 6.00,
  },
  {
      id: 5,
      name: "Kalmar Halqaları",
      gram: "(200qr)",
      desc: "",
      price: 11.00,
  },
  {
      id: 6,
      name: "Krevetka Suxarı",
      gram: "(150qr)",
      desc: "",
      price: 12.00,
  },
  {
      id: 7,
      name: "Kalmar Şefdən Özəl",
      gram: "(330qr)",
      desc: "",
      price: 14.00,
  },
  {
      id: 8,
      name: "Chicken Lolita",
      gram: "(130qr)",
      desc: "",
      price: 6.00,
  },
  
  
]

const isti_qelyanaltilar_div = document.getElementById("isti-qelyanalti");
const btn_isti_qelyanalti = document.querySelector(".Isti_Qelyanalti_Btn");
var isti_qelyanaltilarinnerDiv = "";

isti_qelyanaltilar.map((item) => {
  isti_qelyanaltilarinnerDiv += `
  <div class="col-12 col-md-6">
                <div class="mehsul">
                  <div class="name-price">
                    <p>${item.name} <span class="gram">${item.gram}</span></p>
                    <span>${item.price} AZN</span>
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
                    <p>${item.name} <span class="gram">${item.gram}</span></p>
                    <span>${item.price} AZN</span>
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
