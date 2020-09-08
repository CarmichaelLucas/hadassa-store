const listaProdutos = JSON.parse(localStorage.getItem('lista_produto')) || [];

function addListaProdutos() {

    const btnCadastraProduto = document.querySelector('#btn-save');

    btnCadastraProduto.addEventListener('click', (evento) => {
        
        evento.preventDefault();

        const formProdutos = document.querySelector('#formulario-produtos');


        listaProdutos.push(
            criaProduto(
                {
                    modelo: formProdutos.modelo.value,
                    marca: formProdutos.marca.value,
                    tamanho: formProdutos.tamanho.value,
                    qtde: formProdutos.qtde.value,
                    valor: formProdutos.valor.value
                }
            )
        );

        saveListaProdutosStorage();
    
        formProdutos.reset();
    });

};

function saveListaProdutosStorage() {
    
    localStorage.setItem('lista_produto', JSON.stringify(listaProdutos));
};

function exibeProdutos(){

    const tabelaProdutos = document.querySelector('#corpo-tabela');

    if(listaProdutos.length > 0){

        listaProdutos.forEach( produto => {
            const trElement = document.createElement('tr');

            const tdModelo  = document.createElement('td');
            const tdMarca   = document.createElement('td');
            const tdTamanho = document.createElement('td');
            const tdQtde    = document.createElement('td');
            const tdValor   = document.createElement('td');

            tdModelo.setAttribute('scope', 'row');

            tdModelo.textContent  = produto.modelo;
            tdMarca.textContent   = produto.marca;
            tdTamanho.textContent = produto.tamanho;
            tdQtde.textContent    = produto.qtde;
            tdValor.textContent   = produto.valor;

            trElement.appendChild(tdModelo);
            trElement.appendChild(tdMarca);
            trElement.appendChild(tdTamanho);
            trElement.appendChild(tdQtde);
            trElement.appendChild(tdValor);

            tabelaProdutos.appendChild(trElement);
        });

    }else{

        const trElement = document.createElement('tr');

        const tdElement = document.createElement('td');
        tdElement.setAttribute('colspan', '5');
        const txtTdElement = document.createTextNode('Nenhum Registro para ser exibido!');
        tdElement.appendChild(txtTdElement);
        tdElement.classList.add('text-secondary');
        tdElement.classList.add('text-center');

        trElement.appendChild(tdElement);
 
    }
};