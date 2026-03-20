function aplicaDesconto(listaDeLivros) {
    let desconto = 0.9;
    const descontoAplicado =  listaDeLivros.map(livro => livro.preco = livro.preco * desconto);
    return descontoAplicado;
}