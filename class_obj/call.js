function setusername(name){
    this.name=name;
    console.log("called")
    console.log(this);
}

function user(name, email, age){
    setusername.call(this, name);
    this.age=age;
    this.email=email;

}

const u1= new user('kamal', 'abc@gmail.com',22)
console.log(u1);   // user { age: 22, email: 'abc@gmail.com' }   

/* for solving this issue we have to use call() ---The call() method in JavaScript is used to invoke a function while
 explicitly setting the value of this and passing individual arguments. It allows you to execute a function in a specific context 
 and borrow the functionality of other functions, facilitating code reuse and customization within the calling function or constructor. */
console.log(u1.age);

// call() humara current execution context dusre function ko pass kar deta hai.