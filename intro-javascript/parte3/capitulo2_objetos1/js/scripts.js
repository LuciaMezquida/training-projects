//Crea el objeto coche
var coche = {
    color: 'rojo',
    marca: 'kia',
    modelo: 'rio',
    arrancado: false,
    arrancar: function(){
        var enMarcha = this.arrancado = true;
        return 'Coche arrancado \n' + enMarcha;
    }
}
console.log(coche.color);
console.log(coche.marca);
console.log(coche.modelo);
console.log(coche.arrancado);
console.log('---------------');
console.log(coche.arrancar());

//Modelización de una cuenta bancaria
var cuenta = {
    titular: 'Alex',
    saldo: 0,
    ingresar: function(cantidad_ingresar){
        console.log('Has ingresado: ' + cantidad_ingresar + '€');
        return this.saldo = this.saldo + cantidad_ingresar;
    },
    extraer: function(cantidad_extraer){
        console.log('Has retirado: ' + cantidad_extraer + '€');
        return this.saldo = this.saldo - cantidad_extraer;
    },
    informar: function(){
        var estado = this.titular + ' tiene ' + 
                    this.saldo + ' en su cuenta';
        return estado;
    }
}
console.log(cuenta.titular);
console.log(cuenta.saldo);
console.log('-------------');
console.log(cuenta.ingresar(80));
console.log(cuenta.extraer(20));
console.log(cuenta.informar());