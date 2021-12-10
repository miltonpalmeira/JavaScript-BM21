document.querySelector('#btn-mostrar').addEventListener('click', function() {
    var nome = document.querySelector('#txtNome').value;
    var valorHora = parseFloat(document.querySelector('#txtValorHora').value);
    var qtdHoras = parseFloat(document.querySelector('#txtQtdHoras').value);
    var vt = document.querySelector('#txtMenu').value;

    var salarioBruto = valorHora * qtdHoras;
    var valorVt = 0;
    var valorIR = 0;
    switch(vt) {
        case 'Sim':
            valorVt = salarioBruto * 0.06;
        break;
    }

    if (salarioBruto > 1440) {
        valorIR = salarioBruto * 0.11;
    }

    var salarioLiquido = salarioBruto - valorVt - valorIR;

    document.querySelector('#nome').innerHTML = nome;
    document.querySelector('#salario-bruto').innerHTML = 
        'Salário Bruto: ' + salarioBruto;
    document.querySelector('#valeTransporte').innerHTML = 
        'Valor do Vale transporte: ' + valorVt;
    document.querySelector('#imposto').innerHTML = 
        'Valor do Imposto de Renda: ' + valorIR;
    document.querySelector('#salario-liquido').innerHTML = 
        'Salário Líquido: ' + salarioLiquido;
});