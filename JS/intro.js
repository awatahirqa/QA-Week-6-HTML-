
//Iterations excersice 1

let a = 100;
while (a <= 200) {
  a++;
  console.log(`a = ${a}`);
}

//Iterations excersice 2

let b = 100;
while (b <= 200) {
  if (b % 2 == 0) {
    console.log("-");
  } else {
    console.log("*");
  }
  b++;
}
//Iterations excersice 3
for (let i = 0; i < 10; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(j);
    }
 }  
 //Iterations excersice 4
 for (let a = 100; a <= 200; a++) {
    console.log(`a = ${a}`);
  }

  for (let a = 100; a <= 200; a++) {
    if (a % 2 == 0) {
      console.log("-");
    } else {
      console.log("*");
    }
  }
  //Iterations excersice 5
  let day = now.getDay();
switch (day) {
  case 0:
    console.log(`It's Sunday`);
    break;
  case 6:
    console.log(`It's Saturday`);
    break;
  case 1:
    console.log(`It's Monday`);
  case 2:
  case 3:
  case 4:
  case 5:
    console.log(`It's a weekday`);
    break;
  default:
    console.log(`Day not recognised`);
    break;
}