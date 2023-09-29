const baliq_yemekleri = [
  {
    id: 1,
    name: "Qızıl Balıq(Setkada)(200qr)",
    price: 18.0,
  },
  {
    id: 2,
    name: "Farel(Manqal/Tava)(350qr)",
    price: 15.0,
  },
  {
    id: 3,
    name: "Kütüm(Manqal/Tava)(500qr)",
    price: "25.00 / 35.00",
  },
  {
    id: 4,
    name: "Berj(Manqal/Tava)(350qr)",
    price: 25.0,
  },
  {
    id: 5,
    name: "Dorado(Manqal/Tava)(450qr)",
    price: 22.0,
  },
];


const baliq_yemekleri_div = document.getElementById("baliq-yemekleri");
var innerDiv = "";

baliq_yemekleri.map((item) => {
  innerDiv += `
  <div class="col-12 col-md-6">
                <div class="mehsul">
                  <div class="name-price">
                    <p>${item.name}</p>
                    <span>${item.price}</span>
                  </div>
      
                </div>
              </div>
    `;
});


baliq_yemekleri_div.innerHTML = innerDiv;
