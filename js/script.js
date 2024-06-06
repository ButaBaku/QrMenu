if(localStorage.getItem("langMode")==undefined){
  localStorage.setItem("langMode","az");
}


const serviceBtn = document.getElementById("service-fee-div");
const langBtn = document.getElementById("langBtn");

const langFunc = ()=>{
  if(localStorage.getItem("langMode")=="az"){
    localStorage.setItem("langMode","en");
    langBtn.innerHTML="AZE";
  }else{
    localStorage.setItem("langMode","az");
    langBtn.innerHTML="EN";
  }
  window.location.reload();
}

langBtn.innerHTML = localStorage.getItem("langMode") == "az" ? "EN" : "AZE";
langBtn.onclick=langFunc;

const azeServiceDivInner = 
`
<p>+10%</p>
<p>S</p>
<p>E</p>
<p>R</p>
<p>V</p>
<p>İ</p>
<p>S</p>
<span class="my-3">
  <p>H</p>
  <p>A</p>
  <p>Q</p>
  <p>Q</p>
  <p>I</p>
</span>`;

const engServiceDivInner =
`
<p>+10%</p>
<p>S</p>
<p>E</p>
<p>R</p>
<p>V</p>
<p>İ</p>
<p>C</p>
<p>E</p>
<span class="my-3">
  <p>F</p>
  <p>E</p>
  <p>E</p>
</span>
`
serviceBtn.innerHTML = localStorage.getItem("langMode") == "az" ? azeServiceDivInner : engServiceDivInner


const func_price =(price)=>{
    if(price.length > 8){
        return "long-price";
    }
  }

  const func =(obj)=>{
    if(obj.name.length + obj.gram.length > 22){
        return "long-word"
    }
  }




  const milli_yemekler_lang = document.querySelector("#milli_yemekler_lang");
  const xemir_yemekler_lang = document.querySelector("#xemir_yemekler_lang");
  const tendir_yemekler_lang = document.querySelector("#tendir_yemekler_lang");
  const steak_lang = document.querySelector("#steak_lang");
  const isti_yemekler_lang = document.querySelector("#isti_yemekler_lang");
  const soyuq_qelyanaltilar_lang = document.querySelector("#soyuq_qelyanaltilar_lang");
  const isti_qelyanaltilar_lang = document.querySelector("#isti_qelyanaltilar_lang");
  const sac_yemekleri_lang = document.querySelector("#sac_yemekleri_lang");
  const plovlar_lang = document.querySelector("#plovlar_lang");



  
  plovlar_lang

if (localStorage.getItem("langMode") == 'az') {
  milli_yemekler_lang.textContent = 'Mİllİ YEMƏKLƏR';
  xemir_yemekler_lang.textContent = 'XƏMİR YEMƏKLƏR';
  tendir_yemekler_lang.textContent = 'TƏNDİR YEMƏKLƏR';
  steak_lang.textContent = 'İSTİ YEMƏKLƏR';
  isti_yemekler_lang.textContent = 'STEAK';
  soyuq_qelyanaltilar_lang.textContent = 'SOYUQ QƏLYANALTILAR';
  isti_qelyanaltilar_lang.textContent = 'İSTİ QƏLYANALTILAR';
  sac_yemekleri_lang.textContent = 'SAC YEMƏKLƏR';
  plovlar_lang.textContent = 'plovlar';



  
} else {
  milli_yemekler_lang.textContent = 'NATIONAL DISHES';
  xemir_yemekler_lang.textContent = 'FARINACEOUS DISHES';
  tendir_yemekler_lang.textContent = 'TANDOORI DISHES';
  steak_lang.textContent = 'STEAK';
  isti_yemekler_lang.textContent = 'HOT DISHER';
  soyuq_qelyanaltilar_lang.textContent = 'COLD SNACKS';
  isti_qelyanaltilar_lang.textContent = 'HOT SNACKS';
  sac_yemekleri_lang.textContent = 'SAJ DISHES';
  plovlar_lang.textContent = 'PILAFS';



}