const salatlar = [
    {
        id:1,
        name:"Çoban Salatı",
        nameEng:"Choban Salad", 
        gram: "(220qr)",
        desc:"Pomidor,xiyar,yaşıl bibər,soğan,cəfəri,limon sousu",
        descEng:"Tomato, cucumber, green pepper, onion, parslay, lemon juice",
        price:5.00,
    },
    {
        id:2,
        name:"Mimoza",
        nameEng:"Mimosa",
        gram:"",
        desc:"Kök,yumurta,kartof,file,qoz",
        descEng:"Carrot, egg, potato, chicken ﬁllet, walnut",
        price:5.00,
    },
    {
        id:3,
        name:"Olivye - Paytaxt Salatı",
        nameEng:"Olivier – Capital salad",
        gram: "(250qr)",
        desc:"Kartof,kök,yumurta,mayonez,yaşıl noxud,xiyar",
        descEng:"Potato, carrot, egg, mayonnaise, green peas, cucumber",
        price:5.00,
    },
    {
        id:4,
        name:"Manqal Salatı",
        nameEng:"Manqal Salad",
        gram: "(220qr)",
        desc:"Pomidor,badımcan,rəngli bibər,sarımsaq",
        descEng:"Eggplant, tomato, green pepper, garlic",
        price:5.00,
    },
    {
        id:5,
        name:"Xırt-Xırt Badımcan",
        nameEng:"Crispy eggplant",
        gram: "(250qr)",
        desc:"Qızarmış çıtır badımcan,küncüt,rəndələnmiş parmezan pendiri,yaşıl soğan və xırt sous ilə",
        descEng:"Crispy eggplant, sesame seeds, parmesan cheese, green onion, special sauce",
        price:5.00,
    },
    {
        id:6,
        name:"Döyməc",
        nameEng:"Doymaj",
        gram: "(220qr)",
        desc:"Pomidor,xiyar,yaşıl bibər,soğan,cəfəri,limon sousu",
        descEng:"Red onion, tomato, basil, mint, cornelian cherry sauce, sour cherry",
        price:5.00,
    },
    {
        id:7,
        name:"Gavurdağ",
        nameEng:"Gavurdag",
        gram: "(220qr)",
        desc:"Pomidor,qırmızı soğan,yaşıl bibər,cəfəri,qoz ləpəsi,nar dənələri,narşərablı sous",
        descEng:"Tomato, onion, green pepper, parsley, pomegranate, pomegranate sauce",
        price:5.00,
    },
    {
        id:8,
        name:"Sezar(Toyuq file)",
        nameEng:"Caesar with chicken",
        gram: "(300qr)",
        desc:"Toyuq aysberq,yarpaq parmezan pendiri,çeri pomidor,suxari,sezar sousu",
        descEng:"Chicken ﬁllet, iceberg salad, parmesan cheese, cherry tomato, croutons, caesar sauce",
        price:10.00,
    },
    {
        id:9,
        name:"Sezar(Krevetli)",
        nameEng:"Caesar with shrimp",
        gram: "(250qr)",
        desc:"Krevet,aysberq,yarpaq parmezan pendiri,çeri pomidor,suxari,sezar sousu",
        descEng:"Shrimps, iceberg salad, parmesan cheese, cherry tomato, croutons, Caesar sauce",
        price:15.00,
    },
    {
        id:10,
        name:"Barbekülü toyuq salatı",
        nameEng:"BBQ chicken salad",
        gram: "(230qr)",
        desc:"Aysberq,çeri pomidor,qarğıdalı,lobya,sous",
        descEng:"Iceberg salad, cherry tomato, corn, beans, sauce",
        price:10.00,
    },
    {
        id:11,
        name:"Toyuq Salatı",
        nameEng:"Chicken salad",
        gram: "(220qr)",
        desc:"Bibərlər,xiyar,kök,turşu,xiyar,yağ",
        descEng:"Chicken ﬁllet, green pepper, cucumber, carrot, oil",
        price:5.00,
    },
    
    
    
]


const salatlar_avropa = [
    {
        id: 1,
        name: "Sezar Krevetka",
        nameEng: "Caesar salad with shimp",
        gram: "(220qr)",
        desc: "",
        descEng: "",
        price: 15.00,
    },
    {
        id: 2,
        name: "Sezar Toyuq",
        nameEng: "Caesar salad with chicken",
        gram: "(220qr)",
        desc: "",
        descEng: "",
        price: 10.00,
    },
    {
        id: 3,
        name: "Qızıl Balıq Salatı",
        nameEng: "Salmon salad",
        gram: "(220qr)",
        desc: "",
        descEng: "",
        price: 14.00,
    },
    {
        id: 4,
        name: "Tuna Salatı",
        nameEng: "Tuna Salad",
        gram: "(220qr)",
        desc: "",
        descEng: "",
        price: 12.00,
    },
    {
        id: 5,
        name: "Avakadolu Krevetka Salatı",
        nameEng: "Shrimp avocado salad",
        gram: "(220qr)",
        desc: "",
        descEng: "",
        price: 14.00,
    },
    {
        id: 6,
        name: "İsti Ət Salatı",
        nameEng: "Warm meat salad",
        gram: "(220qr)",
        desc: "",
        descEng: "",
        price: 12.00,
    },
    {
        id: 7,
        name: "Tərəvəzli Miks Salatı",
        nameEng: "Mixed vegetable salad",
        gram: "(220qr)",
        desc: "",
        descEng: "",
        price: 10.00,
    },
    {
        id: 8,
        name: "Yunan Salatı",
        nameEng: "Greek salad",
        gram: "(220qr)",
        desc: "",
        descEng: "",
        price: 8.00,
    },
        
]

const salatlar_div = document.getElementById('salatlar');
const salatlarBtn = document.querySelector(".salatlarBtn")
var salatlarinnerDiv = "";

salatlar.map((item)=>{
    salatlarinnerDiv+= `
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



const salatlar_avropa_div = document.getElementById("salatlar-avropa");

var salatlar_avropainnerDiv ='<p class="avropaMetbexi">Avropa mətbəxi</p>';


salatlar_avropa.map((item) => {
    salatlar_avropainnerDiv += `
  <div class="col-12 col-md-6">
                <div class="mehsul">
                  <div class="name-price">
                  <p class="${func(item)}">${item.name} <span class="gram">${item.gram}</span></p>
                  <span class="${func_price(item.price)}">${item.price} AZN</span>
                  </div>
      
                </div>
              </div>
    `;
});




salatlarBtn.onclick=()=>{
    if(salatlar_div.innerHTML===""){
        salatlar_div.innerHTML = salatlarinnerDiv;
        salatlar_avropa_div.innerHTML=salatlar_avropainnerDiv;
    }else{
        salatlar_div.innerHTML="";  
        salatlar_avropa_div.innerHTML="";
    }
}

salatlar_div.innerHTML="";
// salatlar_div.innerHTML = innerDiv;