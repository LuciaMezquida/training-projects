var Perro = {
    initAnimal: function(nombre,raza,talla){
        this.nombre = nombre;
        this.raza = raza;
        this.talla = talla;
    },
    ladrar: function(){
        var ladrido = 'Guau';
        if(this.talla < 25){
            ladrido = 'bupbupbup';
        }else if(this.talla > 40){
            ladrido = 'borf borf borf';
        }
    return ladrido;   
    }
}

var perro1 = Object.create(Perro);
perro1.initAnimal('Peluca','Pastor aleman', 45);
console.log(perro1.nombre + ' es un ' + perro1.raza + ' y mide ' + perro1.talla + ' cm');
console.log('Mira, un gato! ' + perro1.nombre + ' ladra: ' + perro1.ladrar());

var perro2 = Object.create(Perro);
perro2.initAnimal('Pitu','Salchicha', 19);
console.log(perro2.nombre + ' es un ' + perro2.raza + ' y mide ' + perro2.talla + ' cm');
console.log('Mira, un gato! ' + perro2.nombre + ' ladra: ' + perro2.ladrar());
