var express = require("express");
var router = express.Router();

var kpiController = require("../controllers/kpiController");

router.get("/tipo/:tipo/:idUsuario", function (req, res) {
    kpiController.buscarTipos(req, res);
});

router.get("/ocasiao/:ocasiao/:idUsuario", function (req, res) {
    kpiController.buscarOcasioes(req, res);
});



module.exports = router; 