/*Caperucita gestiona una cesta de comida. La comida será de varios tipos. Estas son las clases:
- Clase Comida: tiene los elementos nombre y peso. Un constructor usando los atributos, los get/set y un método toString mostrando los atributos.
- Clase Fruta: es una subclase de Comida, y hay que añadir el atributo 'vitamina'. Crea el constructor y el método toString aprovechando los de la subclase.
- Clase Caramelo: es una subclase de Comida y hay que añadir el atributo 'calorias'. Cea el constructor y el método toString aprovechando los de la superclase.
- Clase Cesta: tiene un atributo llamado 'alimentos', que es un array de elementos tipo Comida(Fruta o Caramelo). S inicializa en el constructor. Tiene tres métodos:
    1. meterComida(comida): para meter una comida en la cesta
    2. pesoTotal(): devuelve el peso total de la comida de la cesta.
    3. toString(): para mostrar toda la comida de la cesta.
Además, añade el código necesario para crear instancias de Fruta, Caramelo y añádelos a la instancia de Cesta.*/

class Comida {
    constructor(nombre, peso) {
        this._nombre = nombre;
        this._peso = peso;
    }
    get nombre() {
        return this._nombre;
    }
    get peso() {
        return this._peso;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    set peso(peso) {
        this._peso(peso);
    }
    toString() {
        return `${this._nombre}: ${this._peso}mg,`
    }
}

class Fruta extends Comida {
    constructor(nombre, peso, vitamina) {
        super(nombre, peso);
        this._vitamina = vitamina;
    }
    get vitamina() {
        return this._vitamina;
    }
    set vitamina(vitamina) {
        this._vitamina = vitamina;
    }
    toString() {
        return `${super.toString()} ${this._vitamina}`;
    }
}

class Caramelo extends Comida {
    constructor(nombre, peso, calorias) {
        super(nombre, peso);
        this._calorias = calorias;
    }
    get calorias() {
        return this._calorias;
    }
    set calorias(calorias) {
        this._calorias = calorias;
    }
    toString() {
        return `${super.toString()} ${this._calorias}kcal`;
    }
}

class Cesta {
    constructor(alimentos) {
        this._alimentos = [];
    }
    meterComida(comida) {
        this._alimentos.push(comida);
    }
    pesoTotal() {
        let resultado = 0;
        for (let i = 0; i < this._alimentos.length; i++) {
            resultado = resultado + this._alimentos[i].peso;
        }
        return resultado;
    }
    toString() {
        let info = '';
        for (let i = 0; i < this._alimentos.length; i++) {
            info = info + this._alimentos[i].toString() + '\n';
        }
        return info;
    }
}

const naranja = new Fruta('Naranja', 500, 'Vitamina C');
const nispero = new Fruta('Nispero', 80, 'Vitamina B');
const smint = new Caramelo('Smint', 1, 20);
const pictolin = new Caramelo('Pictolin', 5, 40);
const cesta = new Cesta();

cesta.meterComida(naranja);
cesta.meterComida(nispero);
cesta.meterComida(smint);
cesta.meterComida(pictolin);

console.log(`Contenido cesta:\n` + cesta.toString());
console.log(`Peso de la cesta:` + ' ' + cesta.pesoTotal() + 'mg');
