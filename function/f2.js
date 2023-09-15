
myFunc("kamal");   // this works fine -- hoisting in function

function myFunc(name){
    console.log(`my name is ${name}`);
}

// myFunc("kamal");

// func("babuRao");   // error can't access hoisting doesn't work with function expression

const func=function(name){
    console.log(`your name is ${name}`);
}

func("babuRao");


// ************   arrow function   ********

let myArrow1= ()=>{ console.log("we can write function without using function")}
myArrow1();

let myArrow2=()=>console.log("without braces even possible")
myArrow2();

let myArrow3=(num1, num2)=>{return num1+num2}
console.log( myArrow3(5,9));  //"if use braces then need to write return", otherwise result is undefined

let myArrow4=(num1,num2)=>(num1+num2)
console.log("no need to write return if use paranthesis", myArrow4(10,20));

let myArrow5=(num1,num2)=>num1+num2
console.log(myArrow5(5,50));  // no need to put paranthesis

let myArrow6=num1=>num1+1
console.log(myArrow6(5));  //  if one argument no need to put paranthesis

let fun=()=>({user:"kamal"})
console.log(fun());

