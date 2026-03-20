const btnFiltro = document.querySelectorAll('.btn');
btnFiltro.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    let valorBtn = elementoBtn.value
    let livrosFiltrados = listaDeLivros.filter(livro => livro.categoria == valorBtn )
    elementoListaDeLivros.innerHTML = '';
    exibeListaDeLivros(livrosFiltrados);
}





