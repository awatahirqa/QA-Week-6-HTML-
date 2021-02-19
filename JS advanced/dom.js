`use strict`
const spiderman = document.querySelector("#Spiderman")
console.dir(spiderman);
//Two ways to manipulate an object but use the method variation over the"." method as it is more reliable
spiderman.title = "Tom Hollands Spiderman"
spiderman.setAttribute("width","500px");

//select the div element

let divs = document.querySelector(".addtome");
//select all paragraphs

let allP = document.querySelectorAll("div.addtome p");
console.log(allP);

for(let each of allP){
each.style.backgroundColor = "red";

}

//create new content

let newHeading = document.createElement("h1");
let newHeadingtext = document.createTextNode("We love marvel");
newHeading.appendChild(newHeadingtext);//(h1)"We love marvel"(h1)

divs.appendChild(newHeading)

let newimage = document.createElement("img");
newimage.setAttribute("src","../Resources/Morpheus.jpg")
divs.appendChild(newimage);