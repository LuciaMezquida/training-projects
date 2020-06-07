/*iniciarConNumero(numero,numeros) Este metodo debe inicializar todos los
elementos del array 'numeros' con el numero que pasamos como parámetro.*/
/*

function iniciarConNumero(numero,numeros){
  let numeros_array = new Array(2).fill(numero,numeros);
  return numeros_array;
  }

console.log(iniciarConNumero(2,7));
*/

function iniciarConNumero(numeros_array,numero) {
    for(i=0;i<numeros_array.length;i++){
       numeros_array[i] = numero;
    }
    return numeros_array;
}

console.log(iniciarConNumero([1, 2, 'a', 'muka', 2020, 'covid-19'],2));