function rot13(str) {
    let arr = str.split('');
    
    for (let i = 0; i < arr.length; i++) {
     if (/[A-Z]/g.test(arr[i])) {
       if (arr[i].charCodeAt() >= 65 && arr[i].charCodeAt() <= 77){
         let newCharPosition1 = arr[i].charCodeAt() + 26;
         let decodedLetter1 = String.fromCharCode(newCharPosition1);
         arr.splice(i, 1, decodedLetter1);
       } 
       if (arr[i].charCodeAt() >= 78 && arr[i].charCodeAt() <= 103){
         let newCharPosition2 = arr[i].charCodeAt() - 13;
         let decodedLetter2 = String.fromCharCode(newCharPosition2);
         arr.splice(i, 1, decodedLetter2);
       }
     }
    }
    return arr.join('');
  }