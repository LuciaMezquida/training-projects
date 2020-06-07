/*Saludo: momento del día. Esta función recibe como parámetro un momento del día: 'mañana',
'tarde' y 'noche'; y debe devolver el siguiente saludo: 'Buenos dias', 'Buenas tardes'
y 'Buenas noches' respectivamente.*/

function greeting(time) {
    switch(time) {
        case 'morning': return 'Good morning!';
        case 'afternoon': return 'Good afternoon!';
        case 'night': return 'Good night';
            break;
        default:
            return 'Have a nice day!';
            break;
    }
}
console.log(greeting('morning'));