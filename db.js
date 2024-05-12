const MongoClient = require("mongodb").MongoClient;

const uri = process.env.MONGODB_URI; // Altere se necessário
const client = new MongoClient(uri);

module.exports = async () => {
  try {
    await client.connect();
    console.log("Conectado ao MongoDB!");
    const db = client.db("economeizei");
    return db.collection("operacao");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
    process.exit(1);
  }
};
