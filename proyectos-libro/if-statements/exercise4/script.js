/*Crea un programa que solicite un numero y muestre por pantalla si es par y positivo. En caso
contrario debe indicar si es negativo, impar o ambos.*/

var num = prompt('Introduzca un numero');

if (num % 2 === 0 && num >= 0) {
    console.log(`El numero ${num} es par y positivo`);
} else if ( num % 2 !== 0 && num < 0) {
    console.log(`El numero ${num} es impar y negativo`);
} else if (num % 2 !== 0) {
    console.log(`El numero ${num} es impar`);
} else if (num < 0) {
    console.log(`El numero ${num} es negativo`);
}