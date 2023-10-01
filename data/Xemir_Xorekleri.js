const xemir_xorekleri =[
    {
        id: 1,
        name: "Blinçik",
        gram: "(kəsmikli) (1ədəd)",
        desc: "",
        price: 2.00,
    },

    {
        id: 2,
        name: "Blinçik",
        gram: "(ətli) (1ədəd)",
        desc: "",
        price: 2.50,
    },

    {
        id: 3,
        name: "Panko",
        gram: "(1ədəd)",
        desc: "",
        price: 2.50,
    },

    {
        id: 4,
        name: "Qutab",
        gram: "",
        desc: "(ət/göy/balqabaq/pendir) (1ədəd)",
        price: 2.00,
    },

    {
        id: 5,
        name: "Göy Kətəsi",
        gram: "",
        desc: "",
        price: 5.00,
    },

    {
        id: 6,
        name: "Yarpaq Xəngəl",
        gram: "",
        desc: "",
        price: 10.00,
    },

    {
        id: 7,
        name: "Gürcü Xəngəl",
        gram: "(5ədəd)",
        desc: "",
        price: 10.00,
    },

    {
        id: 8,
        name: "Gürzə",
        gram: "(12 ədəd)",
        desc: "",
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
        <p>${item.name} <span class="gram">${item.gram}</span></p>
        <span>${item.price} AZN</span>
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