let score; // null, 45

// console.log(typeof (score))   // number

let scoreString= String(score);
console.log(typeof scoreString)   //string
console.log(score)   // for null it is null

// if value is undefined but type is string when we convert.

// let age="33"  
// let age="33abc"   // for this type of is number but value is Nan=>not a number
// let age=null
let age

let ageNum=Number(age);
console.log(typeof ageNum) //number

console.log(ageNum) // 33 

// "33"->number 33    ,  "33ab"-->Nan , null->0, age->Nan

let login=null

let loginBool=Boolean(login)
console.log(typeof loginBool)

console.log(loginBool)

// 1->true  0->false  ""->false  " " or "ka"->true, null->false


//************************operation*********************** */
let num1="2"+2+3
console.log(num1);   // 223 basically operation start from left to right so string +num==string then string+num==string

console.log(typeof (1+"2"))  // 12, string
console.log(1+2+"3")  //33 cause number+number=num  num+string==string


let num2=+"22"
console.log(num2) //22
console.log(typeof num2)  // number

//  to convert in number just add + before the string/boolean

let num3=true
console.log(+num3)   //1
console.log(typeof (+num3))  //number

// console.log(true+) //error
console.log(+true)//1
 
console.log(2+3*5+5%3)

//    -------------------comparison---------

console.log("2">1) //true
console.log("02">1) //true
console.log("02"==2) //true

console.log(null==0) //false
console.log(null>0)  //false
console.log(null>=0) //true

// equality and comparison >,<,<=,>= works diffrently, comparison operator change null into number.

console.log("2"===2) // false   // === strictly check compare datatype as well as value.



