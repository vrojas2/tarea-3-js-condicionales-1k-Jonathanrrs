var inputCali1 = document.querySelector('#cali1');
var inputCali2 = document.querySelector('#cali2'); 
var inputCali3 = document.querySelector('#cali3');
var pResultado = document.querySelector('#resultado');
btnCalcular = document.querySelector('#btnCalcular');
btnCalcular.addEventListener('click', calculo)

function calculo () {
    var cali1 = Number(inputCali1.value);
    var cali2 = Number(inputCali2.value);
    var cali3 = Number(inputCali3.value);
    var pm = (cali1+cali2+cali3) / 3;
    if(pm >= 8) {
        pResultado.textContent = 'No estás en ordinario';
    }
    else {
        pResultado.textContent = 'Estás en ordinario';
    }
}