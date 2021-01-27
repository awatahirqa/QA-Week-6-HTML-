'use strict';
//4 ways to create an Array 

let array = Array();
let arraywithsize = Array(10);
let arraywithvalues = Array("tom","dick","Harry");
let shorthand = [1,2,3];//This is the most common method for creating arrays


let classroom = [];
classroom[0] = "sav";
console.log(classroom);
console.log(classroom[2]);

classroom[2] = "vinesh";
console.log(classroom);
classroom[1] = {fname:"Waleed",grade : 12, year:2021}
classroom[3] = {fname:"Sam",grade : 12, year:2021}
console.log(classroom);
//Arrays on JS are not immutable which means thir size can be changed at any time even if the size was declared at initialisation
let students = Array(10);
students[11] = "hello";
console.log(students);
console.log(students.length);

//methods
let fruits = ["Bannana","Strawberry","Melon"];
console.log(fruits);

//push adds to the end of an array
fruits.push("Grapes");
console.log(fruits);
//pop removes from the end of teh array 
fruits.pop;
console.log(fruits);
//unshift adds to teh start of an arrsy 
fruits.unshift("Grapes");
console.log(fruits);
//shift to remove from the starts of an array list
fruits.shift();
console.log(fruits);
//To print out each element of an Array 
for(let each of fruits){
    console.log(each);
}
for(let fruit of fruits){
    console.log(fruit);
}







