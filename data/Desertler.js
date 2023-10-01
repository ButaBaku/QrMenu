const desertler = [
    {
        id: 1,
        name: "Künəfə",
        gram: "(Sadə/Pendirli/Püstəli)",
        desc: "",
        price: "8.00 / 9.00",
    },

    {
        id: 2,
        name: "Sütlü Nuriye",
        gram: "",
        desc: "",
        price: 9.00,
    },

    {
        id: 3,
        name: "San Sebastian Cheesecake",
        gram: "",
        desc: "",
        price: 9.00,
    },

    {
        id: 4,
        name: "Tiramisu",
        gram: "",
        desc: "",
        price: 8.00,
    },

    {
        id: 5,
        name: "Ballı Tort",
        gram: "",
        desc: "",
        price: 8.00,
    },

    {
        id: 6,
        name: "Bakı Paxlavası",
        gram: "(3ədəd)",
        desc: "",
        price: 5.00,
    },

    {
        id: 7,
        name: "Şəkərbura",
        gram: "(3ədəd)",
        desc: "",
        price: 5.00,
    },

    {
        id: 8,
        name: "Dondurma",
        gram: "(3top seçməli)",
        desc: "(Sadə,Şokaoladlı,Antep fıstıqlı,Çiyələkli,Limonlu)",
        price: 5.00,
    },

    {
        id: 9,
        name: "Meyvə Assorti",
        gram: "",
        desc: "",
        price: 18.00,
    },

    {
        id: 10,
        name: "Çay-Çaynik",
        gram: "",
        desc: "",
        price: 5.00,
    },

    {
        id: 11,
        name: "Çay Samovar",
        gram: "",
        desc: "",
        price: 20.00,
    },

    {
        id: 12,
        name: "Mürəbbələr",
        gram: "",
        desc: "",
        price: 5.00,
    },

    {
        id: 13,
        name: "Çərəzlər",
        gram: "",
        desc: "",
        price: 15.00,
    },

    

]


const desertler_div = document.getElementById('desertler');
const desertler_btn = document.querySelector(".desertler_Btn")
var desertler_inner = "";

desertler.map((item)=>{
    desertler_inner+= `
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

desertler_btn.onclick=()=>{
    if(desertler_div.innerHTML==""){
        desertler_div.innerHTML = desertler_inner;
    }else{
        desertler_div.innerHTML="";  
    }
}

desertler_div.innerHTML = "";