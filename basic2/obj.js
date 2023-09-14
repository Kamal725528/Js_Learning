// singleton -- Object.create

//object literals

let mysmb=Symbol("key1");
let obj={name:"kamal",
          age:20,
        score:[20,30],
        islogin:true,
        [mysmb]:"value",
        "first name":"naruto",
        lastname:"nayan"
    }                                      // [Symbol(key1)]: 'value' after printing

   console.log(obj);
   console.log(obj["age"]);
   console.log(obj.name);
   console.log(obj["first name"]) // cant access with .operator

obj.lastname="uzumanki";
console.log(obj.lastname);

// Object.freeze(obj);  // can't change obj

obj.name="kakashi";
console.log(obj);

obj.greet=function(){ 
    console.log("hello kamal");
}

console.log(obj);
console.log(obj.greet);  // only reference no function call
console.log(obj.greet());

//singleton obj

let obj1=new Object();
obj1.id="123abc";
obj1.email="kamal@gmail.com";
obj1.name="kamal";

console.log(obj1);

let o1={1:"a",2:"b",3:"c"};
let o2={4:"a",5:"b",6:"c"};

// let o3={o1, o2};
// console.log(o3);   // obj inside obj

let o4=Object.assign({}, o1,o2);
console.log(o4);

let o5={...o1, ...o2};
console.log(o5);

// spread operator

let user={id:"1ab",
          age:23,
          name:{
            fullname:{
                firstname:"kamal",
                lastname:"Nayan"
            }
          }
}

console.log(user.name.fullname.firstname);


console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));  // convert each key value in array as-- [  [ 'id', '123abc' ], [ 'email', 'kamal@gmail.com' ]]

console.log(Object.hasOwnProperty('name'));

let user1=[
    {
        id:1,
        age:18
    },
    {
        id:2,
        age:20
    }
]

console.log(user1[1].id);


// *****  obj destructuring  *****

let course={
      name:"javascript",
      price:"free",
      duration:"15 days"
}

const {name}=course;
console.log(name); // instead of course.name
// or 

const {name:n}=course;
console.log(n);  // we can also change name



