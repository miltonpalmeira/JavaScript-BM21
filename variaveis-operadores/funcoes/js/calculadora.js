// Função
/*function calc(numero01, numero02, operador) {
    return eval(`${numero01} ${operador} ${numero02}`);
}

let resultado = calc(7, 10, '/');

alert(resultado);*/

// Função ANÔNIMA
/*let resultado = (function(numero01, numero02, operador) {
    return eval(`${numero01} ${operador} ${numero02}`);
})(7, 10, '+');

alert(resultado);*/

// ARROW FUNCTION
let calc = (numero01, numero02, operador) => {
    return eval(`${numero01} ${operador} ${numero02}`);
}

/*let resultado = calc(7, 10, '+');
alert(resultado);*/

document.querySelector('#btn-calcular').addEventListener('click', () => {
    let numero01 = document.querySelector('#txtNumero01').value;
    let numero02 = document.querySelector('#txtNumero02').value;
    let operador = document.querySelector('#txtOperador').value;

    let resultado = calc(numero01, numero02, operador);
    alert(resultado);
});

if (numero > 10) {
    alert('Número é maior que 10');
}
else if (numero == 10) {
    alert('Número é IGUAL a 10');
}
else {
    alert('Número não é maior que 10');
}