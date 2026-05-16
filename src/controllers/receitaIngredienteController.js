var receitaIngredienteModel = require("../models/receitaIngredienteModel");

function cadastrar(req, res) {

   var idReceita = req.body.idReceita;
   var idIngrediente = req.body.idIngrediente;
   var quantidade = req.body.quantidade;
   var unidadeMedida = req.body.unidadeQtd;

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

  function buscarIngredientesDaReceita(req, res) {
    var idUsuario = req.params.idUsuario;
    var idReceita = req.params.idReceita
    
    receitaIngredienteModel.buscarIngredientesDaReceita(idUsuario, idReceita).then((resultado) => {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).json([]);
      }
    }).catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar ingredientes da receita: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
  }

module.exports = {
   cadastrar, buscarIngredientesDaReceita
}