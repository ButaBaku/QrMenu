const seher_yemek_setleri = [
    {
        id:1,
        name:"Tək nəfərlik",
        nameEng: "1 person", 
        price:15.00,
        // products:["Bal","Qaymaq(Üzüm ilə)","Zeytun","Pendir","Kərə Yağı","Pomidor Xiyar","Sosiska","Mürəbbə","Yumurta(Qlazok)"]
        products:"1.Bal </br> 2.Qaymaq(Üzüm ilə) </br> 3.Zeytun </br> 4.Pendir </br> 5.Kərə Yağı </br> 6.Pomidor Xiyar </br> 7.Sosiska </br> 8.Mürəbbə </br> 9.Yumurta(Qlazok)",
        productsEng:"1.Honey </br> 2.Cream (with grapes) </br> 3.Olive </br> 4.Cheese </br> 5.Butter </br> 6.Tomato Cucumber </br> 7.Sausage </br> 8.Jam </br> 9.Eggs(sunny side up)",
        img:"https://raw.githubusercontent.com/ButaBaku/QrMenu/main/img/sekil6.jpg",
        desc:"",

    },
    {
        id:2,
        name:"2 nəfərlik",
        nameEng: "2 person", 
        price:29.00,
        // products:["Bal","Qaymaq(Üzüm ilə)","Zeytun","Pendir","Kərə Yağı","Pomidor Xiyar","Sosiska","Mürəbbə","Yumurta(Qlazok)"]
        products:"1.Bal </br> 2.Kərə Yağı </br> 3.Qaymaq(Üzüm ilə)</br> 4.Zeytun </br> 5.Pendir </br> 6.Kolbasa(3 dilim) </br> 7.Sosiska </br> 8.Krep + Free + Siqara börek(krep 3 əd.,siqara 3əd.) </br> 9.Portağal və ya Üzüm </br> 10.Şokolad Əzmə </br> 11.Pomidor Xiyar </br> 12.Pomidor Yumurta ",
        productsEng:"1.Honey </br> 2.Butter </br> 3.Cream (with grapes) </br> 4.Olive </br> 5.Cheese </br> 6.Salami(3 slice) </br> 7.Sausage </br> 8.Crepes + French Fries + Spring rolls(crepes 3 pcs, spring rolls 3 pcs) </br> 9.Orange or Grape </br> 10.Chocolate Crush</br> 11.Tomato Cucumber </br> 12.Egg with Tomato ",
        img:"https://raw.githubusercontent.com/ButaBaku/QrMenu/main/img/sekil2.jpg",
        desc:"",

    },
    {
        id:3,
        name:"3 nəfərlik",
        nameEng: "3 person", 
        price:39.00,
        // products:["Bal","Qaymaq(Üzüm ilə)","Zeytun","Pendir","Kərə Yağı","Pomidor Xiyar","Sosiska","Mürəbbə","Yumurta(Qlazok)"]
        products:"1.Bal </br> 2.Qaymaq</br>3.Kərə Yağı </br> 4.Pendir </br> 5.Şokolad Əzmə </br> 6.Bəhməz </br> 7.Kolbasa(4 dilim) </br> 8.Sosiska </br> 9.Zeytun </br> 10.Krep + Free (krep 4 əd.) </br> 11.Siqara Böreyi (4əd.) </br> 12.Meyvə (üzüm,çiyələk) <br/> 13.Pomidor Xiyar <br/> 14.Sucuklu Yumurta <br/> 15.Mürəbbə",
        productsEng:"1.Honey </br> 2.Cream (with grapes)</br>3.Butter </br> 4.Cheese </br> 5.Chocolate Crush </br> 6.Molasses </br> 7.Salami(4 slice) </br> 8.Sausage </br> 9.Olive </br> 10.Crepes + French Fries (crepes 4 pcs) </br> 11.Spring rolls (4) </br> 12.Fruit (grape,strawberry) <br/> 13.Tomato Cucumber <br/> 14.Sausage Egg <br/> 15.Jam",
        img:"https://raw.githubusercontent.com/ButaBaku/QrMenu/main/img/sekil3.jpg",
        desc:"",

    },
    {
        id:4,
        name:"4 nəfərlik",
        nameEng: "4 person", 
        price:49.00,
        // products:["Bal","Qaymaq(Üzüm ilə)","Zeytun","Pendir","Kərə Yağı","Pomidor Xiyar","Sosiska","Mürəbbə","Yumurta(Qlazok)"]
        products:"1.Bal </br> 2.Qaymaq</br>3.Kərə Yağı </br> 4.Pendir </br> 5.Zeytun </br> 6.Sosiska </br> 7.Kolbasa(5 dilim) </br> 8.Bəhməz </br> 9.Şokolad Əzmə </br> 10.Meyvə </br> 11.Mürəbbə </br> 12.Pomidor Xiyar <br/> 13.Krep + Siqara + Free (krep 5 əd.,siqara 5əd. <br/> 14.Pomidor Yumurta </br> 16.Sucuklu Yumurta",
        productsEng:"1.Honey </br> 2.Cream</br>3.Butter </br> 4.Cheese </br> 5.Olive </br> 6.Sausage </br> 7.Salami(5 slice) </br> 8.Molasses </br> 9.Chocolate Crush </br> 10.Fruit </br> 11.Jam </br> 12.Tomato Cucumber <br/> 13.Crepes + Spring rolls + French Fries (crepez 5 pcs ,spring rolls 5 pcs) <br/> 14.Egg with Tomato </br> 16.Sausage Egg",
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
                    <p>${localStorage.getItem("langMode")=="az" ? item.name : item.nameEng} </p>

                    
                    <span>${item.price} AZN</span>
                    </div>
                    <div class="products"> ${localStorage.getItem("langMode")=="az" ? item.products : item.productsEng} </div>

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