var database = require("../database/config");

 function buscarReceitas(usuarioId) {

   var instrucaoSql = `SELECT * FROM receita WHERE fkusuario = ${usuarioId};`;

   console.log("Executando a instrução SQL: \n" + instrucaoSql);
   return database.executar(instrucaoSql);
 }

function cadastrar(nome, tipo, ocasiao, modoPreparo, idusuario ) {
    var instrucaoSql = `
        INSERT INTO receita 
        (nome, tipo, ocasiao, preparo, fkusuario)
        VALUES ('${nome}', '${tipo}', '${ocasiao}', '${modoPreparo}', ${idusuario});`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
  buscarReceitas,
  cadastrar
}
