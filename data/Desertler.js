const desertler = [
    {
        id: 1,
        name: "Künəfə",
        nameEng: "Kunefe",
        gram: "",
        desc: "(Sadə/Pendirli/Püstəli)",
        descEng: "(simple/cheese/pistachio)",
        price: "8.00 / 9.00",
    },

    {
        id: 2,
        name: "Sütlü Nuriye",
        nameEng: "Nuriye with milk",
        gram: "",
        desc: "",
        descEng: "",
        price: 9.00,
    },

    {
        id: 3,
        name: "San Sebastian Cheesecake",
        nameEng: "San Sebastian Cheesecake",
        gram: "",
        desc: "",
        descEng: "",
        price: 9.00,
    },

    {
        id: 4,
        name: "Ballı Tort",
        nameEng: "Honey Cake",
        gram: "",
        desc: "",
        descEng: "",
        price: 8.00,
    },

    {
        id: 5,
        name: "Bakı Paxlavası",
        nameEng: "Baku Pakhlava",
        gram: "",
        desc: "(3ədəd)",
        descEng: "(3pieces)",
        price: 6.00,
    },

    {
        id: 6,
        name: "Şəkərbura",
        nameEng: "Shakarbura",
        gram: "",
        desc: "(3ədəd)",
        descEng: "(3pieces)",
        price: 6.00,
    },

    {
        id: 7,
        name: "Dondurma",
        nameEng: "Ice-cream",
        gram: "",
        desc: "(3top seçməli),(Sadə,Şokaoladlı,Antep fıstıqlı,Çiyələkli,Limonlu)",
        descEng: "(3 ball choosing)",
        price: 5.00,
    },

    {
        id: 8,
        name: "Meyvə Assorti",
        nameEng: "Fruit assorti",
        gram: "",
        desc: "",
        descEng: "",
        price: 12.00,
    },

    {
        id: 9,
        name: "Mövsüm Meyvə",
        nameEng: "Seasonal fruits",
        gram: "",
        desc: "",
        descEng: "",
        price: 12.00,
    },

    {
        id: 10,
        name: "Alça",
        nameEng: "Plum",
        gram: "",
        desc: "",
        descEng: "",
        price: 5.00,
    },

    {
        id: 12,
        name: "Çiyələk",
        nameEng: "Strawberry",
        gram: "",
        desc: "",
        descEng: "",
        price: 5.00,
    },

    {
        id: 13,
        name: "Qarpız, Yemiş",
        nameEng: "Watermelon, melon",
        gram: "",
        desc: "",
        descEng: "",
        price: 5.00,
    },

    {
        id: 14,
        name: "Vişnə",
        nameEng: "Sour cherry",
        gram: "",
        desc: "",
        descEng: "",
        price: 5.00,
    },
    {
        id: 15,
        name: "Çay – Çaynik",
        nameEng: "Tea, tea-pot",
        gram: "",
        desc: "",
        descEng: "",
        price: 5.00,
    },
    {
        id: 16,
        name: "Çay Samovar",
        nameEng: "Tea samovar",
        gram: "",
        desc: "",
        descEng: "",
        price: 20.00,
    },
    {
        id: 17,
        name: "Mürəbbələr",
        nameEng: "Jams",
        gram: "",
        desc: "",
        descEng: "",
        price: 5.00,
    },
    {
        id: 18,
        name: "Çərəzlər",
        nameEng: "Dried fruits",
        gram: "",
        desc: "",
        descEng: "",
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
      <p class="${func(item)}">${localStorage.getItem("langMode")=="az"?item.name:item.nameEng} <span class="gram">${item.gram}</span></p>
      <span class="${func_price(item.price)}">${item.price} AZN</span>
        </div>
        <div class="desc">${localStorage.getItem("langMode")=="az"?item.desc:item.descEng}</div>

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