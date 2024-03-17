import http from "http";

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain",
  });

  res.write("Hello World from Node HTTP");

  res.end();
});

server.listen(PORT, () => {
  console.log(`Node HTTP server runing at http://localhost:3000`);
});
