const alchocolShisha = [
    {
        id: 1,
        name: "Redwine",
        gram: "",
        desc: "Redwine is used instead of water",
        price: 55.00
    },
    {
        id: 2,
        name: "White Wine",
        gram: "",
        desc: "White Wine is used instead of water",
        price: 55.00
    },
    {
        id: 3,
        name: "Wishey",
        gram: "",
        desc: "Wishey is used instead of water",
        price: 75.00
    },
       
]


// const sorbalar_div = document.getElementById("sorbalar");
// const btn_sorbalar = document.querySelector(".Sorbalar_Btn");
var alchocolshishainnerDiv = "";

alchocolShisha.map((item) => {
    alchocolshishainnerDiv += `
    <div class="col-12 col-md-6">
    <div class="mehsul">
      <div class="name-price">
      <p class="${func(item)}">${item.name} <span class="gram">${item.gram}</span></p>
      <span class="${func_price(item.price)}">${item.price} AZN</span>
      </div>
      <div class="desc">
      ${item.desc}
      </div>


    </div>
  </div>
    `;
});




const alchocolshishaBtn = document.querySelector(".alchocolshishaBtn");
const hiddenAlchocolShishaDiv = document.querySelector(".hiddenAlchocolShishaDiv");






alchocolshishaBtn.onclick=()=>{

    if(hiddenAlchocolShishaDiv.innerHTML==""){
        hiddenAlchocolShishaDiv.className="hiddenAlchocolShishaDiv myhiddenShisha"
        hiddenAlchocolShishaDiv.innerHTML=alchocolshishainnerDiv;
    }else{
        hiddenAlchocolShishaDiv.innerHTML=""
        hiddenAlchocolShishaDiv.className="d-none"
    }

}

