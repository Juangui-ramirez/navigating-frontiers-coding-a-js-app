/**
 * Tarea B:

  Usando Express.js:
  
  1. Crear un endpoint que permita obtener la lista completa de elementos de una lista de mercado utilizando Node.js HTTP.
  2. Crear un endpoint que permita agregar un nuevo elemento a una lista de mercado utilizando Node.js HTTP, validando si el elemento ya existe y devolviendo un mensaje de error con código de estado de conflicto en caso afirmativo.
 */

import express from "express";

const PORT = 3000;
const app = express();
let marketList = [];

app.use(express.json());

app.get("/marketList", (req, res) => {
  res.status(200).json({"Market List" : marketList});
});

app.post("/marketList", (req, res) => {
  const newItem = req.body.newItem.toLowerCase();

  if (marketList.map(item => item.toLowerCase()).includes(newItem)) {
    res.status(409).json({ message: `The item ${newItem} already exists in the list`, marketList });
  } else {
    marketList.push(newItem);
    res.status(200).json({ message: `${newItem} added to the list` });
  }
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT} 🚀`);
});
