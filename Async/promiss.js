
/* a Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
 Promises are used to manage asynchronous operations in a more structured and readable way, 
 making it easier to work with tasks that may take some time to complete, such as network requests,
  file I/O, or database operations   */

  /* Promises help avoid callback hell, a situation where deeply nested callbacks become hard to manage and comprehend */


 const p1=new Promise(function (resolve, reject){
    console.log('hello');

    setTimeout(function(){
        console.log('promiss 1');
        // resolve();
    },2000)
 });

 p1.then( ()=>console.log('promiss consumed'));    // .then() is used to consume promiss


 new Promise( (resolve, reject)=>{
    setTimeout(() => {
        console.log('promiss 2');
        // resolve();
    }, 2000);

 }).then( ()=>console.log('promiss two resolved')); // if we don't use resolve() then it will consume .. like no "promiss two resolved"



const p3=new Promise( (resolve, reject)=>{

    setTimeout( ()=>{
      console.log('promiss 3');
      resolve({name:"kamal", age:22});
    },2000)
})

p3.then((user)=>{
    console.log(user);
}    )


const p4=new Promise( (resolve, reject)=>{
     
    setTimeout( ()=>{
    let error=false;
    if (!error){
        console.log('promiss 4');
        resolve({name:"kamal", age:22})
    }
    else{
        reject("hey i am error")
    }
},2000)
  
})

p4.then((user)=>{
    console.log(user);
    return user.name;
}).then( (name)=>{
 console.log(name)
}).catch( (err)=>{
    console.log(err)
}).finally(()=>{
    console.log("i am always here !")
})


/* Async/await is a modern feature in JavaScript for handling asynchronous code. 
It provides a more readable and linear way to work with asynchronous operations, 
making code easier to understand and maintain. Async/await is built on top of Promises 
and is often seen as a more convenient and expressive alternative to using .then() and .catch(). */

const p5= new Promise( (resolve, reject)=>{

    setTimeout( ()=>{
        let error=false;
        if(!error){
            console.log('i am running');
            resolve('i am resolved');
        }
        else{
           reject("something went wrong");
        }
    },1000)
})

async function consumeP5(){
    try{
        const res =await p5;
        console.log(res);
    }
    catch(e){
        console.log(e);
    }  
}

consumeP5();  


async function getAllUser(){
    try{
        console.log('i am async one')
        const response=await fetch('https://dummyjson.com/products/1');   // the function which takes time to process we put await suffix
        const data= await response.json();
        console.log("Data are here :", data);
    }
    catch(e){
        console.log(e);
    }
}

getAllUser();

/* fetch() is a built-in JavaScript function that provides an interface for making network requests,
 typically to retrieve resources from a network. It is commonly used for making HTTP requests to fetch data from a server,
  interact with web APIs, and perform various network-related tasks. fetch() returns a Promise,
   making it suitable for asynchronous operations.*/

   /* fetch() returns a Promise that resolves to the Response object representing the response to the request.
    You can use methods like .json(), .text(), or .blob() on the Response object to access the response data*/



fetch('https://dummyjson.com/products/1')
.then((response)=>{
  return response.json();
}).then( (data)=>{
    console.log('i am from fetch')
    console.log(data)
}).catch( (e)=>console.log(e))



/* speed of data retrieval is fetch>setTimeout.*/

/* Promise.all is a built-in JavaScript function that allows you to work with multiple Promises concurrently and efficiently. 
It's used to handle multiple asynchronous operations in parallel and obtain their results when all of them have successfully completed.*/

const urls = ['https://dummyjson.com/products/1', 'https://dummyjson.com/products/1'];

const requests = urls.map(url => fetch(url)); // Assuming fetch returns a Promise

Promise.all(requests)
  .then(responses => {
    // All requests have completed successfully
    const data = responses.map(response => response.json());
    return Promise.all(data); // Wait for all JSON parsing to complete
  })
  .then(parsedData => {
    // Work with the parsed data from all requests
    console.log(parsedData);
  })
  .catch(error => {
    // Handle errors if any of the requests fail
    console.error(error);
  });







