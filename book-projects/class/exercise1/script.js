/*Crea un programa con una clase llamada Hello que simplemente tenga una propiedad .greeting' y
un método 'sayHello()' que muestre esa propiedad por la consola. Crea una instancia de la
clase para probarla.*/

/*class Hello{
  constructor.greeting){
    this..greeting =.greeting;
  }
  sayHello(){
    return this..greeting;
  }
}
const greet = new Hello('Cómo va eso?');
console.log(greet.sayHello());*/

class Hello{
    constructor(){
      this.greeting = 'How you doing?';
    }
    sayHello(){
      console.log(this.greeting);
    }
  }
const greet = new Hello();
greet.sayHello();