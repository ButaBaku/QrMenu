const milli_yemekleri = [
    {
        id:1,
        name:"Çoban qovurma",
        gram: "(250qr)",
        desc:"",
        price:12.00
    },
    {
        id:2,
        name:"Şəki Pitisi",
        gram: "(1 ədəd)",
        desc:"",
        price:12.00
    },
    {
        id:3,
        name:"Yarpaq Dolması",
        gram: "(200qr)",
        desc:"",
        price:7.00
    },
    {
        id:4,
        name:"Pip Dolması",
        gram: "(200qr)",
        desc:"",
        price:8.00
    },
    {
        id:5,
        name:"Quzu Buğlama",
        gram: "(300qr)",
        desc:"",
        price:10.00
    },
    {
        id:6,
        name:"Nar Qovurma(Quzu Əti)",
        gram: "(250qr)",
        desc:"",
        price:15.00
    },
    {
        id:7,
        name:"Nar Qovurma(Can Əti)",
        gram: "(250qr)",
        desc:"",
        price:18.00
    },
    {
        id:8,
        name:"Cız-Bız ",
        gram: "(250qr)",
        desc:"",
        price:8.00
    },
    {
        id:9,
        name:"Can Əti(turşulu/şabalıdlı)",
        gram: "(250qr)",
        desc:"",
        price:15.00
    },
    {
        id:10,
        name:"Şabalıdlı Maça Qovurma",
        gram: "(300qr)",
        desc:"",
        price:12.00
    },
    {
        id:11,
        name:"Şirəli Dana",
        gram: "(250qr)",
        desc:"",
        price:14.00
    },
    {
        id:12,
        name:"Can Əti Qaymaqlı",
        gram: "",
        desc:"",
        price:14.00
    },
    {
        id:13,
        name:"Şirəli Xoruz",
        gram: "(1 ədəd)",
        desc:"",
        price:25.00
    },
    {
        id:14,
        name:"Qaymaqlı Çolpa",
        gram: "",
        desc:"",
        price:18.00
    },
]


const mill_div = document.getElementById("milli-yemekler");
const btn_milli = document.querySelector(".Milli_Yemekler_Btn");
var milli_yemekleriinnerDiv = "";

milli_yemekleri.map((item) => {
    milli_yemekleriinnerDiv += `
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

btn_milli.onclick=()=>{
  if(mill_div.innerHTML==""){
    mill_div.innerHTML = milli_yemekleriinnerDiv;
  }else{
    mill_div.innerHTML="";  
  }
}

mill_div.innerHTML = "";
