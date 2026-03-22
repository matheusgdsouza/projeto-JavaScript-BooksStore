let listaDeLivros = [];
const endPointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

getBuscaInformacoesDaAPI();

async function getBuscaInformacoesDaAPI() {
    const res = await fetch(endPointDaAPI);
    listaDeLivros = await res.json();

    console.table(listaDeLivros);
    aplicaDesconto(listaDeLivros);
    exibeListaDeLivros(listaDeLivros);
}









