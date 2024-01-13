const luxuryShisha = [
    {
        id: 1,
        name: "Starbuzz",
        gram: "",
        desc: "Melon blue, Code 69, Cocojumbo",
        price: 45.00
    },
    {
        id: 2,
        name: "Musthave",
        gram: "",
        desc: "Goos berrv, Pink man, Cola, Gradeppruit",
        price: 45.00
    },
    {
        id: 3,
        name: "Dark Side",
        gram: "",
        desc: "Back b, Polar cream grape core",
        price: 45.00
    },
       
]


// const sorbalar_div = document.getElementById("sorbalar");
// const btn_sorbalar = document.querySelector(".Sorbalar_Btn");
var luxuryshishainnerDiv = "";

luxuryShisha.map((item) => {
    luxuryshishainnerDiv += `
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




const luxuryshishaBtn = document.querySelector(".luxuryshishaBtn");
const hiddenLuxuryShishaDiv = document.querySelector(".hiddenLuxuryShishaDiv");






luxuryshishaBtn.onclick=()=>{

    if(hiddenLuxuryShishaDiv.innerHTML==""){
        hiddenLuxuryShishaDiv.className="hiddenLuxuryShishaDiv myhiddenShisha"
        hiddenLuxuryShishaDiv.innerHTML=luxuryshishainnerDiv;
    }else{
        hiddenLuxuryShishaDiv.innerHTML=""
        hiddenLuxuryShishaDiv.className="d-none"
    }

}

