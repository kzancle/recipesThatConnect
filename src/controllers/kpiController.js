 var kpiModel = require("../models/kpiModel");

  function buscarTipos(req, res) {
    var idUsuario = req.params.idUsuario;
    var tipo = req.params.tipo;

    kpiModel.buscarTipos(idUsuario, tipo).then((resultado) => {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).json([]);
      }
    }).catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar tipos: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
  }

  function buscarOcasioes(req, res) {
    var idUsuario = req.params.idUsuario;
    var ocasiao = req.params.ocasiao;

    kpiModel.buscarOcasioes(idUsuario, ocasiao  ).then((resultado) => {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).json([]);
      }
    }).catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar ocasiões: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
  }


 

 module.exports = {
   buscarTipos, buscarOcasioes
 }