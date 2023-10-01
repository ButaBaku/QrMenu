const pastalar = [
    {
        id: 1,
        name: "Penne Arrabıata",
        gram: "(290qr)",
        desc: "",
        price: 12.00,
    },
    {
        id: 2,
        name: "Fettuccine Alfredo",
        gram: "(220qr)",
        desc: "",
        price: 15.00,
    },
    {
        id: 3,
        name: "Pasta Napoletana",
        gram: "(130qr)",
        desc: "",
        price: 10.00,
    },
    {
        id: 4,
        name: "Rısotto Sea Food/Mushroom",
        gram: "(190qr)",
        desc: "",
        price: 15.00,
    },
    {
        id: 5,
        name: "Pasta Riqatoni",
        gram: "(220qr)",
        desc: "",
        price: 16.00,
    },
    
]


const pastalar_div = document.getElementById('pastalar');
const pastalar_Btn = document.querySelector(".pastalar_Btn")
var pastalar_inner = "";

pastalar.map((item)=>{
    pastalar_inner+= `
    <div class="col-12 col-md-6">
    <div class="mehsul">
      <div class="name-price">
        <p>${item.name} <span class="gram">${item.gram}</span></p>
        <span>${item.price} AZN</span>
        </div>
        <div class="desc">${item.desc}</div>

    </div>
  </div>
    `
})

pastalar_Btn.onclick=()=>{
    if(pastalar_div.innerHTML==""){
        pastalar_div.innerHTML = pastalar_inner;
    }else{
        pastalar_div.innerHTML="";  
    }
}

pastalar_div.innerHTML = "";