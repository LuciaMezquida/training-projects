/*Crea un programa que solicite al usuario un número en bucle hasta que el usuario 
introduzca 0. En este momento el programa debe mostrar la media de los números introducidos.
Además, en el bucle se debe detectar si el valor introducido no es numérico. En este caso
se debe mostrar un mensaje de advertencia y seguir con el bucle*/

let number = 0;
let quantity_of_numbers = 0;
let sum_numbers = 0;

do {
    number = parseInt(prompt("Introduce a number"));
    if (isNaN(number)) {
        alert('This is not a number');
        continue;
    }
    if (number === 0) {
        break;
    }
    console.log(number);
    sum_numbers = sum_numbers + number;
    quantity_of_numbers++
} while (number !== 0);

if (quantity_of_numbers > 0) {
    let average = sum_numbers / quantity_of_numbers;
    console.log(`The average of the numbers is: ${average}`);
} else {
    console.log(`There are no numbers to average`);
}