const sorbalar = [
    {
        id: 1,
        name: "Düşbərə",
        gram: "(200.qr)",
        desc: "",
        price: 5.00
    },
    {
        id: 2,
        name: "Əriştə",
        gram: "(200.qr)",
        desc: "",
        price: 5.00
    },
    {
        id: 3,
        name: "Tomat",
        gram: "(200.qr)",
        desc: "",
        price: 5.00
    },
    {
        id: 4,
        name: "Toyuq",
        gram: "(200.qr)",
        desc: "",
        price: 5.00
    },
    {
        id: 5,
        name: "Mərci",
        gram: "(200.qr)",
        desc: "",
        price: 5.00
    },
    {
        id: 6,
        name: "Dovğa",
        gram: "(200.qr)",
        desc: "",
        price: 5.00
    },
]

const sorbalar_div = document.getElementById("sorbalar");
const btn_sorbalar = document.querySelector(".Sorbalar_Btn");
var innerDiv = "";

isti_qelyanaltilar.map((item) => {
  innerDiv += `
  <div class="col-12 col-md-6">
                <div class="mehsul">
                  <div class="name-price">
                    <p>${item.name} <span class="gram">${item.gram}</span></p>
                    <span>${item.price} AZN</span>
                  </div>

                  <span class="desc">${item.desc}</span>
                </div>
              </div>
    `;
});

btn_sorbalar.onclick=()=>{
  if(sorbalar_div.innerHTML==""){
    sorbalar_div.innerHTML = innerDiv;
  }else{
    sorbalar_div.innerHTML="";  
  }
}

sorbalar_div.innerHTML = innerDiv;
