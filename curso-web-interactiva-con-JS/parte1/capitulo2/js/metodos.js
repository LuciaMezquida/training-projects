// Escribe la función contarElementos
function contarElementos(selector) {
  return document.querySelectorAll(selector).length;
}

console.log(contarElementos("h1")); // Debe mostrar 1
console.log(contarElementos("#lista-metodos")); // Debe mostrar 1
console.log(contarElementos("li")); // Debe mostrar 5
console.log(contarElementos("ul > .varios")); // Debe mostrar 3
console.log(contarElementos("ul > .uno")); // Debe mostrar 2
