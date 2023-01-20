const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile(
      "./content/await.txt",
      `This is awesome : ${first}, ${second} \n`
    );
    console.log(first, second);
  } catch {
    console.log(error);
  }
};

start();

