function criaProduto(item){

    const produto = {
        modelo: item.modelo,
        marca: item.marca,
        tamanho: item.tamanho,
        qtde: parseInt(item.qtde),
        valor: parseFloat(item.valor).toFixed(2)  
    }

    return produto;
}