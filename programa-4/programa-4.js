var inputHora = document.querySelector('#hora');
var pResultado = document.querySelector('#resultado')
btnSaludo = document.querySelector('#btnSaludo');
btnSaludo.addEventListener('click', calcular);

function calcular () {
    var hora = Number(inputHora.value);
    if(hora >=1 && hora <=12) {
        pResultado.textContent = 'Buenos días';
    }
    else if(hora >=13 && hora <=19) {
        pResultado.textContent = 'Buenas tardes';
    }
    else if(hora >=20 && hora <=24) {
        pResultado.textContent = 'Buenas noches';
    }
}