var database = require("../database/config");

 function buscarReceitas(usuarioId) {

   var instrucaoSql = `SELECT * FROM receita WHERE fkusuario = ${usuarioId};`;

   console.log("Executando a instrução SQL: \n" + instrucaoSql);
   return database.executar(instrucaoSql);
 }

function cadastrar(nome, tipo, ocasiao, idusuario) {
    var instrucaoSql = `
        INSERT INTO receita 
        (nome, tipo, ocasiao, fkusuario)
        VALUES ('${nome}', '${tipo}', '${ocasiao}', ${idusuario});`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
  buscarReceitas,
  cadastrar
}
