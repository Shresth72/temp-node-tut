const { readFile } = require("fs");
const { result } = require("lodash");
const { resolve } = require("path");

//Promisify
const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// getText("./content/first.txt")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const start = async () => {
  //instead of nesting then, we will only do something
  //with the result after the promise is resolved
  try {
    const first = await getText("./content/first.txt");
    console.log(first);
  } catch {
    console.log(error);
  }
};

start();
