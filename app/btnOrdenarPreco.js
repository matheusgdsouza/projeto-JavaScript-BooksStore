const btnFiltroPreco = document.getElementById('btnOrdenarPorPreco');

btnFiltroPreco.addEventListener('click', ordenarPorPreco);

function ordenarPorPreco(){
    let listaOrdenadaPorPreco = listaDeLivros.sort((a, b) => a.preco - b.preco);
    elementoListaDeLivros.innerHTML = "";
    exibeListaDeLivros(listaOrdenadaPorPreco);
}