const soyuq_qelyanaltilar = [
    {
        id:1,
        name:"Tər Pomidor, Xiyar",
        desc:"1 ədəd pomidor, 1 ədəd xiyar - 1 porsiya",
        price:1.50,
    },
    {
        id:2,
        name:"Göyərti",
        desc:"Qarışıq",
        price:2.00,
    },
    {
        id:3,
        name:"Ağ Pendir(120qr)",
        desc:"",
        price:5.00,
    },
    {
        id:4,
        name:"Motal Pendir(350qr)",
        desc:"",
        price:6.00,
    },
    {
        id:5,
        name:"Pendir Assorti(Xarici)",
        desc:"",
        price:16.00,
    },
    {
        id:6,
        name:"Acika(150qr)",
        desc:"",
        price:3.00,
    },
    {
        id:7,
        name:"Haydari(150qr)",
        desc:"",
        price:3.00,
    },
    {
        id:8,
        name:"Acılı Əzmə(150qr)",
        desc:"",
        price:5.00,
    },
    {
        id:9,
        name:"Zeytun Assorti(160qr)",
        desc:"",
        price:5.00,
    },
    {
        id:10,
        name:"Pərpətöyün(180qr)",
        desc:"",
        price:4.00,
    },
    {
        id:11,
        name:"Turşu Assorti(250qr)",
        desc:"",
        price:5.00,
    },
    {
        id:12,
        name:"Badımcan Ruleti(180qr)",
        desc:"",
        price:5.00,
    },
    {
        id:13,
        name:"Ət Assorti(300qr)",
        desc:"",
        price:15.00,
    },
    {
        id:14,
        name:"Sobada Toyuq(600qr)",
        desc:"",
        price:15.00,
    },
    {
        id:15,
        name:"Soyutma Toyuq(Kənd)(500qr)",
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
        <p>${item.name}</p>
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