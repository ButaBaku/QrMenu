const sorbalar = [
  {
    id: 1,
    name: "Düşbərə",
    nameEng: "Dushbara dumpling",
    gram: "(200qr.)",
    desc: "",
    descEng: "",
    price: 4.00
  },
  {
    id: 2,
    name: "Əriştə",
    nameEng: "Arishta noodle",
    gram: "(200qr.)",
    desc: "",
    descEng: "",
    price: 4.00
  },
  {
    id: 3,
    name: "Tomat",
    nameEng: "Tomato",
    gram: "(200qr.)",
    desc: "",
    descEng: "",
    price: 4.00
  },
  {
    id: 4,
    name: "Toyuq",
    nameEng: "Chicken",
    gram: "(200qr.)",
    desc: "",
    descEng: "",
    price: 4.00
  },
  {
    id: 5,
    name: "Mərci",
    nameEng: "Lentil",
    gram: "(200qr.)",
    desc: "",
    descEng: "",
    price: 4.00
  },
  {
    id: 6,
    name: "Dovğa",
    nameEng: "Dovga yougurt",
    gram: "(200qr.)",
    desc: "",
    descEng: "",
    price: 3.00
  },
]

const sorbalar_avropa = [
  {
    id: 1,
    name: "Tomat",
    nameEng: "Tomato soup",
    gram: "(200 qr.)",
    desc: "",
    descEng: "",
    price: 5.00
  },
  {
    id: 2,
    name: "Tərəvəz",
    nameEng: "Vegetable soup",
    gram: "(200 qr.)",
    desc: "",
    descEng: "",
    price: 5.00
  },
  {
    id: 3,
    name: "Göbələk",
    nameEng: "Mushroom soup",
    gram: "(200 qr.)",
    desc: "",
    descEng: "",
    price: 5.00
  },
  
      
]

const sorbalar_div = document.getElementById("sorbalar");
const btn_sorbalar = document.querySelector(".Sorbalar_Btn");
var sorbalarinnerDiv = "";

sorbalar.map((item) => {
  sorbalarinnerDiv += `
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



const sorbalar_avropa_div = document.getElementById("sorbalar-avropa");

var sorbalar_avropainnerDiv ='<p class="avropaMetbexi">Avropa mətbəxi</p>';


sorbalar_avropa.map((item) => {
    sorbalar_avropainnerDiv += `
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



btn_sorbalar.onclick=()=>{
  if(sorbalar_div.innerHTML==""){
    sorbalar_div.innerHTML = sorbalarinnerDiv;
    sorbalar_avropa_div.innerHTML=sorbalar_avropainnerDiv;
  }else{
    sorbalar_div.innerHTML="";  
    sorbalar_avropa_div.innerHTML="";

  }
}

sorbalar_div.innerHTML = "";
