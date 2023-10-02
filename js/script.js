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