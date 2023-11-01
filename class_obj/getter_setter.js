class user{

    constructor(){

    }
    
    set email(value){
        this._email=value;
    }

    get email(){
        return this._email;
    }
}

let u=new user();
// u.email('abc.gmail.com'); // email() is not a function it's a setter property
u.email='abc.gmail.com'; // calls the setter property
// console.log(u.email()); //  email() is not a function it's a getter property
console.log(u.email);  // calls the getter property


/* When you use this.email, it's a public property that can be accessed and modified directly from outside the object.
This means that you can read and write the email property directly without any restrictions. */

/* When you use this._email, it's a convention often used to indicate that the property is intended to be private or internal to the object. */



// --------------- object_get_set----------------------

const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)      /*creates a new object that has User as its prototype. In other words, 
                                        the tea object inherits properties and methods from the User object. 
                                       This is sometimes referred to as delegation or prototypal inheritance. */
console.log(tea.email);

// const chai=new User();   // we can't create object like this --- this is the way to create constructor functipn or class obj.
// console.log(chai._email);