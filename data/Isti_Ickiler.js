const isti_ickiler = [
    {
        id: 1,
        name: "Espresso",
        nameEng: "Espresso",
        gram: "",
        desc: "",
        descEng: "",
        price: 4.00,
    },

    {
        id: 2,
        name: "Double Espresso",
        nameEng: "Double Espresso",
        gram: "",
        desc: "",
        descEng: "",
        price: 5.00,
    },

    {
        id: 3,
        name: "Americano",
        nameEng: "Americano",
        gram: "",
        desc: "",
        descEng: "",
        price: 5.00,
    },

    {
        id: 4,
        name: "Cappuccino",
        nameEng: "Cappuccino",
        gram: "",
        desc: "",
        descEng: "",
        price: 7.00,
    },

    {
        id: 5,
        name: "Latte",
        nameEng: "Latte",
        gram: "",
        desc: "",
        descEng: "",
        price: 7.00,
    },

    {
        id: 6,
        name: "Raf",
        nameEng: "Raf",
        gram: "",
        desc: "",
        descEng: "",
        price: 8.00,
    },

    {
        id: 7,
        name: "Türk qəhvəsi",
        nameEng: "Turkish coffee",
        gram: "",
        desc: "",
        descEng: "",
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