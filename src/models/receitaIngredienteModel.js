var database = require("../database/config");

function buscarIngredientesDaReceita(idUsuario, idReceita) {

    var instrucaoSql = `
    SELECT u.id, r.id, quantidade, unidadeqtd, i.nome, r.preparo
    FROM receita_ingrediente ri
    JOIN receita r ON ri.fkreceita = r.id
    JOIN usuario u ON r.fkUsuario = u.id
    JOIN ingrediente i ON ri.fkIngrediente = i.id
    WHERE r.id = ${idReceita} AND u.id = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(idReceita, idIngrediente, quantidade, unidadeqtd) {
    var instrucaoSql = `
        INSERT INTO receita_ingrediente
        (fkreceita, fkingrediente, quantidade, unidadeqtd)
        VALUES (${idReceita}, ${idIngrediente}, ${quantidade}, '${unidadeqtd}');`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    cadastrar, buscarIngredientesDaReceita
}