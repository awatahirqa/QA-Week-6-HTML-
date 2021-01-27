`use strict`

//destructuring is the process of extarcting data from an object or an array
comt = animals = ["Giraffe","Zebra","Lion","Horse"];
console.log(animals[1]);

//destrucuturing my array by creating key to go with my value and make pairs

cont[Giraffe,Zebra,Lion,Horse] = animals;
console.log(Zebra);

let myObject = {car1:"salt", var2:"pepper"};

let{var1,var2} = myObject;
console.log(var1);
console.log(var2);

//rename my deconstructed object

let{var1:spice, var2:pepper} = myObject;
console.log(spice);
console.log(pepper);
//spread operater
const myLongArray = [1,2334,2434,342,4234,34234,3434,2342,2424,21,32,124,34,2,3432,34,234,3,43,42,3];
const[a,b,c,...rest] = myLongArray;
console.log(a);
console.log(b);
console.log(c);
console.log(rest);

const person = {

first:"Bruce",
middle :"Johnathon",
last : "wayne",
city:"Gotham",
phone : "07432099145",
country:"USA",
age : 26,
email:"Brucewayne@gotham.com",
dob : 16/03/1980,
gender :"Male"

}


let{first,middle,last} = person;
console.log("Your human is called ${first}$(middle}${last}");
//Can be used to fill in details at apoint if there is an empty key however if the key already has a value it can't  be overwriiten through this method
let{first,middle,last,secretHideout = "Batcave"} = person;









