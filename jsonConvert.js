const person = {

    name:"Rahim",
    age:24,
    friends:["BD","Test"],
    country:'Bangladesh',
    family:{
        father_name : "karim",
        age:60,
        mother_name : "Karima"


        
    },
}

//obj to json data
const jsonConvert = JSON.stringify(person);
console.log(jsonConvert);

// json data to obj
const plaintext = JSON.parse(jsonConvert);
console.log(plaintext)

const keys = Object.keys(person);
const value = Object.values(person);
console.log(keys)
console.log(value)