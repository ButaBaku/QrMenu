const toyuq_yemekleri = [
    {
        id:1,
        name:"Kefli Beçə",
        nameEng: "Kefli becha chicken in wine",
        gram: "(450qr)",
        desc:"",
        descEng: "",
        price:20.00,
    },
    {
        id:2,
        name:"Ləvəngili Toyuq Ruleti",
        nameEng: "Chicken roulette with lavangi",
        gram: "",
        desc:"",
        descEng: "",
        price:8.00,
    },
    {
        id:3,
        name:"Tabaka",
        nameEng: "Tabaka chicken",
        gram: "",
        desc:"(1 ədəd)",
        descEng: "(1 chicken)",
        price:18.00,
    },
    {
        id:4,
        name:"Çolpa Çığırtma",
        nameEng: "Chicken chigirtma",
        gram: "(450qr)",
        desc:"",
        descEng: "",
        price:20.00,
    },
]

const toyuq_yemekleri_div = document.getElementById("toyuq-yemekleri");
const toyuq_yemekleriBtn = document.querySelector(".Toyuq_yemekleriBtn");
var toyuq_yemekleriinnerDiv = "";

toyuq_yemekleri.map((item) => {
  toyuq_yemekleriinnerDiv += `
  <div class="col-12 col-md-6">
                <div class="mehsul">
                  <div class="name-price">
                  <p class="${func(item)}">${localStorage.getItem("langMode")=="az"?item.name:item.nameEng} <span class="gram">${item.gram}</span></p>
                  <span class="${func_price(item.price)}">${item.price} AZN</span>
                  </div>
      
                </div>
              </div>
    `;
});

toyuq_yemekleriBtn.onclick=()=>{
  if(toyuq_yemekleri_div  .innerHTML==""){
    toyuq_yemekleri_div.innerHTML = toyuq_yemekleriinnerDiv;
  }else{
    toyuq_yemekleri_div.innerHTML="";  
  }
}

toyuq_yemekleri_div.innerHTML = "";
