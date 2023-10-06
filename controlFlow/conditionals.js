// in js if-else and switch are same as in other language like java, c++

/* like for switch

switch(key){
    case value:
        break;

     default:
        break;   
}                         */


const month="m";
switch(month){
    case "jan":
        console.log("january");
        break;
    case "feb":
        console.log("february");
        break;
    case "march":
        console.log("march");
        break;
    default:
        console.log("no value matched");
        break;
}

/*   we have some truthy and falsy value according to that conditionals work as
 
truthy -- "0", 'false', " ", [], {}, function(){}
falsy -- false, 0, -0, BigInt 0n, "", null, undefined, NaN

*/


const email=[];

if(email){
    console.log("email generate");
}
else{
    console.log("not generated");
}

const userEmail='';

if(userEmail.length===0){
    console.log("true");
}
else{
    console.log("false");
}


//  nullish coalescing operator (??) : null undefined

// let val= 5??10;
// let val=null??10;   //10
// let val=undefined??15;   //15
let val=null??10??20;

console.log(val);



