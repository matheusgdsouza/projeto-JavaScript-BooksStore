let listaDeLivros = [];
const endPointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

getBuscaInformacoesDaAPI();

async function getBuscaInformacoesDaAPI() {
    const res = await fetch(endPointDaAPI);
    listaDeLivros = await res.json();
    aplicaDesconto(listaDeLivros);
    exibeListaDeLivros(listaDeLivros);
}

const btnFiltro = document.querySelectorAll('.btn');
btnFiltro.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    let valorBtn = elementoBtn.value
    let livrosFiltrados = listaDeLivros.filter(livro => livro.categoria == valorBtn )
    elementoListaDeLivros.innerHTML = '';
    exibeListaDeLivros(livrosFiltrados);
}



