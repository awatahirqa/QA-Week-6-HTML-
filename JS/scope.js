`use strict`

function deposit(increment){
let bankbalance = 100;
let balance = bankbalance + increment;
return`${balance}`;
}

console.log(deposit(10));
console.log(bankbalance);
