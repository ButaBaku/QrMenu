const xemir_xorekleri =[
    {
        id: 1,
        name: "Blinçik",
        nameEng: "Blinchik with cottage cheese",
        gram: "(kəsmikli) (1ədəd)",
        desc: "",
        descEng: "",
        price: 2.00,
    },

    {
        id: 2,
        name: "Blinçik Panko",
        name: "Blinchik with meat",
        gram: "(1ədəd)",
        desc: "",
        descEng: "",
        price: 2.50,
    },

    {
        id: 3,
        name: "Göy kətəsi",
        nameEng: "Panko",
        gram: "",
        desc: "",
        descEng: "",
        price: 6.00,
    },

    {
        id: 4,
        name: "Qutab",
        nameEng: "Qutab",
        gram: "",
        desc: "(ət/göy/balqabaq/pendir) (1ədəd)",
        descEng: "(meat/greens/pumpkin/cheese) (piece)",
        price: 2.00,
    },
    {
        id: 5,
        name: "Yarpaq Xəngəl",
        nameEng: "Yarpag khinkal",
        gram: "",
        desc: "",
        descEng: "",
        price: 8.00,
    },

    {
        id: 7,
        name: "Gürcü Xəngəl",
        nameEng: "Georgian khinkali",
        gram: "",
        desc: "(5ədəd)",
        descEng: "(5pieces)",
        price: 6.00,
    },

    {
        id: 8,
        name: "Gürzə",
        nameEng: "Gürzə",
        gram: "",
        desc: "(12 ədəd)",
        descEng: "(12 pieces)",
        price: 10.00,
    },
]

const xemir_xorekleri_div = document.getElementById('xemir-yemekler');
const xemir_xorekleri_btn = document.querySelector(".xemir_yemekler_Btn")
var pizzalar_inner = "";

xemir_xorekleri.map((item)=>{
    pizzalar_inner+= `
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

xemir_xorekleri_btn.onclick=()=>{
    if(xemir_xorekleri_div.innerHTML==""){
        xemir_xorekleri_div.innerHTML = pizzalar_inner;
    }else{
        xemir_xorekleri_div.innerHTML="";  
    }
}

xemir_xorekleri_div.innerHTML = "";