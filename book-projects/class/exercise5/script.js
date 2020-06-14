/*Crea un programa que incluya una serie de clases
1.Clase Dispositivo: tiene los atributos 'nombre, marca y precio'. Un constructor usando los atributos,
los get/set y un método toString mostrando los atributos.
2.Clase Movil: es una subclase de Dispositivo. Hay que añadir el atributo 'numero'. Crea el constructor
y el metodo toString aprovechando los de la superclase. Añade el metodo llamar(numero), que saque por 
pantalla una cadena diciendo 'llamando numero.
3.Clase Ordenador: es una subclase de Dispositivo. Hay que añadir el atributo procesador. Crea el
constructor y el metodo toString aprovechando los de la superclase.
Además, añade el código necesario para crear un móvil y un ordenador y los muestras.'*/
class Dispositivo{
    constructor(nombre, marca, precio){
        this._nombre = nombre;
        this._marca = marca;
        this._precio = precio;
    }
    get nombre(){
        return this._nombre;
    }
    get marca(){
        return this._marca;
    }
    get precio(){
        return this.precio;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    set marca(marca){
        this._marca = marca;
    }
    set precio(precio){
        this._precio = precio;
    }
    toString(){
        return `${this._nombre} ${this._marca} ${this._precio}€`;
    }
}

class Movil extends Dispositivo{
    constructor(nombre,marca,precio,numero){
        super(nombre,marca,precio);
        this._numero = numero;
    }
    get numero(){
        return this._numero;
    }
    set numero(numero){
        this._numero = numero;
    }
    toString(){
        return `${super.toString()} ${this._numero}`;
    }
    llamar(numero){
        console.log('Llamando ' + numero);
    }
}

class Ordenador extends Dispositivo{
    constructor(nombre,marca,precio,procesador){
        super(nombre,marca,precio);
        this._procesador = procesador;
    }
    get procesador(){
        return this._procesador;
    }
    set procesador(procesador){
        this._procesador = procesador;
    }
    toString(){
        return `${super.toString()} ${this._procesador}`;
    }
}

  const computer = new Ordenador('Chromebook','Asus',300,'C300');
  const telefono = new Movil('Aquaris','Bq',200,123456789);
  console.log(computer.toString());
  console.log(telefono.toString());