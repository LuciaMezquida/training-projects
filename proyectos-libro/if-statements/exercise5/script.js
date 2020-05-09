/*Escribe un programa que solicite al usuario su peso en kilos y su altura en cm y calcule el
IMC (peso/altura al cuadrado); debe mostrar el resultado y luego hacer el diagnostico
- Si el IMC es menor de 16, muestra el mensaje: necesitas comer más
- Si el IMC está entre 16 y 25, muestra el mensaje: estás ideal 
- Si el IMC está entre 25 y 30, muestra el mensaje: tienes sobrepeso
- Si el IMC es superior a 30, muestra el mensaje: tienes un problema de obesidad*/

var peso = prompt('Introduce tu peso en kilos');
var altura = prompt('Introduce tu altura en cm');
var altura_en_metros = altura / 100;
var imc = peso / (altura_en_metros * altura_en_metros);

if (imc < 16) {
    console.log(`IMC = ${imc}: necesitas comer más`);
} else if (imc >= 16 && imc < 25) {
    console.log(`IMC = ${imc}: estás ideal`);
} else if (imc >= 25 && imc < 30) {
    console.log(`IMC = ${imc}: tienes sobrepeso`);
} else if (imc >= 30) {
    console.log(`IMC = ${imc}: tienes un problema de obesidad`);
}