/*Crea un programa que solicite al usuario un dorsal de jugador y haga lo siguiente: comprobar
que ese número está entre 0 y 99. Si no lo está, entonces el programa debe terminar con un
mensaje de error. Si el numero esta entre 0 y 99, el programa debe mostrar un texto con la
posicion que corresponde a cada dorsal
- Si el usuario ha tecleado 1, el texto será 'Portero'
- Si el usuario ha tecleado 3, 4, 5, el texto será 'Defensa'
- Si el usuario ha tecleado 6, 8, 11, el texto será 'Centro campista'
- Si el usuario ha tecleado 9, el texto será 'Delantero'
- Para cualquier otra opción, el texto será 'Cualquiera' */

var jugador = prompt('Introduce un número de dorsal');

if (jugador >= 0 && jugador <= 99) {

switch (jugador){
    case '1':
        console.log('Portero');
        break;
    case '3':
    case '4':
    case '5':
        console.log('Defensa');
        break;
    case '6':
    case '8':
    case '11':
        console.log('Centro campista');
        break;
    case '9':
        console.log('Delantero');
        break;
    default:
        console.log('Cualquiera');
        }   
} else {
    console.log('El numero de dorsal introducido no es valido')
}