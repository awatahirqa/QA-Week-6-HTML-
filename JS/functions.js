`use strict`


add(12,3);// NOT GOOD by calling the method before you have declared the function it hoists the function up so you can use however this is not good practice for your code


function add(){
    console.log(1+2);
}

add();

function add(num1,num2){
    console.log(num1+num2);
}

//function expression

const hello = function(){
return("do something");


}
hello();
//arrow function
// syntax const/let nameoffunction = () =>{} in this function "=>" means return


//arrow function with no parameters
const addition = ()=> {
console.log(1+2);

}
addition();

//arrow function with two paramateres
const additionwithvals = (number1,number2) =>{

    console.log(number1+number2);
}
additionwithvals(14,23);

