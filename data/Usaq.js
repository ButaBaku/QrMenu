const usaq_yemekleri = [
    {
        id: 1,
        name: "Toyuq Naqqetsləri",
        nameEng: "Chicken nuggets",
        gram: "(free) (250qr)",
        desc: "",
        descEng: "",
        price: 7.00
    },
    
    
    {
        id: 2,
        name: "Kartof Free",
        nameEng: "French fries",
        gram: "(150qr)",
        desc: "",
        descEng: "",
        price: 3.00
    },

    {
        id: 3,
        name: "Burger / Toyuq",
        nameEng: "Burger",
        gram: "(200qr)",
        desc: "(Ət / toyuq)",
        descEng: "(meat/chicken)",
        price: "10.00 / 8.00"
    },
    
    {
        id: 4,
        name: "Mini Burger",
        nameEng: "Mini Burger",
        gram: "(250qr)",
        desc: "(Ət / toyuq)",
        descEng: "(meat/chicken)",
        price: "6.00 / 5.00"
    },

    {
        id: 5,
        name: "Pizza Margarita",
        nameEng: "Pizza Margarita",
        gram: "(250qr)",
        desc: "",
        descEng: "",
        price: 8.00
    },
    
    {
        id: 6,
        name: "Pizza Polo",
        nameEng: "Pizza Polo",
        gram: "(340qr)",
        desc: "",
        descEng: "",
        price: 12.00
    },
    
    {
        id: 7,
        name: "Peperoni",
        nameEng: "Peperoni",
        gram: "(340qr)",
        desc: "",
        descEng: "",
        price: 12.00
    },
    
    {
        id: 8,
        name: "Mix Pizza",
        nameEng: "Mix Pizza",
        gram: "(390qr)",
        desc: "",
        descEng: "",
        price: 14.00
    },
    {
        id: 9,
        name: "BBQ Pizza",
        nameEng: "BBQ Pizza",
        gram: "(330qr)",
        desc: "",
        descEng: "",
        price: 12.00
    },
    
    {
        id: 10,
        name: "Sendviç Toyuq",
        nameEng : "Chicken sandwich",
        gram: "(200 qr)",
        desc: "",
        descEng: "",
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
      <p class="${func(item)}">${localStorage.getItem("langMode")=="az"?item.name:item.nameEng} <span class="gram">${item.gram}</span></p>
      <span class="${func_price(item.price)}">${item.price} AZN</span>
        </div>
        <div class="desc">${localStorage.getItem("langMode")=="az"?item.desc:item.descEng}</div>

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