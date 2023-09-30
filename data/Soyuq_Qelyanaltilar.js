const soyuq_qelyanaltilar = [
    {
        id:1,
        name:"Tər Pomidor, Xiyar",
        gram: "",
        desc:"1 ədəd pomidor, 1 ədəd xiyar - 1 porsiya",
        price:1.50,
    },
    {
        id:2,
        name:"Göyərti",
        gram: "",
        desc:"Qarışıq",
        price:2.00,
    },
    {
        id:3,
        name:"Ağ Pendir",
        gram: "(120qr)",
        desc:"",
        price:5.00,
    },
    {
        id:4,
        name:"Motal Pendir",
        gram: "(350qr)",
        desc:"",
        price:6.00,
    },
    {
        id:5,
        name:"Pendir Assorti(Xarici)",
        gram: "",
        desc:"",
        price:16.00,
    },
    {
        id:6,
        name:"Acika",
        gram: "(150qr)",
        desc:"",
        price:3.00,
    },
    {
        id:7,
        name:"Haydari",
        gram: "(150qr)",
        desc:"",
        price:3.00,
    },
    {
        id:8,
        name:"Acılı Əzmə",
        gram: "(150qr)",
        desc:"",
        price:5.00,
    },
    {
        id:9,
        name:"Zeytun Assorti",
        gram: "(160qr)",
        desc:"",
        price:5.00,
    },
    {
        id:10,
        name:"Pərpətöyün",
        gram: "(180qr)",
        desc:"",
        price:4.00,
    },
    {
        id:11,
        name:"Turşu Assorti",
        gram: "(250qr)",
        desc:"",
        price:5.00,
    },
    {
        id:12,
        name:"Badımcan Ruleti",
        gram: "(180qr)",
        desc:"",
        price:5.00,
    },
    {
        id:13,
        name:"Ət Assorti",
        gram: "(300qr)",
        desc:"",
        price:15.00,
    },
    {
        id:14,
        name:"Sobada Toyuq",
        gram: "(600qr)",
        desc:"",
        price:15.00,
    },
    {
        id:15,
        name:"Soyutma Toyuq(Kənd)",
        gram: "(500qr)",
        desc:"",
        price:15.00,
    },

]

const soyuq_qelyanaltilar_div = document.getElementById('soyuq-qelyanaltilar');
const Soyuq_QelyanaltilarBtn = document.querySelector(".Soyuq_QelyanaltilarBtn")
var innerDiv = "";

soyuq_qelyanaltilar.map((item)=>{
    innerDiv+= `
    <div class="col-12 col-md-6">
    <div class="mehsul">
      <div class="name-price">
        <p>${item.name} <span class="gram">${item.gram}</span></p>
        <span>${item.price} AZN</span>
      </div>
      <div class="desc">
      ${item.desc}
      </div>


    </div>
  </div>
    `
})

Soyuq_QelyanaltilarBtn.onclick=()=>{
    if(soyuq_qelyanaltilar_div.innerHTML==""){
        soyuq_qelyanaltilar_div.innerHTML = innerDiv;
    }else{
        soyuq_qelyanaltilar_div.innerHTML="";  
    }
}


soyuq_qelyanaltilar_div.innerHTML = innerDiv;