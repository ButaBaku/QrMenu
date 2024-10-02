const milli_yemekleri = [
    {
        id: 1,
        name: "Quzu Gərdan ",
        nameEng: "Lamb Gardan",
        gram: "(250 qr.)",
        desc: "",
        descEng: "",
        price: 15.00
      },
      {
        id: 2,
        name: "Çoban Qovurma",
        nameEng: "Choban govurma",
        gram: "(250 qr.)",
        desc: "",
        descEng: "",
        price: 12.00
      },
      {
        id: 3,
        name: "Şəki Pitisi",
        nameEng: "Sheki piti",
        gram: "",
        desc: "(1 ədəd)",
        descEng: "(1 clay pot)",
        price: 10.00
      },
      {
        id: 4,
        name: "Yarpaq Dolması",
        nameEng: "Grape leaves dolma",
        gram: "(200 qr.)",
        desc: "",
        descEng: "",
        price: 9.00
      },
      {
        id: 5,
        name: "Pip Dolması",
        nameEng: "Pip dolma",
        gram: "(250 qr.)",
        desc: "",
        descEng: "",
        price: 10.00
      },
      {
        id: 6,
        name: "Quzu Buğlama",
        nameEng: "Lamb bughlama",
        gram: "(250 qr.)",
        desc: "",
        descEng: "",
        price: 10.00
      },
      {
        id: 7,
        name: "Dana Buğlama",
        nameEng: "Beef bughlama",
        gram: "",
        desc: "",
        descEng: "",
        price: 10.00
      },
      {
        id: 8,
        name: "Nar Qovurma (Quzu Əti)",
        nameEng: "Lamb with roast pomegranate",
        gram: "(250 qr.)",
        desc: "",
        descEng: "",
        price: 15.00
      },
      {
        id: 9,
        name: "Nar Qovurma (Can Əti)",
        nameEng: "Tenderloin with roast pomegranate",
        gram: "(250 qr.)",
        desc: "",
        descEng: "",
        price: 18.00
      },
      {
        id: 10,
        name: "Cız-Bız",
        nameEng: "Jiz-biz lamb giblets",
        gram: "(250 qr.)",
        desc: "",
        descEng: "",
        price: 10.00
      },
      {
        id: 11,
        name: "Can Əti (turşulu\şabaladlı)",
        nameEng: "Tenderloin with plums and chestnuts",
        gram: "(250 qr.)",
        desc: "",
        descEng: "",
        price: 15.00
      },
      {
        id: 12,
        name: "Şabaladlı Maça Qovurma",
        nameEng: "Lamb shank with chestnuts",
        gram: "(300 qr.)",
        desc: "",
        descEng: "",
        price: 12.00
      },
      {
        id: 13,
        name: "Şirəli Dana",
        nameEng: "Juicy beef",
        gram: "(250 qr.)",
        desc: "",
        descEng: "",
        price: 12.00
      },
      {
        id: 14,
        name: "Can Əti Qaymaqlı",
        nameEng: "Tenderloin in a creamy sauce",
        gram: "",
        desc: "",
        descEng: "",
        price: 14.00
      },
      {
        id: 15,
        name: "Şirəli Xoruz",
        nameEng: "Juicy chicken",
        gram: "",
        desc: "(1 ədəd)",
        descEng: "(1 chicken)",
        price: 25.00
      },
      {
        id: 16,
        name: "Qaymaqlı Çolpa",
        nameEng: "Chicken in a creamy sauce",
        gram: "",
        desc: "",
        descEng: "",
        price: 20.00
      },
      {
        id: 17,
        name: "Maça Peraşki",
        nameEng: "Lamb shank perashki",
        gram: "",
        desc: "",
        descEng: "",
        price: 9.00
      }
]



const mill_div = document.getElementById("milli-yemekler");
const btn_milli = document.querySelector(".Milli_Yemekler_Btn");
var milli_yemekleriinnerDiv = "";

milli_yemekleri.map((item) => {
    milli_yemekleriinnerDiv += `
  <div class="col-12 col-md-6">
                <div class="mehsul">
                  <div class="name-price">
                    <p class="${func(item)}">${localStorage.getItem("langMode")=="az"?item.name:item.nameEng} <span class="gram">${item.gram}</span></p>
                    <span class="${func_price(item.price)}">${item.price} AZN</span>
                  </div>

                  <span class="desc">${localStorage.getItem("langMode")=="az"?item.desc:item.descEng}</span>
                </div>
              </div>
    `;
});

btn_milli.onclick=()=>{
  if(mill_div.innerHTML==""){
    mill_div.innerHTML = milli_yemekleriinnerDiv;
  }else{
    mill_div.innerHTML="";  
  }
}

mill_div.innerHTML = "";
