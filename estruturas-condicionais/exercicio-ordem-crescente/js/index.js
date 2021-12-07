document.querySelector('#btn-mostrar').addEventListener('click', function() {
    let numero01 = document.querySelector('#txtNumero01').value;
    let numero02 = document.querySelector('#txtNumero02').value;
    let numero03 = document.querySelector('#txtNumero03').value;

    if (numero01 > numero02 && numero01 > numero03) {
        if (numero02 > numero03) {
            alert(numero03 + ' ' + numero02 + ' ' + numero01);
        }
        else {
            alert(numero02 + ' ' + numero03 + ' ' + numero01);
        }
    }
});