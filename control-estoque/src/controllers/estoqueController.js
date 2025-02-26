const db = require("../config/dbconfig");

// Função para listar todos os produtos
exports.getProdutos = (req, res) => {
  db.query("SELECT * FROM produtos", (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Erro ao buscar produtos", error: err });
    }
    res.status(200).json(results); // Retorna a lista de produtos
  });
};
exports.addProduto = (
  numero_nota,
  nome,
  quantidade,
  categoria,
  validade,
  estoque_min
) => {
  return new Promise((resolve, reject) => {
    const query =
      "INSERT INTO produtos (numero_nota, nome, quantidade, categoria, validade, estoque_min) VALUES (?, ?, ?, ?, ?, ?)";

    console.log("Executando query:", query); // Verifique qual query está sendo gerada

    db.query(
      query,
      [numero_nota, nome, quantidade, categoria, validade, estoque_min],
      (err, results) => {
        if (err) {
          console.error("Erro na query:", err); // Log do erro
          reject(err);
        } else {
          console.log("Item adicionado:", results); // Log de sucesso
          resolve(results);
        }
      }
    );
  });
};