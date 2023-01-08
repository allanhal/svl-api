const express = require("express");
const app = express();
const port = 10000;
const db = require("./config/db");

const routes = require("./routes/index");
routes(app);

db.on("error", console.log.bind(console, "Erro ao conectar com o banco"));
db.once("open", () => {
  console.log("conexão realizada com sucesso");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
