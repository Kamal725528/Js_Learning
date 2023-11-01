class user{
    constructor(username, email, password){
        this.username=username;
        this.email=email;
        this.password=password;
    }

    encryptPassword(){                  // no need to write function keyword when define inside class
        return this.password+"123";
    }

    changeUsername(){
        return this.username.toUpperCase();
    }
}

const u1=new user('kamal','abc@gmail.com', 'test');
console.log(u1);
console.log(u1.encryptPassword());
console.log(u1.changeUsername());

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());


// ------------------- inheritance------------------

class User{
    constructor(username){
        this.username=username;
    }

    logMe(){
        return `my username is ${this.username}`
    }

}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email=email;
        this.password=password;
    }

    addCourse(){
        return `i am able to add course`;
    }
}

const t1=new Teacher('kamal','k@fb.com', 123);
console.log(t1);
console.log(t1.username);
console.log(t1.addCourse());
console.log(t1.logMe());       //

const u=new User('rohan');
console.log(u.logMe());
console.log(u.addCourse());   // error

console.log(u instanceof User);
console.log(t1 instanceof Teacher);
console.log(t1 instanceof User); // true
console.log(u instanceof Teacher);  // false


// --------------   static property-------------

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())  //  we can't acess static method

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
// console.log(iphone.createId());   // we can't acess static method



