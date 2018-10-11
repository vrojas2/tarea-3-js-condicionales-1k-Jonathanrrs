var inputSaldo = document.querySelector('#saldo');
var inputRetirar = document.querySelector('#retirar');
var pResultado = document.querySelector('#resultado');
btnRetiro = document.querySelector('#btnRetiro');
btnRetiro.addEventListener('click', retiro);

function retiro () {
       var saldo = Number(inputSaldo.value);
       var retirar = Number(inputRetirar.value);
       if(saldo > retirar) {
           pResultado.textContent = 'Retiro exitoso, tu saldo ahora es' + " " + (saldo-retirar);
       }
       else {
           pResultado.textContent = 'Saldo insuficiente';
       }
       
}