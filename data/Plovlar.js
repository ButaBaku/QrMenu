const plovlar = [
    {
        id: 1,
        name: "Şah Plov",
        gram: "(öncədən rezerv) (1ədəd)",
        desc: "",
        price: "30.00 / 40.00",
    },

    {
        id: 2,
        name: "Fisincan Plov",
        gram: "",
        desc: "",
        price: 12.00,
    },

    {
        id: 3,
        name: "Səbzi Plov",
        gram: "(250qr)",
        desc: "",
        price: 12.00,
    },

    {
        id: 4,
        name: "Şüyüdlü Plov Quzu Maçası ilə",
        gram: "(250qr)",
        desc: "",
        price: 12.00,
    },

    {
        id: 5,
        name: "Turşu Qovurma Plov",
        gram: "(250qr)",
        desc: "",
        price: 12.00,
    },
]


const plovlar_div = document.getElementById('plovlar');
const plovlar_btn = document.querySelector(".plovlar_Btn")
var plovlar_inner = "";

plovlar.map((item)=>{
    plovlar_inner+= `
    <div class="col-12 col-md-6">
    <div class="mehsul">
      <div class="name-price">
        <p>${item.name} <span class="gram">${item.gram}</span></p>
        <span>${item.price} AZN</span>
        </div>
        <div class="desc">${item.desc}</div>

    </div>
  </div>
    `
})

plovlar_btn.onclick=()=>{
    if(plovlar_div.innerHTML==""){
        plovlar_div.innerHTML = plovlar_inner;
    }else{
        plovlar_div.innerHTML="";  
    }
}

plovlar_div.innerHTML = "";