const sneak = [
    {
        id: 1,
        name: "Lokum",
        gram: "(200qr)",
        desc: "",
        price: 18.50,
    },
    {
        id: 2,
        name: "Ribeye Steak",
        gram: "(300qr)",
        desc: "",
        price: 27.00,
    },
    {
        id: 3,
        name: "Dallas Steak",
        gram: "(450-500qr)",
        desc: "",
        price: 46.00,
    },
    {
        id: 4,
        name: "T-Bone Steak",
        gram: "(450-500qr)",
        desc: "",
        price: 48.00,
    },
    
    
]

const steak_div = document.getElementById('steak');
const steak_btn = document.querySelector(".steak_Btn")
var steak_inner = "";

sneak.map((item)=>{
    steak_inner+= `
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

steak_btn.onclick=()=>{
    if(steak_div.innerHTML==""){
        steak_div.innerHTML = steak_inner;
    }else{
        steak_div.innerHTML="";  
    }
}

steak_div.innerHTML = "";