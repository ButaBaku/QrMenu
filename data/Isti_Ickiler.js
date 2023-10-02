const isti_ickiler = [
    {
        id: 1,
        name: "Espresso",
        gram: "",
        desc: "",
        price: 4.00,
    },

    {
        id: 2,
        name: "Double Espresso",
        gram: "",
        desc: "",
        price: 5.00,
    },

    {
        id: 3,
        name: "Americano",
        gram: "",
        desc: "",
        price: 5.00,
    },

    {
        id: 4,
        name: "Cappuccino",
        gram: "",
        desc: "",
        price: 7.00,
    },

    {
        id: 5,
        name: "Latte",
        gram: "",
        desc: "",
        price: 7.00,
    },

    {
        id: 6,
        name: "Raf",
        gram: "",
        desc: "",
        price: 7.00,
    },

    {
        id: 7,
        name: "Türk qəhvəsi",
        gram: "",
        desc: "",
        price: 4.00,
    },

]

const isti_icki_div = document.getElementById('isti-ickiler');
const isti_icki_btn = document.querySelector(".isti_icki_Btn")
var isti_icki_inner = "";

isti_ickiler.map((item)=>{
    isti_icki_inner+= `
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

isti_icki_btn.onclick=()=>{
    if(isti_icki_div.innerHTML==""){
        isti_icki_div.innerHTML = isti_icki_inner;
    }else{
        isti_icki_div.innerHTML="";  
    }
}

isti_icki_div.innerHTML = "";