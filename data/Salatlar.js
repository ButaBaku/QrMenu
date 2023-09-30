const salatlar = [
    {
        id:1,
        name:"Çoban Salatı",
        gram: "(220qr)",
        desc:"Pomidor,xiyar,yaşıl bibər,soğan,cəfəri,limon sousu",
        price:5.00,
    },
    {
        id:2,
        name:"Mimoza",
        gram:"",
        desc:"Kök,yumurta,kartof,file,qoz",
        price:5.00,
    },
    {
        id:3,
        name:"Olivye - Paytaxt Salatı",
        gram: "(250qr)",
        desc:"Kartof,kök,yumurta,mayonez,yaşıl noxud,xiyar",
        price:5.00,
    },
    {
        id:4,
        name:"Manqal Salatı",
        gram: "(220qr)",
        desc:"Pomidor,badımcan,rəngli bibər,sarımsaq",
        price:5.00,
    },
    {
        id:5,
        name:"Xırt-Xırt Badımcan ",
        gram: "(250qr)",
        desc:"Qızarmış çıtır badımcan,küncüt,rəndələnmiş parmezan pendiri,yaşıl soğan və xırt sous ilə",
        price:5.00,
    },
    {
        id:6,
        name:"Döyməc",
        gram: "(220qr)",
        desc:"Pomidor,xiyar,yaşıl bibər,soğan,cəfəri,limon sousu",
        price:5.00,
    },
    {
        id:7,
        name:"Gavurdağ",
        gram: "(220qr)",
        desc:"Pomidor,qırmızı soğan,yaşıl bibər,cəfəri,qoz ləpəsi,nar dənələri,narşərablı sous",
        price:5.00,
    },
    {
        id:8,
        name:"Sezar(Toyuq file)",
        gram: "(300qr)",
        desc:"Toyuq aysberq,yarpaq parmezan pendiri,çeri pomidor,suxari,sezar sousu",
        price:10.00,
    },
    {
        id:9,
        name:"Sezar(Krevetli)",
        gram: "(250qr)",
        desc:"Krevet,aysberq,yarpaq parmezan pendiri,çeri pomidor,suxari,sezar sousu",
        price:15.00,
    },
    {
        id:10,
        name:"Barbekülü toyuq salatı",
        gram: "(230qr)",
        desc:"Aysberq,çeri pomidor,qarğıdalı,lobya,sous",
        price:10.00,
    },
    {
        id:11,
        name:"Toyuq Salatı",
        gram: "(220qr)",
        desc:"Bibərlər,xiyar,kök,turşu,xiyar,yağ",
        price:5.00,
    },
    
    
    
]


const salatlar_avropa = [
    {
        id: 1,
        name: "Sezar Krevetka",
        gram: "(220qr)",
        desc: "",
        price: 15.00,
    },
    {
        id: 2,
        name: "Sezar Toyuq",
        gram: "(220qr)",
        desc: "",
        price: 10.00,
    },
    {
        id: 3,
        name: "Qızıl Balıq Salatı",
        gram: "(220qr)",
        desc: "",
        price: 14.00,
    },
    {
        id: 4,
        name: "Tuna Salatı",
        gram: "(220qr)",
        desc: "",
        price: 12.00,
    },
    {
        id: 5,
        name: "Avakadolu Krevetka Salatı",
        gram: "(220qr)",
        desc: "",
        price: 14.00,
    },
    {
        id: 6,
        name: "İsti Ət Salatı",
        gram: "(220qr)",
        desc: "",
        price: 12.00,
    },
    {
        id: 7,
        name: "Tərəvəzli Miks Salatı",
        gram: "(220qr)",
        desc: "",
        price: 10.00,
    },
    {
        id: 8,
        name: "Yunan Salatı",
        gram: "(220qr)",
        desc: "",
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
        <p>${item.name} <span class="gram">${item.gram}</span></p>
        <span>${item.price} AZN</span>
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
                    <p>${item.name} <span class="gram">${item.gram}</span></p>
                    <span>${item.price} AZN</span>
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