var express = require("express");
var router = express.Router();

var receitaIngredienteController = require("../controllers/receitaIngredienteController");

router.post("/cadastrar", function (req, res) {
    receitaIngredienteController.cadastrar(req, res);
});

router.get("/:idUsuario/:idReceita", function (req, res) {
    receitaIngredienteController.buscarIngredientesDaReceita(req, res);
});

module.exports = router;  