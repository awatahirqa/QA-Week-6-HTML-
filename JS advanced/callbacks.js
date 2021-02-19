`use strict`
// callbacks are used to invoke a function that exists outside of a particuler method inside of a method

const greeting = (fname) =>{
    //creates a popup which prints the entered name
    alert(`Hello ${fname}`);
}

const userinput = (cb) =>{
//create a user input box that takes a value and assigns it to fname
let username = prompt("please enter your name");
cb(username)//calling the function greeting(fname)
}

//prompt and alert are both a java script default function 
userinput(greeting)

//anonamous function is defined by "()=>{}" without an attached function name
userinput((fname) => alert(`hello ${fname}`));
