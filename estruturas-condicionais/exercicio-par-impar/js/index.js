document.querySelector('#btn-mostrar').addEventListener("click", function() {
    let numero = document.querySelector('#txtNumero').value;
    if (numero % 2 == 0) {
        alert('Número PAR');
    }
    else {
        alert('Número ÍMPAR');
    }
});