let listaDeLivros = [];
const endPointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json";
const valorTotalLivrosDisponivel = document.querySelector('#valor_total_livros_disponiveis');

getBuscaInformacoesDaAPI();

async function getBuscaInformacoesDaAPI() {
    const res = await fetch(endPointDaAPI);
    listaDeLivros = await res.json();
    valorTotalLivrosDisponivel.innerHTML = '';

    aplicaDesconto(listaDeLivros);
    exibeListaDeLivros(listaDeLivros);
}





