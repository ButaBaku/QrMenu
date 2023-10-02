const qarnirler = [
    {
        id: 1,
        name: "Kartof Free",
        gram: "(150qr)",
        desc: "",
        price: 3.00,
    },
    {
        id: 2,
        name: "Rozmarinli Baby Kartof",
        gram: "(200qr)",
        desc: "",
        price: 4.00,
    },
    {
        id: 3,
        name: "Sadə Düyü",
        gram: "(200qr)",
        desc: "",
        price: 4.00,
    },
    {
        id: 4,
        name: "Badamlı Düyü",
        gram: "(200qr)",
        desc: "",
        price: 4.00,
    },
    {
        id: 5,
        name: "Tərəvəz İzqara",
        gram: "(200qr)",
        desc: "",
        price: 4.00,
    },
    {
        id: 6,
        name: "Ev Sayağı Kartof",
        gram: "(200qr)",
        desc: "",
        price: 4.00,
    },
    {
        id: 7,
        name: "Alma dilim",
        gram: "(150qr)",
        desc: "",
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