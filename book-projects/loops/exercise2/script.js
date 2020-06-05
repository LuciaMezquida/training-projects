/*Crea un programa que solicite al usuario un valor entero. Comprueba si es mayor a 0 
y además es par, y si es así, mostrar por pantalla una línea con el caracter '*' tantas
veces como el valor del número. Si el valor no cumple los requisitos, debes mostrar un
mensaje de advertencia al usuario y terminar el programa.*/

let number = parseInt(prompt("Introduce a number"));
 if (number <= 0 && number % 2 !== 0) {
     console.log('The number entered is neither even nor less than 0');
 } else {
     let stars = '';
     while (number > 0) {
         stars = stars + '*';
         number--;
     }
     console.log(stars);
 }