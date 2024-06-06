const sendvic = [
    {
        id: 1,
        name: "Wrap Chicken/Beef",
        nameEng: "Wrap Chicken/Beef",
        gram: "(250qr)",
        desc: "",
        price: "7.00 / 9.00",
    },
    {
        id: 2,
        name: "Sezar Roll Chicken/Shrimp/Salmon",
        nameEng: "Sezar Roll Chicken/Shrimp/Salmon",
        gram: "(170qr)",
        desc: "",
        price: "8.00 / 11.00 / 13.00",
    },
    {
        id: 3,
        name: "Club Sendviç",
        nameEng: "Club Sandwich",
        gram: "(260qr)",
        desc: "",
        price: 9.00,
    },
    {
        id: 4,
        name: "Vietnam Sendviç",
        nameEng: "Vietnam Sandwich",
        gram: "(210qr)",
        desc: "",
        price: 11.00,
    },
    {
        id: 5,
        name: "Salmon Sendviç",
        nameEng: "Salmon Sandwich",
        gram: "(190qr)",
        desc: "",
        price: 14.00,
    },
    {
        id: 6,
        name: "Tuna Sendviç",
        nameEng: "Tuna Sandwich",
        gram: "(170qr)",
        desc: "",
        price: 10.00,
    },
    
]

const sendvic_div = document.getElementById('sendvic');
const sendvic_btn = document.querySelector(".sendvic_Btn")
var sendvic_inner = "";

sendvic.map((item)=>{
    sendvic_inner+= `
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

sendvic_btn.onclick=()=>{
    if(sendvic_div.innerHTML==""){
        sendvic_div.innerHTML = sendvic_inner;
    }else{
        sendvic_div.innerHTML="";  
    }
}

sendvic_div.innerHTML = "";