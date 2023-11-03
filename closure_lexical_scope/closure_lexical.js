/* When a function is defined within another function, it forms a lexical scope, 
and the inner function can access variables from its containing (outer) function, creating a chain of nested scopes. */

function outer(){
    let name='kamal';
    function inner(){
        console.log(name);   // here inner function create lexical scope that has access of name variable.
    }

    inner();
}

outer();


// -----------------closure----

/* A closure is a function that "closes over" the variables from its outer (enclosing) lexical scope, 
allowing it to access those variables even after the outer function has completed its execution.
Closures are created when a function is defined inside another function and retains a reference to the outer function's variables. */

function out(){
    let age=22;
    function inn(){
        console.log(age);
    }
    return inn;
}

let myfunc=out()   /* here outer return reference of inner but inner doesn't have age variable 
                       so it make lexical scope and return reference + lexical scope  */
myfunc();