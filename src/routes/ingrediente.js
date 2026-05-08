var express = require("express");
var router = express.Router();

var ingredienteController = require("../controllers/ingredienteController");

// router.get("/:idUsuario", function (req, res) {
//     receitaController.buscarReceitas(req, res);
// });

router.post("/cadastrar", function (req, res) {
    ingredienteController.cadastrar(req, res);
});

module.exports = router;    