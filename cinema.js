let cinema = "CineHouse";
//console.log(cinema);

let filmes = require ("./database/catalogo.json")

//console.log(filmes)

function adicionarFilme(novoCodigo,novoTitulo,novaDuracao,novosAtores,novoAnoLancamento,novoEmCartaz){
let novoFilme ={
    codigo: novoCodigo,
    titulo: novoTitulo,
    duracao: novaDuracao,
    atores: novosAtores,
    anoLancamento: novoAnoLancamento,
    emCartaz: novoEmCartaz,

};
filmes.push(novoFilme);
};
function buscarFilmes(codigoFilme){
    let filmeBuscado = filmes.find(function(filme){
        return filme.codigo == codigoFilme;
    });
    return filmeBuscado;
}
function alterarStatusEmCartaz(codigoFilme){
    let filmeBusca = buscarFilmes(codigoFilme);
    if(filmeBusca.emCartaz == true){
        filmeBusca.emCartaz = false;
    }else{
        filmeBusca.emCartaz = true;
    }
}
adicionarFilme(102, "Titanic", 3, ["Elva Josephson","Brooke Shields"], 2002, true);
let oReiLeao = buscarFilmes(101);
console.log(oReiLeao);
alterarStatusEmCartaz(100);

console.log(filmes);
