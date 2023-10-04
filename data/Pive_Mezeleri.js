const pive_mezeleri = [
    {
        id: 1,
        name: "Saçaq Pendir",
        gram: "",
        desc: "",
        price: 3.00,
    },

    {
        id: 2,
        name: "Suxari",
        gram: "",
        desc: "",
        price: 2.50,
    },

    {
        id: 3,
        name: "Çipsi",
        gram: "",
        desc: "",
        price: 3.50,
    },

    {
        id: 4,
        name: "Antep Fıstığı",
        gram: "",
        desc: "",
        price: 5.00,
    },

    {
        id: 5,
        name: "Fındıq",
        gram: "",
        desc: "",
        price: 4.00,
    },

    {
        id: 6,
        name: "Fıstıq",
        gram: "",
        desc: "",
        price: 3.00,
    },

    {
        id: 7,
        name: "Hisə verilmiş Farel",
        gram: "",
        desc: "",
        price: 9.00,
    },

    {
        id: 8,
        name: "Miks Set (Xırdalan)",
        gram: "",
        desc: "",
        price: 39.00,
    },

    {
        id: 9,
        name: "Miks Set (Efes)",
        gram: "",
        desc: "",
        price: 49.00,
    },

    {
        id: 10,
        name: "Miks Set (Heineken)",
        gram: "",
        desc: "",
        price: 59.00,
    },

    {
        id: 11,
        name: "Saçaq Pendir Qızartma",
        gram: "",
        desc: "",
        price: 3.50,
    },

    {
        id: 12,
        name: "Düşbərə Qızartma",
        gram: "",
        desc: "",
        price: 4.00,
    },

    {
        id: 13,
        name: "Pətənək",
        gram: "",
        desc: "",
        price: 4.00,
    },

    {
        id: 14,
        name: "Pendirli Sarımsaqlı Qrenki",
        gram: "",
        desc: "",
        price: 6.00,
    },

    {
        id: 15,
        name: "Kartof Fri",
        gram: "",
        desc: "",
        price: 2.50,
    },

    {
        id: 16,
        name: "Pendir Çubuqları",
        gram: "",
        desc: "",
        price: 5.00,
    },
    {   
        id: 17,
        name: "Soğan Halqaları",
        gram: "",
        desc: "",
        price: 3.50,
    },
    {
        id: 18,
        name: "Bildirçin",
        gram: "",
        desc: "",
        price: 4.00,
    },
    {
        id: 19,
        name: "Boğaz",
        gram: "",
        desc: "",
        price: 3.00,
    },
    {
        id: 20,
        name: "Edamame",
        gram: "",
        desc: "",
        price: 6.00,
    },
    {
        id: 21,
        name: "Krevet Tempura",
        gram: "",
        desc: "",
        price: 12.00,
    },
    {
        id: 22,
        name: "Kalmar",
        gram: "",
        desc: "",
        price: 9.00,
    },
    {
        id: 23,
        name: "Nachos",
        gram: "",
        desc: "",
        price: 12.00,
    },
    {
        id: 24,
        name: "Göbələk",
        gram: "",
        desc: "",
        price: 4.00,
    },

    {
        id: 25,
        name: "Çay Krevetkası",
        gram: "",
        desc: "",
        price: 10.00,
    },

    {
        id: 26,
        name: "Dəniz Krevetkası",
        gram: "",
        desc: "",
        price: 10.00,
    },

    {
        id: 27,
        name: "Sardelka",
        gram: "",
        desc: "",
        price: 7.00,
    },

    {
        id: 28,
        name: "Südlü Sosis",
        gram: "",
        desc: "",
        price: 6.00,
    },

    {
        id: 29,
        name: "İveriya Sosis",
        gram: "",
        desc: "",
        price: 5.00,
    },

    {
        id: 30,
        name: "Bastırma",
        gram: "",
        desc: "",
        price: 5.00,
    },

]

const piveler_mezeleri_div = document.getElementById('pive-mezeleri');
const piveler_mezeleri_btn = document.querySelector(".pive_mezeleri_Btn")

var piveler_mezeleri_inner = "";

pive_mezeleri.map((item)=>{
    piveler_mezeleri_inner+= `
    <div class="col-12 col-md-6">
    <div class="mehsul">
      <div class="name-price">
      <p class="${func(item)}">${item.name} <span class="gram">${item.gram}</span></p>
      <span class="${func_price(item.price)}">${item.price} AZN</span>
        </div>
        <div class="desc">${item.desc}</div>

    </div>
  </div>
    `
})

piveler_mezeleri_btn.onclick=()=>{
    if(piveler_mezeleri_div.innerHTML==""){
        piveler_mezeleri_div.innerHTML = piveler_mezeleri_inner;
    }else{
        piveler_mezeleri_div.innerHTML="";  
    }
}

piveler_mezeleri_div.innerHTML = "";