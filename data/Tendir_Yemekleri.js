const tendir_yemekler=[
    {
        id: 1,
        name: "Quzu Səbət",
        nameEng: "Lamb sebet",
        gram: "",
        desc: "(şoulu)",
        descEng: "",
        price: 75.00
      },
      {
        id: 2,
        name: "Təndirdə Quzu Qolu",
        nameEng: "Lamb arm in tandoor",
        gram: "",
        desc: "(ləvəngili | sadə)",
        descEng: "(simple/with lavangi)",
        price: 50.00
      },
      {
        id: 3,
        name: "Təndirdə Quzu Budu",
        nameEng: "Lamb leg in tandoor",
        gram: "",
        desc: "",
        descEng: "",
        price: 60.00
      },
      {
        id: 4,
        name: "Təndirdə Toyuq",
        nameEng: "Whole lamb in tandoor",
        gram: "",
        desc: "(ləvəngili | sadə)",
        descEng: "(with lavangi | with rice)",
        price: "25.00 \ 15.00 "
      },
      {
        id: 5,
        name: "Təndirdə Bütöv Quzu",
        nameEng: "Whole lamb in tandoor",
        gram: "",
        desc: "(ləvəngili | düyü ilə)(öncədən rezerv ilə)",
        descEng: "(with lavangi | with rice)(necessary to book in advance",
        price: ""
      },
]


const tendir_div = document.getElementById("tendir-yemekler");
const btn_tendir = document.querySelector(".Tendir_Yemekleri_Btn");
var tendir_yemeklerinnerDiv = "";

tendir_yemekler.map((item) => {
    tendir_yemeklerinnerDiv += `
  <div class="col-12 col-md-6">
                <div class="mehsul">
                  <div class="name-price">
                  <p class="${func(item)}">${item.name} <span class="gram">${item.gram}</span></p>
                  <span class="${func_price(item.price)}">${item.price} AZN</span>
                  </div>

                  <span class="desc">${item.desc}</span>
                </div>
              </div>
    `;
});

btn_tendir.onclick=()=>{
  if(tendir_div.innerHTML==""){
    tendir_div.innerHTML = tendir_yemeklerinnerDiv;
  }else{
    tendir_div.innerHTML="";  
  }
}

tendir_div.innerHTML = "";