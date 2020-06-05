/*Crea un programa que defina un array de 10 numeros enteros. Luego crea
otro bucle que determine si en el array hay algun elemento repetido. Con
que encuentre uno repetido es suficiente*/

let numbers = [1, 2, 3, 4, 5, 6, 2, 8, 9, 10];
let repeated = false;

for(i = 0; i < numbers.length; i++) {
  
    for(j = i + 1; j < numbers.length; j++) {
    
    if (numbers[i] === numbers[j]) {
        repeated = true;
        break;
    }
  }
 
}
if (repeated === true) {
    console.log('There is a repeated number');
} else {
    console.log('There is no repeated number');
}