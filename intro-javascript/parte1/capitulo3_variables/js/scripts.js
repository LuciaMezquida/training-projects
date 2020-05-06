var nombre = prompt('Escribe tu nombre');

var edad = 15;

edad = 5;
console.log('Mi nombre es ' + nombre + ' y tengo ' + edad + ' años.');
console.log('Hola ' + nombre);

var a = 2;
a = a - 1; //1
a++; //2
var b = 8;
b += 2;//10

var c = a + b * b; //102
var d = a * b + b; //30
var e = a * (b + b); // 40
var f = a * b / a; //10
var g = b / a * a; //10
console.log(a,b,c,d,e,f,g);


var temperatura_celsius = parseInt(prompt('Introduce una temperatura en ºC'));
var temperatura_fahrenheit = temperatura_celsius * (9 / 5) + 32;
console.log(temperatura_celsius + 'ºC = ' + temperatura_fahrenheit + 'ºF');

var num1 = 5;
var num2 = 3;
console.log('num1 = ' + num1);
console.log('num2 = ' + num2);

console.log('Permutamos los valores de las variables');

var cambio_numero = num1;
num1 = num2;
num2 = cambio_numero;
console.log('num1 = ' + num1);
console.log('num2 = ' + num2);


