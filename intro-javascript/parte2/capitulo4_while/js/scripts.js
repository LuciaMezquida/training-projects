var letra = '';
while(letra !== 'x'){
	letra = prompt('Introduzca la letra x para salir');
	console.log(letra);
}

//Programa contador
console.log('Comienzo del programa')
for(i=0;i<=10;i++){
	console.log('La variable contador es igual a ' + i);
}
console.log('Final del programa');

//Numero mayor que 10
var numero = 0;
while(numero <= 10){
	numero = parseInt(prompt('Introduce un numero entero mayor que 10'));
}
console.log(numero + ' es mayor que 10');

//Numero entre 50 y 100
var numero = 0;
while(numero < 50 || numero > 100){
	numero = parseInt(prompt('Introduce un numero entero entre 50 y 100'));
}
console.log(numero + ' está entre 50 y 100');

//Tabla de multiplicar
var numero = null;
while(numero < 2 || numero > 10){
	numero = parseInt(prompt('Introduce un numero entre 2 y 10'));
}
for(i=1;i<=10;i++){
	console.log(numero + ' x ' + i + ' = ' + numero * i);
}

//Triangulo
/*var estrella = '*';
for(i=0;i<=7;i++){
	console.log(estrella);
	estrella = estrella + '*';
}*/
var estrella = '*';
var i = 0;
while(i <= 7){
	console.log(estrella);
	estrella = estrella + '*';
	i++
}
