
// created variables
let corpoTabela = document.querySelector('#corpo-tabela');

if(listaProdutos.length > 0){

    listaProdutos.forEach(produto => {
        
        let linhaCorpoTabela = document.createElement('tr');
        let modeloProduto  = document.createElement('td');
        let marcaProduto   = document.createElement('td');
        let tamanhoProduto = document.createElement('td');
        let qtdeProduto    = document.createElement('td');
        let valorProduto   = document.createElement('td');


        modeloProduto.textContent = produto.modelo;
        marcaProduto.textContent = produto.marca;
        tamanhoProduto.textContent = produto.tamanho;
        qtdeProduto.textContent = produto.qtde;
        valorProduto.textContent = produto.valor;

        linhaCorpoTabela.appendChild(modeloProduto);
        linhaCorpoTabela.appendChild(marcaProduto);
        linhaCorpoTabela.appendChild(tamanhoProduto);
        linhaCorpoTabela.appendChild(qtdeProduto);
        linhaCorpoTabela.appendChild(valorProduto);

        corpoTabela.appendChild(linhaCorpoTabela);
        
    });
}else{
    
    let linhaCorpoTabela = document.createElement('tr');
    let msgProdutosVazio  = document.createElement('td');
    msgProdutosVazio.setAttribute('colspan', '5');
    msgProdutosVazio.textContent = 'Nenhum registro disponivel!';
    msgProdutosVazio.classList.add('text-secondary');
    msgProdutosVazio.classList.add('text-center');
    linhaCorpoTabela.appendChild(msgProdutosVazio);
    corpoTabela.appendChild(linhaCorpoTabela);
}

