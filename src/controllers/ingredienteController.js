 var ingredienteModel = require("../models/ingredienteModel");

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

   function buscarIngrediente(req, res) {
     var nomeIngrediente = req.params.nomeIngrediente;
     
     ingredienteModel.buscarIngrediente(nomeIngrediente).then((resultado) => {
       if (resultado.length > 0) {
         res.status(200).json(resultado);
       } else {
         res.status(204).json([]);
       }
     }).catch(function (erro) {
       console.log(erro);
       console.log("Houve um erro ao buscar ingrediente: ", erro.sqlMessage);
       res.status(500).json(erro.sqlMessage);
     });
   }

 module.exports = {
   cadastrar, buscarIngrediente
 }