const n=100;
console.log(n);

const n1=new Number(200);
console.log(n1);

const num=1123.73;
console.log(num.toString());

console.log(num.toFixed(1));   // formats a number with x numbers of digits after the decimal point

console.log(num.toPrecision(9)); // Formats a number to x length

const hundered=1000000;

console.log(hundered.toLocaleString());   // this gives internation number system comma--- for indian give arg as -- 'en-IN' 
console.log(hundered.toLocaleString('en-IN')); 

console.log(typeof (num.toPrecision(9)));  // String type.

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

                        // +++++++++++++++++++          Math  +++++++++++++++

 const num1=9.234;

 console.log(Math.abs(-4));
 console.log(Math.round(num1));
 console.log(Math.ceil(4.2));
 console.log(Math.floor(4.8));

 console.log(Math.min(4,5,8,6,9));
 console.log(Math.max(2,3,4,9,12));

 console.log("random function in Math");

 console.log(Math.random());

 const rand= (Math.random()*10)+1 ;
 console.log(Math.floor(rand));

 const m1 = 10;
 const m2 = 20;

console.log((Math.random()*(m2-m1+1))+m1);

console.log(Math.floor((Math.random()*(m2-m1+1))+m1));




