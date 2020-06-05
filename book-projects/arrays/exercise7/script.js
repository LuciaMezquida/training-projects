/*Crea un programa que defina un array de 10 numeros enteros 
inicializados. En un bucle muestra por pantalla todos los elementos.
Luego crea otro bucle que baraje los elementos usando el metodo random
Luego muestra el resultado.*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros);

for(i in numeros) {
    let barajados = Math.round(Math.random() * (numeros.length - 1));
    let anterior = numeros[i];
    numeros[i] = numeros[barajados];
    numeros[barajados] = anterior;
}

console.log(numeros);