/*Crea un programa que defina un array de 10 numeros enteros 
inicializados. Luego crea otro bucle que contabilice el total de
numeros positivos, negativos y los que sean 0*/

const numbers = [2, 7, -3, 0, 9, -1, 8, 5, 0, -4];

let positive = 0;
let negative = 0;
let areZero = 0;

for(i in numbers) {
    if (numbers[i] > 0) {
        positive++;
    } else if (numbers[i] < 0) {
        negative++;
    } else {
        areZero++;
  }
}
console.log(`Positive: ${positive}`);
console.log(`Negative: ${negative}`);
console.log(`Zero ${areZero}`);