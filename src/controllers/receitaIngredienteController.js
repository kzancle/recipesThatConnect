var receitaIngredienteModel = require("../models/receitaIngredienteModel");

function cadastrar(req, res) {

   var idReceita = req.body.idReceitaCadastrada;
   var idIngrediente = req.body.idIngredienteCadastrado;
   var quantidade = req.body.quantidade;
   var unidadeMedida = req.body.unidadeMedida;

   if (idReceita == undefined) {
      res.status(400).send("idReceita está undefined!");
   } else if (idIngrediente == undefined) {
      res.status(400).send("idIngrediente está undefined!");
   } else {
      receitaIngredienteModel.cadastrar(idReceita, idIngrediente, quantidade, unidadeMedida)
      .then((resultado) => {
         res.status(201).json(resultado);
      })
      .catch((erro) => {
         console.log(erro);
         console.log(
            "\nHouve um erro ao realizar o cadastro no NN! Erro: ",
            erro.sqlMessage
         );
         res.status(500).json(erro.sqlMessage);
      });
   }
}

module.exports = {
   cadastrar
}