const piveler =[
    {
        id:1,
        name:"Xırdalan",
        gram:"(0,5)",
        desc: "",
        price:4.00,
    },
    {
        id:2,
        name:"Xırdalan Filtersiz",
        gram:"(0,5)",
        desc: "",
        price:4.50,
    },
    {
        id:3,
        name:"Miller",
        gram:"(0,33)",
        desc: "",
        price:5.00,
    },
    {
        id:4,
        name:"Corona",
        gram:"(0,5)",
        desc: "",
        price:6.00,
    },
    {
        id:5,
        name:"Heineken",
        gram:"(0,5)",
        desc: "",
        price:5.00,
    },
    {
        id:6,
        name:"Erdinger",
        gram:"(0,5)",
        desc: "",
        price:7.00,
    },
    {
        id:7,
        name:"Efes",
        gram:"(0,5)",
        desc: "",
        price:5.00,
    },
    {
        id:8,
        name:"Efes",
        gram:"0%",
        desc: "",
        price:3.00,
    },
    {
        id:9,
        name:"Xırdalan Draft",
        gram:"",
        desc: "",
        price:3.00,
    },
    {
        id:10,
        name:"Xırdalan Filtersiz",
        gram:"",
        desc: "",
        price:3.50,
    },
    
]

const piveler_div = document.getElementById('pive');
const piveler_btn = document.querySelector(".pive_Btn")

var piveler_inner = "";

piveler.map((item)=>{
    piveler_inner+= `
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

piveler_btn.onclick=()=>{
    if(piveler_div.innerHTML==""){
        piveler_div.innerHTML = piveler_inner;
    }else{
        piveler_div.innerHTML="";  
    }
}

piveler_div.innerHTML = "";