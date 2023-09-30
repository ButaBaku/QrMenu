const kabab_setleri = [
    {
        id:1,
        name:"Kabab seti 3 nəfərlik",
        price:49.00,
        // products:["Bal","Qaymaq(Üzüm ilə)","Zeytun","Pendir","Kərə Yağı","Pomidor Xiyar","Sosiska","Mürəbbə","Yumurta(Qlazok)"]
        products:"1.Lülə(2 şiş) </br> 2.Toyuq(2 şiş) </br> 3.İçalat(2 şiş) </br> 4.Manqal salatı(1 ədəd) </br> 5.Süzmə(1 ədəd) </br> 6.Turşu(1 ədəd) </br> 7.Acika(1 ədəd) </br> 8.Göyərti(1 ədəd) </br> 9.Kompot(1 ədəd)",
        img:"https://raw.githubusercontent.com/ButaBaku/QrMenu/main/img/sekil10.jpg",
        desc:"",

    },
    {
        id:2,
        name:"Kabab seti 4 nəfərlik",
        price:59.00,
        // products:["Bal","Qaymaq(Üzüm ilə)","Zeytun","Pendir","Kərə Yağı","Pomidor Xiyar","Sosiska","Mürəbbə","Yumurta(Qlazok)"]
        products:"1.Lülə(2 şiş) </br> 2.Tikə(2 şiş) </br> 3.Toyuq(2 şiş) </br> 4.Pomidor kabab(4 ədəd) </br> 5.Badımcan kabab(4 ədəd) </br> 6.Çoban salatı(1 ədəd) </br> 7.Süzmə(1 ədəd) </br> 8.Acika(1 ədəd) </br> 9.Turşu(1 ədəd) </br> 10.Kompot(1 ədəd) </br> 11.Qazsız su(1 ədəd) ",
        img:"https://raw.githubusercontent.com/ButaBaku/QrMenu/main/img/sekil7.jpg",
        desc:"",

    },
    {
        id:3,
        name:"Kabab seti 5 nəfərlik",
        price:69.00,
        // products:["Bal","Qaymaq(Üzüm ilə)","Zeytun","Pendir","Kərə Yağı","Pomidor Xiyar","Sosiska","Mürəbbə","Yumurta(Qlazok)"]
        products:"1.Tabaka(Broyler)(1 ədəd) </br> 2.Lülə(2 şiş) </br> 3.Tikə(2 şiş) </br> 4.İçalat(2 şiş) </br> 5.Badımcan kabab(5 ədəd) </br> 6.Pommidor kabab(5 ədəd) </br> 7.Çoban salatı(1 ədəd) </br> 8.Turşu(1 ədəd) </br> 9.Süzmə(1 ədəd) </br> 10.Göyərti(1 ədəd) </br> 11.Acika(1 ədəd) </br> 12.Kompot(1 ədəd) </br> 13.Qazsız su(1 ədəd) ",
        img:"https://raw.githubusercontent.com/ButaBaku/QrMenu/main/img/sekil5.jpg",
        desc:"",

    },
    
]


const kabab_setleri_div = document.getElementById("kabab-setleri");
const btn_kabab_setleri = document.querySelector(".Kabab_Btn");
var kabab_setleriinnerDiv = "";

kabab_setleri.map((item,i) => {
    kabab_setleriinnerDiv += `
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

btn_kabab_setleri.onclick=()=>{
  if(kabab_setleri_div.innerHTML==""){
    kabab_setleri_div.innerHTML = kabab_setleriinnerDiv;
  }else{
    kabab_setleri_div.innerHTML="";  
  }
}

kabab_setleri_div.innerHTML = "";




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