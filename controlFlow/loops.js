// loops like for, do-while, while are same as loops in other language like java, cpp
// js has more types of loops like for-of, for-in, for-each

const arr=[1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const myString="Hello World!";
for (const char of myString) {
    // console.log(char);
}

const map=new Map();
map.set("IN", "India");
map.set("UsA", "United States Of America");
map.set("NZ", "Newzealand");

for(const key of map){
    // console.log(key);
}                                             // [ 'IN', 'India' ]
                                             //  [ 'UsA', 'United States Of America' ]
                                                //  [ 'NZ', 'Newzealand' 
        
for(const [key, value] of map){
    // console.log(`${key}  :- ${value}`);
}                                                  /* IN  :- India 
                                                     UsA  :- United States Of America
                                                     NZ  :- Newzealand  */

const myobj={"lang":"java",
            "file":"java"};
/*
for(const key of myobj){
    console.log(key);            // for-of not possible in object as object is not iterable
}
*/

// For-of loops is used to print value, it iterate over value

for(const key in myobj){
    console.log(`${key} :- ${myobj[key]}`);      // key will print
}

const myArr=["batman", "superman", "flash"]
for (const key in myArr) {
//    console.log(key);         // print only index
}

const s="hey i am using for-in";
for(const c in s){
    // console.log(c);    // print index only
}

// for-in is generally used to iterate over object and it iterate over index
// we can't use for-in for map

const letter=['a','b','c']

letter.forEach( function(item){
    // console.log(item);
})

letter.forEach( (l)=>console.log(l));

letter.forEach( (item, index, arr)=>console.log(item , index, arr));    /* as -- a 0 [ 'a', 'b', 'c' ]
                                                                                 b 1 [ 'a', 'b', 'c' ]
                                                                                 c 2 [ 'a', 'b', 'c' ]  */

function print(item){
    console.log(item);
}

letter.forEach(print);

/*     ["","",""]    [{}, {}, {}]   in this scenerio forEach is widely used as api return array of object
 forEach needs a callback function ---having no name
 call back funcn is a function which are passed to the parameter of other funcn   */

const coding=[
                {"lang":"java", "file":"java"}, 
                {"lang":"javascript", "file":"js"},
                {"lang":"python", "file":"py"}
            ]

coding.forEach( (item) => console.log(`${item.lang} :- ${item.file}`))



