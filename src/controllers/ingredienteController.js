 var ingredienteModel = require("../models/ingredienteModel");

//   function buscarReceitas(req, res) {
//     var idUsuario = req.params.idUsuario;
    
//     receitaModel.buscarReceitas(idUsuario).then((resultado) => {
//       if (resultado.length > 0) {
//         res.status(200).json(resultado);
//       } else {
//         res.status(204).json([]);
//       }
//     }).catch(function (erro) {
//       console.log(erro);
//       console.log("Houve um erro ao buscar as receitas: ", erro.sqlMessage);
//       res.status(500).json(erro.sqlMessage);
//     });
//   }


 function cadastrar(req, res) {
   var nome = req.body.nome;


    if (nome == undefined) {
      res.status(400).send("nome está undefined!");
    } else {


     ingredienteModel.cadastrar(nome)
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