const num=[1,2,3,4,5,6,7,8]

let newnum=num.filter( (val)=>val%2==0);

// console.log(newnum);

const nums=[1,2,3,4]
let newnums=nums.map( (val)=>val*10);
// console.log(newnums);


const value=[1,2,3,4,5]

let sum=value.reduce( function (acc, curr){
    console.log(`acc is ${acc} and curr is ${curr}`);
    return acc+curr;
},0);


// let sum=value.reduce( (acc, num)=>acc+num ,0);
console.log(sum);

const cart=[{"name":"book1", "subject":"History", "edition":1999, "price": 299},
            {"name":"book2", "subject":"History", "edition":2003, "price": 499},
            {"name":"book3", "subject":"Science", "edition":2013, "price": 899},
            {"name":"book4", "subject":"Science", "edition":2020, "price": 1199},
            {"name":"book5", "subject":"English", "edition":2022, "price": 999}
           ]

let totalprice=cart.filter( (item)=>item.subject=="History").reduce( (acc, item)=> acc+item.price ,0);
// console.log(totalprice);

