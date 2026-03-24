const btnFiltro = document.querySelectorAll('.btn');
btnFiltro.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    let valorBtn = elementoBtn.value
    let livrosFiltrados = valorBtn == 'disponivel' ? listaDeLivros.filter(livro => livro.quantidade > 0) : listaDeLivros.filter(livro => livro.categoria == valorBtn )
    elementoListaDeLivros.innerHTML = '';
    exibeListaDeLivros(livrosFiltrados);
    if(valorBtn == 'disponivel'){
        mostraValorTotalLivrosDisponiveis(livrosFiltrados);
    }
}

function mostraValorTotalLivrosDisponiveis(listaFiltrada) {
    let somaPrecoLivrosDisponiveis = listaFiltrada.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2); 
    valorTotalLivrosDisponivel.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${somaPrecoLivrosDisponiveis}</span></p>
        </div>
        `;
}

