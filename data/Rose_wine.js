const rose_wine = [
    {
      id: 1,
      name: "Savalan Rose",
      desc:"",
      price: 35.00,
    },
    {
      id: 2,
      name: "Meysəri Sənəm",
      desc:"",
      price: 48.00,
    },
    {
      id: 3,
      name: "Maison Castel Rose d'Anjou",
      desc:"",
      price: 65.00,
    },
    {
      id: 4,
      name: "Sarafin Rose",
      desc:"",
      price: 98.00,
    },
    // **********
    
    // İTALY di burdan sonrasii----------

    {
        Toscana:[
            {
                id:1,
                name:"Piccini Blanco",
                desc:"",
                price:"9.00 / 49.00",
            },
            {
                id:2,
                name:"Piccin Memoro Bianco",
                desc:"",
                price:68.00,
            },
            {
                id:3,
                name:"Vermentino",
                desc:"",
                price:77.00,
            },
        ],
        Apulia:[
            {
                id:1,
                name:"Fiana Salento İGT",
                desc:"",
                price:70.00,
            }
        ],
        Piedmond:[
            {
                id:1,
                name:"Gavi",
                desc:"",
                price:75.00,
            },
            {
                id:2,
                name:"Gavi del Comune di Gavi DOCG 2018",
                desc:"",
                price:125.00,
            },
        ],
        Veneto:[
            {
                id:1,
                name:"Zonin Soave",
                desc:"",
                price:60.00,
            },
            {
                id:2,
                name:"Pinot-Grigio delle Venezia",
                desc:"",
                price:56.00,
            },
        ],
        Chile:[
            {
                id:1,
                name:"Los Boldos Sauvignon Blanc",
                desc:"",
                price:65.00,
            },
            {
                id:2,
                name:"Los Boldos Chardonnay",
                desc:"",
                price:65.00,
            },
        ],
        New_world:[
            {
                id:1,
                name:"Finca Flichman Roble Chardonnay",
                desc:"",
                price:62.00,
            },
            {
                id:2,
                name:"Terrazas Torrontes",
                desc:"",
                price:96.00,
            },
            {
                id:3,
                name:"Framingham Classic Riesling",
                desc:"",
                price:95.00,
            },
            {
                id:4,
                name:"Cloud Bay",
                desc:"",
                price:155.00,
            },
        ]
        

    }


  ];
  
  
  const rose_wine_div = document.getElementById("rose_wine");
  const rose_wineBtn = document.querySelector(".rose_wineBtn");
  var innerDiv = "";
  
  rose_wine.map((item) => {
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
  
  rose_wineBtn.onclick=()=>{
    if(rose_wine_div  .innerHTML==""){
      rose_wine_div.innerHTML = innerDiv;
    }else{
      rose_wine_div.innerHTML="";  
    }
  }
  
  rose_wine_div.innerHTML = innerDiv;
  