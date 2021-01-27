'use strict';

//contain an key value pairs inside a coalated item
//creating an object 
//call constructor
let student = new Object;

let person = {};//{} is defaulted as a object in JS

//store info inside an objct

person.name = "Peter parker";
person["date of birth"] = 1978;//Bad practice to use this method "." method better
console.log(person);
//print specific key
console.log(person);
console.log(person.name);


let red = {};
red.make = "BMW";
red.model = "M5";
red.colour = "Racing Red";

console.log(red);

for (let attributes in red){
    console.log(`key:${attributes} value : ${red.attributes}`);

}
//key colon value, is how we can create object within a array
let carpark = [
    red,{"make":"Audi","model":"A5","colour":"Black"},
    {"make":"Merc","model":"C63","colour":"White"}
]
console.log(carpark);
//printing list
for(let cars of carpark){
    console.log(cars);
}
//printing each attribute and objects coresponding value

for(let cars of carpark){
    console.log(cars);
    for(let car in cars){
        console.log(`key:${car} value ${cars[car]}`);
    }
}

// JSON - Java script object notation
// ordered list of values that comtains key value pairs
// they are seperated by a ":" between the (key ":" value)

let myJSONObject = {
"Asda":[
{"productname" : "Coke", "price":0.99,"quantity":100},
{"productname": "Sprite","price":0.79,"quantitiy":80},

],
"cars":[
{"make":"Audi","model":"A5","colour":"Black"},
{"make":"Merc","model":"C63","colour":"White"}


]

}
//access specific element to add to my array 

myJSONObject.Asda.push({"productname" : "nintendo switch", "price":280.99,"quantity":100})

// turn an object into a tostring output
let redtoText = JSON.stringify(red);
console.log(typeof redtoText);
console.log(typeof red);

//To take an input data and turn it into an object we

let userData = `{"name:"Joe"}`
console.log(typeof userData);
let obj = JSON.parse(userData);
console.log(typeof obj);

//example 
let darthVader = {
    allegiance: "Empire",
    weapon: "lightsaber",
    sith: true,
    Jedi: false
    };

    console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon of choice is a ${darthVader.weapon}`);
console.log(`Darth Vader is a sith? ${darthVader.sith}`);
console.log(`Darth Vader is a Jedi? ${darthVader.Jedi}`);
