const toyuq_yemekleri = [
    {
        id:1,
        name:"Kefli Beçə",
        gram: "(450qr)",
        desc:"",
        price:17.00,
    },
    {
        id:2,
        name:"Ləvəngili Toyuq Ruleti",
        gram: "",
        desc:"",
        price:10.00,
    },
    {
        id:3,
        name:"Tabaka",
        gram: "(1 ədəd)",
        desc:"",
        price:15.00,
    },
    {
        id:4,
        name:"Çolpa Çığırtma",
        gram: "(450qr)",
        desc:"",
        price:18.00,
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
                  <p class="${func(item)}">${item.name} <span class="gram">${item.gram}</span></p>
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
