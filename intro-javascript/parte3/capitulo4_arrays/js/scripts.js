var peliculas = ['Matrix','Shrek','El Padrino'];

peliculas.push('v de vendetta');

peliculas[1] = 'El hobbit'

console.log(peliculas.length);

for (let i = 0; i < peliculas.length; i++) {
    console.log(peliculas[i]);
}
/*recorriendo el array con el metodo forEach. Observa que el nombre del array está en plural
y el de cada elemento que se pasa a la función como parámetro está en singular */
peliculas.forEach(function(pelicula){
    console.log(pelicula);
})

//tambien pueden guardar objetos
var films = [
    {titulo:'El nombre de la rosa', estreno: 1986},
    {titulo: 'La vida es bella', estreno: 1997},
    {titulo: 'Volver', estreno: 2006}
];

//Muestra los pares del siguiente array
var numeros = [0,1,2,3,4,5,6,7,8,9,10,11,12];
for (let i = 0; i < numeros.length; i++) {
    if(i % 2 === 0){
        console.log(numeros[i]);
    }  
}

numeros.forEach(function(numero){
    if(numero % 2 === 0){
        console.log(numero);
    }
})

//Crea una función que sume todos los número del array
var suma = 0;
function sumaArray(numeros){
    for (let i = 0; i < numeros.length; i++) {
      suma = suma + numeros[i];
    }
  return suma;
}
console.log(sumaArray(numeros));

//crea una funcion que elimine el ultimo elemento del array y añada otro
var elemento = [1,2,3,4,5];
var pregunta = prompt('Qué elemento quieres añadir?');
function reemplazaElemento(elemento,pregunta){
    elemento.pop();
    elemento.push(pregunta);
    return elemento;
}
console.log(reemplazaElemento(elemento,pregunta))

//Valor máximo
var arr = [5,2,19,14,25,11,2];
function hallarMaximo(arr){
    var max = 0;
    arr.forEach(function(elem){
        if(elem > max){
            max = elem;
        }
    });
return max;
}
console.log(hallarMaximo(arr));
