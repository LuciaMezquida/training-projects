//Cifrado por desplazamiento, donde los valores de las letras se desplazan 13 lugares
function rot13(str) {
    let arr = str.split('');
    
    for (let i = 0; i < arr.length; i++) {
     if (/[A-Z]/g.test(arr[i])) { // el valor unicode ASCII de A-Z va de 65 a 90
       if (arr[i].charCodeAt() >= 65 && arr[i].charCodeAt() < 78){
         //a los caracteres con ASCII menor a 78 se les aumenta 26
         let newCharPosition = arr[i].charCodeAt() + 26;
         //se devuelve el caracter correspondiente al valor unicode que hemos buscamos
         let decodedLetter = String.fromCharCode(newCharPosition);
         arr.splice(i, 1, decodedLetter);
       } 
       if (arr[i].charCodeAt() >= 78 && arr[i].charCodeAt() <= 103){
         //a los valores ASCII se les resta 13 para obtener el numero final
         let finalCharPosition = arr[i].charCodeAt() - 13;
         // se devuelve el caracter final correspondiente al numero final
         let finalDecodedLetter = String.fromCharCode(finalCharPosition);
         arr.splice(i, 1, finalDecodedLetter);
       }
     }
    }
    return arr.join('');
  }