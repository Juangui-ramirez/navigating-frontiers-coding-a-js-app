import express from "express";

const PORT = 3001;

const app = express();

app.get("/", (req, res) => {
  res.status(200);
  res.send("Hola mundo from Express");
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});
