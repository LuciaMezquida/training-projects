/*Crea un programa que defina un array de 5 numero decimales (float)
inicializados. Luego crea un bucle que calcule la media de todos los numeros*/

const numbers = [3.2, 4.5, 6.7, 8.9, 2.1];
let sum = 0.0;

for(i in numbers) {
    sum = sum + numbers[i];
}
let average = sum / numbers.length;
console.log(`The average is: ${average}`);