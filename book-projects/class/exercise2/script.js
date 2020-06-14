/*Crea un programa con una clase llamada Moneda. La clase debe tener un constructor vacío y
un único método llamado 'tirar' cuyo resultado debe ser aleatoriamente un string: ('cara' or
'cruz'). Crea una instancia de la clase para probarla.*/

function aleatorio(max){
    return Math.round(Math.random() * max);
}
  
class Moneda{
    tirar(){
        const lado = ['cara', 'cruz'];
        const numero = aleatorio(1);
        return lado[numero];
    }
}
  
const cara_o_cruz = new Moneda();
for(i=0;i<10;i++){
    console.log(cara_o_cruz.tirar());
}