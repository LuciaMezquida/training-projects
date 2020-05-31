/*Crea un programa que defina un array de 10 numeros enteros. Luego crea
otro bucle que calcule que incremente en uno cada uno de los elementos y
los muestre */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(i in numbers) {
    numbers[i]++
    console.log(numbers[i]);
}