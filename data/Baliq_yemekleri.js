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


const baliq_yemekleri_div = document.getElementById("baliq-yemekleri");
const Baliq_yemekleriBtn = document.querySelector(".Baliq_yemekleriBtn");
var innerDiv = "";

baliq_yemekleri.map((item) => {
  innerDiv += `
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
  if(baliq_yemekleri_div  .innerHTML==""){
    baliq_yemekleri_div.innerHTML = innerDiv;
  }else{
    baliq_yemekleri_div.innerHTML="";  
  }
}

baliq_yemekleri_div.innerHTML = innerDiv;
