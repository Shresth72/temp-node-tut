const { readFile, writeFile } = require("fs");
const { result } = require("lodash");
const { resolve } = require("path");

const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFilePromise("./content/first.txt", "utf8");
    const second = await readFilePromise("./content/second.txt", "utf8");
    await writeFilePromise(
      "./content/await.txt",
      `This is awesome : ${first}, ${second} \n`,
      { flag: "a" }
    );
    console.log(first, second);
  } catch {
    console.log(error);
  }
};

start();
