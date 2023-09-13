const name="kamal";  // in string we can use "" or ''
const age=20;

const title= new String("Nayan");   

// console.log(name+age+" "+title);
// console.log("hey my name is "+name);

// console.log(`My name is ${name} and my age is ${age}`) ; //widely used prefer this back-tic


console.log(name[0]);
console.log(name.toUpperCase());
console.log(name.length);

console.log(name.charAt(2));
console.log(name.indexOf('m'));

console.log(name.substr(0,4));   // here 4 is excluded and 0 is included, it doesn't take negative value it simply ignore unlike slice

console.log(name.slice(-3));  // from reverse.

const myName="     kamal    ";
console.log(myName);
console.log(myName.trim());

const url="http://kamal/nayan%20chaudhary";

console.log(url.replace('%20','-'))

const profile='kamal-nayan-chaudhary'
console.log(profile.split('-'));


