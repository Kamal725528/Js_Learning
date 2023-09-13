let myDate=new Date();

console.log(myDate);
console.log(myDate.toDateString()); // return date as string value  // Wed Sep 13 2023
console.log(typeof (myDate.toDateString()));  //string

console.log(myDate.toString());  // with time and timezone
console.log(myDate.toLocaleString());  // 9/13/2023  mm-dd-yyyy
console.log(myDate.toJSON()); // same as line 3rd.

console.log(myDate.getDate()); // get the day of month using local time  13
console.log(myDate.getDay()); // get day of week.  // 3 --as wed is 3.
console.log(myDate.getTime()); // give time in millisecond from 1 jan 1970.


// let newDate=new Date('2023-07-08');
// let newDate=new Date(2023, 10, 15);  // 15 nov 2023
let newDate=new Date(2023, 1, 10, 5,3);   // in js 0- jan, 1-feb ans so on... if put 12 then it convert the year. and here 5 hour

console.log(newDate.toLocaleString());
console.log(newDate.getDate());

let timeStamp=Date.now();
console.log(timeStamp);  // time in millisecond.
console.log(myDate.getTime()); // used for comparing date

// basically Date in js are compared through time which is in millisecond.

console.log(myDate.toLocaleString('default',{
    weekday:"long",
    year:"2-digit",
    month:"long"
}));          // september 23 wednesday

console.log(myDate.toLocaleString('hi-IN',{
    weekday:"long",
    year:"2-digit",
    month:"long"
}));      // gives in  hindi as सितंबर 23 बुधवार






