/*Crea un proyecto que defina un array de objetos con la siguiente estructura:
[{nota: 8, asignatura: 'Mates'}, {nota: 4, asignatura: 'Lengua'}]
El programa debe mostrar un menú con las siguientes opciones:
1. Mostrar todo (muestra todos los elementos del array)
2. Añadir nuevo elemento (solicita al usuario una nota y una asignatura, crea un objeto
    y lo añade al array
3. Eliminar (solicita un índice y elimina del array ese elemento. Si no existe, debe mostrar
    un mensaje de error)
4. Salir: terminará el programa */
let opcion = '';
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

const menu = () => {
    console.log('1--> Mostrar todo');
    console.log('2--> Añadir nuevo elemento');
    console.log('3--> Eliminar');
    console.log('4--> Salir');

    opcion = prompt('Introduce una opción');
}

const mostrar = (notas) => {
    for (i in notas) {
        console.log(`${notas[i].asignatura}: ${notas[i].nota}`);
    }
}

const crear = () => {
    let nueva_asignatura = prompt('Introduce una asignatura');
    let nueva_nota = prompt('Introduce una nota');
    let nuevo_resultado = {nota: parseFloat(nueva_nota), asignatura: nueva_asignatura};
    return nuevo_resultado;
}

const eliminar = (notas) => {
    let indice = prompt('Introduce un índice a borrar');
    if (indice > 0 && indice <= notas.length) {
        notas.splice(indice - 1, 1);
    } else {
        console.log('Indice no valido');
    }
}

const salir = () => {
    console.log('Adiós');
}
    
const ejecutar = (opcion, notas) => {
    switch(opcion) {
        case '1':
            mostrar(notas);
            break;
        case '2':
            notas.push(crear());
            break;
        case '3':
            eliminar(notas);
            break;
        case '4':
            salir();
            break;
    }
}
    
const bucle = (notas) => {
    do {
        menu();
        ejecutar(opcion, notas);
    } while(opcion !== '4');
}

bucle(notas);