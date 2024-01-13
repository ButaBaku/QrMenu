const shisha = [
    {
        id: 1,
        name: "Chery",
        gram: "",
        desc: "",
        price: 25.00
    },
    {
        id: 2,
        name: "Orange",
        gram: "",
        desc: "",
        price: 25.00
    },
    {
        id: 3,
        name: "Peach",
        gram: "",
        desc: "",
        price: 25.00
    },
    {
        id: 4,
        name: "Blackberry",
        gram: "",
        desc: "",
        price: 25.00
    },
    {
        id: 5,
        name: "Mint",
        gram: "",
        desc: "",
        price: 25.00
    },
    {
        id: 6,
        name: "Lemon",
        gram: "",
        desc: "",
        price: 25.00
    },
    {
        id: 7,
        name: "Apple",
        gram: "",
        desc: "",
        price: 25.00
    },
    {
        id: 8,
        name: "Cappucino",
        gram: "",
        desc: "",
        price: 25.00
    },
    {
        id: 9,
        name: "Vanilla",
        gram: "",
        desc: "",
        price: 25.00
    },

]


// const sorbalar_div = document.getElementById("sorbalar");
// const btn_sorbalar = document.querySelector(".Sorbalar_Btn");
var shishainnerDiv = "";

shisha.map((item) => {
    shishainnerDiv += `
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







// --------------------------------------


const shishaBtn = document.querySelector(".fshishaBtn");
const hiddenShishaDiv = document.querySelector(".hiddenShishaDiv");






shishaBtn.onclick=()=>{

    if(hiddenShishaDiv.innerHTML==""){
        hiddenShishaDiv.className="hiddenShishaDiv myhiddenShisha"
        hiddenShishaDiv.innerHTML=shishainnerDiv;
    }else{
        hiddenShishaDiv.innerHTML=""
        hiddenShishaDiv.className="d-none"
    }

}