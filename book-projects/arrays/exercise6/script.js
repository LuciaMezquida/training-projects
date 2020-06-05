const numbers = [new Array(10), new Array(10), new Array(10), new Array(10), new Array(10)];

for(i = 0; i < numbers.length; i++) {
  for(j = 0; j < numbers.length; j++) {
   numbers[i][j] = Math.round(Math.random() * 30);
   }
 }


let exist15 = false;    
 for(i = 0; i < numbers.length; i++) {
  for(j = 0; j < numbers.length; j++) {
      console.log(numbers[i][j]);
    
    if (numbers[i][j] === 15) {
      console.log('Found number 15 in:' + i + ', '+ j);
      exist15 = true;
      break;
}
}
   if (exist15 === true) {
     break;
   }
}