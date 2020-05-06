//Comparacion de dos numeros
/*var num1 = parseInt(prompt('Introduce un numero'));
var num2 = parseInt(prompt('Introduce otro numero'));

if(num1 > num2){
	console.log(num1 + ' es mayor que ' + num2);
}else if(num1 < num2){
	console.log(num1 + ' es menor que ' + num2);
}else{
	console.log(num1 + ' es igual que ' + num2);
}**/

//Valores finales
var num1 = parseInt(prompt('Introduce un numero'));//2
var num2 = parseInt(prompt('Introduce un segundo numero'));//4
var num3 = parseInt(prompt('Introduce un tercer numero'));//5

if(num1 > num2){
	num1 = num3 * 2;
}else{
	num1++;//3
	if(num2 > num3){
		num1 = num1 + num3 * 3;
	}else{
		num1 = 0;
		num3 = num3 * 2 + num2;//14
	}
}
console.log(num1,num2,num3);//0,4,14

/*
//Segundo siguiente
var hora = parseInt(prompt('Introduce una hora'));//
var min = parseInt(prompt('Introduce unos minutos'));//
var seg = parseInt(prompt('Introduce unos segundos'));//

if((hora >= 0) && (hora <=23) && (min >= 0) && (min <= 59) && (seg >=0) && (seg <= 59)){
	seg++
	if(seg === 60){
		seg = 0;
		min++;
		if(min === 60){
			min = 0;
			hora++;
			if(hora === 24){
				hora = 0;
			}
		}
	}
	console.log('Son las ' + hora + 'h' + min + 'm' + seg + 's');
}else{
	console.log('Los valores introducidos son incorrectos');
}*/