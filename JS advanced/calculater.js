`use strict`
const number1 = document.querySelector("#firstnumber");
const number2 = document.querySelector("#secondnumber");
const result = document.querySelector("#result");
const history = document.querySelector(".history")
const clearValues = document.querySelector("#clearValues");
const clearHistory = document.querySelector("#clearHistory");

console.dir(history);

const getValues = () => {
    return [Number.parseFloat(number1.value), Number.parseFloat(number2.value)];
}
const printValue =(newResult) => {
    result.value = newResult;
}

const addtoHistory = (result,num1,num2,operator) =>{
const p = document.createElement("p");
const info = document.createTextNode(`${num1} ${operator}${num2} = ${result}`);
p.appendChild(info);
history.appendChild(p);

}
//methods for each of the functions in my HTML
const add = () => {

    const [num1, num2] = getValues();
    const newResult = num1 + num2;

    result.value = newResult;
    addtoHistory(newResult,num1,num2,"+");
};

const subtract = () => {

    const [num1, num2] = getValues();
    const newResult = num1 - num2;

    result.value = newResult;
    addtoHistory(newResult,num1,num2,"-");
};
const multiply = () => {

    const [num1, num2] = getValues();
    const newResult = num1 * num2;

    result.value = newResult;
    addtoHistory(newResult,num1,num2,"*");
};

const divide= () => {

    const [num1, num2] = getValues();
    const newResult = num1 / num2;

    result.value = newResult;
    addtoHistory(newResult,num1,num2,"/");
};
//Clear Values and History 
// adding annoymous functions to a button onclick
clearValues.addEventListener("click", () => {
    number1.value = ""; 
    number2.value = ""; 
    result.value = ""; 
});

//adding a named function to a button onlick 
clearHistory.addEventListener("click", clearH);

clearHistory.addEventListener("mouseover", () => {
    clearHistory.className = "btn btn-info";
})