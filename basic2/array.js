let myArr=[1, "ankit", true, 5];
console.log(myArr);

// in js we can resize array, we can have different types of element.

myArr.push(10);
myArr.push(50);
console.log(myArr);
myArr.pop();
console.log(myArr);

myArr.unshift(100);  // insert at begining
console.log(myArr);
myArr.shift(); 
console.log(myArr);

console.log(myArr[0]);
console.log(myArr.indexOf('ankit'));
console.log(myArr.includes(400));  //false

let newArr=myArr.join();  //convert array into string
console.log(newArr); // gives string.

let arr2=myArr; // shallow copy only reference copy no copy created at heap.

arr2.push(1000);
console.log(arr2);
console.log(myArr);

// ******* slice and splice *****

let narray=[0,1,2,3,4,5,10]

console.log("A", narray);
console.log(narray.slice(1,3));  //[1,2]

console.log("B", narray);  // same as original array
console.log(narray.splice(1,3));  //[1,2,3]

console.log(narray);  // [0,4,5,10]

/* slice only slice the array and return the copy where range excluded but splice make change in original array it cut the
   array where range is included */

let marvel=["spiderman", "thor","hulk","ironman"];
let dc=["superman","flash","batman"]

// marvel.push(dc);  // inside marvel array dc array
// console.log(marvel)

let hero=marvel.concat(dc);// all element in one array
console.log(marvel);
console.log(hero);

//     spread operator ...
let allhero=[...marvel, ...dc, "heroes"]
console.log(allhero);

let arr=[1,2,3,[4,5,6], 7,[1,2,[3,4,5]]];
let newarr=arr.flat(Infinity);   // infinity is depth like arr inside arr inside...

console.log(newarr);

let myarr="hitesh";
console.log(Array.isArray(myarr));  //false
console.log(Array.from(myarr));   //  [ 'h', 'i', 't', 'e', 's', 'h' ]

let narr={1:"a", 2:"b", 3:"c"}
console.log(Array.from(narr));   // empty arr because unable to read iterable obj
console.log(Array.from(Object.keys(narr))); // array of key
console.log(Array.from(Object.values(narr)));


let score1=100;
let score2=200;
let score3=300;
let score=Array.of(score1,score2,score3);
console.log(score);  //  [ 100, 200, 300 ]


