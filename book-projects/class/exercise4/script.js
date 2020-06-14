/*Crea un programa que contenga dos CLASES
1.Clase Jugador, que contiene los ATRIBUTOS 'nombre, puesto y dorsal'. También tiene un constructor
con todos esos parámetros y un METODO llamado 'informe'que retorne todos los ATRIBUTOS.
2.Clase Equipo, que contiene los ATRIBUTOS 'nombre, fundacion, presupuesto' y un array para guardar
instancias de la CLASE Jugador. Debe tener un constructor con los ATRIBUTOS 'nombre, fundacion,
presupuesto', sus get/set, un METODO 'informe' y otros dos METODOS: fichar(jugador) para añadir
jugadores al array, y mostrarJugadores() para devolver una cadena con todos los datos de los
jugadores. Además, añade el código necesario para crear dos jugadores y un equipo, al que añadirás
los jugadores y los mostrarás.*/

class Jugador{
    constructor(nombre, puesto, dorsal){
        this._nombre = nombre;
        this._puesto = puesto;
        this._dorsal = dorsal;
    }
    informe(){
        return `Nombre: ${this._nombre}\n Puesto: ${this._puesto}\n Dorsal: ${this._dorsal}\n`;
    }
}
  
class Equipo{
    constructor(equipo, fundacion, presupuesto){
        this._equipo = equipo;
        this._fundacion = fundacion;
        this._presupuesto = presupuesto;
        this._jugadores = [];
    }
    get equipo(){
        return this._equipo;
    }
    get fundacion(){
        return this._fundacion;
    }
    get presupuesto(){
        return this._presupuesto;
    }
    set equipo(equipo){
        this._equipo = equipo;
    }
    set fundacion(fundacion){
        this._fundacion = fundacion;
    }
    set presupuesto(presupuesto){
        this._presupuesto = presupuesto;
    }
    informe(){
        return `Equipo: ${this._equipo}\n Fundacion: ${this._fundacion}\n Presupuesto: ${this._presupuesto}\n`;
    }
    fichar(jugador){
        this._jugadores.push(jugador);
    }
    mostrarJugadores(){
        for(let i=0;i<this._jugadores.length;i++){
            console.log(this._jugadores[i].informe());
        }
    }
}
const jugador1 = new Jugador('Cocó', 'Delantera', 1);
const jugador2 = new Jugador('Fosca', 'Defensa', 3);
console.log(jugador1.informe());

const equipo_pluma = new Equipo('Peakys', 2018, 200);
console.log(equipo_pluma.equipo.toUpperCase());
console.log(equipo_pluma.informe());

equipo_pluma.fichar(jugador1);
equipo_pluma.fichar(jugador2);
equipo_pluma.mostrarJugadores();