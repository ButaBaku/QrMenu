const shisha_setleri = [
    {
        id:1,
        name:"SHISHA ",
        price:35.00,
        // products:["Bal","Qaymaq(Üzüm ilə)","Zeytun","Pendir","Kərə Yağı","Pomidor Xiyar","Sosiska","Mürəbbə","Yumurta(Qlazok)"]
        products:"Chery,Orange,Peach,Blackberry,Mint,Lemon,Apple",
        //img:"https://raw.githubusercontent.com/ButaBaku/QrMenu/main/img/sekil1.jpg",
        desc:"",

    },
    {
        id:2,
        name:"Qəlyan seti 2 ",
        price:45.00,
        // products:["Bal","Qaymaq(Üzüm ilə)","Zeytun","Pendir","Kərə Yağı","Pomidor Xiyar","Sosiska","Mürəbbə","Yumurta(Qlazok)"]
        products:"1.Meyvəli Qəlyan </br> 2.Çay </br> 3.Şokolad </br> 4.Mürəbbə </br> 5.Meyvə qurusu",
        //img:"https://raw.githubusercontent.com/ButaBaku/QrMenu/main/img/sekil4.jpg",
        desc:"",

    },
    {
        id:3,
        name:"Qəlyan seti 3",
        price:69.00,
        // products:["Bal","Qaymaq(Üzüm ilə)","Zeytun","Pendir","Kərə Yağı","Pomidor Xiyar","Sosiska","Mürəbbə","Yumurta(Qlazok)"]
        products:"1.Meyvəli Qəlyan </br> 2.Çay </br> 3.Şokolad </br> 4.Paxlava Şəkərbura </br> 5.Çərəz </br> 6.Mürəbbə ",
        //img:"https://raw.githubusercontent.com/ButaBaku/QrMenu/main/img/sekil9.jpg",
        desc:"",

    },
    
]


const shisha_setleri_div = document.getElementById("shisha-setleri");
const btn_shisha_setleri = document.querySelector(".Shisha_Btn");
// var shisha_setleriinnerDiv = "";

// shisha_setleri.map((item,i) => {
//     shisha_setleriinnerDiv += `
//   <div class="col-12 col-md-6">
                
//                 <div class="shishaDiv">
//                     <button class="btn btn-dark text-primary>Shisha</button>
//                 </div>
  
//               </div>
//     `;
// });
shisha_setleri_div.className="d-none"
btn_shisha_setleri.onclick=()=>{
  if(shisha_setleri_div.className=="d-none"){
    shisha_setleri_div.className = "text-center shishaDiv";
  }else{
    shisha_setleri_div.className = "d-none";
  }
}




