const saveListaProdutosStorage = listaProdutos => {
    localStorage.setItem('lista_produto', JSON.stringify(listaProdutos));
};

export default saveListaProdutosStorage;