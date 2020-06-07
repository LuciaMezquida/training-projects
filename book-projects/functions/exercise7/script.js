/* Crea un programa con un método: generarAtributos(nivelCompensacion)
Este método debe definir tres variables: fuerza, velocidad e inteligencia. El Programa
lo que debe hacer es repartir 20 puntos entre las tres variables. O dicho de otra forma,
entre las tres variables deben sumar 20. El parámetro nivelCompensacion debe servir para
indicar si se reparten puntos muy diferenciados o igualados, cuanto más alto el valor, 
más descompensado, es decir, la diferencia entre atributos es mayor; cómo hacerlo es
cosa del programador. Al final, debe mostrar un resumen de los puntos asignados.*/

const random = (max) => {
    let number = Math.round(Math.random() * max);
    return number;
  }
  
  const generarAtributos = (nivelCompensacion) => {
    let fuerza = 0;
    let velocidad = 0;
    let inteligencia = 0;
    
    let darPuntosA = 0;
    let puntosRepartidos = 0;
    let puntosRestantes = 20;
    
    while(puntosRestantes > 0){
      
      if(nivelCompensacion > puntosRestantes){
        puntosRepartidos = puntosRestantes;
        puntosRestantes = 0;
      }else{
        puntosRepartidos = random(nivelCompensacion);
        puntosRestantes = puntosRestantes - puntosRepartidos;
      }
      
      darPuntosA = random(2);
      switch(darPuntosA){
        case 0:
        inteligencia = inteligencia + puntosRepartidos;
        break;
        case 1:
        fuerza = fuerza + puntosRepartidos;
        break
        case 2:
        velocidad = velocidad + puntosRepartidos;
        break;
      }
    }
    console.log('Valores asignados por compensacion: ' + nivelCompensacion);
    console.log('Inteligencia: ' + inteligencia);
    console.log('Fuerza: ' + fuerza);
    console.log('Velocidad: ' + velocidad);
  }
  
  generarAtributos(2);