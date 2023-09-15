function sayHello() 
{
    console.log("Hello World");
}

sayHello();

function add(num1, num2){
    return num1+num2;
}

console.log(add(4,3));

function add(num){
    return num+1
}

console.log(add([2,6,7]));

var b=500;


function myFunc(){
    let a=10;
    var b=50;
    console.log(a);
    console.log(b);
    c=100;
}

// console.log(a);   // block scope/local scope
console.log(b);   // 500
// console.log(c);   // error c is not defined

{
    var b=100;
}

console.log(b);  // this b print 100 but it should print 500 that is redundancy in var it doesn't follow block scope.
                  //that's why using var is not a good practice.

const addTwo=function(num1,num2){   //func expression
    return num1+num2;
}

console.log(addTwo(3,4));


let myobj={
    id:1,
    user:"kamal",
    food:"gulab-jamun"
}

function useObject(obj){
    console.log(`${obj.user} is confident to eat ${obj.food}`);
}

useObject(myobj);

// same you can use array in parameter too

function calculateCart(var1, var2, ...num){
    return num;
}

console.log(calculateCart(500,300,400,900));   // it gives the array [400,900]  spread opeartor/--as rest operator which take 
                                                //all the input, basically used in the add to the cart functionality.

const user={
    id:1,
    username:"kamal",
    welcomeMsg:function(){
        console.log(`${this.username} is logged in`);
        console.log(this);   // it prints whole object
    },
    age:22
}         

// this keyword is used to invoke the current object.

user.welcomeMsg();

user.username="samia";
user.welcomeMsg();   // samia is logged in this keyword here used to invoke obj.

function myname(){
    let a=10;
    console.log(this.a);  //undefined
    console.log(this);    // this print object and its prototype like things.

}

myname();  // undefined -- we can't use this keyword other than object


