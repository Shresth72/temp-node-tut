console.log('first')
setTimeout(() => {
    console.log('second');
}, 0);
console.log('third');


console.log(" ");

/* Example 2*/
console.log("first task");
setTimeout(() => {
  console.log("second task");
}, 0);
console.log("next task");

/*  
    first
    third

    first task
    next task
    second
    second task
*/