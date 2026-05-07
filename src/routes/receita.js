var express = require("express");
var router = express.Router();

var receitaController = require("../controllers/receitaController");

router.get("/", function (req, res) {
    receitaController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    receitaController.cadastrar(req, res);
});

module.exports = router;    