const usaq_yemekleri = [
    {
        id: 1,
        name: "Toyuq Naqqetsləri",
        gram: "(Free ilə) (250qr)",
        desc: "",
        price: 7.00
    },
    
    
    {
        id: 2,
        name: "Kartof Free",
        gram: "(150qr)",
        desc: "",
        price: 3.00
    },

    {
        id: 3,
        name: "Burger / Toyuq",
        gram: "(Ət / Toyuq) (200qr)",
        desc: "",
        price: "5.00 / 4.00"
    },
    
    {
        id: 4,
        name: "Pizza Margarita",
        gram: "(250qr)",
        desc: "",
        price: 8.00
    },
    
    {
        id: 5,
        name: "Pizza Polo",
        gram: "(340qr)",
        desc: "",
        price: 12.00
    },
    
    {
        id: 6,
        name: "Peperoni",
        gram: "(340qr)",
        desc: "",
        price: 12.00
    },
    
    {
        id: 7,
        name: "Mix Pizza",
        gram: "(390qr)",
        desc: "",
        price: 14.00
    },
    
    {
        id: 8,
        name: "BBQ Pizza",
        gram: "(330qr)",
        desc: "",
        price: 12.00
    },
    
    {
        id: 9,
        name: "Sendviç Toyuq",
        gram: "(200 qr)",
        desc: "",
        price: 6.00
    },
    
    
]

const usaq_menyusu_div = document.getElementById('usaq-menyusu');
const usaq_menyusu_btn = document.querySelector(".usaq_menyusu_Btn")
var usaq_menyusu_inner = "";

usaq_yemekleri.map((item)=>{
    usaq_menyusu_inner+= `
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

usaq_menyusu_btn.onclick=()=>{
    if(usaq_menyusu_div.innerHTML==""){
        usaq_menyusu_div.innerHTML = usaq_menyusu_inner;
    }else{
        usaq_menyusu_div.innerHTML="";  
    }
}

usaq_menyusu_div.innerHTML = "";