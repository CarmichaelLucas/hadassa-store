import { addListaProdutos, exibeProdutos, removeProduto } from './components/listaProdutos.js';

window.onload = () => {
    if(document.location.href.match(/index\.html/) != null){
        exibeProdutos();
    }

    if(document.location.href.match(/products\.html/) != null){
        addListaProdutos();
    }
};