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
  const baliq_yemekleri_lang = document.querySelector("#baliq_yemekleri_lang");
  const toyuq_yemekleri_lang = document.querySelector("#toyuq_yemekleri_lang");
  const burgerler_lang = document.querySelector("#burgerler_lang");
  const rollsandvich_lang = document.querySelector("#rollsandvich_lang");
  const pizzalar_lang = document.querySelector("#pizzalar_lang");
  const usaq_menyusu_lang = document.querySelector("#usaq_menyusu_lang");
  const qarnirler_lang = document.querySelector("#qarnirler_lang");
  const sorbalar_lang = document.querySelector("#sorbalar_lang");
  const pastalar_lang = document.querySelector("#pastalar_lang");
  const salatlar_lang = document.querySelector("#salatlar_lang");
  const serin_ickiler_lang = document.querySelector("#serin_ickiler_lang");
  const piveler_lang = document.querySelector("#piveler_lang");
  const pive_mezeleri_lang = document.querySelector("#pive_mezeleri_lang");
  const isti_ickiler_lang = document.querySelector("#isti_ickiler_lang");
  const desertler_lang = document.querySelector("#desertler_lang");
  const seher_yemek_setleri_lang = document.querySelector("#seher_yemek_setleri_lang");
  const qelyan_setleri_lang = document.querySelector("#qelyan_setleri_lang");
  const shisha_setleri_lang = document.querySelector("#shisha_setleri_lang");



  shisha_setleri_lang

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
  baliq_yemekleri_lang.textContent = 'Balıq YEMƏKLƏR';
  toyuq_yemekleri_lang.textContent = 'TOYUQ YEMƏKLƏR';
  burgerler_lang.textContent = 'BURGERLƏR';
  rollsandvich_lang.textContent = 'ROLL VƏ SENDVİÇ';
  pizzalar_lang.textContent = 'PİZZALAR';
  usaq_menyusu_lang.textContent = 'UŞAQ MENYUSU';
  qarnirler_lang.textContent = 'QARNİRLƏR';
  sorbalar_lang.textContent = 'ŞORBALAR';
  pastalar_lang.textContent = 'PASTALAR';
  salatlar_lang.textContent = 'SALATLAR';
  serin_ickiler_lang.textContent = 'SƏRİN İÇKİLƏR';
  piveler_lang.textContent = 'PİVƏLƏR';
  pive_mezeleri_lang.textContent = 'PİVƏ MƏZƏLƏRİ';
  isti_ickiler_lang.textContent = 'İSTİ İÇKİLƏR';
  desertler_lang.textContent = 'DESERTLƏR';
  seher_yemek_setleri_lang.textContent = 'SƏHƏR YEMƏK SETLƏRİ';
  qelyan_setleri_lang.textContent = 'QƏLYAN SETLƏRİ';
  shisha_setleri_lang.textContent = 'SHİSHA SETS';



  
} else {
  milli_yemekler_lang.textContent = 'NATIONAL DISHES';
  xemir_yemekler_lang.textContent = 'FARINACEOUS DISHES';
  tendir_yemekler_lang.textContent = 'TANDOORI DISHES';
  steak_lang.textContent = 'STEAK';
  isti_yemekler_lang.textContent = 'HOT DISHES';
  soyuq_qelyanaltilar_lang.textContent = 'COLD SNACKS';
  isti_qelyanaltilar_lang.textContent = 'HOT SNACKS';
  sac_yemekleri_lang.textContent = 'SAJ DISHES';
  plovlar_lang.textContent = 'PILAFS';
  baliq_yemekleri_lang.textContent = 'FISH DISHES';  
  toyuq_yemekleri_lang.textContent = 'CHICKEN DISHES';
  burgerler_lang.textContent = 'BURGERS';  
  rollsandvich_lang.textContent = 'ROLL AND SANDWICH';  
  pizzalar_lang.textContent = 'PİZZAS';  
  usaq_menyusu_lang.textContent = 'KIDS MENU';  
  qarnirler_lang.textContent = 'GARNİSHES';  
  sorbalar_lang.textContent = 'SOUPS';  
  pastalar_lang.textContent = 'PASTALAR';  
  salatlar_lang.textContent = 'SALADS';  
  serin_ickiler_lang.textContent = 'COLD DRINKS';  
  piveler_lang.textContent = 'BEERS';  
  pive_mezeleri_lang.textContent = 'BEER APPETİZERS';  
  isti_ickiler_lang.textContent = 'HOT DRINKS';  
  desertler_lang.textContent = 'DESSERTS';  
  seher_yemek_setleri_lang.textContent = 'BREAKFAST SETS';  
  qelyan_setleri_lang.textContent = 'SHİSHA SETS';  
  shisha_setleri_lang.textContent = 'OUR SHİSHA SETS';  
  



}