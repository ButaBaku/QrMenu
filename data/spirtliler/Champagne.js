const champagne = [
    {
      id: 1,
      name: "Moet Chandon",
      desc:"",
      gram: "",
      price: 255.00,
    },
    {
      id: 2,
      name: "Moet Rose",
      desc:"",
      gram: "",
      price: 275.00,
    },
    {
      id: 3,
      name: "Veuve Clicquot",
      desc:"",
      gram: "",
      price: 265.00,
    },
    {
      id: 4,
      name: "Dom Perignon",
      desc:"",
      gram: "",
      price: 960.00,
    },
    {
        id: 5,
        name: "Louis Roederer Crystal",
        desc:"",
        gram: "",
        price: 1550.00,
      },
  ];
  
  
  const champagne_div = document.getElementById("champagne");
  const champagneBtn = document.querySelector(".champagneBtn");
  var champagne_inner = "";
  
  champagne.map((item) => {
    champagne_inner += `
    <div class="col-12 col-md-6">
                  <div class="mehsul">
                    <div class="name-price">
                      <p class="${func(item)}">${item.name} <span class="gram">${item.gram}</span></p>
      <span class="${func_price(item.price)}">${item.price} AZN</span>
                    </div>
        
                  </div>
                </div>
      `;
  });
  
  champagneBtn.onclick=()=>{
    if(champagne_div  .innerHTML==""){
      champagne_div.innerHTML = champagne_inner;
    }else{
      champagne_div.innerHTML="";  
    }
  }
  
  