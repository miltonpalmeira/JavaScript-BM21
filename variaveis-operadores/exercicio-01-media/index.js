var botao = document.querySelector('#calcular');

botao.addEventListener("click", function() {
    var nome = document.querySelector('#txtNome').value;
    var nota01 = parseInt(document.querySelector('#txtNota01').value);
    var nota02 = parseInt(document.querySelector('#txtNota02').value);

    var media = (nota01 + nota02) / 2;

    document.querySelector('#result-nome').innerHTML = nome;
    document.querySelector('#resultado').innerHTML = 'Média: ' + media;
});