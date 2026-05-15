var database = require("../database/config");

function cadastrar(idReceita, idIngrediente, quantidade, unidadeqtd) {
    var instrucaoSql = `
        INSERT INTO receita_ingrediente
        (fkreceita, fkingrediente, quantidade, unidadeqtd)
        VALUES (${idReceita}, ${idIngrediente}, ${quantidade}, '${unidadeqtd}');`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
  cadastrar
}