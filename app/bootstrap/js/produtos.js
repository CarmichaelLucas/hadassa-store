//Obj
function criaProduto(itens){
    const produto = {
        modelo: itens['modelo'],
        marca: itens['marca'],
        tamanho: itens['tamanho'],
        qtde: parseInt(itens['qtde']),
        valor: parseFloat(itens['valor']).toFixed(2)
    }

    return produto;
}