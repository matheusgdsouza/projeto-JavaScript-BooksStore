let livros = [];
let endPoint = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscaLivros();
async function getBuscaLivros() {
    const res = await fetch(endPoint);
    livros = await res.json();
    console.table(livros);

    lendoLivros();

}

async function lendoLivros() {
    let listaDeLivros = document.getElementById('livros');
    livros.forEach(livro => {
        listaDeLivros.innerHTML += `
        <div class="livro">
            <img class="livro__imagens" src="${livro.imagem}"
            alt="${livro.alt}" />
            <h2 class="livro__titulo">
                ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco}0</p>
        <div class="tags">
            <span class="tag">${livro.categoria}</span>
        </div>
        </div>`
    })
}

