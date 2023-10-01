const champagne = [
    {
      id: 1,
      name: "Moet Chandon",
      desc:"",
      price: 255.00,
    },
    {
      id: 2,
      name: "Moet Rose",
      desc:"",
      price: 275.00,
    },
    {
      id: 3,
      name: "Veuve Clicquot",
      desc:"",
      price: 265.00,
    },
    {
      id: 4,
      name: "Dom Perignon",
      desc:"",
      price: 960.00,
    },
    {
        id: 5,
        name: "Louis Roederer Crystal",
        desc:"",
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
                      <p>${item.name}</p>
                      <span>${item.price} AZN</span>
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
  
  