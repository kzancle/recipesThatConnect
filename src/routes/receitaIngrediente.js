var express = require("express");
var router = express.Router();

var receitaIngredienteController = require("../controllers/receitaIngredienteController");

router.post("/cadastrar", function (req, res) {
    receitaIngredienteController.cadastrar(req, res);
});

module.exports = router;  