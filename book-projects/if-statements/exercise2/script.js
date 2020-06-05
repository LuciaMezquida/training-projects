/*Crea un programa que solicite dos valores enteros y muestre por pantalla
si el primero es múltiplo del segundo*/

var num1 = prompt('Introduce un numero');
var num2 = prompt('Introduce otro numero');

if (num1 % num2 === 0) {
    console.log(`El numero ${num1} es multiplo que ${num2}`)
} else {
    console.log(`El numero ${num1} no es multiplo que ${num2}`)
}