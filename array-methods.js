// Array of objects
const Products = [
{name:"Xiomi",brand:"Xiomi",price:3000,color:"Black"},
{name:"Samsung",brand:"smg",price:5000,color:"red"},
{name:"onePlus",brand:"Op",price:2500,color:"Blue"},
{name:"motorala",brand:"Mt",price:4000,color:"Gray"},
{name:"Sony",brand:"XSn",price:5000,color:"Yellow"},
{name:"lenevo",brand:"lv",price:8000,color:"Black"},


]

// use map--> {} , so return must be use

const result = Products.map(produc =>{
     return produc.brand//function is end here
    //  console.log(result)//so  this li9ne does not execute
 

});

console.log(result)

// const result = Products.map(produc => produc.brand);
// console.log(result)





