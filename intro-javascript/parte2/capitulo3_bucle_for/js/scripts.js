//Lista incrementandose de 3 en 3
for(i=1;i<=30;i++){
	console.log(i);
	i++;
	i++;
}

//Tabla del 8
for (i=0;i<=10;i++){
	console.log('8 x ' + i + ' = ' + 8 * i);
}

//Par o impar
for (i=1;i<=10;i++){
	if(i % 2 === 0){
		console.log(i + ' es par');
	}else{
		console.log(i + ' es impar');
	}
}

//FizzBuzz
for (i=1;i<=50;i++){
	if(i % 3 !== 0 && i % 5 !== 0){
		console.log(i);
	}else if(i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
    }else if(i % 3 === 0){
		console.log('Fizz');
	}else if(i % 5 === 0){
		console.log('Buzz');
	}
}
