const prosecco = [
    {
      id: 1,
      name: "Zonin",
      desc:"",
      price: 59.00,10.00?
    },
    {
      id: 2,
      name: "Piccini Ex.Dry",
      desc:"",
      price: 79.00,
    },
    {
      id: 3,
      name: "Piccini Rose",
      desc:"",
      price: 69.00,
    },
  ];
  
  
  const prosecco_div = document.getElementById("prosecco");
  const proseccoBtn = document.querySelector(".proseccoBtn");
  var innerDiv = "";
  
  prosecco.map((item) => {
    innerDiv += `
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
  
  proseccoBtn.onclick=()=>{
    if(prosecco_div  .innerHTML==""){
      prosecco_div.innerHTML = innerDiv;
    }else{
      prosecco_div.innerHTML="";  
    }
  }
  
  prosecco_div.innerHTML = innerDiv;
  