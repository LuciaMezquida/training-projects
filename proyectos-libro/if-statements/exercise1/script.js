/*Crea un programa que solicite dos valores enteros, los compare y muestre por pantalla
si uno es mayor que el otro o si son iguales*/

var num1 = prompt('Introduce un numero');
var num2 = prompt('Introduce otro numero');

if (num1 > num2) {
    console.log(`El numero ${num1} es mayor que ${num2}`);
} else if (num1 < num2) {
    console.log(`El numero ${num1} es menor que ${num2}`);
} else {
    console.log(`El numero ${num1} y el numero ${num2} son iguales`);
}