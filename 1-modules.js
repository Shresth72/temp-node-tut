const amount = 12;
if (amount < 20) {
  console.log(`This is very less amount ${amount}`);
}
// node app.js





/* GLOBALS - NO WINDOW */

// __dirname = path to current directory
// __filename = filename
// require = function to use modules (CommonJs)
// module = info about current module (file)
// process = info about env where the program is being executed

console.log(__filename);
console.log(__dirname);

// setInterval(() => {
//   console.log("hello world");
// }, 1000);







/* MODULES */
// CommonJs, every file is a module(by default)
// Modules - Encapsulated Code (only share minimum)

// const john = "john";
// const secret = "SECRET";
// const larry = "larry";
// const sayHi = (name) => {
//   console.log(`Hello there ${name}`);
// };

const names = require("./2-names.js");
// import names from './names.js';
console.log(names);

const sayHi = require("./3-utils.js");

const data = require("./4-alternative-export.js");

sayHi("susan");
sayHi(names.john);
sayHi(names.larry);

console.log(data.items);
console.log(data.singlePerson);
console.log(data.john); //undefined

//sum.js
require("./5-sum.js");