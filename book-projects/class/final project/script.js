/*Debes programar un proyecto que permita gestionar calificaciones, es decir, un array de objetos
con notas y asignaturas (con su nombre y nota). Al iniciar el programa, se debe mostrar al usuario
el siguiente menú: 1.Mostrar todo 2.Añadir nuevo elemento 3.Borrar elemento 4.Salir.
El usuario seleccionará distintas opciones hasta que selecciones salir. Si selecciona una opción
que no exista, deberá salir un mensaje de error. Para ello, desarrollarás las siguientes clases, 
empezando por las más simples.
CLASE Lectura: tiene un METODO estático para solicitar los datos al usuario. static leer(mensaje)
debe invocar el metodo prompt.
CLASE Mensaje: esta clase genera los mensajes que se deben mostrar al usuario, devolviendo un 
string. Esta clase será la encargada de sacar los mensajes por consola. menu() devuelve un string con 
el menu, salir() devuelve un string con la despedida. opcionIncorrecta() devuelve un string indicando que
la opcion es incorrecta.
CLASE Calificacion: representa el dato de calificación. Cuando se guarden los datos en un array se 
utilizarán objetos de esta clase. constructor(nota,asignatura) que debe iniciar los atributos _nota
y _asignatura. info() contiene un string que contiene la asignatura.
CLASE Datos: es la encargada de gestionar el array de calificaciones. constructor(datos), se le pasa
un array con los datos y se le pasan a un atributo llamado _datos. mostrar() devuelve un string con 
la información de todas las calificaciones. Tendrá que hacer un bucle y llamar al metodo info de cada
calificación. crear(calificación) añade un objeto calificación al array _datos. eliminar(indice) 
elimina un elemento del array en la posición indicada por indice.
CLASE InterfazUsuario: esta clase contiene todas las operaciones relacionadas con la ineracción con 
el usuario. Para solicitar al usuario datos, utilizará la función estática Lectura.leer(mensaje).
mostrar(mensaje) debe sacar por consola el mensaje que se le pasa. leer(opcion) utilizando el metodo
estatico Lectura.leer() solicita al usuario que introduzca una opcion del menu. crear() solicita al
usuario una nota, una asignatura y retorna un nuevo objeto: calificacion. leerIndice() solicita al 
usuario un indice.
CLASE Inicio: esta es la clase que pone en marcha el programa. constructor(notas) se le pasa el array
de notas inicial. Instancia la clase mensaje en el atributo _mensaje y la clase InterfazUsuario en _iu
bucle() inicia el bucle do while donde se muestra el menu y se solicita la opcion (utilizando los
metodos de InterfazUsuario) y se ejecuta la opcion elegida con el siguiente metodo: ejectuar(opcion)
que contiene el switch-case que ejecutará el codigo necesario para cada una de las opciones.
1.Mostrar: llamará al método de mostar de _datos y con el resultado llamara a mostrar de InterfazUsuario
2.Crear: llamará al metodo crear de InterfazUsuario y con el resultado llamará a crear de Datos.
3.Eliminar: llamará al método leerIndice de InterfazUsuario y con el resultado llamará al metodo 
eliminar de Datos
4.Salir: llamará al metodo salir de Mensaje y con el resultado llamará a mostrar de InterfazUsuario.
5.Por defecto 'default' llamará al metodo opcionIncorrecta de Mensaje y con el resultado llamará a 
mostrar de InterfazUsuario.*/

class Lectura{
    static leer(mensaje){
        return prompt(mensaje);
    }
}
  
class Mensaje{
    menu(){
        return '1.Mostrar todo\n' + '2.Añadir nuevo elemento\n' + '3.Borrar elemento\n' + '4.Salir\n';
    }
    salir(){
        return 'Hasta pronto!!';
    }
    opcionIncorrecta(){
        return 'Opción incorrecta';
    }
}
  
class Calificacion{
    constructor(nota, asignatura){
        this._nota = nota;
        this._asignatura = asignatura;
    }
    info(){
        return `${this._asignatura}: ${this._nota}`;
    }
}

class Datos{
    constructor(datos){
        this._datos = datos;
    }
    mostrar(){
        let resultado = '';
        for(let i=0;i<this._datos.length;i++){
            resultado = resultado + this._datos[i].info() + '\n';
        }
        return resultado;
    }
    crear(calificacion){
        this._datos.push(calificacion);
    }
    eliminar(indice){
        this._datos.splice(indice - 1,1);
    }
}
  
class InterfazUsuario{
    mostrar(mensaje){
        console.log(mensaje);
    }
    leerOpcion(){
        return Lectura.leer('Introduce una opcion');
    }
    crear(){
        const nota = Lectura.leer('Introduce una nota');
        const asignatura = Lectura.leer('Introduce una asignatura');
        return new Calificacion(nota, asignatura);
    }
    leerIndice(){
        return Lectura.leer('Introduce un indice');
    }
}
  
class Inicio{
    constructor(notas){
        this._datos = new Datos(notas);
        this._mensaje = new Mensaje();
        this._iu = new InterfazUsuario();
    }
    bucle(){
        let opcion = '';
        do {
            this._iu.mostrar(this._mensaje.menu());
            opcion = this._iu.leerOpcion();
            this.ejecutar(opcion);
            
        } while(opcion !=='4');
    }
    ejecutar(opcion){
        switch(opcion){
            case '1':
                this._iu.mostrar(this._datos.mostrar());
                break;
            case '2':
                this._datos.crear(this._iu.crear());
                break;
            case '3':
                this._datos.eliminar(this._iu.leerIndice());
                break;
            case '4':
                this._iu.mostrar(this._mensaje.salir());
                break;
            default:
                this._iu.mostrar(this._mensaje.opcionIncorrecta());
                break;
        }
    }
}

let notas = [
    new Calificacion(8, 'Mates'),
    new Calificacion(5, 'Lengua'),
];

new Inicio(notas).bucle();