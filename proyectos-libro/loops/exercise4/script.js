/*Crea un programa que solicite al usuario un valor entero y usando ese valor debe dibujar
en la consola un cuadrado formado por '*' */

let number = parseInt(prompt("Introduce a number"));
let stars = '\n';

for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= number; j++) {
        stars = stars + '*';
    }
    stars = stars + '\n'
}
console.log(stars);