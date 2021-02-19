`use strict`
//promise is a commitment or something you said you were gona do
//break,keep,forget

// In JS context it means a placeholder for some data that is either currently available,
// will be available in the future or that it may never be fullfilled
//they are normally used in teh context of a reponce to another ufnction taht will act depending on the results of the function

let promprom = new Promise((resolve,reject) => {
//do seomthing where i request information
//compute something
let a = 1+1;
if(a==2){

//succesfull outcome
    resolve("great it all went well");

}else{
//failed outcome
    reject("Operation failed");
}

});
//promise is usefull and different from reguler loops in that it creates a memeory state that is reserved for when the function is carried out
console.log(promprom)

//.then() is for when the function has been succesfull and .catch() is for when teh function has resolved to its faield case

promprom.then((message) => {
alert(`woohoo lets throw a party ${message}`);

}).catch((error) => {

    alert(`something went wrong:${error}`);
});

//As long as the promise resolve is completed then all the ".then" functions will be run
// if it fails all the".catch function will be returned
let newPromise = new Promise ((resolve,reject) => {
console.log(`initial`);
resolve();
reject();
}).then(() => {
    console.log(`do this`);
}).then(() => {
    console.log(`straight after`);
}).catch(() => {
    console.log(`oh no`);
});