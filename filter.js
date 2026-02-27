const Products = [
{name:"Xiomi",brand:"Xiomi",price:3000,color:"Black"},
{name:"Samsung",brand:"smg",price:5000,color:"red"},
{name:"onePlus",brand:"Op",price:2500,color:"Blue"},
{name:"motorala",brand:"Mt",price:4000,color:"Gray"},
{name:"Sony",brand:"XSn",price:5000,color:"Yellow"},
{name:"lenevo",brand:"lv",price:8000,color:"Black"},


]

// Filter( return an array) --> specefic condition e  data laghle filter use korte hoi

const result = Products.filter(produc=>{

    return produc.price>=5000
    // return result
  
})
  console.log(result)