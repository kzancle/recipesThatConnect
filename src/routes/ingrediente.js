var express = require("express");
var router = express.Router();

var ingredienteController = require("../controllers/ingredienteController");

router.post("/cadastrar", function (req, res) {
    ingredienteController.cadastrar(req, res);
});

router.get("/buscar/:nomeIngrediente", function (req, res) {
    ingredienteController.buscarIngrediente(req, res);
});

module.exports = router;    