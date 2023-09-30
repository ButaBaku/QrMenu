const white_whine = [
    
    // Azerbaijan di burdan sonrasii----------

    {
        Azerbaijan:[
            {
                id:1,
                name:"Savalan Chardonnay",
                desc:"",
                price:"7.00 / 32.00",
            },
            {
                id:2,
                name:"Savalan Viogner",
                desc:"",
                price:32.00,
            },
            {
                id:3,
                name:"Meysəri Sədəf",
                desc:"",
                price:48.00,
            },
            {
                id:4,
                name:"Az-Granata Bayanshiray",
                desc:"",
                price:"6.00 / 35.00",
            },
        ],
        // Turkey start
        Turkey:[
            {
                id:1,
                name:"Sarafin Chardonnay",
                desc:"",
                price:98.00,
            },
            {
                id:2,
                name:"Sarafin Sauvignon Blanc",
                desc:"",
                price:98.00,
            },
            {
                id:3,
                name:"Kav Narince",
                desc:"",
                price:65.00,
            },
        ],
        // France start burda oz daxilinde hisselere ayrilir.
        France:{
            Languadedoc_rousillion:[
                {
                    id:1,
                    name:"Maison Castel Chardonnay",
                    desc:"",
                    price:55.00,
                },
                {
                    id:2,
                    name:"Maison Castel Sauvignon Blanc",
                    desc:"",
                    price:55.00,
                },
            ],
            Alsage:[
                {
                    id:1,
                    name:"Arthur Mertz Gewurztraminer",
                    desc:"",
                    price:59.00,
                },
                {
                    id:2,
                    name:"Arthur Mertz Riesling",
                    desc:"",
                    price:59.00,
                },
            ],
            Bordeaux:[
                {
                    id:1,
                    name:"Ferrande Blanc",
                    desc:"",
                    price:155.00,
                },
            ],
            Chablis:[
                {
                    id:1,
                    name:"Chablis Grand Cru",
                    desc:"",
                    price:265.00,
                },
                {
                    id:2,
                    name:"Petit Chablis",
                    desc:"",
                    price:115.00,
                },
            ],
        },
    }


  ];
  
  
  const white_whine_div = document.getElementById("white_whine");
  const white_whineBtn = document.querySelector(".white_whineBtn");
  var innerDiv = "";
  
  white_whine.map((item) => {
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
  
  white_whineBtn.onclick=()=>{
    if(white_whine_div  .innerHTML==""){
      white_whine_div.innerHTML = innerDiv;
    }else{
      white_whine_div.innerHTML="";  
    }
  }
  
  white_whine_div.innerHTML = innerDiv;
  