var express = require("express");
var router = express.Router();

var receitaController = require("../controllers/receitaController");

router.get("/:idUsuario", function (req, res) {
    receitaController.buscarReceitas(req, res);
});

router.post("/cadastrar", function (req, res) {
    receitaController.cadastrar(req, res);
});

module.exports = router;    