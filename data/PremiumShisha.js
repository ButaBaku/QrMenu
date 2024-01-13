const premiumShisha = [
    {
        id: 1,
        name: "Sultan",
        gram: "",
        desc: "Love 66, Blackberry, Orange",
        price: 35.00
    },
    {
        id: 2,
        name: "American Pie",
        gram: "",
        desc: "Apple, Cake, Cinnamoon",
        price: 35.00
    },
    {
        id: 3,
        name: "Banana Mama",
        gram: "",
        desc: "Banana milkshake, Ice",
        price: 35.00
    },
    {
        id: 4,
        name: "Baku Night",
        gram: "",
        desc: "Jasmine, Peach, Gum",
        price: 35.00
    },
    {
        id: 5,
        name: "Code 66",
        gram: "",
        desc: "Exotic blueberry, Bluemist, Pink",
        price: 40.00
    },
    {
        id: 6,
        name: "Spised Chai",
        gram: "",
        desc: "Chai masala, Jasmine flower",
        price: 35.00
    },
    {
        id: 7,
        name: "Signature Shisha by Nabi",
        gram: "",
        desc: "Backed peach, Lemon, Bubble gum",
        price: 35.00
    },
    
]


// const sorbalar_div = document.getElementById("sorbalar");
// const btn_sorbalar = document.querySelector(".Sorbalar_Btn");
var premiumshishainnerDiv = "";

premiumShisha.map((item) => {
    premiumshishainnerDiv += `
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




const premiumshishaBtn = document.querySelector(".premiumshishaBtn");
const hiddenPremimumMixedShishaDiv = document.querySelector(".hiddenPremimumMixedShishaDiv");






premiumshishaBtn.onclick=()=>{

    if(hiddenPremimumMixedShishaDiv.innerHTML==""){
        hiddenPremimumMixedShishaDiv.className="hiddenPremimumMixedShishaDiv myhiddenShisha"
        hiddenPremimumMixedShishaDiv.innerHTML=premiumshishainnerDiv;
    }else{
        hiddenPremimumMixedShishaDiv.innerHTML=""
        hiddenPremimumMixedShishaDiv.className="d-none"
    }

}

