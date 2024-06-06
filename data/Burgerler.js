const burgerler = [
  {
    id: 1,
    name: "Cheese Burger",
    gram: "(210qr)",
    desc: "",
    price: 13.0,
  },
  {
    id: 2,
    name: "Buta Burger",
    gram: "(210qr)",
    desc: "",
    price: 15.0,
  },
  {
    id: 3,
    name: "Salmon Burger",
    gram: "(190qr)",
    desc: "",
    price: 16.0,
  },
  {
    id: 4,
    name: "Chicken Burger",
    gram: "(200qr)",
    desc: "",
    price: 10.0,
  },
];


// El deyemeye ehtiyac yoxdu onsuz deyismiyib qiymetler

const burgerler_div = document.getElementById("burgerler");
const burgerlerBtn = document.querySelector(".burgerlerBtn");
var burgerlerinnerDiv = "";

burgerler.map((item) => {
  burgerlerinnerDiv += `
    <div class="col-12 col-md-6">
    <div class="mehsul">
      <div class="name-price">
      <p class="${func(item)}">${item.name} <span class="gram">${
    item.gram
  }</span></p>
      <span class="${func_price(item.price)}">${item.price} AZN</span>
        </div>
        <div class="desc">${item.desc}</div>

    </div>
  </div>
    `;
});

burgerlerBtn.onclick = () => {
  if (burgerler_div.innerHTML == "") {
    burgerler_div.innerHTML = burgerlerinnerDiv;
  } else {
    burgerler_div.innerHTML = "";
  }
};

burgerler_div.innerHTML = "";
