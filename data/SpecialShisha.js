const specialShisha = [
    {
        id: 1,
        name: "Buta Baku </br> Special Sisha Show",
        gram: "",
        desc: "",
        price: 90.00
    },
       
]


// const sorbalar_div = document.getElementById("sorbalar");
// const btn_sorbalar = document.querySelector(".Sorbalar_Btn");
var specialshishainnerDiv = "";

specialShisha.map((item) => {
    specialshishainnerDiv += `
    <div class="col-12 col-md-6">
    <div class="mehsul">
      <div class="name-price">
      <p class="${func(item)} buta-name ">${item.name} <span class="gram">${item.gram}</span></p>
      <span class="${func_price(item.price)} buta-price ">${item.price} AZN</span>
      </div>
      <div class="desc">
      ${item.desc}
      </div>


    </div>
  </div>
    `;
});



console.log(specialshishainnerDiv);

const specialshishaBtn = document.querySelector(".specialshishaBtn");
const hiddenSpecialShishaDiv = document.querySelector(".hiddenSpecialShishaDiv");






specialshishaBtn.onclick=()=>{

    if(hiddenSpecialShishaDiv.innerHTML==""){
        hiddenSpecialShishaDiv.className="hiddenSpecialShishaDiv myhiddenShisha"
        hiddenSpecialShishaDiv.innerHTML=specialshishainnerDiv;
    }else{
        hiddenSpecialShishaDiv.innerHTML=""
        hiddenSpecialShishaDiv.className="d-none"
    }

}

