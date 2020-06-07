/*random(max). Debe devolver un número aleatorio entre el 0 y el valor máximo que se 
pasa como parámetro*/
console.clear();

const random = (max) => {
    let number = Math.round(Math.random() * max);
    return number;
}

console.log(random(8));
