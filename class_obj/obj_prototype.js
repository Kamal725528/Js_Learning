function multiply(num){
    return num*5;
}

// console.log(multiply(5));

multiply.power=2;
// console.log(multiply.power);

// console.log(multiply.prototype);  // {}, something open in window like {constructor: ƒ}

// --------prototype----

function createUser(name, score){
    this.name=name;
    this.score=score;
}

createUser.prototype.increment=function(){
    this.score++;
}

createUser.prototype.printme=function(){
    console.log(`name is ${this.name} and score is ${this.score}`);
}

// const chai=createUser('kamal', 200);
// chai.printme(); // gives error

const tea=new createUser('kamal',250);
tea.printme();
tea.increment();
tea.printme();

 /*Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object.
 If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object,
  to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a 
non-primitive value (object, array, function, etc.), the newly created object is returned.
 */

//  ------------prototype------------------

/* Every JavaScript object has a special property called prototype, which is a reference to another object.
 This object is often called the "prototype object." */

 /* When you access a property or method of an object, JavaScript first looks for that property or method on the object itself. 
 If it doesn't find it, it looks in the object's prototype. If it still doesn't find it, it continues to search up the prototype chain
  until it reaches the root object, often referred to as Object.prototype. */

 /* Constructor functions are used to create objects with shared properties and methods. 
 When you create an object using a constructor function, the object's prototype property is automatically set to the prototype object 
 of the constructor function.*/

 /*You can add methods and properties to an object's prototype, and all objects created using that constructor function will inherit
  those properties and methods. This is more memory-efficient than adding the same methods and properties to each individual object. */

 let myname='kamal     ';
 console.log(myname.trim().length);
 

 String.prototype.truelength=function(){
    return this.trim().length;
 }

 console.log(myname.truelength());

 let hero=["spiderman", "superman","thor"];

 let heroPower={
    thor:"hammer",
    spidy:"sling",

    getspidyPower:function(){
        console.log(`spiderman power is ${this.spidy}`);
    }
 }

 Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all object`);
 }

 Array.prototype.greet=function(){
    console.log(`Hi i am in all array`);
 }

 myname.hitesh();
 hero.hitesh();
 heroPower.hitesh();
//  heroPower.truelength();  // gives error cause String->obj not obj->string

hero.greet();
// heroPower.greet()  //gives error cause Array->obj not obj->Array

 /* Js has prototypical behaviour------ Everything is Object   funcn, Array, String--->Obj--->null  */


// -----------------------------prototype inheritance--------------------------

const user={
    name:"kamal",
    pass:"1234"
}

const address={
    house:"matihani"
}

const developer={
    field:"backend",
    __proto__:address
}

developer.__proto__=user;

// modern syntax
Object.setPrototypeOf(developer, user); // user ka developer ko
