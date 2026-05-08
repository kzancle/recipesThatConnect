var database = require("../database/config");

//  function buscarReceitas(usuarioId) {

//    var instrucaoSql = `SELECT * FROM receita WHERE fkusuario = ${usuarioId};`;

//    console.log("Executando a instrução SQL: \n" + instrucaoSql);
//    return database.executar(instrucaoSql);
//  }

function cadastrar(nome) {
    var instrucaoSql = `
        INSERT INTO ingrediente(nome) 
        VALUES('${nome}');`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
//   buscarReceitas,
  cadastrar
}
