/*Crea un programa que solicite un numero. Si es positivo lo debe convertir a negativo,
y si es negativo lo debe convertir a positivo*/

var num = prompt('Introduzca un numero');

if (num >= 0) {
    console.log(`El valor ${num} es positivo`);
    num = -num;
    console.log(`Conversion: ${num}`);
} else if (num < 0) {
    console.log(`El valor ${num} es negativo`);
    num = -num;
    console.log(`Conversion: ${num}`);
}