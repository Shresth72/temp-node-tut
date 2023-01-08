const { readFile, writeFile, read, write } = require("fs");

console.log("start");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(`The error is ${err}`);
    return;
  }

  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(`The error is ${err}`);
      return;
    }

    const second = result;

    writeFile(
      "./content/result-async.txt",
      `This is a async of ${first} and ${second}`,
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log("Error in WriteFile");
          return;
        }
        console.log("done with this task");
        // console.log(result); //undefined
      }
    );
  });
});
console.log("starting next task");

/* ---------- */
// start
// starting next task
// done with this task
