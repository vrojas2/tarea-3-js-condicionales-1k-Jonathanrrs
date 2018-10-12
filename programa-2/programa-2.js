var inputCosto = document.querySelector('#costo');
var inputProductos = document.querySelector('#productos');
var pResultado = document.querySelector('#resultado');
btnCalcular = document.querySelector('#btnCalcular');
btnCalcular.addEventListener('click', calculo);

function calculo () {
    var costo = Number(inputCosto.value);
    var productos = Number(inputProductos.value);
    if(productos <= 9) {
        pResultado.textContent = 'El costo total de la compra es: ' + ' ' + (costo- (costo*0.05));
    }
    else if(productos>=10 && productos<=19) {
        pResultado.textContent = 'El costo total de la compra es: ' + ' ' + (costo- (costo*0.10));
    }
    else if(productos >= 20) {
        pResultado.textContent = 'El costo total de la compra es: ' + ' ' + (costo- (costo*0.15));
    }

 

}