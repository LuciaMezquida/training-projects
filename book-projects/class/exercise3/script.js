/*Crea un programa con una clase llamada Dado para simular el comportamiento de un dado de
N caras. Crea una instancia de la clase para probarla.
- constructor(lados,admiteCero=false): los atributos lados: atributo que guarda el número de 
caras y admiteCero=false: atributo que nos dice si el dado puede devolver el valor 0. Por defecto
vale false.
- set lados(lados): constructor con parámetro, establece el atributo sides.
- set admiteCero(lados, admiteCero): constructor con parametros, establece los dos atributos.
- tirar(): método que simula en lanzamiento del dado y renorna un resultado. Debe tener en cuenta
al atributo admiteCero.
Crea instancias que genere un dado de 6 caras, un dado de 10 caras y un dado de 20 que permita
ceros, y haz 100 lanzamientos de cada uno.*/
function random(max){
    return Math.round(Math.random() * max);
}
class Dado{
    constructor(lados,admiteCero){
        this._lados = lados;
        this._admiteCero = admiteCero
    }
    set lados(lados){
        this._lados = lados;
    }
    set admiteCero(admiteCero){
        this._admiteCero = admiteCero;
    }
    tirar(){
        let numero = random(this._lados);
        
        if(!this._admiteCero && numero === 0){
            numero++;
        }
        return numero;
    }
}
const jugar = new Dado(6,false);
for(let i=0;i<10;i++){
    console.log(jugar.tirar());
}
