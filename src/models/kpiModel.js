var database = require("../database/config");

 function buscarTipos(usuarioId, tipo) {

   var instrucaoSql = `SELECT COUNT(*) quantidade FROM receita WHERE tipo = '${tipo}' AND fkusuario = ${usuarioId};`;

   console.log("Executando a instrução SQL: \n" + instrucaoSql);
   return database.executar(instrucaoSql);
 }

  function buscarOcasioes(usuarioId, ocasiao) {

   var instrucaoSql = `SELECT COUNT(*) quantidade FROM receita WHERE ocasiao = '${ocasiao}' AND fkusuario = ${usuarioId};`;

   console.log("Executando a instrução SQL: \n" + instrucaoSql);
   return database.executar(instrucaoSql);
 }

module.exports = {
  buscarTipos,
  buscarOcasioes
}