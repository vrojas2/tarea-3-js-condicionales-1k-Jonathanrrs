var inputSaldo = document.querySelector('#saldo');
var inputRetirar = document.querySelector('#retirar');
btnRetiro = document.querySelector('#retiro');
btnRetiro.addEventListener('clic', retiro);

function retiro () {
  
       var Saldo = Number(inputSaldo.value);
       var Retirar = Number(inputRetirar.value);
       if(Saldo > Retirar)
       

}