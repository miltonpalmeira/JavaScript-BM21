document.querySelector('#btn-mostrar').addEventListener('click', function() {
    let numero01 = parseFloat(document.querySelector('#txtNumero01').value);
    let numero02 = parseFloat(document.querySelector('#txtNumero02').value);
    let menu = parseInt(document.querySelector('#txtMenu').value);

    switch(menu) {
        case 1: 
            var resultado = numero01 + numero02;
            alert('Soma dos valores: ' + resultado);
        break;
        case 2:
            var resultado = numero01 * numero02;
            alert('Multiplicação dos valores: ' + resultado);
        break;
        case 3:
            if (numero01 > numero02) {
                alert('O maior valor é: ' + numero01);
            }
            else {
                alert('O maior valor é: ' + numero02);
            }
        break;
        default:
            var media = (numero01 + numero02) / 2;
            alert('Média: ' + media);
        break;
    }
});