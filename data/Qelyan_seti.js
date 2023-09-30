const qelyan_setleri = [
    {
        id:1,
        name:"Qəlyan seti 1 ",
        price:35.00,
        // products:["Bal","Qaymaq(Üzüm ilə)","Zeytun","Pendir","Kərə Yağı","Pomidor Xiyar","Sosiska","Mürəbbə","Yumurta(Qlazok)"]
        products:"1.Qəlyan </br> 2.Çay </br> 3.Şokolad </br> 4.Çərəz </br> 5.Mürəbbə",
        img:"https://raw.githubusercontent.com/ButaBaku/QrMenu/main/img/sekil1.jpg",
        desc:"",

    },
    {
        id:2,
        name:"Qəlyan seti 2 ",
        price:45.00,
        // products:["Bal","Qaymaq(Üzüm ilə)","Zeytun","Pendir","Kərə Yağı","Pomidor Xiyar","Sosiska","Mürəbbə","Yumurta(Qlazok)"]
        products:"1.Meyvəli Qəlyan </br> 2.Çay </br> 3.Şokolad </br> 4.Mürəbbə </br> 5.Meyvə qurusu",
        img:"https://raw.githubusercontent.com/ButaBaku/QrMenu/main/img/sekil4.jpg",
        desc:"",

    },
    {
        id:3,
        name:"Qəlyan seti 3",
        price:69.00,
        // products:["Bal","Qaymaq(Üzüm ilə)","Zeytun","Pendir","Kərə Yağı","Pomidor Xiyar","Sosiska","Mürəbbə","Yumurta(Qlazok)"]
        products:"1.Meyvəli Qəlyan </br> 2.Çay </br> 3.Şokolad </br> 4.Paxlava Şəkərbura </br> 5.Çərəz </br> 6.Mürəbbə ",
        img:"https://raw.githubusercontent.com/ButaBaku/QrMenu/main/img/sekil9.jpg",
        desc:"",

    },
    
]


const qelyan_setleri_div = document.getElementById("qelyan-setleri");
const btn_qelyan_setleri = document.querySelector(".Qelyan_Btn");
var qelyan_setleriinnerDiv = "";

qelyan_setleri.map((item,i) => {
    qelyan_setleriinnerDiv += `
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

btn_qelyan_setleri.onclick=()=>{
  if(qelyan_setleri_div.innerHTML==""){
    qelyan_setleri_div.innerHTML = qelyan_setleriinnerDiv;
  }else{
    qelyan_setleri_div.innerHTML="";  
  }
}

qelyan_setleri_div.innerHTML = "";




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