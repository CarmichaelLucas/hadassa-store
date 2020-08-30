const listaProdutos = new Array();

let btn = document.querySelector('#btn-save');

btn.addEventListener('click', function(event){
    
    event.preventDefault();

    let form = document.querySelector("#formulario-produtos");
    //let erros = new Array();

    //validarModelo(form.modelo);
    //validarMarca(form.marca);
    //validarTamanho(form.tamanho);
    //validarQtde(form.qtde);
    //validarValor(form.valor);


    const produto = criaProduto({
        "modelo": form.modelo.value,
        "marca": form.marca.value,
        "tamanho": form.tamanho.value,
        "qtde": form.qtde.value,
        "valor": form.valor.value
    });

    //if (modelo != undefined && marca != undefined && tamanho != undefined &&
    //    qtde != undefined && valor != undefined){
    //    
    //    produto.modelo = modelo;
    //    produto.marca = marca;
    //    produto.tamanho = tamanho;
    //    produto.qtde = qtde;
    //    produto.valor = valor;
    //}

    listaProdutos.push(produto);
    form.reset();
});

//if(valida()){
//    document.querySelector("#validationServer01").classList.add('is-valid');
//    modelo = document.querySelector("#validationServer01").value;
//}else{
//    document.querySelector("#validationServer01").classList.add('is-invalid');
//    document.querySelector('#feedback01').classList.add('invalid-feedback');
//    document.querySelector('#feedback01').textContent = 'Preencha este campo!';
//}
//
//
//function campoVazio(e){ return e.value.length > 0 }
//
//function validarModelo(modelo, erros){
//    if(!campoVazio(modelo)){
//        erros.push()
//    }
//}
//
//function validarMarca(marca){
//
//}
//
//function validarTamanho(tamanho){
//
//}
//
//function validarQtde(qtde){
//
//}
//
//function validarValor(valor){
//
//}