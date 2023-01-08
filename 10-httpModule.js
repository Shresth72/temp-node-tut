const http = require("http");

const server = http.createServer((req, res) => {
  //req - incoming request
  // res - response

  if (req.url === "/") {
    res.end("Welcome to our home page");
    return;
  }
  if (req.url === "/about") {
    res.write("blah!, blah \n");
    res.end("Here is our short history");
    return;
  }

  if (req.url !== "/" || req.url !== "/about") {
    res.end(`
      <h1> Oops! </h1>
      <p> We can't seem to find the ${req.url} page </p>
      <a href="/"> Go back </a>
    `);
    return;
  }
});

server.listen(5000);
