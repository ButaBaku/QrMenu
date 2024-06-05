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