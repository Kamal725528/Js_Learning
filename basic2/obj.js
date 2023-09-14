
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

Object.freeze(obj);  // can't change obj

obj.name="kakashi";
console.log(obj);

obj.greet=Function(){ console.log("hello kamal");}

