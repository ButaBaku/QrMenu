const qarnirler = [
    {
        id: 1,
        name: "Kartof Free",
        nameEng: "French fries",
        gram: "(150qr)",
        desc: "",
        descEng: "",
        price: 3.00,
    },
    {
        id: 2,
        name: "Sadə Düyü",
        nameEng: "Rice",
        gram: "(200qr)",
        desc: "",
        descEng: "",
        price: 4.00,
    },
    {
        id: 3,
        name: "Badamlı Düyü",
        nameEng: "Almond rice",
        gram: "(200qr)",
        desc: "",
        descEng: "",
        price: 5.00,
    },
    {
        id: 4,
        name: "Tərəvəz İzqara",
        nameEng: "Grilled vegetables",
        gram: "(200qr)",
        desc: "",
        descEng: "",
        price: 4.00,
    },
    {
        id: 5,
        name: "Ev Sayağı Kartof",
        nameEng: "Homemade potato",
        gram: "(200qr)",
        desc: "",
        descEng: "",
        price: 4.00,
    },
]

const qarnirler_div = document.getElementById('qarnirler');
const qarnirler_btn = document.querySelector(".qarnirler_Btn")
var qarnirler_inner = "";

qarnirler.map((item)=>{
    qarnirler_inner+= `
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

qarnirler_btn.onclick=()=>{
    if(qarnirler_div.innerHTML==""){
        qarnirler_div.innerHTML = qarnirler_inner;
    }else{
        qarnirler_div.innerHTML="";  
    }
}

qarnirler_div.innerHTML = "";