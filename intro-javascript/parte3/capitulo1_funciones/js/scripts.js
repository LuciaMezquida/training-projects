//una funcion consiste en un conjunto de instrucciones para realicar una tarea específica
//declaramos una fncion
/*function decirHHola(){
    console.log('Hola');
}

console.log('inicio del programa');
//llamada a la funcion
decirHHola();
console.log('fin del programa');

//parametros(nombre)
function decirHola(nombre){
    var mensaje = 'Hola ' + nombre;
    return mensaje;
}
//argumentos: el valor que se le da al parametro al llamar a la funcion (muka)
console.log(decirHola('Muka'));*/

function presentacion(nombre,edad){
    console.log('Me llamo ' + nombre + ' y tengo ' + edad + ' años')
}
presentacion('Muka',15);
presentacion(15,'Muka');//argumentos invertidos
presentacion('Muka');//falta 1 argumento. dará undefined

//variables globales: declaradas fuera de la funcion. está disponible en todo el codigo
//variables locales: declarada en la funcion y solo disponible en ella
//una función tambien puede llamar a otra funcion

//programa saludo mejorado
var nombre = prompt('Introduce tu nombre');
var apellido = prompt('Introduce tu apellido');
function decirHola(nombre,apellido){
    var mensaje = 'Hola ' + nombre + ' ' + apellido;
    return mensaje;
}
console.log(decirHola(nombre,apellido));

//Cuadrado de un numero
function cuadrado(x){
    return x * x;
}
console.log(cuadrado(4));

//minimo de dos numeros
function min(x,y){
    if (x < y){
        return x;
    }else{
        return y;
    }
}
console.log(min(19,9));

//perimetro y area de un circulo
var radio = prompt('Introduce un valor para el radio de un circulo');
function perimetro(radio){
    var resultado = 2 * Math.PI * radio;
    return resultado;
}
function area(radio){
    var resultado = Math.PI * Math.pow(radio,2);
    return resultado;
}
console.log('El perimetro y el area de un circulo con el radio elegido es:')
console.log('Perimetro: ' + perimetro(radio));
console.log('Area: ' + area(radio));


