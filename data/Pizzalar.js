const pizzalar = [
    {
        id: 1,
        name: "Sezar Pizza",
        nameEng: "Sezar Pizza",
        gram: "(240qr)",
        desc: "",
        descEng: "",
        price: 12.00,
    },

    {
        id: 2,
        name: "Marqarita Pizza",
        nameEng: "Margarita Pizza",
        gram: "(180qr)",
        desc: "",
        descEng: "",
        price: 8.00,
    },

    {
        id: 3,
        name: "Peperoni",
        nameEng: "Peperoni",
        gram: "(300qr)",
        desc: "",
        descEng: "",
        price: 12.00,
    },

    {
        id: 4,
        name: "BBQ Pizza",
        nameEng: "BBQ Pizza",
        gram: "(330qr)",
        desc: "",
        descEng: "",
        price: 12.00,
    },

    {
        id: 5,
        name: "Tuna Pizza",
        nameEng: "Tuna Pizza",
        gram: "(390qr)",
        desc: "",
        descEng: "",
        price: 14.00,
    },

    {
        id: 6,
        name: "Mix Pizza",
        nameEng: "Mix Pizza",
        gram: "(390qr)",
        desc: "",
        descEng: "",
        price: 14.00,
    },

    {
        id: 7,
        name: "New York Pizza",
        nameEng: "New York Pizza",
        gram: "(340qr)",
        desc: "",
        descEng: "",
        price: 11.00,
    },

    {
        id: 8,
        name: "4 Pendirli Pizza",
        nameEng: "4 Cheese Pizza",
        gram: "(290qr)",
        desc: "",
        descEng: "",
        price: 12.00,
    },
   
]


const pizzalar_div = document.getElementById('pizzalar');
const pizzalar_btn = document.querySelector(".pizzalar_Btn")
var pizzalar_inner = "";

pizzalar.map((item)=>{
    pizzalar_inner+= `
    <div class="col-12 col-md-6">
                <div class="mehsul">
                  <div class="name-price">
                    <p class="${func(item)}">${localStorage.getItem("langMode")=="az"?item.name:item.nameEng} <span class="gram">${item.gram}</span></p>
                    <span class="${func_price(item.price)}">${item.price} AZN</span>
                  </div>

                  <span class="desc">${localStorage.getItem("langMode")=="az"?item.desc:item.descEng}</span>
                </div>
              </div>
    `
})

pizzalar_btn.onclick=()=>{
    if(pizzalar_div.innerHTML==""){
        pizzalar_div.innerHTML = pizzalar_inner;
    }else{
        pizzalar_div.innerHTML="";  
    }
}

pizzalar_div.innerHTML = "";