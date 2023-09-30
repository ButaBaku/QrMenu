const isti_qelyanaltilar = [
    {
        id: 1,
        name: "Quzu Kəllə Təndir (Şoulu)",
        gram: "",
        desc: "Təndirdə bişirilmiş quzu kəllə, közlənmiş yaşıl bibər və ədviyyatlar ilə",
        price: 19.00,
    },
    {
        id: 2,
        name: "Sobada Pendirli Göbələk",
        gram: "(12 ədəd)",
        desc: "",
        price: 7.00,
    },
    {
        id: 3,
        name: "Kükü",
        gram: "",
        desc: "göyərti ilə",
        price: 6.00,
    },
    {
        id: 4,
        name: "Naxçıvan Qovurması",
        gram: "(250qr)",
        desc: "",
        price: 12.00,
    },
    {
        id: 5,
        name: "Kükü Naxçıvan Qovurması ilə",
        gram: "(250 qr)",
        desc: "",
        price: 14.00,
    },
    {
        id: 6,
        name: "Krevetka Tempura Suxari",
        gram: "(250qr)",
        desc: "Qızarmış souslu Krevet, göbələk, polorosso yarpağı, qovrulmuş küncüt, yaşıl soğan suxari",
        price: 16.00,
    },
]

const isti_qelyanaltilar_div = document.getElementById("isti-qelyanalti");
const btn_isti_qelyanalti = document.querySelector(".Isti_Qelyanalti_Btn");
var innerDiv = "";

isti_qelyanaltilar.map((item) => {
  innerDiv += `
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

btn_isti_qelyanalti.onclick=()=>{
  if(isti_qelyanaltilar_div.innerHTML==""){
    isti_qelyanaltilar_div.innerHTML = innerDiv;
  }else{
    isti_qelyanaltilar_div.innerHTML="";  
  }
}

isti_qelyanaltilar_div.innerHTML = innerDiv;
