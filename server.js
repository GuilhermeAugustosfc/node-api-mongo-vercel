require("dotenv").config();
const express = require("express");
const connectDB = require("./db");
const cors = require("cors");

const app = express();

app.use(cors());
app.set("port", process.env.PORT || 3000);
app.use(express.json());

app.get("/getGraficos", async (req, res) => {
  const collection = await connectDB();
  // Busque os dados desejados da coleção 'operacao'
  const dados = await collection.find({}).toArray();

  // Envie os dados como JSON na resposta
  res.json(dados);
});

// Inicie o servidor
app.listen(app.get("port"), () => {
  console.log(`Servidor Express em execução na porta ${app.get("port")}`);
});
