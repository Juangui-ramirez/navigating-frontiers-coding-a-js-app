/**
 * Tarea A:

  Usando Node.js HTTP:
  
  1. Crear un endpoint que permita obtener la lista completa de elementos de una lista de mercado utilizando Node.js HTTP.
  2. Crear un endpoint que permita agregar un nuevo elemento a una lista de mercado utilizando Node.js HTTP, validando si el elemento ya existe y devolviendo un mensaje de error con código de estado de conflicto en caso afirmativo.
 */

import http from "http";

const PORT = 3000;

let marketList = [];

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/marketList") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify(marketList));
  }

  if (req.method === "POST" && req.url === "/marketList") {
    let reqBody = "";

    req.on("data", (chunk) => {
      reqBody += chunk.toString();
    });

    req.on("end", () => {
      const newItem = JSON.parse(reqBody).newItem;
      if (marketList.includes(newItem)) {
        res.writeHead(409, {
          "Content-Type": "application/json",
        });
        res.end(
          JSON.stringify({ message: "The item already exists in the list" })
        );
      } else {
        marketList.push(newItem);
        res.writeHead(200, {
          "Content-Type": "application/json",
        });
        res.end(JSON.stringify({ message: "Item added to the list" }));
      }
    });
  }
});

server.listen(PORT, () => {
  console.log(`Node HTTP server running at http://localhost:${PORT}`);
});
