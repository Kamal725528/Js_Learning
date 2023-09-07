
"use strict";  // earlier used for instructing interpreter to use modern js

let name="kamal"
let age=18
let isLogin=true
let roll;

//string, number, bigInt, null, undefined, symbol---used to show uniqueness, widely used in react
//object, array, functions -- reference/non-primitive type

// console.log(typeof "kamal")
// console.log(typeof null)  // is object
// console.log(typeof undefined) // is undefined

// ECMA -- is a internation organisation to decide standard for js

const id=Symbol('123');

const bigNumber=9989877868757657n // n for bigInt

const hero=["shaktiman",22, "batman"]

const obj={name:"kamal", age:22};

const myfunc=function(){
    console.log("hello kamal")
}

console.log(myfunc())
console.table([typeof bigNumber, typeof hero, typeof obj, typeof myfunc])  // bigInt, object, object, function

console.log(typeof id) // symbol

