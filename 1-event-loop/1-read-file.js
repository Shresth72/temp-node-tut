/* Example 1*/
console.log("first task");
console.time();
for (let i = 0; i < 100; i++) {
  const h3 = document.querySelector("h3");
  h3.textContent = "Hey, Everyone is waiting on me";
}
console.timeEnd();

console.log("next task");
/*  for eg, user are requesting something
    the Event loop registers the Callback
    and only when the operating system process is complete, it executes it
*/









/* Example 2*/
const { readFile } = require("fs");
const { result, lowerFirst } = require("lodash");

console.log("started first task");
// CHECK FILE PATH
readFile("../content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("completed first task");
});

console.log('starting next task');