/*PROYECTO FINAL 4
Crea un proyecto que defina un array de objetos con la siguiente estructura:
[{nota: 8, asignatura: 'Mates'}, {nota: 4, asignatura: 'Lengua'}]
El programa debe mostrar un menú en un bucle con las siguientes opciones:
1. Mostrar todo (muestra todos los elementos del array)
2. Añadir nuevo elemento (solicita al usuario una nota y una asignatura, crea un objeto
    y lo añade al array
3. Eliminar (solicita un índice y elimina del array ese elemento. Si no existe, debe mostrar
    un mensaje de error)
4. Salir: terminará el programa */

let notas = [
    {
        nota: 8,
        asignatura: 'Mates'
    },
    {
        nota: 4,
        asignatura: 'Lengua'
    }
];

let opcion = '';

do {
    console.log('1--> Mostrar todo');
    console.log('2--> Añadir nuevo elemento');
    console.log('3--> Eliminar');
    console.log('4--> Salir');

    opcion = prompt('Introduce una opción');

    switch(opcion) {
        case '1':
            for (i in notas) {
                console.log(`${notas[i].asignatura}: ${notas[i].nota}`)
            }
            break;
        case '2':
            let nueva_asignatura = prompt('Introduce una asignatura');
            let nueva_nota = prompt('Introduce una nota');
            let nuevo_resultado = {nota: parseFloat(nueva_nota), asignatura: nueva_asignatura};
            notas.push(nuevo_resultado);
            break;
        case '3':
            let indice = prompt('Introduce un índice a borrar');
            if (indice > 0 && indice <= notas.length) {
                notas.splice(incice - 1, 1);
            } else {
                console.log('Indice no valido');
            }
            break;
        case '4':
            console.log('Adiós');
            break;
    }
} while (opcion !== '4');