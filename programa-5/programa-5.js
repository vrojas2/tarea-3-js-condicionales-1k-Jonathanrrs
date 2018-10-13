var inputPesos = document.querySelector('#pesos');
var resultado = document.querySelector('#resultado')
var selectOpciones = document.querySelector('#opciones');
selectOpciones.addEventListener('change', conversion);

function conversion () {
    var pesos = Number(inputPesos.value);
    var opcion = selectOpciones.value;
    switch(opcion) {
        case 'dolar':
        resultado.value = 'La cantidad en dolares es: ' + ' ' + (pesos/18.86);
        break;
        case 'euro':
        resultado.value = 'La cantidad en euros es: ' + ' ' + (pesos/21.83);
        break;
        case 'libra':
        resultado.value = 'La cantidad en libras es: ' + ' ' + (pesos/24.80);
        break;
        default:
        resultado.value = ' ';

    }
}
