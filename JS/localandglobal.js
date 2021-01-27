`use strict`
//Local variable is located within the curly brackets and is a LET or CONST type and so can only be called through its parent method as it does not exist outside of the method 
// however variables declared outside of the curly brackets can be callled anywhere within the file
function example(){

    let hello ="Billybob";
    console.log(hello,"called from function");


}

example();
console.log(hello);


let check = false;

function changcheck(){

    check = true// is not a local variable as it is already initialised outside of teh function
}
console.log(check);//false
changcheck();
console.log(check);//undefined

// we always look within the function before we look elsewhere
let flag = false;

function test(){
    flag = true;
    console.log(flag);
    test1();
    console.log(flag);
}

function test1(){
    flag = false;
    return;
}

test();
// need to initialise a variable for the below to work when "use strict" is on

function another1(){
    flag = true;
    console.log(flag);
    another1again();
    console.log(flag);
}

function another1again(){
    let flag = false;
    return;
}
another1()