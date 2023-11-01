const descriptor= Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(descriptor);

/* output is --  
 {
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

console.log(Math.PI);
Math.PI=5;
console.log(Math.PI);     // we can't change because in property the writable is false;

const chai= {
    name:"ginger",
    price:250,
}

console.log(chai.name);
const desc= Object.getOwnPropertyDescriptor(chai,'name');
console.log(desc);

chai.name='masala';
console.log(chai.name);

Object.defineProperty(chai, 'name',{
    writable:false
    // enumerable:false
});


const desc2= Object.getOwnPropertyDescriptor(chai,'name');
console.log(desc2);


chai.name='elaichi';
console.log(chai.name);

// ---------------- property_get_set ----------------

function User(name, age){
    this._name=name;
    this._age=age;

    Object.defineProperty(this, 'name',{
        get: function(){
            return this._name.toUpperCase();
        },
        set: function(value){
            this._name=value;
        }
    });

    Object.defineProperty(this, 'age',{
        get: function(){
            return this._age;
        },
        set:function(value){
            this._age=value;
        }
    });
}

const u1=new User('kamal', 23);
console.log(u1);
console.log(u1.name);   // if not defineproperty then the o/p is undefined.

