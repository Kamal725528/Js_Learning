const user={
    username:"kamal",
    logincount:8,
    age:22,
    greet: function(){
        console.log(`hello ${this.username}`);
        console.log(this);
    }
}

// console.log(user);
// console.log(this);     // {}
// console.log(user.greet);   // [Function: greet]
// console.log(user.greet());

// --------------constructor function------

function User(name, age, gender){
    this.name=name;
    this.age=age;
    this.gender=gender;

    this.greet=function(){
        console.log(`good morning ${this.name}`);
    }

    return this;
}

const u1= new User('kamal', 22, 'male');
const u2=new User('rahul', 23, 'male');

console.log(u1);

console.log(u2);

// console.log(u1.age);
// console.log(u1.greet());

console.log(u1.constructor);  //[Function: User]

/* a constructor function is a special type of function that is used to create and initialize objects. 
It is a blueprint for creating objects with similar properties and methods. Constructor functions are typically written
 with an uppercase first letter to distinguish them from regular functions.    */
 