const rose_wine = [
    {
      id: 1,
      name: "Savalan Rose",
      desc:"",
      gram: "",
      price: "7.00 / 35.00",
    },
    {
      id: 2,
      name: "Meysəri Sənəm",
      desc:"",
      gram: "",
      price: 48.00,
    },
    {
      id: 3,
      name: "Maison Castel Rose d'Anjou",
      desc:"",
      gram: "",
      price: 65.00,
    },
    {
      id: 4,
      name: "Sarafin Rose",
      desc:"",
      gram: "",
      price: 98.00,
    },
    // **********
    
    // İTALY di burdan sonrasii----------

    {
        cities: [
            {
                name: "Toscana",
                details:[
                    {
                        id:1,
                        name:"Piccini Blanco",
                        desc:"",
                        gram: "",
                        price:"9.00 / 49.00",
                    },
                    {
                        id:2,
                        name:"Piccin Memoro Bianco",
                        desc:"",
                        gram: "",
                        price:68.00,
                    },
                    {
                        id:3,
                        name:"Vermentino",
                        desc:"",
                        gram: "",
                        price:77.00,
                    },
                ],
            },
        {
            name: "Apulia",
            details:[
                {
                    id:1,
                    name:"Fiana Salento İGT",
                    desc:"",
                    gram: "",
                    price:70.00,
                }
            ],
        },
        {
            name: "Piedmond",
            details:[
                {
                    id:1,
                    name:"Gavi",
                    desc:"",
                    gram: "",
                    price:75.00,
                },
                {
                    id:2,
                    name:"Gavi del Comune di Gavi DOCG 2018",
                    desc:"",
                    gram: "",
                    price:125.00,
                },
            ],
        },
        {
            name: "Veneto",
            details:[
                {
                    id:1,
                    name:"Zonin Soave",
                    desc:"",
                    gram: "",
                    price:60.00,
                },
                {
                    id:2,
                    name:"Pinot-Grigio delle Venezia",
                    desc:"",
                    gram: "",
                    price:56.00,
                },
            ],
        },
        {
            name: "Chile",
            details:[
                {
                    id:1,
                    name:"Los Boldos Sauvignon Blanc",
                    desc:"",
                    gram: "",
                    price:65.00,
                },
                {
                    id:2,
                    name:"Los Boldos Chardonnay",
                    desc:"",
                    gram: "",
                    price:65.00,
                },
            ],
        },
        {
            name: "New World",
            details:[
                {
                    id:1,
                    name:"Finca Flichman Roble Chardonnay",
                    desc:"",
                    gram: "",
                    price:62.00,
                },
                {
                    id:2,
                    name:"Terrazas Torrontes",
                    desc:"",
                    gram: "",
                    price:96.00,
                },
                {
                    id:3,
                    name:"Framingham Classic Riesling",
                    desc:"",
                    gram: "",
                    price:95.00,
                },
                {
                    id:4,
                    name:"Cloud Bay",
                    desc:"",
                    gram: "",
                    price:155.00,
                },
            ]
        },
        
    ],
        

    }


  ];
  
  
  const rose_wine_div = document.getElementById("rose_wine");
  const rose_wineBtn = document.querySelector(".rose_wineBtn");
  var rose_wine_inner = "";
  

  rose_wine.slice(0,4).map((item) => {

    rose_wine_inner += `
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

  const italy_rose_wine_data = rose_wine[4].cities;


  italy_rose_wine_data.map((item)=>{
    console.log(item);
    rose_wine_inner+=  `
            <h2 class= "city-name"> ${item.name} </h2>        
        `
            item.details.map((res)=>{
                rose_wine_inner+= `
                <div class="col-12 col-md-6">
                                   <div class="mehsul">
                                     <div class="name-price">
                                     <p class="${func(res)}">${res.name} <span class="gram">${res.gram}</span></p>
                                     <span class="${func_price(res.price)}">${res.price} AZN</span>
                                     </div>
        
                                   </div>
                                 </div>
                `
            })
    
  })
  
  rose_wineBtn.onclick=()=>{
    if(rose_wine_div.innerHTML==""){
      rose_wine_div.innerHTML = rose_wine_inner;
    }else{
      rose_wine_div.innerHTML="";  
    }
  }
  
  