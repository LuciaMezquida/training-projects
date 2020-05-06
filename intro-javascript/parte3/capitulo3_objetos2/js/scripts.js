var Personaje = {
    //inicializa el personaje
    initPersonaje: function(nombre,vida,fuerza){
        this.nombre = nombre;
        this.vida = vida;
        this.fuerza = fuerza;
    },
    //ataca a un personaje objetivo
    atacar: function(objetivo){
        if(this.vida > 0){
            var golpe = this.fuerza;
            console.log(this.nombre + ' ataca a '
                        + objetivo.nombre + ' produciendole un daño de '
                        + golpe + ' puntos');
            objetivo.vida = objetivo.vida - golpe;
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
};


var Jugador = Object.create(Personaje);
//metodo que inicia el jugador
Jugador.initJugador = function(nombre,vida,fuerza){
    //obtiene propiedades de Personaje, comunes para jugadores como enemigos
    this.initPersonaje(nombre,vida,fuerza);
    this.xp = 0; //se inicia la experiencia de jugador en 0
};
//método propio de Jugador que retorna la descripcion del jugador
Jugador.describir = function(){
        var descripcion = this.nombre + ' tiene '
                        + this.vida + ' puntos de vida y '
                        + this.fuerza + ' de fuerza y '
                        +this.xp + ' puntos de experiencia';
        return descripcion;
    
};

//combatir a un adversario
Jugador.combatir = function(adversario){
    this.atacar(adversario);
    if(adversario.vida === 0){
        console.log(this.nombre + ' ha matado '
                    + adversario.nombre + ' y gana '
                    + adversario.cantidadxp + ' puntos de experiencia');
        this.xp = this.xp + adversario.cantidadxp;
    }
};

var Enemigo = Object.create(Personaje);
//metodo que inicia al enemigo
Enemigo.initEnemigo = function(nombre,vida,fuerza,raza,cantidadxp){
    //obtiene prop de Personaje, comunes para Jugadores y Enemigo
    this.initPersonaje(nombre,vida,fuerza);
    this.raza = raza;
    this.cantidadxp = cantidadxp;
};
var jugador1 = Object.create(Jugador);
jugador1.initJugador('Heroe',150,25);

var jugador2 = Object.create(Jugador);
jugador2.initJugador('Mago',130,35);

console.log(jugador1.describir());
console.log('----------------');
console.log(jugador2.describir());
console.log('----------------');

var monstruo = Object.create(Enemigo);
monstruo.initEnemigo('ZogZog',40,20,'Orco',10);

monstruo.atacar(jugador1);
monstruo.atacar(jugador2);

jugador1.combatir(monstruo);
jugador2.combatir(monstruo);

console.log(jugador1.describir());
console.log(jugador2.describir());
