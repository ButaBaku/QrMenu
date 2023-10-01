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
            data: [ 
                {
                    name: "Languedoc Rousillion",
                    details:[
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
                },
                {
                    name: "Alsage",
                    details:[
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
                },
                {
                    name: "Bordeaus",
                    details:[
                        {
                            id:1,
                            name:"Ferrande Blanc",
                            desc:"",
                            price:155.00,
                        },
                    ],
                },

                {
                    name: "Chablis",
                    details:[
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
        ],
        },
    }


  ];
  
  
  const white_wine_div = document.getElementById("white-wine");
  const white_wineBtn = document.querySelector(".white_wine_Btn");
  
  var white_wine_inner = "";
  
  const white_wine_data = white_whine[0];
  
  
  // Azerbaycan
  var azerbaijan_white_inner = "";
  white_wine_data.Azerbaijan.map((item) => {
    azerbaijan_white_inner += `
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
  //
  
  // Turkey
  var turkey_white_inner = "";
  white_wine_data.Turkey.map((item) => {
    turkey_white_inner += `
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
  //  
  

  // France
const franca_white_data = white_wine_data.France.data;

var france_white_inner = "";

    franca_white_data.map((item)=>{
        france_white_inner+=  `
            <h3 class= "city-name"> ${item.name} </h3>        
        `
            item.details.map((res)=>{
                france_white_inner+= `
                <div class="col-12 col-md-6">
                                   <div class="mehsul">
                                     <div class="name-price">
                                       <p>${res.name}</p>
                                       <span>${res.price} AZN</span>
                                     </div>
        
                                   </div>
                                 </div>
                `
            })
    })


  white_wine_inner = `
        <h1 class="country-name"> Azerbaijan </h1>
        
        ${azerbaijan_white_inner}
    
        <h1 class="country-name"> Turkey </h1>
        ${turkey_white_inner}

        <h1 class="country-name"> France </h1>
        ${france_white_inner}
    
        
    
      `;

  white_wineBtn.onclick=()=>{
    if(white_wine_div  .innerHTML==""){
      white_wine_div.innerHTML = white_wine_inner;
    }else{
      white_wine_div.innerHTML="";
    }
  }
