/*Crea un programa que solicite al usuario una cantidad monetaria y un caracter d, l, y (dolar
libra, yen). Segun el caracter introducido por el usuario, el programa debe convertir la
cantidad monetaria (que serán euros) a la moneda correspondiente. No es necesario que el tipo
de cambio sea real*/

var cantidad = prompt('Introduce una cantidad de euros a convertir');
var tipo_moneda = prompt('Introduce d para dolares, l para libras, y para yenes');

switch (tipo_moneda) {

    case 'd':
        var cantidad_d = cantidad * 1.2;
        console.log(`${cantidad} € corresponden a ${cantidad_d} dolares.`);
        break;

    case 'l':
        var cantidad_l = cantidad * 0.7;
        console.log(`${cantidad} € corresponden a ${cantidad_l} libras.`);
        break;

    case 'y':
        var cantidad_y = cantidad * 2.2;
        console.log(`${cantidad} € corresponden a ${cantidad_y} yenes.`);
        break;

    default:
        console.log('Los valores no son validos');
}