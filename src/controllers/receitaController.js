 var receitaModel = require("../models/receitaModel");

  function buscarReceitas(req, res) {
    var idUsuario = req.params.idUsuario;

    receitaModel.buscarReceitas(idUsuario).then((resultado) => {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).json([]);
      }
    }).catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
  }


 function cadastrar(req, res) {
   var nome = req.body.nome;
   var tipo = req.body.tipo;
   var ocasiao = req.body.ocasiao;
   var idUsuario = req.body.idUsuario

    if (nome == undefined) {
      res.status(400).send("nome está undefined!");
    } else if (idUsuario == undefined) {
      res.status(400).send("idUsuario está undefined!");
    } else {


     receitaModel.cadastrar(nome, tipo, ocasiao, idUsuario)
       .then((resultado) => {
         res.status(201).json(resultado);
       }
       ).catch((erro) => {
         console.log(erro);
         console.log(
           "\nHouve um erro ao realizar o cadastro! Erro: ",
           erro.sqlMessage
         );
         res.status(500).json(erro.sqlMessage);
       });
   }
 }

 module.exports = {
   cadastrar
 }