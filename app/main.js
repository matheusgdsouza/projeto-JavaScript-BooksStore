let livros = [];
const endpoint = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivros();
async function getBuscarLivros() {
    const res = await fetch(endpoint);
    livros = await res.json();
    console.table(livros);
}