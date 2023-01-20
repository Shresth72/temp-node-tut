const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home Page');
    }
    else if (req.url === '/about') {
        // BLOCKING CODE
        // for (let i = 0; i < 10; i++) {
        //     for (j = 0; j < 10; j++) {
        //         console.log(`${i} ${j}`);
        //     }
        // }
        res.end('About Page');
    }
    else {
        res.end('Error Page');
    }
});

server.listen(5000, () => {
  console.log("Server Listening on port 5000...");
});
