//Dia siguiente
var dia = prompt('Introduce un dia de la semana');

switch(dia){
	case 'lunes':
	console.log('Mañana será martes');
	break;
	case 'martes':
	console.log('Mañana será miercoles');
	break;
	case 'miercoles':
	console.log('Mañana será jueves');
	break;
	case 'jueves':
	console.log('Mañana será viernes');
	break;
	case 'viernes':
	console.log('Mañana será sabado');
	break;
	case 'sabado':
	console.log('Mañana será domingo');
	break;
	case 'domingo':
	console.log('Mañana será lunes');
	break;
	default:
	console.log('No es un dia de la semana');
}

//Numero de dias del mes
var mes = prompt('Escribe un numero del mes del 1 al 12');

switch(mes){
	case '1':
	case '3':
	case '5':
	case '7':
	case '8':
	case '10':
	case '12':
	console.log('Este mes tiene 31 dias');
	break;
	case '2':
	console.log('Este mes tiene 28 dias');
	break;
	case '4':
	case '6':
	case '9':
	case '11':
	console.log('Este mes tiene 30 dias');
	break;
	default:
	console.log('No corresponde a un mes');
}