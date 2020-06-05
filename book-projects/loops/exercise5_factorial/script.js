/*Crea un programa que solicite al usuario un numero y calcule su factorial*/

let number = parseInt(prompt("Introduce a number"));
// Esta variable es un acumulador. En suma se incia con 0 (neutro aditivo)
//y en multiplicacion se incia con 1 (neutro multiplicativo)
let factorial = '1';

for (let i = 1; i <= number; i++) {
    factorial = factorial * i;
}

console.log(`The factorial of de number ${number} is: ${factorial}`);