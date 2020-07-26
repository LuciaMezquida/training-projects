function palindrome(str) {
    let strLower = str.toLowerCase();//minusculas
    let arr = strLower.split('');//pasar a un array
    
    //eliminar espacios, simbolos o puntuacion
    let newStr = '';
    for (let i = 0; i < arr.length; i++) {
      if (/[\w]/gi.test(arr[i]) && !/[_]/gi.test(arr[i])) {
        newStr += arr[i];
      }
    }
    //le damos la vuelta y comparamos
    let strReves = newStr.split('').reverse().join('');
    return newStr === strReves;
  
  }