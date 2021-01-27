//Conditionals excersice 3

let age = 10;

if (age >= 18 && age <= 65) {
  console.log("Age is in range");
} else if (age < 18) {
  console.log("Underage");
} else {
  console.log("Catch all else");
}
//Conditionals excersice 4 terneray if
let age = 100;
let result = age >= 50 ? "50 or over" : "Under 50";
console.log(result);
// The use of a ternary operator (?) to create a ternary-if can make this more concise.
// NORMAL if statement

// let now = new Date();
// let greeting = "Good";
// if (now.getHours() > 17) {
//   greeting += " evening.";
// } else {
//   greeting += " day.";
// }

// syntax: lettibleName = condition ? val1 : val2;

//example:
// let now = new Date();
// let greeting = "Good" + (now.getHours() > 17 ? " evening." : " day.");