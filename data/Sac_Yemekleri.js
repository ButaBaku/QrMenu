const sac_yemekleri=[
    {
        id:1,
        name:"Sac Quzu əti",
        gram: "(450qr)",
        desc:"Quzu əti,göbələk,kartof,badımcan,pomidor,bibər,soğan,lavaş",
        price:25.00
    },
    {
        id:2,
        name:"Sac Kənd çolpası",
        gram: "(450qr)",
        desc:"Kənd çolpası,kartof,göbələk,badımcan,pomidor,bibər,soğan,lavaş",
        price:20.00
    },
    {
        id:3,
        name:"Sac Can əti",
        gram: "(450qr)",
        desc:"Can əti,kartof,göbələk,badımcan,pomidor,bibər,soğan,lavaş",
        price:30.00
    },
    
]



const sac_div = document.getElementById("sac-yemekleri");
const btn_sac = document.querySelector(".Sac_yemekleriBtn");
var sacinnerDiv = "";

sac_yemekleri.map((item) => {
  sacinnerDiv += `
  <div class="col-12 col-md-6">
                <div class="mehsul">
                  <div class="name-price">
                    <p>${item.name} <span class="gram">${item.gram}</span></p>
                    <span>${item.price} AZN</span>
                  </div>

                  <span class="desc">${item.desc}</span>
                </div>
              </div>
    `;
});

btn_sac.onclick=()=>{
  if(sac_div.innerHTML==""){
    sac_div.innerHTML = sacinnerDiv;
  }else{
    sac_div.innerHTML="";  
  }
}

sac_div.innerHTML = "";
