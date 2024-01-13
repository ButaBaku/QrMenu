const tendir_yemekler=[
    {
        id:1,
        name:"Quzu Səbət(Şoulu)",
        gram: "",
        desc:"",
        price:70.00,
    },
    {
        id:2,
        name:"Təndirdə Quzu Qolu(Ləvəngili/Sadə)",
        gram: "",
        desc:"",
        price:45.00,
    },
    {
        id:3,
        name:"Təndirdə Quzu Budu",
        gram: "",
        desc:"",
        price:55.00,
    },
    {
        id:4,
        name:"Təndirdə Toyuq(Ləvəngili/Sadə)",
        gram: "",
        desc:"",
        price:"25.00 / 15.00",
    },
    {
        id:5,
        name:"Təndirdə Bütöv Quzu(Ləvəngili/Düyü ilə)",
        gram: "",
        desc:"öncədən rezerv ilə",
        price:"",
    },
    {
        id:6,
        name:"Adana Kabab(porsiya)",
        gram: "(200qr)",
        desc:"",
        price:12.00,
    },
    {
        id:7,
        name:"Adana(0,5 metr)",
        gram: "(400qr)",
        desc:"",
        price:35.00,
    },
    {
        id:8,
        name:"Adana(1 metr)",
        gram: "(800qr)",
        desc:"",
        price:70.00,
    },
    {
        id:9,
        name:"Adana",
        gram: "(1 metr super)",
        desc:"",
        price:120.00,
    },
    {
        id:10,
        name:"Döymə",
        gram: "(200qr)",
        desc:"",
        price:10.00,
    },
    {
        id:11,
        name:"Sarma Beyti",
        gram: "(200qr)",
        desc:"",
        price:12.00,
    },
    {
        id:12,
        name:"Lülə Kabab",
        gram: "(200qr)",
        desc:"",
        price:8.00,
    },
    {
        id:13,
        name:"Tikə Kabab",
        gram: "(200qr)",
        desc:"",
        price:8.00,
    },
    {
        id:14,
        name:"Quzu Antrikotu",
        gram: "(200qr)",
        desc:"",
        price:9.00,
    },
    {
        id:19,
        name:"Buta Kababı",
        gram: "",
        desc:"",
        price:15.00,
    },
    {
        id:14,
        name:"Quzu Gərdan",
        gram: "",
        desc:"",
        price:15.00,
    },
    
    {
        id:15,
        name:"Dana Basdırma",
        gram: "(200qr)",
        desc:"",
        price:10.00,
    },
    {
        id:16,
        name:"Quzu Basdırma",
        gram: "(200qr)",
        desc:"",
        price:10.00,
    },
    {
        id:17,
        name:"Maça Kababı",
        gram: "(300qr)",
        desc:"",
        price:10.00,
    },
    {
        id:18,
        name:"Semiçka Kababı",
        gram: "",
        desc:"",
        price:8.00,
    },
    {
        id:19,
        name:"Xan Kababı",
        gram: "(200qr)",
        desc:"",
        price:8.00,
    },
    {
        id:20,
        name:"İçalat Kababı",
        gram: "(200qr)",
        desc:"",
        price:6.00,
    },
    {
        id:21,
        name:"Quyruq Kababı",
        gram: "(200qr)",
        desc:"",
        price:9.00,
    },
    {
        id:22,
        name:"Quzu Çöp-Şiş",
        gram: "",
        desc:"",
        price:11.00,
    },
    {
        id:23,
        name:"Kartof-Quyruq",
        gram: "(200qr)",
        desc:"",
        price:6.00,
    },
    {
        id:24,
        name:"Şapalaq",
        gram: "",
        desc:"",
        price:16.00,
    },
    {
        id:25,
        name:"Manqalda Dana Dili",
        gram: "",
        desc:"",
        price:9.00,
    },
    {
        id:26,
        name:"Koroğlu Kababı",
        gram: "(200qr)",
        desc:"",
        price:15.00,
    },
    {
        id:27,
        name:"Hinduşka Kababı",
        gram: "(0,5 yarısı)",
        desc:"",
        price:35.00,
    },
    {
        id:28,
        name:"Çopla Setkada",
        gram: "(turşulu/turşusuz)",
        desc:"",
        price:15.00,
    },
    {
        id:29,
        name:"Toyuq Kababı",
        gram: "(200qr)",
        desc:"",
        price:6.00,
    },
    {
        id:30,
        name:"Toyuq Lüləsi",
        gram: "(200qr)",
        desc:"",
        price:6.00,
    },
    {
        id:31,
        name:"Toyuq Qanad",
        gram: "(200qr)",
        desc:"",
        price:6.00,
    },
    {
        id:32,
        name:"Nərə Balığı Kababı",
        gram: "",
        desc:"",
        price:"",
    },
    {
        id:33,
        name:"Tərəvəz Kababı",
        gram: "(1 ədəd)",
        desc:"",
        price:1.00,
    },
    {
        id:34,
        name:"Kartof Külləmə",
        gram: "(1 ədəd)",
        desc:"",
        price:0.50,
    },
    {
        id:35,
        name:"Kartof Lüləsi",
        gram: "(200qr)",
        desc:"",
        price:3.00,
    },
    {
        id:36,
        name:"Can Əti Çöpdə",
        gram: "(200qr)",
        desc:"",
        price:12.00,
    },
]


const tendir_div = document.getElementById("tendir-yemekler");
const btn_tendir = document.querySelector(".Tendir_Yemekleri_Btn");
var tendir_yemeklerinnerDiv = "";

tendir_yemekler.map((item) => {
    tendir_yemeklerinnerDiv += `
  <div class="col-12 col-md-6">
                <div class="mehsul">
                  <div class="name-price">
                  <p class="${func(item)}">${item.name} <span class="gram">${item.gram}</span></p>
                  <span class="${func_price(item.price)}">${item.price} AZN</span>
                  </div>

                  <span class="desc">${item.desc}</span>
                </div>
              </div>
    `;
});

btn_tendir.onclick=()=>{
  if(tendir_div.innerHTML==""){
    tendir_div.innerHTML = tendir_yemeklerinnerDiv;
  }else{
    tendir_div.innerHTML="";  
  }
}

tendir_div.innerHTML = "";