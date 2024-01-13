const isti_yemekler = [
    {
        id: 1,
        name: "Beef Stroganof",
        gram: "(250qr)",
        desc: "",
        price: 15.00,
    },
    {
        id: 2,
        name: "Rostbeef Özəl Sousda",
        gram: "(220qr)",
        desc: "",
        price: 15.00,
    },
    {
        id: 3,
        name: "Quessadilla Beef/Chicken",
        gram: "(180qr)",
        desc: "",
        price: "10.00 / 12.00",
    },
    {
        id: 4,
        name: "Fajitas Beef/Chicken",
        gram: "(240qr)",
        desc: "",
        price: "14.00 / 18.00",
    },
    {
        id: 5,
        name: "Nachos Beef/Chicken",
        gram: "(190qr)",
        desc: "",
        price: "14.00 / 18.00",
    },
    {
        id: 6,
        name: "Buritto Beef/Chicken",
        gram: "(230qr)",
        desc: "",
        price: "8.00 / 11.00",
    },
    {
        id: 7,
        name: "Qızardılmış ət küncüt ilə",
        gram: "(270qr)",
        desc: "",
        price: 15.00,
    },
    {
        id: 7,
        name: "Xaş",
        gram: "",
        desc: "",
        price: 8.00,
    },
    {
        id: 8,
        name: "Küncütlü Toyuq ruleti",
        gram: "(190qr)",
        desc: "",
        price: 9.00,
    },
    {
        id: 9,
        name: "Ət Ruleti",
        gram: "(190qr)",
        desc: "",
        price: 15.00,
    },
    {
        id: 10,
        name: "Köri Souslu Toyuq",
        gram: "(190qr)",
        desc: "",
        price: 14.00,
    },
    {
        id: 11,
        name: "Chicken Picatto",
        gram: "(330qr)",
        desc: "",
        price: 14.00,
    },    
    
]

const isti_yemekler__div = document.getElementById('isti-yemekler');
const isti_yemekler_btn = document.querySelector(".isti_yemekler_Btn")
var isti_yemekler_inner = "";

isti_yemekler.map((item)=>{
    isti_yemekler_inner+= `
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

isti_yemekler_btn.onclick=()=>{
    if(isti_yemekler__div.innerHTML==""){
        isti_yemekler__div.innerHTML = isti_yemekler_inner;
    }else{
        isti_yemekler__div.innerHTML="";  
    }
}

isti_yemekler__div.innerHTML = "";