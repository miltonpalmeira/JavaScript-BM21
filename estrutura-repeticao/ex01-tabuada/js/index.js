document.querySelector('#btn-calcular').addEventListener('click', 
    function() {
        let numero = parseInt(document.querySelector('#txtTabuada').value);
        let tabuada = 0;
        document.querySelector('#tabuada').innerHTML = '';
        for (let i = 1; i <= 10; i++) {
            tabuada = numero * i;
            let result = document.createElement('p');
            result.innerHTML = numero + ' * ' + i + ' = ' + tabuada;
            //result.style = 'margin: 0';
            result.classList.add('m-0');
            document.querySelector('#tabuada').appendChild(result);
        }
});