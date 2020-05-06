//Informacion sobre una palabra
var pregunta = prompt('Escribe una palabra');
console.log('La cadena ' + pregunta + ' contiene ' + pregunta.length + ' caracteres');
console.log('La cadena en mayusculas es: ' + pregunta.toUpperCase());
console.log('La cadena en minusculas es: ' + pregunta.toLowerCase());

//Cuenta el numero de vocales de un string
function contarVocales(texto){
    let numeroVocales = 0;
    let vocales = ['a', 'e', 'i', 'o', 'u'];
    for (let i =0 ; i < texto.length; i++) {
        var letra = texto[i];
        if (vocales.includes(letra)) {
            numeroVocales++;
        }
        // if (vocales.indexOf(letra) >= 0) {
        //     numeroVocales++;
        // }
        // if (letra == 'a' || letra == 'e' || letra == 'i' ||letra == 'o' ||letra == 'u') {
        //     numeroVocales++
        // }
    }
    return numeroVocales;
}

console.log("\tnumero de vocales de `" + pregunta + "` : " +contarVocales(pregunta));

//Invierte la palabra
function invertirCadena(pregunta){
    var anedac = '';
    for (let i = pregunta.length - 1; i >= 0; i--) {
        var anedac = anedac + pregunta[i]  
    }
   return anedac;     
}
console.log(invertirCadena(pregunta));

//Palindromo
var palindromo = pregunta.toLowerCase() === invertirCadena(pregunta.toLowerCase());
console.log('La cadena es un palindromo?: ' + palindromo);

