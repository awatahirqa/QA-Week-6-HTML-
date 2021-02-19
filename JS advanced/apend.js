`use strict`

const test = () => {

    return Promise.resolve("hello");
};
test().then((message)=> console.log(message));


//waiting for some info 

const test2 = async() => {

   let promise = new Promise((resolve,reject) =>{

    setTimeout( ()=>{
        resolve("done");
    }, 5000)
  
});

let result = await promise;
console.log(result);
}

test2();

const joe = async() =>{
return new Promise((resolve,reject) =>{
setTimeout(() =>{
    console.log("JOE");
    resolve();
},1000)


});
}
const laura = async() =>{
    return new Promise((resolve,reject) =>{
    setTimeout(() =>{
        console.log("Laura");
        resolve();
    },3000)
    
    
    });
    }
    const mo = async() =>{
        return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log("MO");
            resolve();
        },5000)
        
        
        });
        }
            const dothings = async()=>{

await joe();
await laura();
await mo()

            }
            dothings();