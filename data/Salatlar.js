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

const salatlar_div = document.getElementById('salatlar');
const salatlarBtn = document.querySelector(".salatlarBtn")
var innerDiv = "";

salatlar.map((item)=>{
    innerDiv+= `
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

salatlarBtn.onclick=()=>{
    if(salatlar_div.innerHTML==""){
        salatlar_div.innerHTML = innerDiv;
    }else{
        salatlar_div.innerHTML="";  
    }
}

salatlar_div.innerHTML = innerDiv;