const seher_yemek_setleri = [
    {
        id:1,
        name:"Səhər yeməyi tək nəfərlik",
        price:15.00,
        // products:["Bal","Qaymaq(Üzüm ilə)","Zeytun","Pendir","Kərə Yağı","Pomidor Xiyar","Sosiska","Mürəbbə","Yumurta(Qlazok)"]
        products:"1.Bal </br> 2.Qaymaq(Üzüm ilə) </br> 3.Zeytun </br> 4.Pendir </br> 5.Kərə Yağı </br> 6.Pomidor </br> 7.Sosiska </br> 8.Mürəbbə </br> 9.Yumurta(Qlazok)",
        img:"https://raw.githubusercontent.com/ButaBaku/QrMenu/main/img/sekil6.jpg",
        desc:"",

    },
    {
        id:2,
        name:"Səhər yeməyi 2 nəfərlik",
        price:28.00,
        // products:["Bal","Qaymaq(Üzüm ilə)","Zeytun","Pendir","Kərə Yağı","Pomidor Xiyar","Sosiska","Mürəbbə","Yumurta(Qlazok)"]
        products:"1.Bal </br> 2.Kərə Yağı </br> 3.Qaymaq(Üzüm ilə)</br> 4.Zeytun </br> 5.Pendir </br> 6.Kolbasa(3 dilim) </br> 7.Sosiska </br> 8.Krep + Free + Siqara börek(krep 3 əd.,siqara 3əd.) </br> 9.Portağal və ya Üzüm </br> 10.Şokolad Əzmə </br> 11.Pomidor Xiyar </br> 12.Pomidor Yumurta ",
        img:"https://raw.githubusercontent.com/ButaBaku/QrMenu/main/img/sekil2.jpg",
        desc:"",

    },
    {
        id:3,
        name:"Səhər yeməyi 3 nəfərlik",
        price:39.00,
        // products:["Bal","Qaymaq(Üzüm ilə)","Zeytun","Pendir","Kərə Yağı","Pomidor Xiyar","Sosiska","Mürəbbə","Yumurta(Qlazok)"]
        products:"1.Bal </br> 2.Qaymaq</br>3.Kərə Yağı </br> 4.Pendir </br> 5.Şokolad Əzmə </br> 6.Bəhməz </br> 7.Kolbasa(4 dilim) </br> 8.Sosiska </br> 9.Zeytun </br> 10.Krep + Free (krep 4 əd.) </br> 11.Siqara Böreyi (4əd.) </br> 12.Meyvə (üzüm,çiyələk) <br/> 13.Pomidor Xiyar <br/> 14.Sucuklu Yumurta <br/> 15.Mürəbbə",
        img:"https://raw.githubusercontent.com/ButaBaku/QrMenu/main/img/sekil3.jpg",
        desc:"",

    },
    {
        id:4,
        name:"Səhər yeməyi 4 nəfərlik",
        price:49.00,
        // products:["Bal","Qaymaq(Üzüm ilə)","Zeytun","Pendir","Kərə Yağı","Pomidor Xiyar","Sosiska","Mürəbbə","Yumurta(Qlazok)"]
        products:"1.Bal </br> 2.Qaymaq</br>3.Kərə Yağı </br> 4.Pendir </br> 5.Zeytun </br> 6.Sosiska </br> 7.Kolbasa(5 dilim) </br> 8.Bəhməz </br> 9.Şokolad Əzmə </br> 10.Meyvə </br> 11.Mürəbbə (4əd.) </br> 12.Pomidor Xiyar <br/> 13.Krep + Siqara + Free (krep 5 əd.,siqara 5əd. <br/> 14.Pomidor Yumurta </br> 16.Sucuklu Yumurta",
        img:"https://raw.githubusercontent.com/ButaBaku/QrMenu/main/img/sekil8.jpg",
        desc:"",

    },
]


const seher_yemek_setleri_div = document.getElementById("seher-yemek-setleri");
const btn_seher_yemek_setleri = document.querySelector(".Seher_Yemek_Setleri_Btn");
var seher_yemek_setleriinnerDiv = "";

seher_yemek_setleri.map((item,i) => {
    seher_yemek_setleriinnerDiv += `
  <div class="col-12 col-md-6">
                <div class="mehsul">
                <img class="set-img" src=${item.img}  href="image">

                  <div class="name-price">
                    <p>${item.name} </p>

                    
                    <span>${item.price} AZN</span>
                    </div>
                    <div class="products"> ${item.products} </div>

                  <span class="desc">${item.desc}</span>
                </div>
              </div>
    `;
});

btn_seher_yemek_setleri.onclick=()=>{
  if(seher_yemek_setleri_div.innerHTML==""){
    seher_yemek_setleri_div.innerHTML = seher_yemek_setleriinnerDiv;
  }else{
    seher_yemek_setleri_div.innerHTML="";  
  }
}

seher_yemek_setleri_div.innerHTML = "";




// <ul class="products" >
//                         <li>${item.products[i]}</li>
//                         ${
//                             seher_yemek_setleri.map((item,i)=>{
//                                     // <li>${item.products[i]}</li>
//                                 // return(
//                                 //     <li>${item.products[i]}</li>
//                                 // )
//                             })
//                         }
//                     </ul>