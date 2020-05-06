class Personaje{
    constructor(nombre,vida,fuerza){
        this.nombre = nombre;
        this.vida = vida;
        this.fuerza = fuerza;
    }
    atacar(objetivo){
        if(this.vida > 0){
            console.log(this.nombre + ' ataca a '
                        + objetivo.nombre + ' produciendole un daño de '
                        + this.fuerza + ' puntos');
            objetivo.vida = objetivo.vida - this.fuerza;
            if(objetivo.vida > 0){
                console.log(objetivo.nombre + ' tiene todavía '
                            + objetivo.vida + ' puntos de vida');
            }else{
                objetivo.vida = 0;
                console.log(objetivo.nombre + ' ha muerto');
            }
        }else{
            console.log(this.nombre + ' no puede atacar: está muerto!');
        } 
    }
}

class Jugador extends Personaje{
    constructor(nombre,vida,fuerza,xp){
        super(nombre,vida,fuerza);
        this.xp = 0;
    }
    describir(){
        var descripcion = this.nombre + ' tiene ' + this.vida + ' puntos de vida y '
                        + this.fuerza + ' de fuerza y ' + this.xp + ' puntos de experiencia';
        return descripcion;
    }
    combatir(adversario){
        super.atacar(adversario);
        if(adversario.vida === 0){
            console.log(this.nombre + ' ha matado '
                        + adversario.nombre + ' y gana '
                        + adversario.cantidadxp + ' puntos de experiencia');
            this.xp = this.xp + adversario.cantidadxp;
        }
    }
}

class Enemigo extends Personaje{
    constructor(nombre,vida,fuerza,raza,cantidadxp){
        super(nombre,vida,fuerza);
        this.raza = raza;
        this.cantidadxp = cantidadxp;
    }
}

var jugador1 = new Jugador('Heroe',150,25);
var jugador2 = new Jugador('Mago',130,35);

console.log(jugador1.describir());
console.log('----------------');
console.log(jugador2.describir());
console.log('----------------');

var monstruo = new Enemigo('ZogZog',40,20,'Orco',10);

monstruo.atacar(jugador1);
monstruo.atacar(jugador2);

jugador1.combatir(monstruo);
jugador2.combatir(monstruo);

console.log(jugador1.describir());
console.log(jugador2.describir());
