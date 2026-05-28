var database = require("../database/config");

function cadastrar(nome) {
    var instrucaoSql = `
        INSERT INTO ingrediente(nome) 
        VALUES('${nome}');`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

 function buscarIngrediente(nomeIngrediente) {

   var instrucaoSql = `SELECT * FROM ingrediente WHERE nome = '${nomeIngrediente}';`;

   console.log("Executando a instrução SQL: \n" + instrucaoSql);
   return database.executar(instrucaoSql);
 }


module.exports = {
  buscarIngrediente,
  cadastrar
}
