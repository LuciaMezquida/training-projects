/*Crear un programa que solicite al usuario un valor entero, comprobar si es mayor a 0.
Si no lo es, mostrar un mensaje de advertencia al usuario. Si es mayor que 0, debe mostrar
por pantalla un saludo tantas veces como el valor del número*/

let number =  prompt("Introduce one number");

if (number <= 0) {
    console.log('The number entered is less than 0');
} else {
    while (number > 0) {
        console.log('How you doing?');
        number--
    }
}