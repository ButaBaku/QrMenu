const soyuq_qelyanaltilar = [
    {
        id:1,
        name:"Tər Pomidor, Xiyar",
        nameEng:"Tomato, cucumber",
        gram: "",
        desc:"1 ədəd pomidor, 1 ədəd xiyar - 1 porsiya",
        descEng:"1 tomato, 1 cucumber per - 1 portion",
        price:1.50,
    },
    {
        id:2,
        name:"Göyərti",
        nameEng:"Assorted greens",
        gram: "",
        desc:"Qarışıq",
        descEng:"",
        price:2.00,
    },
    {
        id:3,
        name:"Ağ Pendir",
        nameEng:"White cheese",
        gram: "(120qr)",
        desc:"",
        descEng:"",
        price:5.00,
    },
    {
        id:4,
        name:"Motal Pendir",
        nameEng:"Motal Cheese",
        gram: "(120qr)",
        desc:"",
        descEng:"",
        price:6.00,
    },
    {
        id:5,
        name:"Pendir Assorti",
        nameEng:"Local Cheese Plate",
        gram: "(320qr)",
        desc:"",
        descEng:"",
        price:12.00,
    },
    {
        id:6,
        name:"Pendir Assorti",
        nameEng:"Foreign Cheese Plate",
        gram: "",
        desc:"xarici",
        descEng:"",
        price:16.00,
    },
    {
        id:7,
        name:"Acika",
        nameEng:"Ajika",
        gram: "(150qr)",
        desc:"",
        descEng:"",
        price:3.00,
    },
    {
        id:8,
        name:"Haydari",
        nameEng:"Haydari",
        gram: "(150qr)",
        desc:"",
        descEng:"",
        price:3.00,
    },
    {
        id:9,
        name:"Acılı əzmə",
        nameEng:"Spicy ezme",
        gram: "(150qr)",
        desc:"",
        descEng:"",
        price:5.00,
    },
    {
        id:10,
        name:"Zeytun Assorti",
        nameEng:"Assorted olives",
        gram: "(160qr)",
        desc:"",
        descEng:"",
        price:5.00,
    },
    {
        id:11,
        name:"Pərpətöyün",
        nameEng:"Purslane",
        gram: "(180qr)",
        desc:"",
        descEng:"",
        price:4.00,
    },
    {
        id:12,
        name:"Turşu Assorti",
        nameEng:"Assorted Pickles",
        gram: "(250qr)",
        desc:"",
        descEng:"",
        price:5.00,
    },
    {
        id:13,
        name:"Badımcan Ruleti",
        nameEng:"Eggplant rolls",
        gram: "(180qr)",
        desc:"",
        descEng:"",
        price:5.00,
    },
    {
        id:14,
        name:"Ət Assorti",
        nameEng:"Assorted meat",
        gram: "(300qr)",
        desc:"",
        descEng:"",
        price:15.00,
    },
    {
        id:15,
        name:"Sobada Toyuq",
        nameEng:"Oven Baked Chicken",
        gram: "(600qr)",
        desc:"",
        descEng:"",
        price:15.00,
    },
    {
        id:16,
        name:"Soyutma Toyuq(kənd)",
        nameEng:"Boiled Village Chicken",
        gram: "(500qr)",
        desc:"",
        descEng:"",
        price:15.00,
    },

]

const soyuq_qelyanaltilar_div = document.getElementById('soyuq-qelyanaltilar');
const Soyuq_QelyanaltilarBtn = document.querySelector(".Soyuq_QelyanaltilarBtn")
var soyuq_qelyanaltilarinnerDiv = "";

soyuq_qelyanaltilar.map((item)=>{
    soyuq_qelyanaltilarinnerDiv+= `
    <div class="col-12 col-md-6">
    <div class="mehsul">
      <div class="name-price">
      <p class="${func(item)}">${localStorage.getItem("langMode")=="az"?item.name:item.nameEng} <span class="gram">${item.gram}</span></p>
      <span class="${func_price(item.price)}">${item.price} AZN</span>
      </div>
      <div class="desc">
      ${localStorage.getItem("langMode")=="az"?item.desc:item.descEng}
      </div>


    </div>
  </div>
    `
})

Soyuq_QelyanaltilarBtn.onclick=()=>{
    if(soyuq_qelyanaltilar_div.innerHTML==""){
        soyuq_qelyanaltilar_div.innerHTML = soyuq_qelyanaltilarinnerDiv;
    }else{
        soyuq_qelyanaltilar_div.innerHTML="";  
    }
}


soyuq_qelyanaltilar_div.innerHTML = "";