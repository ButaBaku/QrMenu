if(localStorage.getItem("langMode")==undefined){
  localStorage.setItem("langMode","az");
}


const langBtn = document.querySelector(".langBtn");

const langFunc = ()=>{
  if(localStorage.getItem("langMode")=="az"){
    localStorage.setItem("langMode","en");
  }else{
    localStorage.setItem("langMode","az");
  }
  window.location.reload();
}

langBtn.onclick=langFunc;

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