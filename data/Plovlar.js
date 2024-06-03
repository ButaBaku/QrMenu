const plovlar = [
    {
        id: 1,
        name: "Şah Plov",
        nameEng: "Shah pilaf",
        gram: "",
        desc: "(öncədən rezerv) (1 ədəd)",
        descEng: "(necessary to book in advance) (Lamb, dried apricots, plums, chestnuts",
        price: 40.00
    },
    {
        id: 2,
        name: "Fisincan Plov",
        nameEng: "Fisinjan pilaf",
        gram: "",
        desc: "",
        descEng: "",
        price: 12.00
    },
    {
        id: 3,
        name: "Səbzili Plov",
        nameEng: "Sabzi pilaf",
        gram: "(250 qr.)",
        desc: "",
        descEng: "",
        price: 12.00
    },
    {
        id: 4,
        name: "Turşu Qovurma Plov",
        nameEng: "Turshu govurma pilaf",
        gram: "(250 qr.)",
        desc: "",
        descEng: "",
        price: 12.00
    },
    {
        id: 5,
        name: "Südlü Plov Quzu Maçası ilə",
        nameEng: "",
        gram: "(250 qr.)",
        desc: "",
        // Bunu ozum bele yazdim menyuda balaca ile yazilmisdi
        descEng: "Dill pilaf with lamb shanks Pilaf with milk and lamb shanks",
        price: 0
    },
    {
        id: 6,
        name: "Buta Döşəmə",
        nameEng: "Buta doshama pilaf",
        gram: "",
        desc: "Maça / Lülə / Çolpa ilə",
        descEng: "with lamb shank/ lula/ chicken",
        price: "10 | 12 | 16"
    }
]


const plovlar_div = document.getElementById('plovlar');
const plovlar_btn = document.querySelector(".plovlar_Btn")
var plovlar_inner = "";

plovlar.map((item)=>{
    plovlar_inner+= `
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

plovlar_btn.onclick=()=>{
    if(plovlar_div.innerHTML==""){
        plovlar_div.innerHTML = plovlar_inner;
    }else{
        plovlar_div.innerHTML="";  
    }
}

plovlar_div.innerHTML = "";